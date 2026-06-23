import { useEffect, useState } from "react";
import { ArrowRight, Clock, LineChart, BadgeDollarSign } from "lucide-react";
import { COBALT, MonogramCC, Lockup, LockupStacked, Spark } from "./CobaltMarks";
import CobaltPreloader from "./CobaltPreloader";
import OrbitSixSystems from "./OrbitSixSystems";

const HEAD = "'Bebas Neue', sans-serif";
const BODY = "Inter, -apple-system, sans-serif";

/* ----------------------------------------------------------------------------
 * DESIGN SYSTEM (polish pass)
 * Spacing: 8px base scale → section vertical rhythm is uniform (SECTION = 7rem / 112px).
 * Type: modular scale anchored at 1rem body, ~1.25 (major third) for body steps;
 *   Bebas display sizes run larger per-em because the face is condensed all-caps.
 * Measure: body copy constrained to ~60–72ch for comfortable line-length.
 * ------------------------------------------------------------------------- */
const SECTION_Y = "py-[7rem]";            // 112px top/bottom — consistent section rhythm
const SHELL = "max-w-[1200px] mx-auto px-6 sm:px-8";
// Display (Bebas) sizes — condensed all-caps, tuned to fit without overflow
const T = {
  eyebrow: "text-[0.8125rem] uppercase font-semibold tracking-[0.16em]", // 13px
  // Section H2 — fits 2 lines comfortably at desktop
  h2: { fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(2.25rem, 4vw, 3.5rem)", lineHeight: 1.02, letterSpacing: "0.005em" } as const,
  cardTitle: { fontFamily: HEAD, fontWeight: 700, fontSize: "1.625rem", letterSpacing: "0.01em" } as const, // 26px
  // Body measure tokens
  lead: "text-[1.0625rem] leading-[1.65]",   // 17px lead paragraph
  body: "text-[0.9375rem] leading-[1.6]",    // 15px supporting copy
};
// Buttons — uniform padding + size, ≥44px touch target
const BTN = "inline-flex items-center justify-center gap-2 px-7 h-[52px] rounded-lg text-[0.9375rem] font-semibold transition-colors";

/* ---------- patterns ---------- */
function ContourBg({ color = COBALT.secondary, opacity = 0.18 }: { color?: string; opacity?: number }) {
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

function MonogramTile({ color = "#ffffff", opacity = 0.05 }: { color?: string; opacity?: number }) {
  const cells = Array.from({ length: 48 });
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none flex flex-wrap content-start gap-x-10 gap-y-8 p-6" style={{ opacity }}>
      {cells.map((_, i) => <MonogramCC key={i} width={56} color={color} />)}
    </div>
  );
}

const SCATTER = [
  { t: "12%", l: "8%", s: 16 }, { t: "22%", l: "82%", s: 22 }, { t: "62%", l: "14%", s: 14 },
  { t: "74%", l: "70%", s: 18 }, { t: "40%", l: "48%", s: 12 }, { t: "86%", l: "30%", s: 16 },
];
function SparkScatter({ color = COBALT.secondary, opacity = 0.5 }: { color?: string; opacity?: number }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ opacity }}>
      {SCATTER.map((p, i) => <Spark key={i} size={p.s} color={color} style={{ position: "absolute", top: p.t, left: p.l }} />)}
    </div>
  );
}

/* ---------- data ---------- */
const STATS = [
  { icon: Clock, big: "<60s", label: "Speed-to-lead", sub: "First response while the lead is still hot." },
  { icon: LineChart, big: "AI + Organic", label: "Compounding visibility", sub: "Found on Google and in the AI answers." },
  { icon: BadgeDollarSign, big: "$72", label: "vs $149 CPL", sub: "Per 2026 HVAC ad benchmarks." },
];
const STEPS = [
  { n: "01", title: "Diagnose", desc: "We baseline your county, your funnel, and where booked jobs leak out." },
  { n: "02", title: "Deploy", desc: "We stand up the conversion foundation and the systems that fit your stage." },
  { n: "03", title: "Scale", desc: "We compound what works — more qualified leads, more booked jobs." },
];

const NAV = ["Services", "Results", "About", "Resources"];

