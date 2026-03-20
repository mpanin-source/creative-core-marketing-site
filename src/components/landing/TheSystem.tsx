import { motion, type Variants } from "framer-motion";
import { Zap, Wrench, AlertTriangle } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-safety/15 flex items-center justify-center">
                <Zap className="w-5 h-5 text-safety" />
              </div>
              <h3 className="font-display text-xl text-safety uppercase" style={{ fontWeight: 700 }}>
                OPTION 1: EXECUTE NOW
              </h3>
            </div>
            <p className="text-sm font-semibold text-foreground mb-2">Your peak season is here or imminent.</p>
            <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed flex-1">
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Sprint launches within 7 days of onboarding</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Maximum ad spend + creative aggression from Day 1</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Goal: 15+ qualified calls in 45 days</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-safety mt-0.5">▸</span>
                <span>Daily optimization, real-time pivots</span>
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
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center">
                <Wrench className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-xl text-electric uppercase" style={{ fontWeight: 700 }}>
                OPTION 2: BUILD NOW
              </h3>
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