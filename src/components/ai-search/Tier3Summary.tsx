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
];

const Tier3Summary = () => {
  return (
    <section className="px-6 py-32 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">WHO QUALIFIES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-2" style={{ fontWeight: 900 }}>
            TIER 3 — <span className="italic text-shimmer-blue">SCALE PARTNER</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="bg-card rounded-2xl p-8 border border-coral/30 shadow-[0_0_24px_rgba(255, 77, 46,0.1)]"
        >
          <div className="flex items-center gap-2 mb-5">
            <Lock className="w-4 h-4 text-azure-dark" />
            <span className="text-xs font-bold tracking-wider uppercase text-azure-dark">QUALIFICATION PREVIEW</span>
          </div>

          <ul className="space-y-3 mb-8">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="text-coral mt-1">✓</span>
                <span className="text-sm md:text-base text-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/pricing-and-booking#scale"
            className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm"
          >
            See full Tier 3 details on Pricing
            <ArrowRight className="w-4 h-4 arrow-icon transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Tier3Summary;
