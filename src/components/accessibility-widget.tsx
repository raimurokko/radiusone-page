import { useEffect, useState } from "react";
import { X, Contrast, Type, BookOpen, RotateCcw } from "lucide-react";

type Settings = {
  dyslexia: boolean;
  largeText: boolean;
  highContrast: boolean;
};

const DEFAULTS: Settings = { dyslexia: false, largeText: false, highContrast: false };
const STORAGE_KEY = "radiusone-a11y";

// Rollstuhl-Symbol (International Symbol of Access), self-contained SVG.
function WheelchairIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="4" r="2" fill="currentColor" stroke="none" />
      <path d="M12 7v6h5l2.5 4.5" />
      <path d="M12 10h3.5" />
      <circle cx="10.5" cy="16.5" r="5.5" />
    </svg>
  );
}

function apply(settings: Settings) {
  const html = document.documentElement;
  html.classList.toggle("dyslexia-friendly", settings.dyslexia);
  html.classList.toggle("a11y-large-text", settings.largeText);
  html.classList.toggle("high-contrast", settings.highContrast);
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);

  // Gespeicherte Einstellungen laden und anwenden.
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = { ...DEFAULTS, ...JSON.parse(saved) } as Settings;
        setSettings(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = (key: keyof Settings) => {
    setSettings((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    setSettings(DEFAULTS);
    apply(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Barrierefreiheit: Darstellung anpassen"
        className="fixed right-4 top-1/2 z-50 grid h-16 w-16 -translate-y-1/2 place-items-center rounded-full border-2 border-primary bg-primary text-primary-foreground shadow-elevated transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <WheelchairIcon className="h-8 w-8" />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-label="Barrierefreiheit"
      className="fixed right-4 top-1/2 z-50 w-[300px] max-w-[calc(100vw-2rem)] -translate-y-1/2 rounded-2xl border border-border bg-surface p-5 shadow-elevated"
    >
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2">
          <WheelchairIcon className="h-6 w-6 text-primary" />
          <span className="font-display text-lg font-bold text-foreground">Barrierefreiheit</span>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Schließen"
          className="grid h-8 w-8 place-items-center rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <ToggleRow
          icon={<BookOpen className="h-5 w-5" />}
          label="Dyslexie-Schrift"
          active={settings.dyslexia}
          onClick={() => toggle("dyslexia")}
        />
        <ToggleRow
          icon={<Type className="h-5 w-5" />}
          label="Größere Schrift"
          active={settings.largeText}
          onClick={() => toggle("largeText")}
        />
        <ToggleRow
          icon={<Contrast className="h-5 w-5" />}
          label="Hoher Kontrast"
          active={settings.highContrast}
          onClick={() => toggle("highContrast")}
        />
      </div>

      <button
        type="button"
        onClick={reset}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <RotateCcw className="h-4 w-4" /> Zurücksetzen
      </button>
    </div>
  );
}

function ToggleRow({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      role="switch"
      aria-checked={active}
      className="flex w-full items-center justify-between rounded-xl border border-border px-3 py-3 text-left transition-colors hover:bg-secondary"
    >
      <span className="flex items-center gap-3 text-sm font-medium text-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      <span
        className={
          "relative h-6 w-11 flex-shrink-0 rounded-full transition-colors " +
          (active ? "bg-primary" : "bg-border")
        }
      >
        <span
          className={
            "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-all " +
            (active ? "left-[22px]" : "left-0.5")
          }
        />
      </span>
    </button>
  );
}
