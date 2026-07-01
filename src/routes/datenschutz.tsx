import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY, canonical } from "@/lib/site";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – RadiusOne" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von RadiusOne: datensparsam, selbst gehostete Schriften, kein Drittanbieter-Tracking.",
      },
      { property: "og:title", content: "Datenschutzerklärung – RadiusOne" },
      { property: "og:url", content: canonical("/datenschutz") },
    ],
    links: [{ rel: "canonical", href: canonical("/datenschutz") }],
  }),
  component: Datenschutz,
});

function Datenschutz() {
  return (
    <LegalLayout
      title="Datenschutzerklärung"
      intro="Diese Website ist bewusst datensparsam gestaltet. Die vollständige, rechtlich maßgebliche Datenschutzerklärung der Novum Analytica GmbH finden Sie auf der Hauptdomain."
    >
      <p>
        Maßgeblich ist die{" "}
        <a href={COMPANY.datenschutzUrl} target="_blank" rel="noopener noreferrer">
          Datenschutzerklärung der {COMPANY.legalName}
        </a>
        . Nachfolgend die für diese Website (radiusone.novumanalytica.com) relevanten Angaben.
      </p>

      <h2>1. Verantwortlicher</h2>
      <address>
        {COMPANY.legalName}
        <br />
        {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}
        <br />
        Telefon: {COMPANY.phone}
        <br />
        E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </address>
      <p>
        <strong>[TODO: Datenschutzbeauftragte(r) benennen, falls bestellt.]</strong>
      </p>

      <h2>2. Hosting und Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website werden durch den Hosting-Provider automatisch Informationen in
        sogenannten Server-Logfiles gespeichert, die Ihr Browser übermittelt: IP-Adresse, Datum und
        Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Referrer sowie Browser- und
        Betriebssystem-Angaben. Die Verarbeitung erfolgt zur Gewährleistung eines stabilen und
        sicheren Betriebs auf Grundlage unseres berechtigten Interesses (Art. 6 Abs. 1 lit. f
        DSGVO). Hosting erfolgt in Deutschland.
      </p>

      <h2>3. Schriftarten (selbst gehostet)</h2>
      <p>
        Die verwendeten Schriften (Inter, Plus Jakarta Sans) werden{" "}
        <strong>lokal vom eigenen Server</strong> ausgeliefert. Es besteht{" "}
        <strong>keine Verbindung zu Google Fonts</strong>
        oder anderen Drittanbieter-CDNs; es werden dabei keine personenbezogenen Daten an Dritte
        übermittelt.
      </p>

      <h2>4. Kein Tracking, keine Analyse-Cookies</h2>
      <p>
        Diese Website setzt keine Analyse-, Marketing- oder Tracking-Dienste ein und verwendet keine
        nicht technisch notwendigen Cookies. Ein Cookie-Einwilligungsbanner ist daher nicht
        erforderlich.
      </p>

      <h2>5. Demo-Anfrage / Kontaktaufnahme</h2>
      <p>
        Wenn Sie über das Demo-Formular oder per E-Mail Kontakt aufnehmen, verarbeiten wir die von
        Ihnen angegebenen Daten (z. B. Name und E-Mail-Adresse) ausschließlich zur Bearbeitung Ihrer
        Anfrage und zur Vereinbarung eines Demo-Termins (Art. 6 Abs. 1 lit. b und lit. f DSGVO). Die
        Daten werden gelöscht, sobald sie für den Zweck nicht mehr erforderlich sind und keine
        gesetzlichen Aufbewahrungspflichten entgegenstehen.
      </p>
      <p>
        <strong>
          [TODO: Sobald das Demo-Formular an ein Backend/CRM angebunden ist, Empfänger,
          Auftragsverarbeiter und Speicherdauer hier konkretisieren.]
        </strong>
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>Sie haben nach der DSGVO insbesondere folgende Rechte:</p>
      <ul>
        <li>Auskunft über die zu Ihnen gespeicherten Daten (Art. 15 DSGVO)</li>
        <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
        <li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
      </ul>
      <p>
        Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an{" "}
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>.
      </p>
    </LegalLayout>
  );
}
