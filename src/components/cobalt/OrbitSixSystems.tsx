import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { ArrowRight, Search, Megaphone, Sparkles as SparklesIcon, MousePointerClick, Workflow, Code2, type LucideIcon } from "lucide-react";
import { COBALT, MonogramCC } from "./CobaltMarks";
import { OrbitRings } from "../cobalt-refresh/patterns";

/**
 * Orbit / hub Six Systems (concept #5) — "six systems, one conversion foundation".
 * Pinned scroll section: six system nodes orbit a central foundation hub; as you scroll,
 * the ring rotates the active node to the right-hand marker and its detail crossfades in.
 * Spring-smoothed. Palette-driven so it serves both the cobalt theme (/cobalt) and the
 * coral light-refresh (/cobalt-refresh).
 */
export interface OrbitPalette { bg: string; ink: string; primary: string; accent: string; hubText: string }
const COBALT_PALETTE: OrbitPalette = { bg: COBALT.cream, ink: COBALT.ink, primary: COBALT.primary, accent: COBALT.cta, hubText: "#fff" };

interface Sys { num: string; name: string; desc: string; proof: string; proofLabel: string; icon: LucideIcon }
const SYSTEMS: Sys[] = [
  { num: "01", name: "Local SEO", desc: "Own the map pack and the organic results in your county — the searches that book jobs.", proof: "7×", proofLabel: "more likely to qualify a lead with a sub-hour response", icon: Search },
  { num: "02", name: "SEM & Paid Search", desc: "Google Ads + LSA managed to cost-per-booked-appointment, not vanity clicks.", proof: "$72", proofLabel: "avg Performance Max CPL vs $149 non-branded", icon: Megaphone },
  { num: "03", name: "GEO & AI Search", desc: "Engineered to be the business ChatGPT, Gemini, and AI Overviews recommend.", proof: "5", proofLabel: "AI engines optimized in parallel", icon: SparklesIcon },
  { num: "04", name: "CRO Foundation", desc: "The conversion layer under everything — speed, clarity, a site that turns visits into calls.", proof: "<60s", proofLabel: "speed-to-lead — the highest-leverage lift", icon: MousePointerClick },
  { num: "05", name: "Marketing Automation", desc: "Speed-to-lead, missed-call text-back, and review engines running while you work.", proof: "24/7", proofLabel: "every missed call answered, after hours", icon: Workflow },
  { num: "06", name: "Custom Software", desc: "Dashboards, lead routers, and reporting built around your business — not bolted on.", proof: "—", proofLabel: "built when a bottleneck warrants it", icon: Code2 },
];

const N = SYSTEMS.length;
const STEP = 360 / N;
const R = 196;
const HUB = 140;
const NODE = 76;
const BOX = 2 * R + NODE;
const HEAD = "'Bebas Neue', sans-serif";

