import { Card, CardContent } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

export function Vision() {
  const { t } = useLang();

  const pillars = [
    { tag: "01", title: t("vision.pillar1Title"), body: t("vision.pillar1Body") },
    { tag: "02", title: t("vision.pillar2Title"), body: t("vision.pillar2Body") },
  ];

  const principles = [
    { title: t("vision.p1Title"), body: t("vision.p1Body") },
    { title: t("vision.p2Title"), body: t("vision.p2Body") },
    { title: t("vision.p3Title"), body: t("vision.p3Body") },
  ];

  return (
    <section id="vision" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("vision.eyebrow")}
          title={t("vision.title")}
          intro={t("vision.intro")}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.tag} delay={i * 0.1}>
              <Card className="h-full border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-accent">{p.tag}</span>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">{p.body}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={0.15 + i * 0.08}>
              <div className="h-full border-t border-accent/60 pt-5">
                <h4 className="font-display text-base font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
