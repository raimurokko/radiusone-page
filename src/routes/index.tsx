import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Flag,
  UserX,
  Wrench,
  Users,
  Plug,
  QrCode,
  Wifi,
  Check,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Server,
  CloudOff,
  Scale,
  Building2,
  MapPin,
} from "lucide-react";
import heroImg from "@/assets/hero-router.jpg";
import appImg from "@/assets/app-mockup.jpg";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BedarfsCheck } from "@/components/bedarfs-check";
import { JsonLd } from "@/components/json-ld";
import { SITE, COMPANY, canonical, productSchema, faqSchema, FAQ } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RadiusOne – Plug & Play WLAN-Sicherheit für kleine Unternehmen" },
      {
        name: "description",
        content:
          "DSGVO-konformes WLAN für kleine Unternehmen – Praxen, Kanzleien, Betriebe, Handel und Gastronomie. In 30 Minuten eingerichtet, individuelle Zugänge pro Person, ohne IT-Kenntnisse.",
      },
      { property: "og:title", content: "RadiusOne – Ihr WLAN. Ihre Regeln." },
      {
        property: "og:description",
        content:
          "Professionelle Netzwerk-Sicherheit für kleine Unternehmen – von der Praxis bis zum Café. DSGVO-konform, in 30 Minuten eingerichtet.",
      },
      { property: "og:url", content: canonical("/") },
      { property: "og:image", content: SITE.url + SITE.ogImage },
      { name: "twitter:image", content: SITE.url + SITE.ogImage },
    ],
    links: [{ rel: "canonical", href: canonical("/") }],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd schema={[productSchema(), faqSchema()]} />
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <HowItWorks />
        <AppShowcase />
        <Sovereignty />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 20% 0%, oklch(0.95 0.04 155 / 0.7), transparent 60%), radial-gradient(40% 40% at 90% 10%, oklch(0.95 0.05 78 / 0.4), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/90">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Plug & Play IT-Sicherheit
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-primary md:text-6xl lg:text-7xl">
            Ihr WLAN.
            <br />
            <span className="text-foreground">Ihre Regeln.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Professionelle Netzwerk-Sicherheit für kleine Unternehmen – ob Praxis, Kanzlei, Betrieb,
            Handel oder Café. DSGVO-konform, in 30 Minuten eingerichtet und komplett ohne
            IT-Kenntnisse.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated hover:-translate-y-0.5"
            >
              Jetzt 15-Minuten Demo buchen
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Wie es funktioniert
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Keine IT nötig
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> 30 Min. Setup
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Hosting in DE
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-elevated">
            <img
              src={heroImg}
              alt="RadiusOne Router mit App-Dashboard zur Verwaltung von WLAN-Zugängen"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-surface p-4 shadow-elevated md:flex md:items-center md:gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Sicherheit aktiv</div>
              <div className="text-sm font-semibold">12 individuelle Zugänge</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const badges = [
    { icon: Flag, label: "Hosting & Entwicklung in Deutschland" },
    { icon: ShieldCheck, label: "Entwickelt nach anerkannten Sicherheitsstandards" },
    { icon: Lock, label: "DSGVO-konform gestaltet" },
  ];
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-5 px-6 py-8 sm:flex-row sm:gap-10 md:gap-14">
        {badges.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-sm font-medium text-muted-foreground"
          >
            <Icon className="h-5 w-5 flex-shrink-0 text-primary" strokeWidth={1.75} />
            {label}
          </div>
        ))}
      </div>
    </section>
  );
}

