# Backlog – RadiusOne Website

Offene Punkte, priorisiert. Stand: Juli 2026.

## Vor Go-Live (Blocker / Geschäftsentscheidungen)

- [ ] **BFSG-Anwendbarkeit klären:** Greift das BFSG für diese (B2B-)Marketingseite überhaupt?
      (Kleinstunternehmen-Ausnahme bei Dienstleistungen, B2C-/E-Commerce-Bezug) – rechtlich prüfen.
- [ ] **Rechtliches zum Miet-/Schutz-Abo:** Operating-Leasing/Miete vs. Finanzierungsleasing
      (§ 32 KWG), ElektroG-Rücknahmepflichten. Keine Rechtsberatung – vor Go-Live prüfen lassen.
- [ ] **Offene Geschäftsentscheidungen** (`material/RadiusOne_Preisanalyse_Juli2026.md`, Abschnitt 9):
      monatlicher Schutz-Tarif festlegen (ggf. „ab X €/Monat"), finale Stückliste, Leasing-/Miet­partner,
      Community-/Lizenzmodell, Produktreife-Status (MVP vs. transaktionsreif → dann Verfügbarkeits-Claims
      und Pilotkundin-Zitat prüfen).
- [ ] **Cloud-Konfigurationsstufen konkret definieren** (Dashboard/Monitoring, Backup, zentrale
      Nutzerverwaltung) inkl. DSGVO-Rolle (Auftragsverarbeitung), sobald die Cloud aktiv ist.

## Deployment / Infrastruktur

- [ ] **GitHub Pages ist blockiert, weil das Repo ein Fork ist** (Pages/Actions bei Forks deaktiviert,
      in den Settings nicht freischaltbar). Der Build-Job läuft in CI, nur der Deploy scheitert.
      Optionen: (a) Fork zu eigenständigem Repo entkoppeln (GitHub-Support „detach" oder neues Repo),
      (b) forkfähiger Host wie Cloudflare Pages / Netlify, (c) später Codeberg-/GitLab-Pages.
- [ ] **GitLab**- und **Codeberg**-Remote hinzufügen (kommt später).
- [ ] Deploy-Ziel final festlegen (aktuell: statisches Prerender-Output `.output/public`).

## Content / Feinschliff

- [ ] Schlichtes „DSGVO-konform" im Hero ggf. an „DSGVO-konform gestaltet" angleichen.
- [ ] DRAM-/Preis-Transparenzhinweis ggf. verfeinern (aktuell bewusst kurz/selbstbewusst).
- [ ] **Community-Edition (kostenlos/Open Source)** ergänzen, sobald die Lizenzfrage geklärt ist.
- [ ] Footer-„Kontakt" ist ein `mailto:` – ggf. eigene Kontaktseite/-formular.
- [ ] Falls die Nachfrage steigt: Demo-Anfrage an echtes Backend/CRM anbinden, dann Datenschutz
      Abschnitt 5 um Empfänger/AV-Vertrag/Speicherdauer konkretisieren.

## Barrierefreiheit (Rest – nicht zwingend AA-Blocker)

- [ ] Externe/Screenreader-Fachprüfung (aktuell nur Selbstbewertung).
- [ ] Skip-Link („Zum Inhalt springen").
- [ ] `prefers-reduced-motion` respektieren (dekorative Übergänge abschalten).
- [ ] Gruppen-Labels (fieldset/role=group) für die Auswahlgruppen im Bedarfs-Check.
- [ ] Optional: dedizierte `datenschutz@`-Adresse für die/den Datenschutzbeauftragte(n).

## SEO / AEO / Performance

- [ ] Echtes, gebrandetes **OG-Bild** (1200×630) statt der kopierten Hero-JPG.
- [ ] Core Web Vitals messen (Lighthouse); Hero-Bild ggf. WebP/AVIF + `width`/`height`.
- [ ] `sitemap.xml` bei neuen Seiten pflegen – ggf. Build-Step generieren.
- [ ] Optional: Favicon-Set + `manifest.webmanifest`.

## Sicherheit

- [ ] **`security.txt`: `Expires` am 2027-07-01 erneuern** (RFC-9116-Pflichtfeld).
- [ ] Optional: dedizierte `security@`-Adresse, PGP-Key (`Encryption:`), `Policy:`-URL.

---

## Erledigt

- [x] Von Lovable entkoppelt, Repo aufgeräumt, Historie gekappt, `origin` = GitHub-Fork.
- [x] Schriften lokal self-hosted (Inter, Plus Jakarta Sans, OpenDyslexic – kein Google-CDN).
- [x] Zielgruppe auf KMU verbreitert (Praxen, Kanzleien, Betriebe, Handel, Gastronomie).
- [x] **Angebot = Schutz-Abo (Miete), keine Festpreise** (Option C); Produkt = Box mit
      RADIUS + OPNsense + Mesh-Cockpit + App. Zusatz-Schutz (Security+, Multi-Site, Vor-Ort).
      Bedarfs-Check statt Preisliste. Cloud als konfigurierbar kommuniziert.
- [x] UWG-Aufräumung: „TÜV-geprüft"/„100 % DSGVO-konform"/„80 %/<600 €"/„lebenslange Garantie"
      entschärft; sachlicher Cisco/Aruba-Vergleich; Router → „Firewall/Router (OPNsense-basiert)".
- [x] Impressum (USt-IdNr. DE362600306, D-U-N-S 344660265, Maria Jackson §18 MStV), Datenschutz
      (DPO Olga Mogilevskaya), Barrierefreiheit (Selbstbewertung + MLBF); alle TODOs raus.
- [x] Widgets: Barrierefreiheits-Widget (Dyslexie/Kontrast/Schriftgröße), „Nach oben"-Button,
      mailto-Demoformular, „powered by Novum Analytica".
- [x] Schema.org (Organization/WebSite/Product/FAQPage, ohne Preise), Canonical/OG, robots,
      sitemap, llms.txt, security.txt (RFC 9116).
- [x] Statisches Prerendering + GitHub-Pages-Workflow (Deploy durch Fork-Beschränkung blockiert).
- [x] README + Backlog aktualisiert.
