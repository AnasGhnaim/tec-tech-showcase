import { Card, CardContent } from "@/components/ui/card";
import { Reveal, SectionHeading } from "@/components/Reveal";

const pillars = [
  {
    tag: "01",
    title: "Vision",
    body: "That any ambitious business — a twelve-person co-operative as readily as a national retailer — should be able to run on software built to the same standard. Most teams are handed templates they outgrow in a year. We exist to close that gap: to make properly engineered, properly designed digital products the normal option rather than the expensive exception.",
  },
  {
    tag: "02",
    title: "Mission",
    body: "We build e-commerce platforms, portfolio sites and custom software that hold up under real traffic and real deadlines. Every engagement starts with the numbers the client is judged on, ships in increments they can review weekly, and ends with documented code, transferred ownership and a team that can maintain it without us — though most keep us on anyway.",
  },
];

const principles = [
  { title: "Fixed scope, visible progress", body: "Weekly demos on a staging URL from week one. No black boxes." },
  { title: "Own your code", body: "Repositories, infrastructure and documentation are yours from day one." },
  { title: "Measured, not asserted", body: "We agree on the metric before we build, then report against it after launch." },
];

export function Vision() {
  return (
    <section id="vision" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who we are"
          title="A small studio with an unfashionable commitment to finishing things."
          intro="Tec-Technology has been building commercial software since 2016. We are engineers and designers, not resellers, and every project is delivered by the people who scoped it."
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
