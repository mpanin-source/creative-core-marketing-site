import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const WindowClosing = () => {
  return (
    <section className="px-6 py-24 md:px-8" id="urgency">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="max-w-2xl mx-auto text-center bg-card border border-electric/20 rounded-2xl p-8 md:p-10"
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
          GET STARTED
        </p>
        <h2 className="text-2xl md:text-3xl font-display text-foreground mb-5" style={{ fontWeight: 800 }}>
          START AT $497
        </h2>
        <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed mb-7 max-w-xl mx-auto">
          <p>We're accepting 3 Florida home service clients per niche per county. Once your county fills in your niche, we close to new clients in that area.</p>
          <p>Start with our $497 Launch-Ready Website — built in 7 days, yours to keep, no contract.</p>
        </div>
        <Link
          to="/pricing-and-booking#gateway"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-body font-semibold text-sm border border-electric/40 text-electric hover:bg-electric/10 transition-colors"
        >
          See What's Included
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
};

export default WindowClosing;
