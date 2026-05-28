import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const GuaranteeBanner = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="guarantee">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1000px] mx-auto"
      >
        <div
          className="rounded-xl p-8 md:p-12 text-center relative overflow-hidden border border-safety circuit-trace-orange"
          style={{
            background: "linear-gradient(135deg, hsl(213, 35%, 10%) 0%, hsl(213, 40%, 8%) 100%)",
            boxShadow: "0 0 40px rgba(255, 77, 46, 0.25), 0 8px 32px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Subtle orange radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255, 77, 46, 0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
              <ShieldCheck className="w-12 h-12 mx-auto mb-5 text-safety" />
            </motion.div>
            <h3 className="font-display text-2xl md:text-3xl mb-4" style={{ fontWeight: 700 }}>
              <span className="text-safety">15+ QUALIFIED CALLS</span>{" "}
              <span className="text-foreground">IN 45 DAYS OR 50% REFUND</span>
            </h3>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). If we don't deliver 15 qualified calls in 45 days, we refund 50% of your sprint investment. No bullshit.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GuaranteeBanner;