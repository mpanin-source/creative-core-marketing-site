import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { Zap, Wrench, AlertTriangle } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const APRIL_15 = new Date("2026-04-15T00:00:00");
const JUNE_1 = new Date("2026-06-01T00:00:00");

const getTimeRemaining = (target: Date) => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
};

const CountdownInline = ({ target, color }: { target: Date; color: "safety" | "electric" }) => {
  const [time, setTime] = useState(getTimeRemaining(target));

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  const colorClass = color === "safety" ? "text-safety" : "text-electric";
  const sepClass = color === "safety" ? "text-safety/40" : "text-electric/40";

  return (
    <div className="flex items-center gap-1.5 font-mono text-sm tabular-nums">
      {[
        { v: time.days, l: "D" },
        { v: time.hours, l: "H" },
        { v: time.mins, l: "M" },
        { v: time.secs, l: "S" },
      ].map((unit, i) => (
        <span key={unit.l} className="flex items-center gap-1">
          {i > 0 && <span className={`${sepClass} text-xs`}>:</span>}
          <span className={`${colorClass} font-bold animate-[digitPulse_2s_ease-in-out_infinite]`}>
            {String(unit.v).padStart(2, "0")}
          </span>
          <span className="text-[10px] text-muted-foreground/50 uppercase">{unit.l}</span>
        </span>
      ))}
    </div>
  );
};

const TheSystem = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="system">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE SYSTEM
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            TWO PATHS. ZERO WASTED TIME.
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Whether your peak season is now or 60 days away, we have a sprint model built for your timeline.
          </p>
        </motion.div>

        {/* Option 1 vs Option 2 */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Option 1: Execute Now */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="p-8 rounded-2xl border border-safety/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-safety/70 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-safety/15 flex items-center justify-center">
                <Zap className="w-5 h-5 text-safety" />
              </div>
              <h3 className="font-display text-xl text-safety uppercase" style={{ fontWeight: 700 }}>
                OPTION 1: EXECUTE NOW
              </h3>
            </div>

            {/* Live countdown */}
            <div className="mb-6 px-3 py-2 rounded-lg bg-safety/5 border border-safety/20 flex items-center justify-between">
              <span className="text-[10px] text-safety/80 font-semibold uppercase tracking-wider">April 15 Deadline</span>
              <CountdownInline target={APRIL_15} color="safety" />
            </div>

            <p className="text-sm font-semibold text-foreground mb-2">Your peak season is here. Your competitors are already spending.</p>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Sprint launches within 7 days — ads live, funnel active, leads flowing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>While others are "planning," you're capturing 80% of high-intent demand</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Daily optimization means your cost-per-lead drops while volume climbs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Wait 2 more weeks? You're fighting over scraps with every other business in your zip code</span>
              </li>
            </ul>
            <p className="text-xs text-safety/80 font-semibold mt-6 tracking-wide uppercase">
              Best for: HVAC (now), Landscaping, Pest Control
            </p>
          </motion.div>

          {/* Option 2: Build Now */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="p-8 rounded-2xl border border-electric/40 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/70 hover:shadow-[0_0_30px_rgba(0,209,255,0.25)] flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-xl text-electric uppercase" style={{ fontWeight: 700 }}>
                OPTION 2: BUILD NOW
              </h3>
            </div>

            {/* Live countdown */}
            <div className="mb-6 px-3 py-2 rounded-lg bg-electric/5 border border-electric/20 flex items-center justify-between">
              <span className="text-[10px] text-electric/80 font-semibold uppercase tracking-wider">June 1 Prep Window</span>
              <CountdownInline target={JUNE_1} color="electric" />
            </div>

            <p className="text-sm font-semibold text-foreground mb-2">Your peak season is 30-90 days away.</p>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <span className="text-electric mt-0.5">▸</span>
                <span>We build your entire funnel, creative, and CRM now</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric mt-0.5">▸</span>
                <span>Everything tested and loaded — ready to flip the switch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric mt-0.5">▸</span>
                <span>Pre-season warm-up campaigns build pipeline momentum</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-electric mt-0.5">▸</span>
                <span>Go live the day demand spikes — zero ramp-up delay</span>
              </li>
            </ul>
            <p className="text-xs text-electric/80 font-semibold mt-6 tracking-wide uppercase">
              Best for: HVAC (June prep), Roofing, Solar, Wellness
            </p>
          </motion.div>
        </div>

        {/* WAITING = LOSING footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-safety/10 border border-safety/30">
            <AlertTriangle className="w-5 h-5 text-safety flex-shrink-0" />
            <span className="font-display text-2xl md:text-3xl text-safety uppercase" style={{ fontWeight: 900 }}>
              WAITING = LOSING
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-4 max-w-[500px] mx-auto">
            Every week you delay is a week your competitors are booking your customers.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TheSystem;
