import { motion, useReducedMotion } from "motion/react";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import { servicesAr } from "@/i18n/content";

export function Services() {
  const reduced = useReducedMotion();
  const { t, lang } = useLang();

  return (
    <section id="services" className="scroll-mt-24 border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          intro={t("services.intro")}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const ar = lang === "ar" ? servicesAr[service.id] : undefined;
            const title = ar?.title ?? service.title;
            const description = ar?.description ?? service.description;
            const bullets = ar?.bullets ?? service.bullets;

            return (
              <Reveal key={service.id} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={reduced ? {} : { y: -6 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="h-full"
                >
                  <Card className="group h-full border-border bg-card transition-colors hover:border-accent/50">
                    <CardContent className="flex h-full flex-col p-7">
                      <service.Icon className="size-10 text-accent transition-transform duration-300 group-hover:scale-105" />
                      <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
                      <ul className="mt-6 space-y-1.5 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                        {bullets.map((b) => (
                          <li key={b} className="flex items-center gap-2">
                            <span className="size-1 shrink-0 rounded-full bg-accent" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
