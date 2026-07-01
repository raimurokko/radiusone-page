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
- [x] „Lebenslange Hardware-Garantie" → „Erweiterte Hardware-Garantie" (Absolut-Claim entschärft).
- [ ] **Konkrete Garantie-Laufzeit** (z.B. 24/36 Monate) im Hardware-Bundle eintragen,
      sobald bekannt ([index.tsx](src/routes/index.tsx)).
- [ ] Schlichtes „DSGVO-konform" im Hero ggf. an „DSGVO-konform gestaltet" angleichen.

## Angebot / Content

- [x] Preis-Editionen auf 3 erweitert: Managed (29 €/Mon.), Business (499 €/J.),
      Hardware Bundle (799 €). On-Premise-/Souveränitäts-Sektion + Kostenvergleich ergänzt.
- [ ] **Community-Edition (kostenlos/Open Source)** ergänzen, sobald die **Lizenzfrage
      geklärt** ist. Dann auch „basiert auf offenen Standards" → explizites „Open Source"
      hochstufen (aktuell bewusst zurückhaltend formuliert).
- [ ] **Managed-Features bestätigen** ([index.tsx](src/routes/index.tsx) `Pricing`): aktuell
      plausibel angenommen (kein eigener Server, gehostet, Mobile-App, monatlich kündbar) –
      mit echtem Leistungsumfang abgleichen.
- [ ] Produktreife: Website verkauft als „verfügbar" (bestätigt) – bei Statusänderung
      Verfügbarkeits-Claims und Pilotkundin-Zitat prüfen.

## Funktionalität

- [x] **Demo-Formular** öffnet nun das E-Mail-Programm mit vorausgefüllter Standardmail
      (mailto, kein Backend – bewusst wegen geringer Nachfrage). Datenschutz Abschnitt 5
      entsprechend angepasst.
- [x] Terminkacheln auf Wochentag+Uhrzeit umgestellt (auswählbar, keine veraltenden Datumsangaben).
- [x] „Nach oben"-Button (erscheint ab 600 px Scrolltiefe).
- [x] Barrierefreiheits-Widget (Rollstuhl-Button mittig rechts): Dyslexie-Schrift (OpenDyslexic,
      self-hosted), größere Schrift, hoher Kontrast; in localStorage gespeichert.
- [ ] Falls die Nachfrage steigt: Demo-Buchung an echtes Backend/CRM anbinden, dann Datenschutz
      Abschnitt 5 um Empfänger/AV-Vertrag/Speicherdauer ergänzen.
- [ ] Footer-„Kontakt" ist ein `mailto:` – ggf. eigene Kontaktseite/-formular.

## SEO / AEO / Performance

- [ ] Echtes, gebrandetes **OG-Bild** (1200×630) statt der aktuell kopierten Hero-JPG.
- [ ] `sitemap.xml` bei neuen Seiten pflegen (aktuell manuell) – ggf. Build-Step generieren.
- [ ] Core Web Vitals messen (Lighthouse); Hero-Bild ggf. als WebP/AVIF + `width`/`height`.
- [ ] Optional: `theme-color` / Favicon-Set + `manifest.webmanifest` ergänzen.

## Sicherheit

- [x] `security.txt` nach RFC 9116 unter `/.well-known/security.txt` angelegt.
- [ ] **`Expires` am 2027-07-01 erneuern** (RFC-9116-Pflichtfeld, muss vor Ablauf aktualisiert werden).
- [ ] Optional: dedizierte `security@`-Adresse, PGP-Key (`Encryption:`) und `Policy:`-URL ergänzen.

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
