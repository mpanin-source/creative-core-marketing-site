import { motion } from "framer-motion";
import { Building2, Rocket, Handshake, ArrowRight } from "lucide-react";

const TransparencyStack = () => {
  const scrollToTiers = () => {
    document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" });
  };

  const pillars = [
    {
      icon: Building2,
      label: "INFRASTRUCTURE",
      sublabel: "Equity — You Own These Assets Forever",
      totalValue: "$8K–$15K",
      items: [
        { name: "Custom Landing Page", value: "$3,000" },
        { name: "Vetting CRM", value: "$5,000" },
        { name: "Lead Scoring Automation", value: "$3,000" },
      ],
      note: "You own these assets forever. They generate value long after our engagement ends.",
      color: "accent",
    },
    {
      icon: Rocket,
      label: "THE ENGINE",
      sublabel: "Velocity — We Manage This. You Control Access.",
      totalValue: "$3K–$5K/mo",
      items: [
        { name: "A2P Verified SMS Platform", value: "Included" },
        { name: "Meta/Google Ad Management", value: "Included" },
        { name: "Daily Optimization & Reporting", value: "Included" },
      ],
      note: "We manage this. You control the access. Full transparency on every dollar spent.",
      color: "accent",
    },
    {
      icon: Handshake,
      label: "PARTNERSHIP",
      sublabel: "Accountability — We Eat Our Own Cooking",
      totalValue: "$5K–$10K",
      items: [
        { name: "Database Reactivation Strategy", value: "Included" },
        { name: "Quarterly Strategy Reviews", value: "Included" },
        { name: "Performance Guarantee", value: "Included" },
      ],
      note: "We're accountable to results, not retainer hours. If we don't perform, we work for free.",
      color: "accent",
    },
  ];

  return (
    <section className="section-padding" id="transparency-stack">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4">
            THE TRANSPARENCY STACK
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground tracking-wider mb-4">
            DOLLAR-VALUE JUSTIFICATION
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every dollar you invest is mapped to a specific deliverable. Here's the full breakdown.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              <div className="bg-accent/10 p-6 border-b border-border">
                <pillar.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-display text-lg text-foreground tracking-wider">{pillar.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{pillar.sublabel}</p>
                <p className="text-2xl font-display text-accent mt-2 tracking-wider">{pillar.totalValue}
                  <span className="text-xs font-body text-muted-foreground ml-1">value</span>
                </p>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                {pillar.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-baseline">
                    <span className="text-sm text-foreground">{item.name}</span>
                    <span className="text-sm font-semibold text-accent ml-2 shrink-0">{item.value}</span>
                  </div>
                ))}
                <p className="text-xs text-muted-foreground italic pt-3 border-t border-border">
                  {pillar.note}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Price Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-accent/5 border-2 border-accent/30 rounded-xl p-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Total Value If Purchased Separately</p>
            <p className="text-4xl md:text-5xl font-display text-foreground tracking-wider mb-4">
              $20K–$40K
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Your investment?
            </p>
            <button
              onClick={scrollToTiers}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground font-display text-lg tracking-wider rounded-lg hover:bg-accent/90 transition-colors shadow-[0_0_20px_hsl(var(--accent)/0.3)]"
            >
              SEE PRICING
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransparencyStack;
