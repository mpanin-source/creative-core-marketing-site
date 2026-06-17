import type { MouseEvent } from "react";
import { CALENDLY_URL } from "@/config/site";

const WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

// Light brand touch on the popup (coral primary, no GDPR banner). Calendly reads
// these query params the same way the inline embed did.
const POPUP_PARAMS = "hide_gdpr_banner=1&primary_color=FF4D2E";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

let loading: Promise<void> | null = null;

/** Inject Calendly's widget JS + CSS once (popup REQUIRES the CSS for the modal). */
function ensureAssets(): Promise<void> {
  if (typeof document === "undefined") return Promise.resolve();
  if (!document.querySelector(`link[href="${WIDGET_CSS}"]`)) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = WIDGET_CSS;
    document.head.appendChild(link);
  }
  if (window.Calendly) return Promise.resolve();
  if (loading) return loading;
  loading = new Promise<void>((resolve) => {
    let script = document.querySelector<HTMLScriptElement>(`script[src="${WIDGET_JS}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = WIDGET_JS;
      script.async = true;
      document.body.appendChild(script);
    }
    if (window.Calendly) return resolve();
    script.addEventListener("load", () => resolve());
  });
  return loading;
}

/** Open the Calendly scheduler as a modal popup over the current page. */
export async function openCalendlyPopup(url: string = CALENDLY_URL): Promise<void> {
  await ensureAssets();
  const full = `${url}${url.includes("?") ? "&" : "?"}${POPUP_PARAMS}`;
  window.Calendly?.initPopupWidget({ url: full });
}

/** True if a URL points at our Calendly account (any event / params). */
export function isCalendlyUrl(href: string): boolean {
  return href.includes("calendly.com/paninmax2002");
}

/** onClick for any <a href={CALENDLY_URL}> — opens the popup instead of
 *  navigating. Modified clicks (cmd/ctrl/shift/alt/non-left) fall through to the
 *  link's normal behavior (open in a new tab). */
export function handleCalendlyClick(e: MouseEvent<HTMLAnchorElement>): void {
  if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const href = e.currentTarget.getAttribute("href") || CALENDLY_URL;
  if (!isCalendlyUrl(href)) return;
  e.preventDefault();
  void openCalendlyPopup(href);
}
