import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const GuaranteeBanner = () => {
  return (
    <section className="px-6 py-16 md:px-8 md:py-20" id="guarantee">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="max-w-[1000px] mx-auto"
      >
        <div className="rounded-xl bg-cta p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <Shield className="w-10 h-10 text-[hsl(var(--accent-secondary))] mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-cta-foreground mb-4">
              15+ QUALIFIED CALLS IN 45 DAYS OR 50% REFUND
            </h3>
            <p className="text-sm text-cta-foreground/85 max-w-2xl mx-auto leading-relaxed">
              We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). If we don't deliver 15 qualified calls in 45 days, we refund 50% of your sprint investment. No bullshit.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GuaranteeBanner;
