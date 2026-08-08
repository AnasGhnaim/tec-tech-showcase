import { useForm } from "react-hook-form";
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

const schema = z.object({
  name: z.string().min(2, "Please tell us your name."),
  email: z.string().email("That email address doesn't look right."),
  company: z.string().optional(),
  message: z.string().min(20, "A little more detail helps — 20 characters minimum."),
});

type FormValues = z.infer<typeof schema>;

const contactPoints = [
  { Icon: Mail, label: "studio@tec-technology.com", href: "mailto:studio@tec-technology.com" },
  { Icon: Phone, label: "+1 (415) 555-0148", href: "tel:+14155550148" },
  { Icon: MapPin, label: "Remote-first · CET & EST overlap", href: null },
];

export function Contact() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  function onSubmit(values: FormValues) {
    toast.success("Thanks — your brief is with us.", {
      description: `We'll reply to ${values.email} within one business day.`,
    });
    form.reset();
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
            eyebrow="Contact"
            title="Tell us what you're building."
            intro="Send a few lines about the project. We reply within one business day, and the first call is with an engineer, not a salesperson."
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
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Dana Whitfield" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@company.com" {...field} />
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
                      <FormLabel>Company (optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Atlas Home Goods" {...field} />
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
                      <FormLabel>Project brief</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="What are you building, what's the deadline, and what does success look like?"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full">
                  Send brief
                </Button>
                <p className="text-xs text-muted-foreground">
                  We use your details only to reply to this enquiry.
                </p>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
