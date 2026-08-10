import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/i18n/LanguageProvider";
import { projectsAr } from "@/i18n/content";

export const Route = createFileRoute("/project/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found — FTP" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} — FTP`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { t, lang } = useLang();
  const { project: base } = Route.useLoaderData() as { project: Project };
  const project = { ...base, ...(lang === "ar" ? (projectsAr[base.slug] ?? {}) : {}) };

  return (
    <main className="mx-auto max-w-5xl px-5 pt-32 pb-24 sm:px-8 sm:pt-40">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5 rtl:-scale-x-100" />
        {t("archive.back")}
      </Link>

      <Reveal className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="font-mono text-[10px] font-normal">
            {t(`projects.${base.category}`)}
          </Badge>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.client} · {project.year}
          </span>
        </div>
        <h1 className="mt-5 text-4xl font-semibold text-balance sm:text-5xl">{project.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{project.summary}</p>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <img
          src={project.image}
          alt={`${project.title} interface`}
          width={1024}
          height={768}
          className="w-full rounded-lg border border-border object-cover"
        />
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <h2 className="font-display text-xl font-semibold">{t("archive.whatWeBuilt")}</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">{project.description}</p>

          <h2 className="mt-10 font-display text-xl font-semibold">{t("archive.outcomes")}</h2>
          <dl className="mt-5 grid gap-6 sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r.label} className="border-t border-accent/60 pt-4">
                <dt className="text-xs text-muted-foreground">{r.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{r.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-border bg-card p-6">
            <p className="eyebrow">{t("archive.stack")}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <Badge key={t} variant="secondary" className="font-mono text-[10px] font-normal">
                  {t}
                </Badge>
              ))}
            </div>
            <Button asChild className="mt-7 w-full">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {t("archive.visit")}
                <ArrowUpRight className="size-4 rtl:-scale-x-100" />
              </a>
            </Button>
            <Button asChild variant="outline" className="mt-2 w-full">
              <Link to="/" hash="contact">
                {t("archive.similar")}
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
