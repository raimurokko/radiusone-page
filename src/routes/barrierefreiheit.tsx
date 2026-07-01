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
        Grundlage ist eine <strong>Selbstbewertung (Stand Juli 2026)</strong>. Diese Website ist mit
        den Erfolgskriterien der WCAG 2.1 Stufe AA <strong>weitgehend vereinbar</strong>. Die unter
        „Nicht barrierefreie Inhalte" genannten Punkte werden laufend geprüft und verbessert.
      </p>

      <h2>Umgesetzte Maßnahmen</h2>
      <ul>
        <li>
          Barrierefreiheits-Widget (Symbol rechts): Dyslexie-Schrift (OpenDyslexic), größere Schrift
          und hoher Kontrast – umschaltbar und dauerhaft gespeichert
        </li>
        <li>Semantische HTML-Struktur mit klarer Überschriften-Hierarchie</li>
        <li>Aussagekräftige Alternativtexte für inhaltstragende Bilder</li>
        <li>
          Sprachauszeichnung der Seite (lang=&quot;de&quot;) und beschriftete Navigationsbereiche
        </li>
        <li>Tastaturbedienbarkeit und sichtbarer Fokus</li>
        <li>ARIA-Landmarks (Kopf-, Haupt- und Fußbereich) und beschriftete Formularfelder</li>
        <li>
          Geprüfte Farbkontraste über den AA-Mindestwerten (Fließtext mindestens 6:1, interaktive
          Elemente darüber)
        </li>
      </ul>

      <h2>Nicht barrierefreie Inhalte</h2>
      <p>Nach aktuellem Stand der Selbstbewertung sind folgende Punkte noch offen:</p>
      <ul>
        <li>
          Eine vollständige Prüfung mit assistiven Technologien (Screenreader) und durch eine
          externe Fachstelle steht noch aus.
        </li>
        <li>
          Die Auswahlgruppen im Bedarfs-Check (Standorte, Betreuung) sind bedienbar, aber noch nicht
          als Gruppe programmatisch mit ihrer Beschriftung verknüpft.
        </li>
        <li>
          Bei der Nutzerpräferenz „Bewegung reduzieren" (prefers-reduced-motion) werden dekorative
          Übergänge derzeit nicht abgeschaltet.
        </li>
        <li>Ein „Zum Inhalt springen"-Link (Skip-Link) ist noch nicht vorhanden.</li>
      </ul>

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
        zuständige Marktüberwachungsstelle nach dem BFSG wenden. Zuständig ist bundesweit die
        gemeinsame{" "}
        <strong>
          Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und
          Dienstleistungen (MLBF)
        </strong>
        :
      </p>
      <address>
        Marktüberwachungsstelle der Länder für die Barrierefreiheit von Produkten und
        Dienstleistungen (MLBF)
        <br />
        Carl-Miller-Str. 6, 39112 Magdeburg
        <br />
        E-Mail: <a href="mailto:kontakt@mlbf-barrierefrei.de">kontakt@mlbf-barrierefrei.de</a>
        <br />
        <a href="https://www.mlbf-barrierefrei.de" target="_blank" rel="noopener noreferrer">
          www.mlbf-barrierefrei.de
        </a>
      </address>
    </LegalLayout>
  );
}
