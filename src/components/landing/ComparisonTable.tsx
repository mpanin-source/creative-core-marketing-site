import { motion } from "framer-motion";
import { Target, DollarSign, Zap, ArrowRight } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "SPECIALIST VS GENERALIST",
    them: "Generic agencies serve everyone (e-commerce, SaaS, B2B, local). You're just another retainer.",
    us: "We only work with local service businesses with seasonal demand. We know your customer journey.",
  },
  {
    icon: DollarSign,
    title: "TRANSPARENT PRICING VS HIDDEN FEES",
    them: "12-month contracts. Monthly retainer whether or not you get results. 15-30% markup on ad spend.",
    us: "Flat sprint fee. Optional monthly retainer after proof. Zero ad spend markup — you pay Meta/Google directly.",
  },
  {
    icon: Zap,
    title: "SPEED TO REVENUE VS SLOW ITERATION",
    them: "Changes take weeks. Monthly 'strategy calls' with no action. Generic templates recycled across clients.",
    us: "30-45 day intensive builds. Daily optimization. Custom UGC creative. You own everything we build forever.",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const ComparisonTable = () => {
  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel" id="comparison">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            WHY US
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            CREATIVE CORE VS GENERIC AGENCY
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            We're specialists. We do one thing better than anyone: seasonal sprint campaigns for local service businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-16">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-card hover:-translate-y-1 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-5">
                {reason.title}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-secondary border border-border rounded-lg">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">What They Do</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.them}</p>
                </div>
                <div className="p-4 bg-[hsl(157,52%,65%,0.06)] border border-[hsl(157,52%,65%,0.2)] rounded-lg">
                  <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">What We Do</p>
                  <p className="text-sm text-foreground leading-relaxed">{reason.us}</p>
                </div>
              </div>
            </motion.div>
          ))}
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
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
