import { motion, type Variants } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const LeadPhilosophy = () => {
  const oldWay = [
    "12-month contracts with no exit",
    "Monthly retainer whether or not you get results",
    "Ad spend markups (you pay 15-30% more)",
    "Generic creative (same templates for every client)",
    "Slow iteration (changes take weeks)",
  ];
  const ourWay = [
    "30-45 day intensive campaigns, then you decide",
    "Pay for sprint upfront, retainer is optional after proof",
    "Zero markup — you pay Meta/Google directly",
    "Custom UGC creative + seasonal urgency hooks",
    "Daily optimization (we move as fast as the data)",
  ];

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-warm" id="why-sprints">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-4">
            WHY SPRINTS BEAT RETAINERS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="bg-card border border-border p-6 md:p-8 rounded-xl shadow-subtle glass-hover"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Traditional Agency</h3>
            <p className="text-xs text-muted-foreground mb-5 italic">The Revenue Leak</p>
            <ul className="space-y-3">
              {oldWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
            className="bg-card border p-6 md:p-8 rounded-xl shadow-card glass-hover"
            style={{ borderColor: "hsla(96, 15%, 43%, 0.3)" }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-1">Creative Core Sprint Model</h3>
            <p className="text-xs mb-5 italic" style={{ color: "hsl(96, 15%, 43%)" }}>The Growth System</p>
            <ul className="space-y-3">
              {ourWay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/10 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <button
            onClick={scrollToPricing}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            See Sprint Pricing
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;
