import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const bullets = [
  "50+ Google reviews at 4.5+ stars",
  "15+ qualified appointments/month",
  "Functional sales process (25%+ close rate)",
  "Willingness to produce 4 pieces of content/month",
  "6-month minimum engagement",
];

const Tier3Summary = () => {
  return (
    <section className="px-6 py-32 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">WHO QUALIFIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-2" style={{ fontWeight: 900 }}>
            TIER 3 — <span className="italic text-shimmer-blue">THE AI SEARCH DOMINATION TIER</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="bg-card rounded-2xl p-8 md:p-10 border border-electric/30 shadow-[0_0_24px_rgba(0,209,255,0.1)]"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-4 h-4 text-electric" />
            <span className="text-xs font-bold tracking-wider uppercase text-electric">QUALIFICATION REQUIRED</span>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
            Full AI Search Domination work — content production, YouTube management, Reddit presence, weekly position monitoring — lives in our Tier 3 Scale Partner package (<span className="text-foreground font-semibold">$5,000/month</span>). It requires qualification because the work compounds over 90–180 days, and we need businesses with the foundation to support it.
          </p>

          <p className="text-xs uppercase tracking-widest text-electric mb-4 font-semibold">Quick Qualification Preview</p>
          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-electric mt-1">✓</span>
                <span className="text-sm md:text-base text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/pricing-and-booking#pricing"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            See Full Qualification Details + All Tier Pricing
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </Link>

          <p className="text-xs text-muted-foreground/80 mt-5 italic">
            Don't qualify for Tier 3 yet? Foundation Sprint ($1,500) and Growth Partner ($3,000) tiers build you to qualification in 60–120 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Tier3Summary;
