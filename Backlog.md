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

- [x] **Angebotsmodell = Schutz-Abo (Miete), keine Festpreise (Option C).** Produkt ist die Box
      (Router mit RADIUS + OPNsense + eigener Mesh-/Cockpit-Schicht + App); die Software läuft
      immer auf der Box (kein „self-hosted vs. gehostet"). Ein monatliches Schutz-Abo, Box als
      Miete inkl. Austausch/Upgrade; Kauf alternativ auf Anfrage. Zusatz-Schutz: Security+
      (IDS/IPS), Multi-Site (VPN), Vor-Ort. Alte 3-Editionen-Karten (Hardware/Business/Managed)
      ersetzt. Quelle: `material/RadiusOne_Preisanalyse_Juli2026.md`.
- [x] **Cloud konfigurierbar** kommuniziert: Standard on-premise, Cloud-Funktionen (Dashboard,
      Backup, standortübergreifende Verwaltung) optional pro Kunde. Souveränitäts-Copy + FAQ
      entsprechend ehrlich formuliert („Datensouveränität nach Maß").
- [x] **Bedarfs-Check** (statt „Konfigurator", um Verwechslung mit dem Produkt-Configurator zu
      vermeiden): 3 Felder → Empfehlung Schutz-Abo (Selbst/Managed) + passender Zusatz-Schutz.
- [x] Router → „Firewall/Router (OPNsense-basiert)"; Firewall+NAC-USP; Technologie-Gleichwertigkeit
      (802.1X/EAP-TLS/eduroam); UWG-konformer Cisco/Aruba-Vergleich (5.000 €+, ab ~500 Nutzern).
      „80 %/<600 €"-Claim entfernt (laut Analyse nicht mehr haltbar).
- [ ] **Offene Geschäftsentscheidungen aus der Preisanalyse** (Abschnitt 9): monatlicher
      Schutz-Tarif festlegen (ggf. „ab X €/Monat" statt gar keiner Zahl), finale Stückliste,
      Leasing-/Mietpartner (Abschnitt 10.4), Community-/Lizenzmodell.
- [ ] **Cloud-Konfigurationsstufen konkret definieren** (Dashboard/Monitoring, Backup, zentrale
      Nutzerverwaltung) inkl. DSGVO-Rolle (Auftragsverarbeitung), sobald Cloud aktiv.
- [ ] Rechtliches zur Miete klären (Operating-Leasing/Miete vs. Finanzierungsleasing/§ 32 KWG,
      ElektroG-Rücknahme) – keine Rechtsberatung, aber vor Go-Live prüfen lassen.
- [ ] DRAM-Transparenzhinweis ggf. verfeinern (aktuell bewusst kurz/selbstbewusst gehalten).
- [ ] **Community-Edition (kostenlos/Open Source)** ergänzen, sobald die **Lizenzfrage geklärt** ist.
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
