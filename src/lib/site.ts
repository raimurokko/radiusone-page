// Zentrale Website-Konfiguration: Domain, Firmen-/Rechtsdaten und
// Schema.org-Builder. Single source of truth für Metadaten, Impressum,
// Datenschutz und die strukturierten Daten (JSON-LD) zur SEO/AEO-Optimierung.

export const SITE = {
  name: "RadiusOne",
  domain: "radiusone.novumanalytica.com",
  url: "https://radiusone.novumanalytica.com",
  locale: "de_DE",
  lang: "de",
  themeColor: "#1f3d2b",
  tagline: "Ihr WLAN. Ihre Regeln.",
  description:
    "DSGVO-konformes WLAN für Praxen, Kanzleien und Kammerberufe. In 30 Minuten eingerichtet, individuelle Zugänge pro Person, ohne IT-Kenntnisse.",
  ogImage: "/og-image.jpg",
} as const;

// Novum Analytica GmbH — Rechtsträger. Quelle: novumanalytica.com/impressum.
export const COMPANY = {
  legalName: "Novum Analytica GmbH",
  street: "Kurfürstendamm 194",
  postalCode: "10707",
  city: "Berlin",
  country: "DE",
  managingDirectors: ["Benjamin Stein", "Rainhard Z. Bengez"],
  registerCourt: "Amtsgericht Charlottenburg",
  registerNumber: "HRB 265538 B",
  vatId: "DE… (siehe Hauptdomain)",
  phone: "+49 30 700159500",
  email: "kontakt@novumanalytica.com",
  homepage: "https://www.novumanalytica.com",
  // Autoritative Rechtsseiten der Hauptdomain (Novum Analytica GmbH):
  impressumUrl: "https://www.novumanalytica.com/impressum",
  datenschutzUrl: "https://www.novumanalytica.com/datenschutz",
} as const;

// Inhaltlich verantwortlich i.S.d. § 18 Abs. 2 MStV.
export const CONTENT_RESPONSIBLE = {
  name: "Maria Jackson",
  addressLine: `${COMPANY.legalName}, ${COMPANY.street}, ${COMPANY.postalCode} ${COMPANY.city}`,
} as const;

export function canonical(path = "/"): string {
  return SITE.url + (path === "/" ? "" : path);
}

/** Organization-Schema (Novum Analytica GmbH, Herausgeber der Marke RadiusOne). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.legalName,
    url: COMPANY.homepage,
    brand: { "@type": "Brand", name: SITE.name },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.street,
      postalCode: COMPANY.postalCode,
      addressLocality: COMPANY.city,
      addressCountry: COMPANY.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      areaServed: "DE",
      availableLanguage: ["German"],
    },
  };
}

/** WebSite-Schema für die RadiusOne-Landingpage. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: SITE.lang,
    publisher: { "@type": "Organization", name: COMPANY.legalName },
  };
}

/** Product/Offer-Schema für RadiusOne (Hardware-Bundle + Software-Abo). */
export function productSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.name,
    description: SITE.description,
    brand: { "@type": "Brand", name: SITE.name },
    category: "Netzwerksicherheit / WLAN-Zugangsverwaltung",
    audience: {
      "@type": "Audience",
      audienceType: "Praxen, Kanzleien und kleine Büros",
    },
    offers: [
      {
        "@type": "Offer",
        name: "Hardware Bundle (Plug & Play)",
        price: "799",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: canonical("/#pricing"),
      },
      {
        "@type": "Offer",
        name: "Software Business",
        price: "499",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "499",
          priceCurrency: "EUR",
          unitText: "JAHR",
          billingDuration: 1,
          billingIncrement: 1,
        },
        availability: "https://schema.org/InStock",
        url: canonical("/#pricing"),
      },
    ],
  };
}

// Häufige Fragen — als FAQPage-Schema (AEO: Antwort-Engines / KI-Assistenten
// zitieren diese Q&A direkt) und optional für eine sichtbare FAQ-Sektion.
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Was ist RadiusOne?",
    a: "RadiusOne ist eine Plug-&-Play-Lösung für WLAN-Zugangsverwaltung. Jede Person und jedes Gerät erhält einen eigenen, individuell verwaltbaren Zugang statt eines gemeinsamen Passworts – speziell für Praxen, Kanzleien und kleine Büros.",
  },
  {
    q: "Ist RadiusOne DSGVO-konform?",
    a: "Ja. RadiusOne trennt Gäste- und Arbeitsnetze strikt, vergibt individuelle Zugänge und protokolliert automatisch, wer wann in welchem Netzbereich war – ein nachweisbarer Beitrag zur DSGVO-Konformität. Hosting und Entwicklung erfolgen in Deutschland.",
  },
  {
    q: "Wie lange dauert die Einrichtung?",
    a: "Rund 30 Minuten, ohne Techniker. Sie beantworten im Setup-Wizard etwa zehn einfache Fragen; jede Person bucht sich anschließend per QR-Code-Scan einmalig selbst ein.",
  },
  {
    q: "Brauche ich IT-Kenntnisse?",
    a: "Nein. RadiusOne ist als Plug-&-Play konzipiert: vorkonfigurierte Hardware einstecken, QR-Codes verteilen, fertig. Die laufende Verwaltung erfolgt per Mobile-App.",
  },
  {
    q: "Was kostet RadiusOne?",
    a: "Das Hardware-Bundle kostet 799 € einmalig (Router und Access Point vorinstalliert). Die Software Business kostet 499 € pro Jahr und enthält Updates, Premium-Support aus Deutschland und die Mobile-App-Steuerung.",
  },
  {
    q: "Für wen ist RadiusOne geeignet?",
    a: "Für Arzt- und Zahnarztpraxen, Kanzleien, Steuerberatungen und kleine Büros – überall dort, wo sensible Daten und wechselnde Personen (Mitarbeiter, Dienstleister, Gäste) im selben WLAN aufeinandertreffen.",
  },
];

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}
