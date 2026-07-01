import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY, CONTENT_RESPONSIBLE, canonical } from "@/lib/site";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – RadiusOne" },
      {
        name: "description",
        content:
          "Impressum und Anbieterkennzeichnung von RadiusOne, einer Marke der Novum Analytica GmbH.",
      },
      { property: "og:title", content: "Impressum – RadiusOne" },
      { property: "og:url", content: canonical("/impressum") },
    ],
    links: [{ rel: "canonical", href: canonical("/impressum") }],
  }),
  component: Impressum,
});

function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>
        RadiusOne ist eine Marke der {COMPANY.legalName}. Maßgeblich und vollständig sind die
        Angaben im{" "}
        <a href={COMPANY.impressumUrl} target="_blank" rel="noopener noreferrer">
          Impressum der {COMPANY.legalName}
        </a>
        .
      </p>

      <h2>Angaben gemäß § 5 DDG</h2>
      <address>
        {COMPANY.legalName}
        <br />
        {COMPANY.street}
        <br />
        {COMPANY.postalCode} {COMPANY.city}
        <br />
        Deutschland
      </address>

      <h2>Vertreten durch</h2>
      <p>{COMPANY.managingDirectors.join(", ")} (Geschäftsführung)</p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}>{COMPANY.phone}</a>
        <br />
        E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Eintragung im Handelsregister.
        <br />
        Registergericht: {COMPANY.registerCourt}
        <br />
        Registernummer: {COMPANY.registerNumber}
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Die Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz entnehmen Sie bitte
        dem{" "}
        <a href={COMPANY.impressumUrl} target="_blank" rel="noopener noreferrer">
          Impressum der Hauptdomain
        </a>
        . <strong>[TODO: USt-IdNr. hier direkt eintragen]</strong>
      </p>

      <h2>Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV</h2>
      <p>
        {CONTENT_RESPONSIBLE.name}
        <br />
        {CONTENT_RESPONSIBLE.addressLine}
      </p>

      <h2>EU-Streitschlichtung</h2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  );
}
