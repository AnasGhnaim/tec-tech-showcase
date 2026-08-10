import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import { projectsAr } from "@/i18n/content";

const title = "Project archive — FTP";
const description =
  "Every FTP engagement: e-commerce platforms, SaaS dashboards, portfolio sites and mobile apps, with the stack and outcomes for each.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const { t, lang } = useLang();

  return (
    <main className="mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <Reveal>
        <p className="eyebrow">{t("archive.eyebrow")}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
          {t("archive.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {t("archive.intro")}
        </p>
      </Reveal>

      <div className="mt-16 divide-y divide-border border-y border-border">
        {projects.map((base, i) => {
          const p = { ...base, ...(lang === "ar" ? (projectsAr[base.slug] ?? {}) : {}) };
          return (
          <Reveal key={base.slug} delay={Math.min(i * 0.06, 0.3)}>
            <Link
              to="/project/$slug"
              params={{ slug: base.slug }}
              className="group grid gap-6 py-8 sm:grid-cols-[200px_1fr_auto] sm:items-center"
            >
              <img
                src={p.image}
                alt={`${p.title} — ${p.summary}`}
                width={1024}
                height={768}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-md border border-border object-cover sm:w-[200px]"
              />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="font-display text-xl font-semibold">{p.title}</h2>
                  <Badge variant="secondary" className="font-mono text-[10px] font-normal">
                    {t(`projects.${base.category}`)}
                  </Badge>
                </div>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {p.client} · {p.year}
                </p>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
              <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-accent rtl:-scale-x-100" />
            </Link>
          </Reveal>
          );
        })}
      </div>
    </main>
  );
}
