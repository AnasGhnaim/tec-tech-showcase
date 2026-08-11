// Plain-HTML email bodies for the FTP contact form.
// Kept server-agnostic (pure string builders) so they are easy to test.

export type ContactPayload = {
  name: string;
  email: string;
  company?: string | undefined;
  message: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shell(title: string, inner: string): string {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8" /><title>${escapeHtml(title)}</title></head>
<body style="margin:0;background:#ffffff;font-family:Arial,Helvetica,sans-serif;color:#0A0E14;">
  <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
    <div style="font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:#0891b2;font-weight:700;">FTP</div>
    ${inner}
    <hr style="border:none;border-top:1px solid #e5e7eb;margin:28px 0 14px;" />
    <p style="font-size:12px;color:#6b7280;margin:0;">FTP — Software Development Agency</p>
  </div>
</body></html>`;
}

const row = (label: string, value: string) =>
  `<p style="margin:0 0 10px;font-size:14px;line-height:1.6;">
     <span style="color:#6b7280;">${escapeHtml(label)}:</span>
     <strong>${escapeHtml(value)}</strong>
   </p>`;

export function buildNotificationEmail(data: ContactPayload) {
  const inner = `
    <h1 style="font-size:20px;margin:16px 0 18px;">New project enquiry</h1>
    ${row("Name", data.name)}
    ${row("Email", data.email)}
    ${data.company ? row("Company", data.company) : ""}
    <p style="margin:18px 0 6px;color:#6b7280;font-size:14px;">Message</p>
    <div style="white-space:pre-wrap;font-size:15px;line-height:1.7;border-left:3px solid #0891b2;padding-left:14px;">${escapeHtml(
      data.message,
    )}</div>`;
  return {
    subject: `New enquiry from ${data.name}`,
    html: shell("New project enquiry", inner),
  };
}

export function buildConfirmationEmail(data: ContactPayload) {
  const inner = `
    <h1 style="font-size:20px;margin:16px 0 12px;">Thanks, ${escapeHtml(data.name)} — we got your message</h1>
    <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">
      A member of the FTP team will reply within one business day. Here's a copy of what you sent us.
    </p>
    <div style="white-space:pre-wrap;font-size:14px;line-height:1.7;background:#f8fafc;border-radius:8px;padding:16px;">${escapeHtml(
      data.message,
    )}</div>`;
  return {
    subject: "We received your message — FTP",
    html: shell("We received your message", inner),
  };
}
