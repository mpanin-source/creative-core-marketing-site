import { motion } from "framer-motion";
import { Building2, Rocket, Handshake, ArrowRight } from "lucide-react";

const tiers = [
  {
    icon: Building2,
    label: "INFRASTRUCTURE (Equity)",
    value: "$8K–$15K",
    items: ["Custom Landing Page — $3K", "Vetting CRM — $5K", "Lead Scoring Automation — $3K"],
    note: "You own these assets forever.",
  },
  {
    icon: Rocket,
    label: "THE ENGINE (Velocity)",
    value: "$3K–$5K/mo",
    items: ["A2P Verified SMS Platform", "Meta/Google Ad Management", "Daily Optimization & Reporting"],
    note: "We manage this. You control the access.",
  },
  {
    icon: Handshake,
    label: "PARTNERSHIP (Accountability)",
    value: "$5K–$10K",
    items: ["Database Reactivation Strategy", "Quarterly Strategy Reviews", "Performance Guarantee"],
    note: "We're accountable to results, not hours.",
  },
];

const InvestmentTransparency = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="investment">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            INVESTMENT & TRANSPARENCY
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            EVERY DOLLAR MAPPED TO A DELIVERABLE
          </h2>
        </div>

        {/* Consolidated table */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 md:p-5 text-xs font-bold tracking-wider text-accent uppercase">Category</th>
                  <th className="text-left p-4 md:p-5 text-xs font-bold tracking-wider text-accent uppercase">Value</th>
                  <th className="text-left p-4 md:p-5 text-xs font-bold tracking-wider text-accent uppercase hidden md:table-cell">What You Get</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-border/50"
                  >
                    <td className="p-4 md:p-5">
                      <div className="flex items-center gap-3">
                        <tier.icon className="w-5 h-5 text-accent shrink-0" />
                        <div>
                          <p className="text-sm font-semibold text-foreground">{tier.label}</p>
                          <p className="text-xs text-muted-foreground italic md:hidden mt-1">{tier.items.join(" · ")}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 md:p-5">
                      <span className="font-display text-lg font-bold text-accent">{tier.value}</span>
                    </td>
                    <td className="p-4 md:p-5 hidden md:table-cell">
                      <p className="text-sm text-muted-foreground">{tier.items.join(" · ")}</p>
                      <p className="text-xs text-accent mt-1 italic">{tier.note}</p>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total anchor */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card border-accent/30 rounded-xl p-6 md:p-8">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Total Value If Purchased Separately</p>
            <p className="text-4xl md:text-5xl font-display font-black text-foreground mb-4">$20K–$40K</p>
            <button
              onClick={scrollToContact}
              className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
            >
              Schedule Your Growth Audit
              <ArrowRight size={18} />
            </button>
            <p className="text-xs text-muted-foreground mt-2">15-min strategy session. No pitch.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTransparency;
