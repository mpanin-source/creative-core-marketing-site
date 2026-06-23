import type { CSSProperties } from "react";

/**
 * Signal Cobalt kit marks — all SVG-based (mask technique) so they scale crisply and recolor
 * by background, fixing the PNG sizing issues. Assets live in /public/cobalt/.
 * - monogram.svg = the 06 "OC" interlocking-CC monogram (viewBox 796×517)
 * - wordmark.svg = "creative core / MARKETING" lockup text (viewBox 1076×290)
 */

export const COBALT = {
  base: "#F4F7FB",
  cream: "#F4EEE1",     // warm cream — primary section background (no pure white)
  creamB: "#EDE6D6",    // deeper warm cream — alternating sections
  surface: "#FBF7EF",   // light cream — cards (lifts off the cream sections)
  ink: "#0E1A2B",
  primary: "#1E50E5",
  secondary: "#7FB0FF",
  cta: "#0E9F6E",       // accent — emerald (replaced the orange #FF5722)
};

const MONO_RATIO = 796 / 517; // w/h
const WORD_RATIO = 1076 / 290; // w/h

function mask(url: string, color: string, w: number, h: number): CSSProperties {
  return {
    width: w,
    height: h,
    backgroundColor: color,
    display: "inline-block",
    flexShrink: 0,
    WebkitMaskImage: `url(${url})`,
    maskImage: `url(${url})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
  };
}

/** Coral→blue gradient for the CC mark — the left C orange fading into the right C blue. */
export const CC_GRADIENT = "linear-gradient(95deg, #FF4D2E 20%, #b65a9e 52%, #3a86ff 85%)";

export function MonogramCC({ width = 64, color = COBALT.primary, gradient, style = {} }: { width?: number; color?: string; gradient?: string; style?: CSSProperties }) {
  const base = mask("/cobalt/monogram.svg", color, width, width / MONO_RATIO);
  const fill = gradient ? { background: gradient, backgroundColor: "transparent" } : {};
  return <span aria-label="Creative Core monogram" style={{ ...base, ...fill, ...style }} />;
}

export function Wordmark({ height = 22, color = COBALT.ink, style = {} }: { height?: number; color?: string; style?: CSSProperties }) {
  return <span aria-label="Creative Core Marketing" style={{ ...mask("/cobalt/wordmark.svg", color, height * WORD_RATIO, height), ...style }} />;
}

/** Horizontal lockup: monogram · divider · wordmark. `size` = monogram width. */
export function Lockup({ size = 52, color = COBALT.ink }: { size?: number; color?: string }) {
  const monoH = size / MONO_RATIO;
  // Wordmark scaled up relative to the monogram so the "creative core / MARKETING"
  // text stays legible at header sizes; divider + gaps tuned to an optical balance.
  const wordH = monoH * 0.92;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: size * 0.22 }}>
      <MonogramCC width={size} color={color} />
      <span style={{ width: 1.5, height: monoH * 0.78, background: color, opacity: 0.28 }} />
      <Wordmark height={wordH} color={color} />
    </span>
  );
}

/** Stacked lockup for the dark band — monogram over wordmark. */
export function LockupStacked({ size = 160, color = COBALT.base }: { size?: number; color?: string }) {
  return (
    <span style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.10 }}>
      <MonogramCC width={size} color={color} />
      <Wordmark height={size * 0.22} color={color} />
    </span>
  );
}

export function Spark({ size = 20, color = COBALT.primary, className = "", style = {} }: { size?: number; color?: string; className?: string; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden="true">
      <path d="M12 0 C12.7 6.6 17.4 11.3 24 12 C17.4 12.7 12.7 17.4 12 24 C11.3 17.4 6.6 12.7 0 12 C6.6 11.3 11.3 6.6 12 0 Z" fill={color} />
    </svg>
  );
}
