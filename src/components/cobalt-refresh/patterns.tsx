import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Spark } from "../cobalt/CobaltMarks";

/**
 * Kit pattern backgrounds recolored to the current coral/charcoal/azure brand, used as
 * subtle low-opacity overlays on select sections. Each fills its relative parent;
 * pointer-events none so it never blocks interaction.
 *
 * Every pattern takes an optional `animated` flag. When true (and the user has NOT
 * requested reduced motion) the pattern gets a slow, tasteful motion — opacity breathe,
 * grid drift, twinkle, or an expanding signal pulse. `prefers-reduced-motion` always
 * forces the static render.
 */
const CORAL = "#FF4D2E";
const CHARCOAL = "#1A1714";
const AZURE = "#3a86ff";

export function ContourBg({ color = CORAL, opacity = 0.07, animated = false }: { color?: string; opacity?: number; animated?: boolean }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  const lines = Array.from({ length: 11 });
  return (
    <motion.svg
      aria-hidden
      className="absolute top-0 h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 1200 600"
      style={{ opacity, left: "-6%", width: "112%" }}
      animate={move ? { x: [0, -42, 0] } : undefined}
      transition={move ? { duration: 16, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      {lines.map((_, i) => {
        const y = 30 + i * 52;
        return <path key={i} d={`M0 ${y} C 200 ${y - 34}, 400 ${y + 34}, 600 ${y} S 1000 ${y - 34}, 1200 ${y}`} stroke={color} strokeWidth="1.5" fill="none" />;
      })}
    </motion.svg>
  );
}

// Three scatter layouts so adjacent star sections don't look identically templated.
const SCATTERS = [
  [
    { t: "14%", l: "9%", s: 16 }, { t: "24%", l: "84%", s: 22 }, { t: "60%", l: "16%", s: 14 },
    { t: "76%", l: "72%", s: 18 }, { t: "42%", l: "50%", s: 12 }, { t: "84%", l: "32%", s: 16 },
  ],
  [
    { t: "18%", l: "78%", s: 18 }, { t: "38%", l: "12%", s: 14 }, { t: "66%", l: "88%", s: 20 },
    { t: "28%", l: "44%", s: 12 }, { t: "80%", l: "24%", s: 16 }, { t: "54%", l: "62%", s: 14 },
  ],
  [
    { t: "12%", l: "40%", s: 14 }, { t: "30%", l: "90%", s: 18 }, { t: "58%", l: "8%", s: 16 },
    { t: "72%", l: "54%", s: 12 }, { t: "86%", l: "80%", s: 20 }, { t: "46%", l: "28%", s: 14 },
  ],
];
export function SparkField({ color = CORAL, opacity = 0.5, animated = false, variant = 0 }: { color?: string; opacity?: number; animated?: boolean; variant?: number }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  const scatter = SCATTERS[((variant % SCATTERS.length) + SCATTERS.length) % SCATTERS.length];
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      {scatter.map((p, i) => (
        <motion.span
          key={i}
          style={{ position: "absolute", top: p.t, left: p.l }}
          animate={move ? { opacity: [1, 0.2, 1], scale: [1, 0.7, 1] } : undefined}
          transition={move ? { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: (i % 3) * 0.6 } : undefined}
        >
          <Spark size={p.s} color={color} />
        </motion.span>
      ))}
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

/** A single oversized monogram bleeding off a corner — brand watermark without the
 *  noisy full-tile repeat. `corner` picks which edge it bleeds off of. */
export function MonogramWatermark({
  color = CHARCOAL,
  opacity = 0.05,
  size = 560,
  corner = "br",
}: { color?: string; opacity?: number; size?: number; corner?: "tl" | "tr" | "bl" | "br" }) {
  const pos: Record<string, CSSProperties> = {
    tl: { top: -size * 0.28, left: -size * 0.18 },
    tr: { top: -size * 0.28, right: -size * 0.18 },
    bl: { bottom: -size * 0.32, left: -size * 0.18 },
    br: { bottom: -size * 0.32, right: -size * 0.18 },
  };
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      <div
        style={{
          position: "absolute",
          ...pos[corner],
          width: size,
          height: size / (796 / 517),
          backgroundColor: color,
          WebkitMaskImage: "url(/cobalt/monogram.svg)",
          maskImage: "url(/cobalt/monogram.svg)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * Blue (#3a86ff) patterns — secondary-accent texture in the same spirit as the
 * coral/charcoal patterns above. Absolute-fill, pointer-events-none, low opacity.
 * ──────────────────────────────────────────────────────────────────────────── */

/** Evenly-spaced dot grid via a radial-gradient mask — reads as quiet technical grid paper.
 *  Animated: the grid slowly drifts one cell (seamless loop). */
export function DotGrid({ color = AZURE, opacity = 0.18, gap = 26, dot = 1.6, animated = false }: { color?: string; opacity?: number; gap?: number; dot?: number; animated?: boolean }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  return (
    <motion.div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `radial-gradient(${color} ${dot}px, transparent ${dot}px)`,
        backgroundSize: `${gap}px ${gap}px`,
        backgroundPosition: "center",
      }}
      animate={move ? { backgroundPosition: ["0px 0px", `${gap}px ${gap}px`] } : undefined}
      transition={move ? { duration: 7, repeat: Infinity, ease: "linear" } : undefined}
    />
  );
}

/** Concentric orbit rings emanating from an anchor point — signal/AI "broadcast" feel.
 *  Animated: the whole field gently breathes in opacity. */
export function OrbitRings({
  color = AZURE,
  opacity = 0.12,
  cx = "85%",
  cy = "20%",
  rings = 6,
  animated = false,
}: { color?: string; opacity?: number; cx?: string | number; cy?: string | number; rings?: number; animated?: boolean }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  const items = Array.from({ length: rings });
  const ax = typeof cx === "string" ? (parseFloat(cx) / 100) * 1000 : cx;
  const ay = typeof cy === "string" ? (parseFloat(cy) / 100) * 600 : cy;
  return (
    <motion.svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1000 600"
      style={{ opacity }}
      animate={move ? { opacity: [opacity * 0.45, opacity, opacity * 0.45] } : undefined}
      transition={move ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={move ? { scale: [1, 1.08, 1] } : undefined}
        transition={move ? { duration: 7, repeat: Infinity, ease: "easeInOut" } : undefined}
      >
        {items.map((_, i) => (
          <circle key={i} cx={ax} cy={ay} r={70 + i * 78} stroke={color} strokeWidth="1.25" fill="none" />
        ))}
      </motion.g>
    </motion.svg>
  );
}

/** Soft blurred gradient orb/glow — a single diffuse pool of light.
 *  Animated: the orb breathes in opacity. */
export function GlowOrb({
  color = AZURE,
  opacity = 0.16,
  size = 520,
  top = "-10%",
  left = "70%",
  animated = false,
}: { color?: string; opacity?: number; size?: number | string; top?: string | number; left?: string | number; animated?: boolean }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  const dim = typeof size === "number" ? `${size}px` : size;
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      <div style={{ position: "absolute", top, left, transform: "translate(-50%, -50%)" }}>
        <motion.div
          style={{
            width: dim,
            height: dim,
            borderRadius: "9999px",
            background: `radial-gradient(circle, ${color} 0%, transparent 68%)`,
            filter: "blur(40px)",
          }}
          animate={move ? { scale: [1, 1.18, 1], opacity: [0.5, 1, 0.5] } : undefined}
          transition={move ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined}
        />

      </div>
    </div>
  );
}

/** Expanding "signal" waves — concentric rings that grow and fade outward from an
 *  anchor, echoing the nav logo's signal-flow. The most on-brand motion for Signal
 *  Cobalt; animated by default (reduced-motion renders static concentric rings).
 *  Built from scaling <div> rings (reliable) rather than animated SVG radii. */
export function SignalWave({
  color = AZURE,
  opacity = 0.5,
  cx = "50%",
  cy = "50%",
  waves = 4,
  size = 480,
  animated = true,
}: { color?: string; opacity?: number; cx?: string | number; cy?: string | number; waves?: number; size?: number; animated?: boolean }) {
  const reduce = useReducedMotion();
  const move = animated && !reduce;
  const items = Array.from({ length: waves });
  const left = typeof cx === "number" ? `${cx}px` : cx;
  const top = typeof cy === "number" ? `${cy}px` : cy;
  const dur = 5.4;
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity }}>
      {items.map((_, i) => (
        <div
          key={i}
          style={{ position: "absolute", left, top, width: size, height: size, marginLeft: -size / 2, marginTop: -size / 2 }}
        >
          {move ? (
            <motion.span
              style={{ display: "block", width: "100%", height: "100%", borderRadius: "9999px", border: `1.5px solid ${color}` }}
              initial={{ scale: 0.12, opacity: 0.55 }}
              animate={{ scale: [0.12, 1], opacity: [0.55, 0] }}
              transition={{ duration: dur, repeat: Infinity, ease: "easeOut", delay: i * (dur / waves) }}
            />
          ) : (
            <span
              style={{
                display: "block", width: "100%", height: "100%", borderRadius: "9999px",
                border: `1.5px solid ${color}`, opacity: 0.22,
                transform: `scale(${0.4 + i * 0.2})`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
