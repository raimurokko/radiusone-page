import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

// Bewusst KEIN Preisrechner: Der Bedarfs-Check gibt nur eine qualitative,
// unverbindliche Einschätzung (Edition + grober Umfang), keinen Euro-Betrag –
// passend zur preisfreien Kommunikation.
export function BedarfsCheck() {
  const [team, setTeam] = useState("");
  const [sites, setSites] = useState<"1" | "2-3" | "4+" | null>(null);
  const [ownServer, setOwnServer] = useState<boolean | null>(null);

  const ready = team.trim() !== "" && sites !== null && ownServer !== null;

  const empfehlung = ownServer ? "Business (self-hosted)" : "Managed (gehostet)";
  const serverHinweis = ownServer
    ? "Die Software läuft auf Ihrem eigenen Server – volle Datenhoheit."
    : "Vollständig von uns gehostet – kein eigener Server nötig.";
  const standortHinweis =
    sites === "1"
      ? "Ein Standort, eine Box."
      : "Für mehrere Standorte planen wir Access Points bzw. eine Standort-Kopplung ein.";

  return (
    <div className="mx-auto mt-14 max-w-3xl rounded-3xl border border-border bg-surface p-6 shadow-soft md:p-8">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-accent" />
        <h3 className="font-display text-xl font-bold text-foreground">
          Bedarfs-Check – Ihre Einschätzung in 2 Minuten
        </h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Drei Angaben, sofort eine unverbindliche Einschätzung – ohne Anruf, ohne Formular-Versand.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
        <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Mitarbeitende
          <input
            type="number"
            min={1}
            inputMode="numeric"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
            placeholder="z. B. 8"
            className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary"
          />
        </label>

        <div className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Standorte
          <div className="grid grid-cols-3 gap-1.5">
            {(["1", "2-3", "4+"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSites(s)}
                aria-pressed={sites === s}
                className={
                  "rounded-xl border px-2 py-2.5 text-sm transition-colors " +
                  (sites === s
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-background hover:bg-secondary")
                }
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm font-medium text-foreground">
          Eigener Server/IT?
          <div className="grid grid-cols-2 gap-1.5">
            {[
              { label: "Ja", val: true },
              { label: "Nein", val: false },
            ].map(({ label, val }) => (
              <button
                key={label}
                type="button"
                onClick={() => setOwnServer(val)}
                aria-pressed={ownServer === val}
                className={
                  "rounded-xl border px-2 py-2.5 text-sm transition-colors " +
                  (ownServer === val
                    ? "border-primary bg-primary-soft text-primary"
                    : "border-border bg-background hover:bg-secondary")
                }
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {ready ? (
        <div className="mt-6 rounded-2xl border border-primary/20 bg-primary-soft/40 p-5">
          <p className="text-sm leading-relaxed text-foreground">
            Für ein Team von <strong>{team}</strong> Personen empfehlen wir die Edition{" "}
            <strong>{empfehlung}</strong>. {serverHinweis} {standortHinweis} Die vorkonfigurierte
            Firewall/Router- und Access-Point-Hardware ist immer enthalten und in rund 30 Minuten
            einsatzbereit.
          </p>
          <a
            href="#demo"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all hover:shadow-elevated"
          >
            Unverbindliches Angebot anfragen <ArrowRight className="h-4 w-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Unverbindliche Orientierung, kein verbindliches Angebot. Ihren individuellen, fairen
            Tagespreis erhalten Sie auf Anfrage.
          </p>
        </div>
      ) : (
        <p className="mt-6 text-sm text-muted-foreground">
          Bitte alle drei Felder ausfüllen, um Ihre Einschätzung zu sehen.
        </p>
      )}
    </div>
  );
}
