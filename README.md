# RadiusOne – Website

Marketing-Website für **RadiusOne** – eine Plug-&-Play-Lösung für DSGVO-konforme
WLAN-Zugangsverwaltung für **kleine Unternehmen**: Praxen, Kanzleien, Betriebe,
Handel und Gastronomie. RadiusOne ist eine Marke der **Novum Analytica GmbH**, Berlin.

Produktiv-Domain (geplant): `https://radiusone.novumanalytica.com`

## Was RadiusOne ist (Produktmodell)

Das Produkt ist **eine Box** (Router/Firewall) mit vorinstallierter Software:
FreeRADIUS (WPA3-Enterprise/802.1X), OPNsense-Firewall und eine eigene
Mesh-/Cockpit-Schicht zur einfachen Verwaltung, dazu optional eine App/Webapp.

Vertrieben wird das Ganze als **monatliches „Schutz-Abo"**: Die Box wird gemietet
(Austausch/Upgrade inklusive), Software, Updates und Support sind enthalten; Kauf
statt Miete ist auf Anfrage möglich. **Keine Festpreise** auf der Website – individuell
kalkuliert (Hintergrund: Hardware-Preisvolatilität, siehe `material/RadiusOne_Preisanalyse_Juli2026.md`).
Cloud-Funktionen (Dashboard, Backup, standortübergreifende Verwaltung) sind **optional
und pro Kunde konfigurierbar** – Standard ist On-Premise.

## Tech-Stack

- [TanStack Start](https://tanstack.com/start) (SSR) + React 19
- Vite 8, Tailwind CSS v4
- Nitro (Build), **statisches Prerendering** für das Deployment
- Package-Manager: **Bun**
- shadcn/ui als On-Ramp (`components.json` + `src/lib/utils.ts`); Komponenten bei
  Bedarf via `bunx shadcn@latest add <name>` nachziehen

> Abgeleitet von einem Lovable-Export, aber vollständig von Lovable **entkoppelt**
> (eigene `vite.config.ts`, keine `@lovable.dev/*`-Pakete).

## Entwicklung

```bash
bun install        # Abhängigkeiten
bun run dev        # Dev-Server auf http://localhost:4321
bun run build      # Prerender-Build -> .output/public (statisch)
bun run preview    # Build lokal vorschauen
bun run lint       # ESLint
bun run format     # Prettier
```

## Struktur

```
src/
  routes/                 # Datei-basiertes Routing (TanStack Start)
    __root.tsx            # App-Shell: globale Meta-Tags, Organization/WebSite-JSON-LD,
                          #   ScrollToTop- + Accessibility-Widget
    index.tsx             # Landingpage: Hero, TrustBar, Problem, Ablauf, App,
                          #   Souveränität, Angebot (Schutz-Abo) + Bedarfs-Check, FAQ, Demo-CTA
    impressum.tsx         # /impressum
    datenschutz.tsx       # /datenschutz
    barrierefreiheit.tsx  # /barrierefreiheit
  components/
    site-header.tsx       # Kopf (inkl. „powered by Novum Analytica")
    site-footer.tsx       # Fuß mit verlinkten Rechtsseiten
    legal-layout.tsx      # gemeinsames Layout der Rechtsseiten
    json-ld.tsx           # <script type="application/ld+json">-Helper
    scroll-to-top.tsx     # „Nach oben"-Button ab 600px Scrolltiefe
    accessibility-widget.tsx  # Rollstuhl-Button: Dyslexie-Schrift, große Schrift, Kontrast
    bedarfs-check.tsx     # 3-Felder-Einschätzung (ohne Preis) -> Empfehlung Schutz-Abo
  lib/
    site.ts               # Single source of truth: Domain, Firmendaten, Schema.org, FAQ
    utils.ts              # shadcn cn()-Helper
  styles.css              # Tailwind-Theme + .legal-prose + A11y-Umschaltklassen
  fonts.css               # @font-face: Inter, Plus Jakarta Sans, OpenDyslexic (lokal)
public/
  fonts/                  # woff2 lokal – kein Google-CDN
  robots.txt, sitemap.xml, llms.txt, og-image.jpg
  .well-known/security.txt  # RFC 9116
  CNAME, .nojekyll        # für GitHub Pages (Custom Domain)
.github/workflows/deploy.yml  # Build + Deploy nach GitHub Pages
```

## Features

- **Barrierefreiheits-Widget** (Symbol rechts): Dyslexie-Schrift (OpenDyslexic, self-hosted),
  größere Schrift, hoher Kontrast – umschaltbar, in `localStorage` gespeichert.
- **„Nach oben"-Button** ab hinreichender Scrolltiefe.
- **Demo-Anfrage per mailto**: öffnet das E-Mail-Programm mit vorausgefüllter Nachricht
  (kein Backend nötig).
- **Bedarfs-Check**: drei Angaben → qualitative Einschätzung ohne Euro-Betrag.

## SEO / AEO

- Strukturierte Daten (JSON-LD): Organization, WebSite, Product, FAQPage
  (bewusst **ohne** Preis-/Offer-Felder – keine Festpreise).
- Canonical-URLs, Open-Graph- und Twitter-Meta pro Seite.
- `sitemap.xml`, `robots.txt`, `llms.txt` (LLM-/Antwort-Engine-Optimierung), `security.txt`.
- Sichtbare FAQ-Sektion, die das FAQPage-Schema spiegelt.

## Datenschutz & Barrierefreiheit

- Datensparsam: **selbst gehostete Schriften** (keine Google-Fonts-Anfragen),
  kein Drittanbieter-Tracking, keine nicht-technischen Cookies → kein Cookie-Banner.
- Barrierefreiheit: Selbstbewertung (WCAG 2.1 AA), Kontraste geprüft, Formularfelder
  beschriftet, zuständige Stelle (MLBF) benannt. Offene Punkte siehe [Backlog](./Backlog.md).

## Deployment

`bun run build` erzeugt ein **statisch prerendertes** `.output/public` (alle Routen als
fertiges HTML). Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht das
nach GitHub Pages.

> **Bekannte Einschränkung:** Dieses Repo ist ein **GitHub-Fork** – GitHub Pages/Actions
> sind bei Forks standardmäßig deaktiviert und lassen sich in den Settings nicht freischalten.
> Optionen: Fork zu eigenständigem Repo entkoppeln, oder ein forkfähiger Host
> (Cloudflare Pages / Netlify), oder später Codeberg-/GitLab-Pages. Siehe [Backlog](./Backlog.md).

## Verantwortliche

- **Maria Jackson** – inhaltlich verantwortlich (§ 18 Abs. 2 MStV), Maintainerin dieser Website.
- **Olga Mogilevskaya** – Datenschutzbeauftragte.
- Kontakt: `kontakt@novumanalytica.com`.

---

© Novum Analytica GmbH. Alle Rechte vorbehalten.
