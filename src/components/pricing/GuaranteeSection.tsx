import { motion, type Variants } from "framer-motion";
import { Shield, Check } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const items = [
  "The website we built ($2,000–$5,000 value)",
  "The Google Business Profile optimization",
  "The Local Services Ads setup",
  "The landing pages",
  "The schema markup",
  "The CRM setup",
  "Every piece of work we created",
];

const GuaranteeSection = () => {
  return (
    <section id="guarantee" className="px-6 py-32 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-safety">
            OUR GUARANTEE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-2" style={{ fontWeight: 900 }}>
            60-DAY <span className="italic text-shimmer-blue">NO-BS GUARANTEE</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="rounded-2xl p-8 md:p-12 border-2 border-safety/40"
          style={{ background: "hsla(25, 100%, 50%, 0.04)", boxShadow: "0 0 40px rgba(255,107,0,0.1)" }}
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-10 h-10 text-safety flex-shrink-0 mt-1" />
            <div>
              <p className="text-base md:text-lg text-foreground leading-relaxed mb-3">
                If after 60 days we haven't either:
              </p>
              <ul className="space-y-1 text-base text-foreground mb-3">
                <li>• Reduced your cost-per-lead by at least <span className="text-electric font-semibold">20%</span>, OR</li>
                <li>• Grown your booked appointments by at least <span className="text-electric font-semibold">25%</span></li>
              </ul>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                ...you walk away. No contract. No refund battle. You keep:
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-6 pl-2">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-safety flex-shrink-0 mt-1" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-base text-foreground font-semibold mb-6">
            And you owe us nothing further beyond the trial period.
          </p>

          <p className="italic text-sm text-muted-foreground leading-relaxed border-t border-safety/20 pt-5">
            We require baseline data (current CPL or current monthly appointments) confirmed in writing within the first 7 days of engagement. This protects both of us — we know what we're improving from, and you know exactly what "success" means.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
