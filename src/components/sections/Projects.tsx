import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, projectCategories, type ProjectCategory } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { useLang } from "@/i18n/LanguageProvider";
import { projectsAr } from "@/i18n/content";

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const reduced = useReducedMotion();
  const { t, lang } = useLang();
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="scroll-mt-24 border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow={t("projects.eyebrow")}
            title={t("projects.title")}
            intro={t("projects.intro")}
          />
          <Reveal delay={0.1}>
            <Button asChild variant="outline">
              <Link to="/projects">
                {t("projects.archive")}
                <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.05} className="mt-10 flex flex-wrap gap-2">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "relative rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors",
                filter === cat
                  ? "border-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:text-foreground",
              )}
            >
              {filter === cat && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{cat === "All" ? t("projects.all") : t(`projects.${cat}`)}</span>
            </button>
          ))}
        </Reveal>

        <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((base) => {
              const ar = lang === "ar" ? projectsAr[base.slug] : undefined;
              const project = { ...base, ...(ar ?? {}) };
              return (
              <motion.article
                key={base.slug}
                layout
                initial={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-lg border border-border bg-card"
              >
                <Link
                  to="/project/$slug"
                  params={{ slug: base.slug }}
                  className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border">
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.summary}`}
                      width={1024}
                      height={768}
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur">
                      {t(`projects.${base.category}`)}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                          {project.client} · {project.year}
                        </p>
                      </div>
                      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((t) => (
                        <Badge key={t} variant="secondary" className="font-mono text-[10px] font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
