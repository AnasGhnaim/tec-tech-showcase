import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { Reveal, SectionHeading } from "@/components/Reveal";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  note: string;
}

const stats: Stat[] = [
  { value: 124, suffix: "", label: "Projects delivered", note: "Since the studio opened in 2016" },
  { value: 68, suffix: "", label: "Clients served", note: "Across retail, logistics, finance and the arts" },
  { value: 9, suffix: "", label: "Years in operation", note: "Same founding engineering team" },
  { value: 94, suffix: "%", label: "Clients who return", note: "Second engagement within 18 months" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduced]);

  return (
    <span ref={ref} className="font-display text-5xl font-semibold tabular-nums sm:text-6xl">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="border-t border-border bg-surface/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why us"
          title="The record, in numbers we can evidence."
          intro="No awards shelf, no partner logos we have not worked with. Just the delivery history."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="border-t border-accent/60 pt-6">
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-3 font-display text-base font-semibold">{s.label}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
