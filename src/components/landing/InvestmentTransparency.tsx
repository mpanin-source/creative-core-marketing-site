import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";

const tiers = [
  {
    name: "FOUNDATION",
    price: "$2,500",
    retainer: "$0/month retainer",
    items: [
      "Core Funnel Audit (15-min Loom)",
      "Seasonal Sprint Plan (30-day roadmap)",
      "5 Ad Creative Variations",
      "1 Landing Page",
      "Basic CRM Setup",
    ],
    guarantee: false,
    cta: "Book Sprint Audit",
    highlight: false,
  },
  {
    name: "GROWTH",
    price: "$4,500",
    retainer: "$299/month retainer (optional)",
    items: [
      "Everything in Foundation",
      "10 Ad Creative Variations (Meta + Google)",
      "2-3 Landing Page Variants",
      "Lead Scoring Automation",
      "Email/SMS Sequences",
    ],
    guarantee: true,
    cta: "Book Sprint Audit",
    highlight: true,
  },
  {
    name: "SCALE",
    price: "$7,500",
    retainer: "$399/month retainer (optional)",
    items: [
      "Everything in Growth",
      "UGC Creative Suite (Higgsfield AI)",
      "Wake-Up Agent (Predictive re-activation)",
      "Authority Content (Reels/TikTok scripts)",
      "Dedicated account manager",
    ],
    guarantee: true,
    cta: "Start Scale Sprint",
    highlight: false,
  },
];

const InvestmentTransparency = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="pricing">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            NO HIDDEN FEES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            TRANSPARENT SPRINT PRICING
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Every dollar mapped to a deliverable. No hidden fees. No ad spend markups. You pay Meta and Google directly.
          </p>
        </div>

        {/* Scarcity badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-bold text-accent">Limited to 5 new sprint clients per month</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto mb-10">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`glass-card rounded-xl p-6 md:p-8 flex flex-col ${tier.highlight ? "border-accent/40 shadow-[0_0_30px_-5px_hsl(var(--accent)/0.15)]" : ""}`}
            >
              {tier.highlight && (
                <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Most Popular</div>
              )}
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                TIER {i + 1}: {tier.name}
              </h3>
              <p className="text-3xl font-display font-black text-accent mb-1">{tier.price}</p>
              <p className="text-xs text-muted-foreground mb-6">{tier.retainer}</p>

              <div className="flex-1 space-y-3 mb-6">
                {tier.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
                {tier.guarantee && (
                  <div className="flex items-start gap-2 mt-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-accent font-semibold">15+ Qualified Calls in 45 Days or 50% Refund</span>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-display font-bold text-sm transition-all hover:scale-105 ${tier.highlight ? "btn-gold" : "border border-border text-foreground hover:bg-secondary"}`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Key notes */}
        <div className="max-w-3xl mx-auto text-center space-y-2 mb-8">
          {[
            "You pay Meta/Google ad spend directly — we don't mark it up",
            "Monthly retainer is optional after sprint completes",
            "All infrastructure (landing pages, CRM, creative assets) is yours forever",
          ].map((note, i) => (
            <p key={i} className="text-sm text-muted-foreground">• {note}</p>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sprint Value If Purchased Separately</p>
          <p className="text-3xl font-display font-black text-foreground">$8K–$20K</p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTransparency;
