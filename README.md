# RadiusOne – Website

Marketing-Website für **RadiusOne**, die Plug-&-Play-Lösung für DSGVO-konforme
WLAN-Zugangsverwaltung in Praxen, Kanzleien und kleinen Büros. RadiusOne ist eine
Marke der **Novum Analytica GmbH**, Berlin.

Produktiv-Domain: `https://radiusone.novumanalytica.com`

## Tech-Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + React 19
- Vite 8, Tailwind CSS v4
- Nitro (Build-Output-Preset: `node-server`, deploy-target-agnostisch)
- Package-Manager: **Bun**
- shadcn/ui als On-Ramp (`components.json` + `src/lib/utils.ts`); Komponenten bei
  Bedarf via `bunx shadcn@latest add <name>` nachziehen

> Das Projekt ist von einem Lovable-Export abgeleitet, wurde aber vollständig von
> Lovable **entkoppelt** (eigene `vite.config.ts`, keine `@lovable.dev/*`-Pakete).

## Entwicklung

```bash
bun install        # Abhängigkeiten
bun run dev        # Dev-Server auf http://localhost:4321
bun run build      # Production-Build nach .output/
bun run preview    # Build lokal vorschauen
bun run lint       # ESLint
bun run format     # Prettier
```

## Struktur

```
src/
  routes/            # Datei-basiertes Routing (TanStack Start)
    __root.tsx       # App-Shell: globale Meta-Tags, Organization/WebSite-JSON-LD
    index.tsx        # Landingpage (Hero, Problem, Ablauf, App, Preise, FAQ, CTA)
    impressum.tsx    # /impressum
    datenschutz.tsx  # /datenschutz
    barrierefreiheit.tsx  # /barrierefreiheit
  components/        # SiteHeader, SiteFooter, LegalLayout, JsonLd
  lib/
    site.ts          # Single source of truth: Domain, Firmendaten, Schema.org-Builder
  styles.css         # Tailwind-Theme + .legal-prose
  fonts.css          # @font-face für selbst gehostete Schriften
public/
  fonts/             # Inter + Plus Jakarta Sans (woff2, lokal – kein Google-CDN)
  robots.txt, sitemap.xml, llms.txt, og-image.jpg
```

## SEO / AEO

- Strukturierte Daten (JSON-LD): Organization, WebSite, Product/Offer, FAQPage
- Canonical-URLs, Open-Graph- und Twitter-Meta pro Seite
- `sitemap.xml`, `robots.txt` und `llms.txt` (Antwort-Engine-/LLM-Optimierung)
- Sichtbare FAQ-Sektion, die das FAQPage-Schema spiegelt

## Datenschutz

Datensparsam gestaltet: **selbst gehostete Schriften** (keine Google-Fonts-Anfragen),
kein Drittanbieter-Tracking, keine nicht-technischen Cookies → kein Cookie-Banner nötig.

## Rechtliche Angaben

Firmendaten stammen aus dem Impressum der Hauptdomain `novumanalytica.com`. Offene
Rechts-Platzhalter (USt-IdNr., ggf. DSB) sind im Code als `[TODO]` markiert und im
[Backlog](./Backlog.md) gelistet.

## Maintainerin

**Maria Jackson** – inhaltlich verantwortlich (§ 18 Abs. 2 MStV) und Ansprechpartnerin
für diese Website. Kontakt: `kontakt@novumanalytica.com`.

---

© Novum Analytica GmbH. Alle Rechte vorbehalten.
