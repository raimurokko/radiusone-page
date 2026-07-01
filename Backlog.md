# Backlog – RadiusOne Website

Offene Punkte, priorisiert. Stand: 2026-07-01.

## Rechtliches (Blocker vor Go-Live)

- [x] **USt-IdNr.** (DE362600306) und **D-U-N-S** (344660265) im
      [Impressum](src/routes/impressum.tsx) eingetragen und in das Organization-Schema
      aufgenommen.
- [ ] **Datenschutzbeauftragte(r)** benennen, falls bestellt ([datenschutz.tsx](src/routes/datenschutz.tsx)).
- [ ] **Barrierefreiheit:** vollständige WCAG-2.1-AA-Prüfung; konkrete Ausnahmen und
      zuständige Durchsetzungsstelle in [barrierefreiheit.tsx](src/routes/barrierefreiheit.tsx) ergänzen.
- [x] TrustBar-Claims entschärft: „TÜV-geprüft" → „Entwickelt nach anerkannten
      Sicherheitsstandards"; „100 % DSGVO-konform (Art. 83-sicher)" → „DSGVO-konform
      gestaltet". „Hosting & Entwicklung in Deutschland" bleibt (bestätigt).
- [ ] Weitere Absolut-Claims prüfen: „Lebenslange Hardware-Garantie" (Preiskarte,
      [index.tsx](src/routes/index.tsx)) – Garantieumfang/-dauer definieren oder umformulieren;
      schlichtes „DSGVO-konform" im Hero ggf. an „DSGVO-konform gestaltet" angleichen.

## Funktionalität

- [ ] **Demo-Formular anbinden** ([index.tsx](src/routes/index.tsx) `FinalCTA`): aktuell ohne
      Submit-Handler/Backend. Ziel-Backend/CRM festlegen, Terminbuchung real machen,
      danach Datenschutz Abschnitt 5 konkretisieren (Empfänger, AV-Vertrag, Speicherdauer).
- [ ] Terminkacheln zeigen statische Beispiel-Daten (Di 24 … Fr 27) – dynamisieren oder
      durch echte Kalenderintegration ersetzen.
- [ ] Footer-„Kontakt" ist ein `mailto:` – ggf. eigene Kontaktseite/-formular.

## SEO / AEO / Performance

- [ ] Echtes, gebrandetes **OG-Bild** (1200×630) statt der aktuell kopierten Hero-JPG.
- [ ] `sitemap.xml` bei neuen Seiten pflegen (aktuell manuell) – ggf. Build-Step generieren.
- [ ] Core Web Vitals messen (Lighthouse); Hero-Bild ggf. als WebP/AVIF + `width`/`height`.
- [ ] Optional: `theme-color` / Favicon-Set + `manifest.webmanifest` ergänzen.

## Infrastruktur / Remotes

- [ ] **GitLab**-Remote hinzufügen (kommt später).
- [ ] **Codeberg**-Remote hinzufügen (kommt später).
- [ ] Deploy-Ziel festlegen (Nitro `node-server` ist portabel; passend zu „Hosting in DE").
- [ ] CI (Lint + Build) einrichten.

## Erledigt

- [x] Von Lovable entkoppelt, Repo aufgeräumt, Historie gekappt (Initial-Commit).
- [x] Schriften lokal selbst gehostet (kein Google-Fonts-CDN).
- [x] Impressum, Datenschutz, Barrierefreiheit angelegt und im Footer verlinkt.
- [x] Schema.org (Organization/WebSite/Product/FAQPage), Canonical/OG, robots/sitemap/llms.txt.
- [x] README + Backlog.
