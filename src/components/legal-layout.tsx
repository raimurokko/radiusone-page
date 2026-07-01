import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

// Gemeinsames Layout für die Rechtsseiten (Impressum, Datenschutz,
// Barrierefreiheit). Inhalt wird in .legal-prose gerendert (siehe styles.css).
export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-primary md:text-5xl">
          {title}
        </h1>
        {intro ? <p className="mt-4 text-lg text-muted-foreground">{intro}</p> : null}
        <div className="legal-prose mt-10">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
