import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageProvider";

const year = new Date().getFullYear();

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold" dir="ltr">
              FT<span className="text-accent">P</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t("footer.blurb")}
            </p>
          </div>

          <div>
            <p className="eyebrow">{t("footer.navigate")}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="/#vision">{t("nav.vision")}</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/#services">{t("nav.services")}</a></li>
              <li><Link className="transition-colors hover:text-foreground" to="/projects">{t("nav.allWork")}</Link></li>
              <li><a className="transition-colors hover:text-foreground" href="/#contact">{t("nav.contact")}</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">{t("footer.elsewhere")}</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="mailto:studio@ftp.com" dir="ltr">studio@ftp.com</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{t("footer.rights").replace("{year}", String(year))}</p>
          <p className="font-mono uppercase tracking-[0.18em]">{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}
