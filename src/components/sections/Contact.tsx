import { useForm } from "react-hook-form";
import { useServerFn } from "@tanstack/react-start";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import { sendContactMessage } from "@/lib/contact.functions";

const makeSchema = (t: (k: string) => string) =>
  z.object({
    name: z.string().trim().min(2, t("contact.errName")).max(100),
    email: z.string().trim().email(t("contact.errEmail")).max(255),
    company: z.string().trim().max(120).optional(),
    message: z.string().trim().min(20, t("contact.errMessage")).max(2000),
  });

type FormValues = z.infer<ReturnType<typeof makeSchema>>;

export function Contact() {
  const { t } = useLang();
  const submitContact = useServerFn(sendContactMessage);

  const contactPoints = [
    { Icon: Mail, label: "studio@ftp.com", href: "mailto:studio@ftp.com" },
    { Icon: Phone, label: "+1 (415) 555-0148", href: "tel:+14155550148" },
    { Icon: MapPin, label: t("contact.location"), href: null },
  ];

  const form = useForm<FormValues>({
    resolver: zodResolver(makeSchema(t)),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  async function onSubmit(values: FormValues) {
    try {
      const result = await submitContact({ data: values });
      if (!result.ok) throw new Error(result.error);
      toast.success(t("contact.toastTitle"), {
        description: t("contact.toastBody").replace("{email}", values.email),
      });
      form.reset();
    } catch {
      toast.error(t("contact.errorTitle"), {
        description: t("contact.errorBody"),
      });
    }
  }


  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-border py-24 sm:py-32">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
      <svg
        className="pointer-events-none absolute -right-24 top-10 -z-10 hidden h-[420px] w-[420px] text-accent/25 lg:block"
        viewBox="0 0 200 200"
        aria-hidden="true"
      >
        <g fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="62" />
          <circle cx="100" cy="100" r="34" />
          <path d="M100 10v180M10 100h180M36 36l128 128M164 36 36 164" />
        </g>
      </svg>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow={t("contact.eyebrow")}
            title={t("contact.title")}
            intro={t("contact.intro")}
          />

          <Reveal delay={0.1} className="mt-10 space-y-4">
            {contactPoints.map(({ Icon, label, href }) => (
              <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon className="size-4 text-accent" />
                {href ? (
                  <a className="transition-colors hover:text-foreground" href={href}>
                    {label}
                  </a>
                ) : (
                  <span>{label}</span>
                )}
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="rounded-lg border border-border bg-card p-7 sm:p-9">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.name")}</FormLabel>
                        <FormControl>
                          <Input placeholder={t("contact.namePlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.email")}</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder={t("contact.emailPlaceholder")} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.company")}</FormLabel>
                      <FormControl>
                        <Input placeholder={t("contact.companyPlaceholder")} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder={t("contact.messagePlaceholder")}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? t("contact.sending") : t("contact.submit")}
                </Button>
                <p className="text-xs text-muted-foreground">
                  {t("contact.privacy")}
                </p>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
