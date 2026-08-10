import { motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/three/HeroScene";
import { staggerContainer, staggerItem } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

const TECH_STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Mongo DB",
  "React Native",
  "Cloud infrastructure",
  "Spring",
  "Reduis",
];

function TechMarquee() {
  const reduced = useReducedMotion();
  const { isRtl } = useLang();
  // Duplicate the list so the loop is seamless (second copy starts exactly where first ends)
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div
      className="group relative mt-6 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        dir="ltr"
        className="flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
        {...(reduced ? {} : { animate: { x: isRtl ? ["-50%", "0%"] : ["0%", "-50%"] } })}
        transition={{
          duration: 22,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ willChange: "transform" }}
      >
        {items.map((tech, i) => (
          <span key={`${tech}-${i}`} className="flex items-center gap-10 shrink-0">
            {tech}
            <span aria-hidden="true" className="text-border">
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function Hero() {
  const reduced = useReducedMotion();
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={staggerItem} className="eyebrow font-display">
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl md:text-6xl"
          >
            {t("hero.titleA")}
            <span className="text-accent">{t("hero.titleAccent")}</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.lead")}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                {t("hero.viewProjects")}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">{t("hero.getInTouch")}</a>
            </Button>
          </motion.div>

          <motion.dl
            variants={staggerItem}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {[
              { k: t("hero.since"), v: "2026" },
              { k: t("hero.projects"), v: "12+" },
              { k: t("hero.avgBuild"), v: t("hero.avgBuildValue") },
            ].map((s) => (
              <div key={s.k}>
                <dt className="eyebrow font-display">{s.k}</dt>
                <dd className="mt-1.5 font-display text-xl font-semibold">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: reduced ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto aspect-square w-full max-w-[480px]"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <HeroScene />
          </div>
          <span className="sr-only">{t("hero.sceneAlt")}</span>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <div className="rule-line" />
        <TechMarquee />
      </div>

      <Link to="/projects" className="sr-only">
        {t("hero.archiveLink")}
      </Link>
    </section>
  );
}
