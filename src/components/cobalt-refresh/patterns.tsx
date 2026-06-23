import { Spark } from "../cobalt/CobaltMarks";

/**
 * Kit pattern backgrounds recolored to the current coral/charcoal brand, used as
 * subtle low-opacity overlays on select sections of the real homepage (/cobalt-refresh).
 * Each fills its relative parent; pointer-events none so it never blocks interaction.
 */
const CORAL = "#FF4D2E";
const CHARCOAL = "#1A1714";
const AZURE = "#3a86ff";

export function ContourBg({ color = CORAL, opacity = 0.07 }: { color?: string; opacity?: number }) {
  const lines = Array.from({ length: 11 });
  return (
    <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none" viewBox="0 0 1200 600" style={{ opacity }}>
      {lines.map((_, i) => {
        const y = 30 + i * 52;
        return <path key={i} d={`M0 ${y} C 200 ${y - 34}, 400 ${y + 34}, 600 ${y} S 1000 ${y - 34}, 1200 ${y}`} stroke={color} strokeWidth="1.5" fill="none" />;
      })}
    </svg>
  );
}

const SCATTER = [
  { t: "14%", l: "9%", s: 16 }, { t: "24%", l: "84%", s: 22 }, { t: "60%", l: "16%", s: 14 },
  { t: "76%", l: "72%", s: 18 }, { t: "42%", l: "50%", s: 12 }, { t: "84%", l: "32%", s: 16 },
];
export function SparkField({ color = CORAL, opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      {SCATTER.map((p, i) => <Spark key={i} size={p.s} color={color} style={{ position: "absolute", top: p.t, left: p.l }} />)}
    </div>
  );
}

/** Monogram tiled across the ENTIRE section via a repeating CSS mask (any height). */
export function MonogramTile({ color = CHARCOAL, opacity = 0.07, tile = 104 }: { color?: string; opacity?: number; tile?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        zIndex: 0,
        backgroundColor: color,
        WebkitMaskImage: "url(/cobalt/monogram.svg)",
        maskImage: "url(/cobalt/monogram.svg)",
        WebkitMaskRepeat: "repeat",
        maskRepeat: "repeat",
        WebkitMaskSize: `${tile}px`,
        maskSize: `${tile}px`,
      }}
    />
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * NEW blue (#3a86ff) patterns — secondary-accent texture in the same spirit as the
 * coral/charcoal patterns above. Absolute-fill, pointer-events-none, low opacity.
 * Each takes color + opacity props so callers can tune them per section.
 * ──────────────────────────────────────────────────────────────────────────── */

/** Evenly-spaced dot grid via a radial-gradient mask — reads as quiet technical grid paper. */
export function DotGrid({ color = AZURE, opacity = 0.18, gap = 26, dot = 1.6 }: { color?: string; opacity?: number; gap?: number; dot?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        backgroundPosition: "center",
      }}
    />
  );
}

/** Concentric orbit rings emanating from an anchor point — signal/AI "broadcast" feel. */
export function OrbitRings({
  color = AZURE,
  opacity = 0.12,
  cx = "85%",
  cy = "20%",
  rings = 6,
}: { color?: string; opacity?: number; cx?: string | number; cy?: string | number; rings?: number }) {
  const items = Array.from({ length: rings });
  return (
    <svg aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1000 600" style={{ opacity }}>
      {(() => {
        const ax = typeof cx === "string" ? (parseFloat(cx) / 100) * 1000 : cx;
        const ay = typeof cy === "string" ? (parseFloat(cy) / 100) * 600 : cy;
        return items.map((_, i) => (
          <circle key={i} cx={ax} cy={ay} r={70 + i * 78} stroke={color} strokeWidth="1.25" fill="none" />
        ));
      })()}
    </svg>
  );
}

/** Soft blurred gradient orb/glow — a single diffuse pool of blue light. */
export function GlowOrb({
  color = AZURE,
  opacity = 0.16,
  size = 520,
  top = "-10%",
  left = "70%",
}: { color?: string; opacity?: number; size?: number | string; top?: string | number; left?: string | number }) {
  const dim = typeof size === "number" ? `${size}px` : size;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <div
        style={{
          position: "absolute",
          top,
          left,
          width: dim,
          height: dim,
          transform: "translate(-50%, -50%)",
          borderRadius: "9999px",
          background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
          filter: "blur(36px)",
        }}
      />
    </div>
  );
}