export default function CobaltMock() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div style={{ background: COBALT.cream, color: COBALT.ink, fontFamily: BODY, minHeight: "100vh" }}>
      <CobaltPreloader />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: scrolled ? "rgba(244,238,225,0.92)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none", borderBottom: scrolled ? `1px solid ${COBALT.ink}14` : "1px solid transparent" }}>
        <div className={`${SHELL} h-20 flex items-center justify-between`}>
          <Lockup size={60} color={COBALT.ink} />
          <nav className="hidden md:flex items-center gap-9">
            {NAV.map((n) => <a key={n} href="#" className="text-[0.875rem] font-medium transition-colors hover:opacity-100" style={{ color: `${COBALT.ink}A0` }}>{n}</a>)}
          </nav>
          <a href="#" className="hidden sm:inline-flex items-center justify-center text-[0.875rem] font-semibold text-white px-5 h-11 rounded-lg" style={{ background: COBALT.cta }}>Book a Call</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <ContourBg opacity={0.16} />
        <SparkScatter opacity={0.35} />
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 pt-32 pb-20 grid md:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[88vh]">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6">
              <Spark size={16} color={COBALT.primary} />
              <span className="text-[0.8125rem] uppercase font-semibold tracking-[0.16em]" style={{ color: COBALT.primary, fontFamily: BODY }}>AI-Augmented Marketing · Florida</span>
            </div>
            <h1 className="max-w-[22ch]" style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(2.5rem, 4.6vw, 4.25rem)", lineHeight: 1.0, color: COBALT.ink, letterSpacing: "0.015em" }}>
              Marketing built for <span style={{ color: COBALT.cta }}>how people actually search.</span>
            </h1>
            <p className="mt-6 text-[1.0625rem] max-w-[44ch]" style={{ color: `${COBALT.ink}B0`, lineHeight: 1.65 }}>
              Six systems working together on one conversion foundation that turns every dollar into measurable booked appointments.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#" className={`${BTN} text-white`} style={{ background: COBALT.cta }}>Book a Startup Call <ArrowRight className="w-4 h-4" /></a>
              <a href="#systems" className={BTN} style={{ border: `2px solid ${COBALT.primary}`, color: COBALT.primary }}>See How It Works</a>
            </div>
          </div>
          <div className="hidden md:flex md:col-span-5 justify-center items-center">
            <MonogramCC width={360} color={COBALT.primary} />
          </div>
        </div>
      </section>

      {/* SIX SYSTEMS — orbit / hub animation */}
      <OrbitSixSystems />

      {/* STATS */}
      <section className={SECTION_Y} style={{ background: COBALT.cream }}>
        <div className={SHELL}>
          <h2 className="mb-12 max-w-[18ch]" style={T.h2}>Numbers worth building toward.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl p-8" style={{ background: COBALT.surface, border: `1px solid ${COBALT.ink}10` }}>
                <s.icon className="w-7 h-7 mb-6" style={{ color: COBALT.cta }} />
                <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "clamp(2.75rem,4.5vw,3.75rem)", color: COBALT.primary, lineHeight: 1, letterSpacing: "0.01em" }}>{s.big}</div>
                <div className="font-semibold mt-3 text-[0.9375rem]" style={{ color: COBALT.ink }}>{s.label}</div>
                <p className="text-[0.875rem] mt-1.5 leading-[1.55]" style={{ color: `${COBALT.ink}88` }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK BAND (kit's dark hero variant) */}
      <section className={`relative ${SECTION_Y} overflow-hidden`} style={{ background: COBALT.ink }}>
        <MonogramTile color={COBALT.secondary} opacity={0.06} />
        <SparkScatter color={COBALT.secondary} opacity={0.4} />
        <div className={`relative ${SHELL} grid md:grid-cols-2 gap-12 items-center`}>
          <div>
            <h2 className="max-w-[16ch]" style={{ ...T.h2, color: "#fff" }}>
              More qualified leads. <span style={{ color: COBALT.secondary }}>More booked jobs.</span>
            </h2>
            <p className="mt-5 text-[1.0625rem] max-w-[46ch]" style={{ color: "#ffffffB0", lineHeight: 1.65 }}>AI-augmented marketing for Florida home services — built for growth, measured in appointments.</p>
            <a href="#" className={`${BTN} mt-8`} style={{ background: COBALT.secondary, color: COBALT.ink }}>See How It Works <ArrowRight className="w-4 h-4" /></a>
          </div>
          <div className="hidden md:flex justify-center">
            <LockupStacked size={200} color={COBALT.base} />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={SECTION_Y} style={{ background: COBALT.creamB }}>
        <div className={SHELL}>
          <div className="max-w-[42ch] mb-14">
            <div className="inline-flex items-center gap-2 mb-4"><Spark size={14} color={COBALT.primary} /><span className={T.eyebrow} style={{ color: COBALT.primary }}>How we work</span></div>
            <h2 style={T.h2}>Diagnose. Deploy. Scale.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl p-8" style={{ background: COBALT.surface, border: `1px solid ${COBALT.ink}10` }}>
                <div style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "2.75rem", color: `${COBALT.primary}40`, lineHeight: 1, letterSpacing: "0.01em" }}>{s.n}</div>
                <h3 style={{ ...T.cardTitle, color: COBALT.ink, marginTop: 12 }}>{s.title}</h3>
                <p className={`mt-2 ${T.body}`} style={{ color: `${COBALT.ink}99` }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITORY STRIP */}
      <section className="py-16" style={{ background: COBALT.primary }}>
        <div className={`${SHELL} flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left`}>
          <div>
            <p style={{ fontFamily: HEAD, fontWeight: 700, fontSize: "2rem", color: "#fff", lineHeight: 1.05, letterSpacing: "0.01em" }}>One client per niche, per county.</p>
            <p className="mt-2 text-[0.9375rem]" style={{ color: "#ffffffC0", lineHeight: 1.55 }}>60-day work guarantee — month-to-month, keep everything we build.</p>
          </div>
          <a href="#" className={`${BTN} text-white whitespace-nowrap`} style={{ background: COBALT.cta }}>Claim Your County <ArrowRight className="w-4 h-4" /></a>
        </div>
      </section>

      {/* END CTA */}
      <section className={`relative ${SECTION_Y} overflow-hidden`} style={{ background: COBALT.cream }}>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden md:block"><MonogramCC width={460} color={COBALT.primary} /></div>
        <SparkScatter opacity={0.3} />
        <div className="relative max-w-[900px] mx-auto px-6 sm:px-8 text-center">
          <h2 className="mx-auto max-w-[18ch]" style={{ ...T.h2, fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}>
            Bring us your county. <span style={{ color: COBALT.cta }}>We'll bring the AI.</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] max-w-[62ch] mx-auto" style={{ color: `${COBALT.ink}99`, lineHeight: 1.65 }}>Month-to-month engagements from $1,500/mo. A 30-minute strategy call is free — you'll leave with a working hypothesis even if we never work together.</p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className={`${BTN} text-white`} style={{ background: COBALT.cta }}>Book a Strategy Call <ArrowRight className="w-4 h-4" /></a>
            <a href="#" className={BTN} style={{ border: `2px solid ${COBALT.primary}`, color: COBALT.primary }}>See Pricing</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative overflow-hidden" style={{ background: COBALT.ink }}>
        <MonogramTile color={COBALT.secondary} opacity={0.05} />
        <div className={`relative ${SHELL} py-20`}>
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-1">
              <Lockup size={56} color={COBALT.base} />
              <p className="mt-5 text-[0.9375rem] max-w-[34ch]" style={{ color: "#ffffff80", lineHeight: 1.6 }}>AI-augmented marketing for Florida home services.</p>
            </div>
            {[["Services", NAV], ["Company", ["Pricing", "Process", "Blog", "FAQ"]], ["Get started", ["Book a call", "Email us"]]].map(([h, items]) => (
              <div key={h as string}>
                <p className="text-[0.75rem] uppercase tracking-[0.14em] font-semibold mb-5" style={{ color: COBALT.secondary }}>{h as string}</p>
                <ul className="space-y-3 text-[0.9375rem]">{(items as string[]).map((it) => <li key={it}><a href="#" className="transition-opacity hover:opacity-100" style={{ color: "#ffffff99" }}>{it}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="mt-16 pt-6 text-[0.75rem]" style={{ borderTop: "1px solid #ffffff1a", color: "#ffffff66" }}>One client per niche, per county · Florida</div>
        </div>
      </footer>
    </div>
  );
}
