import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";
import { COMPANY, canonical } from "@/lib/site";

export const Route = createFileRoute("/barrierefreiheit")({
  head: () => ({
    meta: [
      { title: "Erklärung zur Barrierefreiheit – RadiusOne" },
      {
        name: "description",
        content:
          "Erklärung zur Barrierefreiheit von RadiusOne nach WCAG 2.1 AA / EN 301 549, inklusive Feedback-Möglichkeit.",
      },
      { property: "og:title", content: "Erklärung zur Barrierefreiheit – RadiusOne" },
      { property: "og:url", content: canonical("/barrierefreiheit") },
    ],
    links: [{ rel: "canonical", href: canonical("/barrierefreiheit") }],
  }),
  component: Barrierefreiheit,
});

function Barrierefreiheit() {
  return (
    <LegalLayout
      title="Erklärung zur Barrierefreiheit"
      intro="Wir sind bemüht, diese Website im Einklang mit dem Barrierefreiheitsstärkungsgesetz (BFSG) und den anerkannten Standards WCAG 2.1 (Stufe AA) sowie EN 301 549 barrierefrei zugänglich zu machen."
    >
      <h2>Stand der Vereinbarkeit</h2>
      <p>
        Diese Website ist mit den Erfolgskriterien der WCAG 2.1 Stufe AA{" "}
        <strong>teilweise vereinbar</strong>. Die nachfolgend genannten Punkte werden laufend
        geprüft und verbessert.
      </p>

      <h2>Umgesetzte Maßnahmen</h2>
      <ul>
        <li>Semantische HTML-Struktur mit klarer Überschriften-Hierarchie</li>
        <li>Aussagekräftige Alternativtexte für inhaltstragende Bilder</li>
        <li>
          Sprachauszeichnung der Seite (lang=&quot;de&quot;) und beschriftete Navigationsbereiche
        </li>
        <li>Tastaturbedienbarkeit und sichtbarer Fokus</li>
        <li>Responsives Layout und ausreichende Farbkontraste im Fließtext</li>
      </ul>

      <h2>Nicht barrierefreie Inhalte</h2>
      <p>
        <strong>
          [TODO: Nach einer vollständigen WCAG-Prüfung konkrete Ausnahmen und Einschränkungen
          dokumentieren – z. B. einzelne Kontrastwerte, Formularhinweise oder Medieninhalte.]
        </strong>
      </p>

      <h2>Feedback und Kontakt</h2>
      <p>
        Sind Ihnen Mängel bei der barrierefreien Nutzung aufgefallen oder benötigen Sie Inhalte in
        einer zugänglichen Form? Teilen Sie uns das bitte mit – wir bemühen uns um zeitnahe Abhilfe:
      </p>
      <address>
        {COMPANY.legalName}
        <br />
        E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <br />
        Telefon: {COMPANY.phone}
      </address>

      <h2>Durchsetzungsverfahren</h2>
      <p>
        Sollten wir Ihre Rückmeldung nicht zufriedenstellend bearbeiten, können Sie sich an die
        zuständige Durchsetzungs- bzw. Marktüberwachungsstelle nach dem BFSG wenden.{" "}
        <strong>[TODO: Zuständige Schlichtungs-/Durchsetzungsstelle konkret benennen.]</strong>
      </p>
    </LegalLayout>
  );
}
