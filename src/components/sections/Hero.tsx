import { motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/three/HeroScene";
import { staggerContainer, staggerItem } from "@/components/Reveal";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="grid-field pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="show">
          <motion.p variants={staggerItem} className="eyebrow">
            Software development agency
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mt-5 text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl md:text-6xl"
          >
            We build the software your
            <span className="text-accent"> business runs on</span>.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Tec-Technology designs and engineers e-commerce platforms, portfolio sites and custom
            systems — typed end to end, measured against your numbers, and handed over with the keys.
          </motion.p>

          <motion.div variants={staggerItem} className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                View projects
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">Get in touch</a>
            </Button>
          </motion.div>

          <motion.dl
            variants={staggerItem}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6"
          >
            {[
              { k: "Since", v: "2016" },
              { k: "Projects", v: "120+" },
              { k: "Avg. build", v: "9 wks" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="eyebrow">{s.k}</dt>
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
          <span className="sr-only">
            Animated 3D rendering of an interlocking geometric structure representing Tec-Technology's
            engineering work.
          </span>
        </motion.div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
        <div className="rule-line" />
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          React · TypeScript · Node.js · PostgreSQL · React Native · Cloud infrastructure
        </p>
      </div>

      <Link to="/projects" className="sr-only">
        Browse the full project archive
      </Link>
    </section>
  );
}
