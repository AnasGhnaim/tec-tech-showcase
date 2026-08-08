import { Link } from "@tanstack/react-router";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold">
              Tec<span className="text-accent">-</span>Technology
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A software development agency building e-commerce platforms, portfolio sites and custom
              software for teams that need the thing to actually work.
            </p>
          </div>

          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="/#vision">Vision</a></li>
              <li><a className="transition-colors hover:text-foreground" href="/#services">Services</a></li>
              <li><Link className="transition-colors hover:text-foreground" to="/projects">All work</Link></li>
              <li><a className="transition-colors hover:text-foreground" href="/#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li><a className="transition-colors hover:text-foreground" href="mailto:studio@tec-technology.com">studio@tec-technology.com</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="transition-colors hover:text-foreground" href="https://dribbble.com" target="_blank" rel="noreferrer">Dribbble</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Tec-Technology. All rights reserved.</p>
          <p className="font-mono uppercase tracking-[0.18em]">Built in-house · Shipped weekly</p>
        </div>
      </div>
    </footer>
  );
}