function Problem() {
  const cards = [
    {
      icon: UserX,
      title: "Mitarbeiter verlässt die Kanzlei",
      old: "Alter Weg: Passwort für alle ändern",
      new: "Mit RadiusOne: 1-Klick Einzel-Sperrung",
    },
    {
      icon: Wrench,
      title: "Handwerker & Dienstleister im Betrieb",
      old: "Kennen Ihr WLAN-Passwort – für immer",
      new: "Mit RadiusOne: Zeitlich begrenzte Zugänge",
    },
    {
      icon: Users,
      title: "Gäste im Café oder Wartebereich",
      old: "Surfen im selben Netz wie Ihre sensiblen Daten",
      new: "Mit RadiusOne: Strikt getrenntes Gäste-WLAN",
    },
  ];
  return (
    <section id="problem" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">
            Das Problem
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Ein Passwort für alle ist ein Sicherheitsrisiko.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Ob Praxis, Kanzlei, Handel oder Gastronomie – jede dieser Situationen kennen Sie aus dem
            Arbeitsalltag, und jede ist ein DSGVO-Risiko.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, old, new: neu }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex items-start gap-2 text-muted-foreground line-through decoration-destructive/60">
                  {old}
                </div>
                <div className="flex items-start gap-2 font-medium text-primary">
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {neu}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Plug, title: "Anschließen", desc: "Vorkonfigurierte Hardware einstecken." },
    { icon: QrCode, title: "QR-Code scannen", desc: "In 30 Minuten eingerichtet." },
    { icon: Wifi, title: "Sicher surfen", desc: "Jeder erhält seinen individuellen Schlüssel." },
  ];
  return (
    <section id="how" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            In 3 Schritten
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
            So einfach funktioniert es
          </h2>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent md:block"
          />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur">
                <s.icon className="h-7 w-7 text-accent" strokeWidth={1.5} />
              </div>
              <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Schritt {i + 1}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-primary-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const features = [
    {
      title: "Mitarbeiter sperren mit einem Klick",
      desc: "Kein Passworttausch für alle anderen nötig. Sperren Sie verlassene Mitarbeiter in Sekunden.",
    },
    {
      title: "Netze strikt trennen",
      desc: "Gäste-WLAN und sensible Firmendaten komplett isoliert – kein Übergriff möglich.",
    },
    {
      title: "Automatische DSGVO-Protokolle",
      desc: "Jeder Zugriff wird sauber protokolliert. Jederzeit nachweisbar bei Prüfungen.",
    },
  ];
  return (
    <section id="app" className="py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-tr from-primary/10 to-accent/20 blur-3xl" />
          <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] border border-border bg-surface shadow-elevated">
            <img
              src={appImg}
              alt="RadiusOne App: Mitarbeiterliste mit Sperr-Funktion"
              className="w-full"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">
            Die App
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Volle Kontrolle. Aus Ihrer Hosentasche.
          </h2>
          <ul className="mt-10 space-y-7">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{f.title}</h3>
                  <p className="mt-1 text-muted-foreground">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Sovereignty() {
  const points = [
    {
      icon: Server,
      title: "On-Premise als Standard",
      desc: "Standardmäßig läuft alles auf Ihrer eigenen Box in Ihrem Netz. Cloud-Funktionen (Dashboard, Backup) schalten Sie nur frei, wenn Sie sie brauchen.",
    },
    {
      icon: CloudOff,
      title: "Sie entscheiden über Ihre Daten",
      desc: "Von 100 % on-premise bis zentral verwaltet – Sie legen fest, was Ihr Netz verlässt. Nichts fließt ungefragt zu Dritten.",
    },
    {
      icon: Scale,
      title: "Offene Standards",
      desc: "WPA3-Enterprise, 802.1X, EAP-TLS, FreeRADIUS und die OPNsense-Firewall – dieselbe Technik, auf der z. B. eduroam (das WLAN der Hochschulen) läuft. Herstellerunabhängig, ohne Lock-in.",
    },
  ];
  return (
    <section id="souveraenitaet" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">
            Souveränität
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Ihre Daten bleiben bei Ihnen.
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            RadiusOne läuft standardmäßig On-Premise in Ihrem eigenen Netz – kein Cloud-Zwang.
            Cloud-Funktionen sind optional und konfigurierbar, ganz nach Ihrem Bedarf.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-surface p-7 shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl items-start gap-4 rounded-2xl border border-primary/20 bg-primary-soft/40 p-5">
          <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            <strong className="font-semibold">Firewall und Zugangskontrolle in einer Box:</strong>{" "}
            Reine NAC-Systeme wie Cisco ISE oder Aruba ClearPass setzen eine separate Firewall
            voraus. RadiusOne liefert beides in einem Gerät – On-Premise, ohne zusätzliche
            Appliance.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="bg-secondary/40 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">
            Angebot
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Enterprise-Sicherheit – kalkuliert für kleine Teams, nicht für Konzerne.
          </h2>
          <p className="mt-5 text-pretty text-lg text-muted-foreground">
            RadiusOne bringt{" "}
            <strong className="font-semibold text-foreground">
              dieselbe Sicherheitstechnik, die Konzerne und Universitäten einsetzen
            </strong>
            , zu kleinen Unternehmen – WPA3-Enterprise, 802.1X und zertifikatsbasierte
            Authentifizierung (EAP-TLS). Nur ohne Enterprise-Preisschild und ohne die Komplexität,
            die ein kleines Team nicht braucht.
          </p>
          <p className="mt-4 text-pretty text-sm text-muted-foreground">
            Cisco ISE oder Aruba ClearPass starten bei 5.000 € und mehr (Softwarelizenz, ohne
            Hardware und Integration) und rechnen sich oft erst ab rund 500 Nutzern. RadiusOne
            liefert dieselbe Technologieklasse zu{" "}
            <strong className="font-semibold text-foreground">einem Bruchteil davon</strong> – für
            kleine Teams gebaut und individuell kalkuliert.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-3xl border-2 border-primary bg-surface p-8 shadow-glow md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">RadiusOne Schutz</h3>
            </div>
            <span className="rounded-full bg-primary-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
              Monatliches Abo
            </span>
          </div>
          <p className="mt-4 text-pretty text-muted-foreground">
            Rundum-Schutz im Abo, jederzeit kündbar. Die Box mieten Sie – inklusive Austausch und
            Upgrade. Ihre Daten bleiben dabei bei Ihnen.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3.5 sm:grid-cols-2">
            {[
              "Box als Miete inklusive – Austausch & Upgrade bei Bedarf",
              "Firewall/Router (OPNsense-basiert) + FreeRADIUS",
              "Mesh-Cockpit & App zur einfachen Verwaltung",
              "Updates, Monitoring und Support aus Deutschland",
              "Optional: zentrales Cloud-Dashboard & Backup",
              "Datensouveränität nach Maß – standardmäßig on-premise",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 text-sm text-foreground">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span>{f}</span>
              </div>
            ))}
          </div>
          <a
            href="#demo"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated"
          >
            Unverbindliches Angebot anfragen <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-center text-sm font-medium text-muted-foreground">
            Zusatz-Schutz – bei Bedarf dazubuchen
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Security+", desc: "IDS/IPS (Suricata)" },
              { icon: Building2, title: "Multi-Site", desc: "Standort-Kopplung (VPN)" },
              { icon: MapPin, title: "Vor-Ort", desc: "Einrichtung beim Kunden" },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-surface p-5 shadow-soft"
              >
                <Icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                <p className="mt-3 font-display font-bold text-foreground">{title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <BedarfsCheck />

        <p className="mx-auto mt-6 max-w-3xl text-center text-xs text-muted-foreground">
          Warum kein fixer Preis? Netzwerk-Hardware ist derzeit stark in Bewegung. Wir kalkulieren
          jedes Schutz-Paket individuell und fair – Kauf statt Miete ist alternativ auf Anfrage
          möglich.
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl items-start gap-4 rounded-2xl border border-warning/30 bg-warning/5 p-5">
          <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-warning/15 text-warning">
            <AlertTriangle className="h-5 w-5" />
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            <strong className="font-semibold">Zum Vergleich:</strong> Ein DSGVO-Bußgeld reicht bis
            zu <strong className="text-warning">20.000.000 €</strong> (Art. 83 DSGVO).
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const SLOTS = [
    { d: "Di", t: "10:00" },
    { d: "Mi", t: "14:30" },
    { d: "Do", t: "09:00" },
    { d: "Do", t: "16:00" },
    { d: "Fr", t: "11:00" },
    { d: "Fr", t: "15:00" },
  ];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wunschtermin = slot !== null ? `${SLOTS[slot].d}, ${SLOTS[slot].t} Uhr` : "";
    const body = [
      "Guten Tag,",
      "",
      "ich interessiere mich für eine unverbindliche, 15-minütige RadiusOne-Demo.",
      "",
      `Name & Unternehmen: ${name}`,
      `E-Mail für Rückfragen: ${email}`,
      `Wunschtermin: ${wunschtermin}`,
      "Telefon (optional): ",
      "Format (bitte auswählen): vor Ort / per Videokonferenz",
      "",
      "Bitte schlagen Sie mir einen passenden Termin vor.",
      "",
      "Mit freundlichen Grüßen",
    ].join("\r\n");
    const href =
      `mailto:${COMPANY.email}` +
      `?subject=${encodeURIComponent("Demo-Anfrage RadiusOne")}` +
      `&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  return (
    <section id="demo" className="px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary p-10 shadow-glow md:p-16">
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(50% 60% at 100% 0%, oklch(0.78 0.13 78 / 0.25), transparent 60%), radial-gradient(40% 50% at 0% 100%, oklch(0.4 0.1 155 / 0.5), transparent 60%)",
          }}
        />
        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-primary-foreground">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Live-Demo
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Bereit für ein sicheres Firmen-WLAN?
            </h2>
            <p className="mt-5 max-w-md text-lg text-primary-foreground/75">
              Lassen Sie sich RadiusOne in einer 15-minütigen Live-Demo zeigen – vor Ort oder per
              Videokonferenz.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              {["Unverbindlich", "15 Minuten", "Auf Deutsch"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-primary-foreground/10 bg-surface p-6 shadow-elevated">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold text-foreground">
                  Wunschzeit wählen
                </div>
                <div className="text-xs text-muted-foreground">15-Minuten-Demo</div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {SLOTS.map((s, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSlot(i)}
                  aria-pressed={slot === i}
                  className={
                    "rounded-xl border p-3 text-left transition-all hover:border-primary hover:bg-primary-soft " +
                    (slot === i ? "border-primary bg-primary-soft" : "border-border bg-background")
                  }
                >
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {s.d}
                  </div>
                  <div className="font-display text-lg font-bold text-foreground">{s.t}</div>
                </button>
              ))}
            </div>
            <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name & Unternehmen"
                aria-label="Name und Unternehmen"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail Adresse"
                aria-label="E-Mail-Adresse"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated"
              >
                Demo per E-Mail anfragen <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Öffnet Ihr E-Mail-Programm mit einer vorausgefüllten Nachricht – Sie ergänzen und
                senden sie nur noch ab.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-foreground/80">
            Häufige Fragen
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Antworten auf einen Blick
          </h2>
        </div>
        <dl className="mt-12 divide-y divide-border">
          {FAQ.map(({ q, a }) => (
            <div key={q} className="py-6">
              <dt className="font-display text-lg font-bold text-foreground">{q}</dt>
              <dd className="mt-2 leading-relaxed text-muted-foreground">{a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
