import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeBanner = () => {
  return (
    <section className="px-6 py-16 md:px-8 md:py-20" id="guarantee">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto"
      >
        <div
          className="rounded-xl p-8 md:p-12 text-center relative overflow-hidden border border-success/20"
          style={{
            background: "linear-gradient(135deg, hsl(100, 15%, 31%) 0%, hsl(100, 18%, 26%) 100%)",
            boxShadow: "0 8px 32px rgba(107, 127, 94, 0.25), 0 0 0 1px rgba(126, 212, 173, 0.1)",
          }}
        >
          {/* Subtle radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(126, 212, 173, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <ShieldCheck className="w-12 h-12 mx-auto mb-5 text-success" />
            </motion.div>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white mb-4">
              15+ QUALIFIED CALLS IN 45 DAYS OR 50% REFUND
            </h3>
            <p className="text-sm text-white/85 max-w-2xl mx-auto leading-relaxed">
              We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). If we don't deliver 15 qualified calls in 45 days, we refund 50% of your sprint investment. No bullshit.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GuaranteeBanner;
