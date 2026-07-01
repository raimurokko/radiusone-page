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

- [x] **Preisstrategie umgestellt (Juli 2026): keine Festpreise mehr.** Grund:
      Hardware-Preisvolatilität (DRAM), Hardware ist immer im Angebot enthalten. Editionen
      (Hardware Bundle/Business/Managed) bleiben als Struktur, aber ohne €. Product-Schema-Preise
      entfernt, FAQ/llms.txt angepasst. Quelle: `material/RadiusOne_Preisanalyse_Juli2026.md`.
- [x] **Bedarfs-Check** (statt „Konfigurator", um Verwechslung mit dem Produkt-Configurator zu
      vermeiden): 3 Felder → qualitative Einschätzung ohne Zahl.
- [x] Router → „Firewall/Router (OPNsense-basiert)"; Firewall+NAC-USP; Technologie-Gleichwertigkeit
      (802.1X/EAP-TLS/eduroam); UWG-konformer Cisco/Aruba-Vergleich (5.000 €+, ab ~500 Nutzern).
      „80 %/<600 €"-Claim entfernt (laut Analyse nicht mehr haltbar).
- [ ] **Offene Geschäftsentscheidungen aus der Preisanalyse** (Abschnitt 9), sobald geklärt in
      Copy einarbeiten: Werteleiter-Fix (Managed/Business-Verhältnis), finale Stückliste/Tiers
      (Lite/Business/Multi-Site), Kombi-SKU Hardware+Business, Community-/Lizenzmodell.
- [ ] DRAM-Transparenzhinweis ggf. verfeinern (aktuell bewusst kurz/selbstbewusst gehalten).
- [ ] **Community-Edition (kostenlos/Open Source)** ergänzen, sobald die **Lizenzfrage geklärt** ist.
- [ ] **Managed-/Business-Leistungsumfang bestätigen** (Cockpit & Configurator, Support, Hosting).
- [ ] Produktreife klären (Analyse Abschnitt 11: „MVP geplant" vs. „transaktionsreif") – bei
      Statusänderung Verfügbarkeits-Claims und Pilotkundin-Zitat prüfen.

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