export default function OrbitSixSystems({ palette = COBALT_PALETTE }: { palette?: OrbitPalette }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.0004 });
  const ringRot = useTransform(smooth, [0, 1], [0, -(N - 1) * STEP]);
  const p = palette;

  return (
    <section ref={ref} id="systems" className="relative md:h-[600vh]" style={{ background: p.bg }}>
      {/* MOBILE — swipeable carousel in NORMAL flow (no scroll-lock; can scroll past) */}
      <MobileCarousel p={p} />

      {/* DESKTOP — pinned orbit */}
      <div className="hidden md:flex md:sticky md:top-0 md:h-screen overflow-hidden items-center">
        {/* Pulsing signal rings broadcasting from the conversion-foundation hub */}
        <OrbitRings color={p.accent} opacity={0.1} cx="27%" cy="48%" rings={7} animated />
        <div className="relative z-10 grid max-w-[1200px] mx-auto px-8 grid-cols-2 gap-10 items-center w-full">
          <div className="relative mx-auto" style={{ width: BOX, height: BOX }}>
            <svg className="absolute inset-0" width={BOX} height={BOX} aria-hidden>
              <circle cx={BOX / 2} cy={BOX / 2} r={R} fill="none" stroke={p.ink} strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="2 8" strokeLinecap="round" />
            </svg>
            <div className="absolute" style={{ left: BOX / 2, top: BOX / 2 - 2, width: R, height: 4, transformOrigin: "left center", background: `linear-gradient(90deg, ${p.accent}00, ${p.accent})`, opacity: 0.55, borderRadius: 4 }} />
            <motion.div className="absolute inset-0" style={{ rotate: ringRot }}>
              {SYSTEMS.map((s, i) => (
                <OrbitNode key={s.num} i={i} system={s} smooth={smooth} ringRot={ringRot} p={p} />
              ))}
            </motion.div>
            <div className="absolute rounded-full flex flex-col items-center justify-center text-center" style={{ width: HUB, height: HUB, left: (BOX - HUB) / 2, top: (BOX - HUB) / 2, background: p.primary, boxShadow: `0 18px 50px -12px ${p.primary}88` }}>
              <MonogramCC width={HUB * 0.5} color={p.hubText} />
              <span className="mt-1.5 px-2 text-[8.5px] uppercase tracking-[0.14em] font-semibold leading-tight" style={{ color: `${p.hubText}CC` }}>Conversion<br />foundation</span>
            </div>
          </div>

          <div className="relative" style={{ minHeight: 380 }}>
            <p className="text-xs uppercase tracking-[0.16em] font-semibold mb-2" style={{ color: p.primary }}>The operating system</p>
            <h2 className="mb-8" style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(2rem,3vw,3rem)", lineHeight: 0.98, color: p.ink }}>Six systems.<br />One conversion foundation.</h2>
            <div className="relative" style={{ minHeight: 260 }}>
              {SYSTEMS.map((s, i) => (
                <OrbitDetail key={s.num} i={i} system={s} smooth={smooth} p={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Mobile: swipeable scroll-snap carousel (no scroll-lock — the section is normal flow). */
function MobileCarousel({ p }: { p: OrbitPalette }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / (el.scrollWidth / N));
    setActive(Math.max(0, Math.min(N - 1, i)));
  };
  return (
    <div className="md:hidden px-6 py-16 overflow-x-clip">
      <p className="text-xs uppercase tracking-[0.16em] font-semibold mb-3" style={{ color: p.primary }}>The operating system</p>
      <h2 className="mb-2" style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "2.5rem", lineHeight: 0.98, color: p.ink }}>Six systems. One conversion foundation.</h2>
      <p className="text-sm mb-7" style={{ color: `${p.ink}99` }}>Swipe through the stack — or keep scrolling.</p>

      <div ref={trackRef} onScroll={onScroll} className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {SYSTEMS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.num} className="snap-center shrink-0 w-[80%] rounded-2xl p-6" style={{ background: "#fff", border: `1px solid ${p.ink}12` }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${p.primary}16` }}><Icon className="w-5 h-5" style={{ color: p.primary }} /></span>
                <span style={{ fontFamily: HEAD, fontSize: "1.5rem", color: p.primary, lineHeight: 1 }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: HEAD, fontSize: "1.6rem", color: p.ink, lineHeight: 1 }}>{s.name}</h3>
              <p className="text-sm mt-2 mb-4" style={{ color: `${p.ink}99`, lineHeight: 1.55 }}>{s.desc}</p>
              {s.proof !== "—" && (
                <div className="rounded-xl p-4 inline-flex items-baseline gap-2" style={{ background: p.bg, borderLeft: `4px solid ${p.accent}` }}>
                  <span style={{ fontFamily: HEAD, fontSize: "1.8rem", color: p.accent, lineHeight: 1 }}>{s.proof}</span>
                  <span className="text-xs" style={{ color: `${p.ink}99` }}>{s.proofLabel}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-5">
        {SYSTEMS.map((_, i) => (
          <span key={i} style={{ width: i === active ? 22 : 8, height: 8, borderRadius: 99, background: i === active ? p.accent : `${p.ink}30`, transition: "all 0.3s ease" }} />
        ))}
      </div>
    </div>
  );
}

function OrbitNode({ i, system, smooth, ringRot, p }: { i: number; system: Sys; smooth: MotionValue<number>; ringRot: MotionValue<number>; p: OrbitPalette }) {
  const angle = (i * STEP) * (Math.PI / 180);
  const cx = BOX / 2 + R * Math.cos(angle);
  const cy = BOX / 2 + R * Math.sin(angle);
  const activeP = i / (N - 1);
  const half = 0.5 / (N - 1);
  const active = useTransform(smooth, [activeP - half, activeP, activeP + half], [0, 1, 0]);
  const scale = useTransform(active, [0, 1], [1, 1.22]);
  const counter = useTransform(ringRot, (r) => -r);
  const borderColor = useTransform(active, [0, 1], [`${p.accent}40`, p.accent]);
  const bg = useTransform(active, [0, 1], ["#ffffff", p.accent]);
  const iconColor = useTransform(active, [0, 1], [p.accent, "#ffffff"]);
  const glow = useTransform(active, [0, 1], [`0 0 0 0 ${p.accent}00`, `0 0 0 7px ${p.accent}26`]);
  const haloOpacity = useTransform(active, [0, 1], [0.1, 0.34]);
  const W = NODE + 26;
  const Icon = system.icon;
  return (
    <motion.div className="absolute flex items-center justify-center" style={{ width: W, height: W, left: cx - W / 2, top: cy - W / 2, scale, rotate: counter }}>
      {/* lighter-blue opacity layer behind the node */}
      <motion.span className="absolute rounded-full" style={{ inset: 0, background: p.accent, opacity: haloOpacity, filter: "blur(7px)" }} />
      <motion.div className="rounded-full flex items-center justify-center" style={{ width: NODE, height: NODE, background: bg, border: "2px solid", borderColor, boxShadow: glow }}>
        <motion.div style={{ color: iconColor }} className="flex flex-col items-center">
          <Icon className="w-5 h-5" />
          <span style={{ fontFamily: HEAD, fontSize: "1rem", lineHeight: 1, marginTop: 2 }}>{system.num}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function OrbitDetail({ i, system, smooth, p }: { i: number; system: Sys; smooth: MotionValue<number>; p: OrbitPalette }) {
  const activeP = i / (N - 1);
  const half = 0.5 / (N - 1);
  const opacity = useTransform(smooth, [activeP - half * 0.9, activeP, activeP + half * 0.9], [0, 1, 0]);
  const y = useTransform(smooth, [activeP - half, activeP, activeP + half], [18, 0, -18]);
  return (
    <motion.div className="absolute inset-0" style={{ opacity, y }}>
      <div className="flex items-center gap-4 mb-4">
        <span style={{ fontFamily: HEAD, fontSize: "4rem", lineHeight: 0.82, color: p.primary }}>{system.num}</span>
        <span style={{ fontFamily: HEAD, fontSize: "2.1rem", lineHeight: 1, color: p.ink }}>{system.name}</span>
      </div>
      <p className="text-[1.0625rem] mb-7 max-w-[42ch]" style={{ color: `${p.ink}B0`, lineHeight: 1.6 }}>{system.desc}</p>
      {system.proof !== "—" ? (
        <div className="rounded-2xl p-6 inline-flex items-center gap-5 max-w-md" style={{ background: "#fff", border: `1px solid ${p.ink}0F`, boxShadow: `0 18px 44px -20px ${p.ink}59` }}>
          <span style={{ fontFamily: HEAD, fontSize: "3.25rem", lineHeight: 1, color: p.accent }}>{system.proof}</span>
          <span className="self-stretch w-px shrink-0" style={{ background: `${p.ink}18` }} />
          <span className="text-sm" style={{ color: `${p.ink}AA`, lineHeight: 1.5, maxWidth: "20ch" }}>{system.proofLabel}</span>
        </div>
      ) : (
        <div className="rounded-2xl p-6 max-w-md" style={{ background: "#fff", border: `1px solid ${p.ink}0F`, boxShadow: `0 18px 44px -20px ${p.ink}59` }}><span className="text-sm" style={{ color: `${p.ink}AA` }}>{system.proofLabel}</span></div>
      )}
      <a href="#" className="mt-8 pt-2 flex items-center gap-2 text-sm font-semibold" style={{ color: p.accent }}>See full {system.name.toLowerCase()} <ArrowRight className="w-4 h-4" /></a>
    </motion.div>
  );
}
