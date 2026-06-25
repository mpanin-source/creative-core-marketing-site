import { motion, type Variants } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { GlowOrb } from "@/components/cobalt-refresh/patterns";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const HighIntentStat = () => {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-28 md:px-8 section-alt">
      <GlowOrb color="#3a86ff" opacity={0.18} size={560} top="16%" left="86%" animated />
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">
            HIGHER-INTENT TRAFFIC
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight max-w-3xl mx-auto" style={{ fontWeight: 900 }}>
            AI SEARCH ISN'T JUST<br />
            ADDITIONAL TRAFFIC.<br />
            <span className="italic text-shimmer-blue">IT'S HIGHER-INTENT TRAFFIC.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch mb-10"
        >
          {/* AI search — decision-stage */}
          <div className="bg-card rounded-2xl p-7 md:p-8 border-2 border-coral/40 shadow-[0_0_30px_rgba(255, 77, 46,0.12)] text-center flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-coral-dark mb-3">AI SEARCH</p>
            <p className="font-display text-coral-dark leading-none mb-3" style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}>
              Choosing a provider
            </p>
            <p className="text-xs text-muted-foreground">"Who's the best HVAC company in Sarasota?"</p>
          </div>

          {/* Why it converts — higher intent */}
          <div className="bg-safety/10 border border-safety/40 rounded-2xl p-7 md:p-8 text-center flex flex-col justify-center">
            <div className="outcome-icon w-11 h-11 rounded-xl bg-safety/15 flex items-center justify-center mx-auto mb-3">
              <TrendingUp className="w-5 h-5 text-safety" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-safety mb-2">HIGHER INTENT</p>
            <p className="font-display text-safety leading-none mb-2" style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}>
              Mid-decision
            </p>
            <p className="text-xs text-muted-foreground">already comparing names, not researching the problem</p>
          </div>

          {/* Traditional search — top of funnel */}
          <div className="bg-card rounded-2xl p-7 md:p-8 border border-border text-center flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">TRADITIONAL SEARCH</p>
            <p className="font-display text-muted-foreground leading-none mb-3" style={{ fontWeight: 900, fontSize: "clamp(1.75rem, 5vw, 2.75rem)" }}>
              Researching
            </p>
            <p className="text-xs text-muted-foreground">"HVAC repair" — earlier in the journey</p>
          </div>
        </motion.div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-foreground font-semibold">Why it matters:</span> someone asking an AI "who's the best HVAC company in Sarasota?" is choosing a provider — not researching a problem. Early data shows AI-referred visitors convert at least as well as organic, and they arrive further down the decision. <span className="text-foreground font-semibold">The agencies who get recommended inside those answers win the most qualified leads.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default HighIntentStat;
