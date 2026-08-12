import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import {
  buildConfirmationEmail,
  buildNotificationEmail,
  type ContactPayload,
} from "./email/contact-email";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(20).max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;

const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Change these once your own domain is verified in Resend.
const FROM = "FTP <onboarding@resend.dev>";
const TEAM_INBOX = "ghnaimanas20@gmail.com";

async function sendEmail(
  apiKey: string,
  payload: { from: string; to: string[]; subject: string; html: string; reply_to?: string },
) {
  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error(`Resend request failed [${response.status}]: ${body}`);
    throw new Error(`Resend request failed [${response.status}]`);
  }

  return (await response.json()) as { id?: string };
}

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return { ok: false as const, error: "email_not_configured" };
    }

    const payload: ContactPayload = {
      name: data.name,
      email: data.email,
      company: data.company,
      message: data.message,
    };

    try {
      const notification = buildNotificationEmail(payload);
      await sendEmail(apiKey, {
        from: FROM,
        to: [TEAM_INBOX],
        subject: notification.subject,
        html: notification.html,
        reply_to: data.email,
      });

      // Best-effort acknowledgement to the sender; a failure here (e.g. the
      // shared onboarding@resend.dev sender) must not fail the submission.
      try {
        const confirmation = buildConfirmationEmail(payload);
        await sendEmail(apiKey, {
          from: FROM,
          to: [data.email],
          subject: confirmation.subject,
          html: confirmation.html,
        });
      } catch (error) {
        console.error("Contact confirmation email failed", error);
      }

      return { ok: true as const };
    } catch (error) {
      console.error("Contact notification email failed", error);
      return { ok: false as const, error: "send_failed" };
    }
  });
