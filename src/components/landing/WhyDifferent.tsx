import { motion, type Variants } from "framer-motion";
import { Check, Shield, TrendingDown, Video, Target } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const differentiators = [
  {
    icon: TrendingDown,
    title: "No Ad Markup",
    description: "Most agencies take 15-20% of your ad spend as a hidden fee. We charge zero markup. Your ad budget goes 100% to ads.",
    highlight: false,
  },
  {
    icon: Target,
    title: "Funnel Optimization, Not Just Traffic",
    description: "We don't just send clicks. We rebuild your entire offer → ad → landing page → follow-up flow so every dollar works harder.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "You Get a Lead Vault, Not a Spreadsheet",
    description: "Every qualified lead is stored in your own CRM system — tagged, scored, and ready for follow-up. You own these contacts forever.",
    highlight: true,
  },
  {
    icon: Video,
    title: "15-Min Loom Audit Before You Spend a Dime",
    description: "Before you sign anything, we record a personalized video breakdown of where your current funnel is losing money. Free. No strings.",
    highlight: false,
  },
];

// Need to import Target separately since it's used above
import { Target } from "lucide-react";

const WhyDifferent = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="why-different">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            WHY WE'RE DIFFERENT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            MOST AGENCIES CHARGE $10K AND HOPE IT WORKS.
            <br />
            <span className="text-electric">HERE'S HOW WE'RE DIFFERENT.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 rounded-2xl border bg-card/60 backdrop-blur-sm transition-all duration-300 flex flex-col ${
                item.highlight
                  ? "border-safety/50 shadow-[0_0_24px_rgba(255,107,0,0.15)] hover:shadow-[0_0_36px_rgba(255,107,0,0.25)] hover:border-safety/70"
                  : "border-border hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.1)]"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.highlight ? "bg-safety/15" : "bg-electric/10"
                }`}>
                  <item.icon className={`w-5 h-5 ${item.highlight ? "text-safety" : "text-electric"}`} />
                </div>
                <h3 className="font-display text-lg text-foreground uppercase" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              {item.highlight && (
                <div className="mt-4 px-3 py-2 rounded-lg bg-safety/5 border border-safety/20">
                  <p className="text-[11px] text-safety font-semibold uppercase tracking-wider">
                    Proprietary Lead Vault Technology
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
