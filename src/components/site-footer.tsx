import { Wifi } from "lucide-react";
import { COMPANY } from "@/lib/site";

// Gemeinsamer Seitenfuß mit verlinkten Rechtsseiten.
export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            <Wifi className="h-3.5 w-3.5" />
          </div>
          <span className="font-display font-bold text-foreground">RadiusOne</span>
          <span>
            © {year} {COMPANY.legalName}
          </span>
        </div>
        <nav aria-label="Rechtliches" className="flex flex-wrap items-center justify-center gap-6">
          <a href="/impressum" className="hover:text-foreground">
            Impressum
          </a>
          <a href="/datenschutz" className="hover:text-foreground">
            Datenschutz
          </a>
          <a href="/barrierefreiheit" className="hover:text-foreground">
            Barrierefreiheit
          </a>
          <a href={`mailto:${COMPANY.email}`} className="hover:text-foreground">
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  );
}
