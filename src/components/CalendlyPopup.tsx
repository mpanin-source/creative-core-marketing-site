import { useEffect } from "react";
import { openCalendlyPopup, isCalendlyUrl } from "@/lib/calendly";

/**
 * Global click handler: turns every Calendly link on the site into a popup, so
 * each CTA doesn't have to be wired individually. Mounted once in App.
 * Plain left-clicks open the modal; modified clicks (cmd/ctrl/shift/alt/middle)
 * fall through to the anchor's normal behavior (open in new tab).
 */
const CalendlyPopup = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (!isCalendlyUrl(href)) return;
      e.preventDefault();
      void openCalendlyPopup(href);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
};

export default CalendlyPopup;
