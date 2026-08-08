import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { label: "Vision", hash: "vision" },
  { label: "Services", hash: "services" },
  { label: "Projects", hash: "projects" },
  { label: "Contact", hash: "contact" },
];

function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-7 w-7 text-accent" aria-hidden="true">
        <rect x="1" y="1" width="30" height="30" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 11h14M16 11v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="23" r="2.2" fill="currentColor" />
      </svg>
      <span className="font-display text-base font-semibold tracking-tight">
        Tec<span className="text-accent">-</span>Technology
      </span>
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const reduced = useReducedMotion();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: reduced ? 0 : -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Tec-Technology home">
          <Wordmark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) =>
            onHome ? (
              <a
                key={l.hash}
                href={`#${l.hash}`}
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.hash}
                to="/"
                hash={l.hash}
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>

          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link to="/" hash="contact">
              Start a project
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-sm">
              <SheetTitle className="px-5 pt-1">
                <Wordmark />
              </SheetTitle>
              <div className="mt-6 flex flex-col gap-1 px-3">
                {links.map((l) => (
                  <a
                    key={l.hash}
                    href={`/#${l.hash}`}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-3 font-display text-xl font-medium transition-colors hover:bg-secondary"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/projects"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 font-display text-xl font-medium transition-colors hover:bg-secondary"
                >
                  All work
                </a>
                <Button asChild className="mt-4">
                  <a href="/#contact" onClick={() => setOpen(false)}>
                    Start a project
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
