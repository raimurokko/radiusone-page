import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// „Nach oben"-Button: erscheint erst, wenn genügend weit gescrollt wurde.
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nach oben scrollen"
      className={
        "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border border-border bg-surface text-foreground shadow-elevated transition-all hover:bg-primary hover:text-primary-foreground " +
        (visible ? "opacity-100 translate-y-0" : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
