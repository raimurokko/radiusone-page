// Rendert ein <script type="application/ld+json"> mit strukturierten Daten.
// Wird serverseitig ins HTML gerendert und ist damit für Suchmaschinen und
// Antwort-Engines (AEO) direkt auslesbar.
export function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Inhalt ist statisch aus site.ts erzeugt (keine Nutzer­eingaben).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
