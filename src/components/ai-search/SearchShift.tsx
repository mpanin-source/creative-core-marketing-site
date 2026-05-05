import { motion, type Variants } from "framer-motion";
import { Sparkles } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const SearchShift = () => {
  return (
    <section className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">WHAT CHANGED</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            SEARCH JUST CHANGED FOREVER —<br />
            <span className="italic text-shimmer-blue">AND YOUR AGENCY HASN'T NOTICED</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12"
        >
          <p>
            When customers search "best HVAC near me" today, Google doesn't just show them a list of websites anymore. It generates an AI summary at the top — answering their question, recommending businesses, and pulling info from across the web.
          </p>
          <p>
            That AI summary is now the <span className="text-foreground font-semibold">FIRST</span> thing 60% of searchers see. They never scroll to the regular results. They never click on competitor websites. The AI just tells them who to call.
          </p>
          <p className="text-foreground font-semibold text-lg md:text-xl">
            Whoever Google's AI mentions wins the customer.
          </p>
        </motion.div>

        {/* Side-by-side mock */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="grid md:grid-cols-2 gap-5"
        >
          <div className="bg-card border border-border rounded-2xl p-6 opacity-70">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Traditional Results</p>
            <div className="space-y-3 font-mono text-xs">
              <div className="bg-background/40 rounded p-3 border border-border">
                <p className="text-electric/70 mb-1">competitor-1.com</p>
                <p className="text-muted-foreground">Best HVAC services in your area...</p>
              </div>
              <div className="bg-background/40 rounded p-3 border border-border">
                <p className="text-electric/70 mb-1">competitor-2.com</p>
                <p className="text-muted-foreground">Trusted local HVAC contractor...</p>
              </div>
              <div className="bg-background/40 rounded p-3 border border-border">
                <p className="text-electric/70 mb-1">competitor-3.com</p>
                <p className="text-muted-foreground">24/7 emergency HVAC repair...</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 italic">Customer scrolls. Compares. Maybe clicks.</p>
          </div>

          <div className="bg-card border-2 border-electric/40 rounded-2xl p-6 shadow-[0_0_30px_rgba(0,209,255,0.15)]">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-3 h-3 text-electric" />
              <p className="text-xs uppercase tracking-widest text-electric font-semibold">AI Overview</p>
            </div>
            <div className="font-mono text-xs space-y-2">
              <p className="text-foreground leading-relaxed">
                For HVAC service in your area, the top-rated providers include{" "}
                <span className="text-electric font-semibold">[Your Competitor]</span> known for fast response times and 5-star reviews, with same-day service availability.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Most homeowners report satisfaction with their installation timing and pricing transparency...
              </p>
            </div>
            <p className="text-xs text-electric mt-4 italic">Customer reads. Calls. Done.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SearchShift;
