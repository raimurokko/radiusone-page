import { ArrowRight, Wifi } from "lucide-react";

// Gemeinsamer Seitenkopf. Anker-Links sind absolut (/#…), damit sie auch von
// den Rechtsseiten aus zur Startseite navigieren.
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5" aria-label="RadiusOne – Startseite">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Wifi className="h-4 w-4" />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight">RadiusOne</span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              powered by Novum Analytica
            </span>
          </span>
        </a>
        <nav
          aria-label="Hauptnavigation"
          className="hidden items-center gap-8 text-sm text-muted-foreground md:flex"
        >
          <a href="/#problem" className="transition-colors hover:text-foreground">
            Problem
          </a>
          <a href="/#how" className="transition-colors hover:text-foreground">
            So funktioniert's
          </a>
          <a href="/#app" className="transition-colors hover:text-foreground">
            App
          </a>
          <a href="/#pricing" className="transition-colors hover:text-foreground">
            Angebot
          </a>
        </nav>
        <a
          href="/#demo"
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-soft transition-transform hover:scale-[1.02]"
        >
          Demo buchen <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}
