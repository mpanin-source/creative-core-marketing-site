import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Zap, Shield, Lock } from "lucide-react";
import CountUp from "react-countup";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const tiers = [
  {
    name: "FOUNDATION SPRINT",
    subtitle: "Test the waters — prove the system works",
    price: 1500,
    priceSuffix: "/month (First 60 Days) → $2,000/mo ongoing",
    badge: null as string | null,
    locked: false,
    items: [
      "Complete marketing audit (15-min Loom)",
      "Google Local Services Ads setup + Google Guaranteed verification",
      "Google Business Profile optimization + review generation",
      "Conversion-optimized residential landing page",
      "Call tracking + full attribution setup",
      "Meta retargeting pixel + initial campaign",
      "Bi-weekly performance reporting",
      "Ad-hoc strategy support when workflow blockers identified",
    ],
    cta: "Book Free Audit Call",
    highlighted: true,
  },
  {
    name: "GROWTH PARTNER",
    subtitle: "Scale what worked + activate dormant leads",
    price: 3000,
    priceSuffix: "/month",
    badge: "MOST POPULAR",
    locked: false,
    items: [
      "Everything in Foundation Sprint",
      "Google Search PPC campaigns (high-intent keywords)",
      "Meta ads (Facebook + Instagram)",
      "5-10 ad creative variations monthly",
      "A/B tested landing page variants",
      "CRM drip campaigns: SMS + email for lead reactivation",
      "Neighborhood Penetration campaigns (geo-targeting surrounding homes after installs)",
      "Bi-weekly performance reporting",
    ],
    cta: "Start With Foundation Sprint",
    highlighted: false,
  },
  {
    name: "SCALE PARTNER",
    subtitle: "Full AI-integrated growth operating system",
    price: 5000,
    priceSuffix: "/month (qualification required)",
    badge: "QUALIFICATION REQUIRED",
    locked: true,
    items: [
      "Everything in Growth Partner",
      "AI Voice + SMS fully integrated into CRM",
      "Social Media Management (Meta only) — scripts or full AI UGC takeover",
      "Sales call analysis + systematic fix recommendations",
      "Dedicated Slack channel (same-day responses)",
      "Monthly strategy intensive (90 min)",
    ],
    cta: "See If You Qualify",
    highlighted: false,
  },
];

const PricingTiers = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-warm" id="pricing">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-6"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            TRANSPARENT PRICING
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 900 }}>
            SIMPLE, <span className="italic text-shimmer-blue">HONEST PRICING</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-[600px] mx-auto">
            No hidden fees. No ad spend markup. You pay Meta and Google directly.
          </p>
        </motion.div>

        {/* Scarcity */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-safety/10 border border-safety/30 rounded-full">
            <Zap className="w-4 h-4 text-safety" />
            <span className="text-sm font-bold text-safety">NOW ACCEPTING: 3 FLORIDA HOME SERVICE CLIENTS</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tiers.map((tier, i) => {
            const badgeStyle = tier.locked
              ? "bg-muted/40 text-muted-foreground border border-border"
              : tier.badge === "MOST POPULAR"
                ? "bg-safety/15 text-safety border border-safety/40"
                : "bg-electric/20 text-electric border border-electric/30";

            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-card rounded-xl p-6 md:p-8 flex flex-col relative transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
                  tier.highlighted
                    ? "border-2 border-safety shadow-[0_0_28px_hsla(25,100%,50%,0.25)] pricing-pulse-border"
                    : tier.locked
                      ? "border border-border/60 shadow-subtle hover:border-electric/30"
                      : "border border-border shadow-subtle hover:border-electric/40 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)]"
                }`}
              >
                {tier.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5 ${badgeStyle}`}>
                    {tier.locked && <Lock className="w-3 h-3" />}
                    {tier.badge}
                  </div>
                )}
                <h3 className="font-display text-xl text-foreground mt-1 flex items-center gap-2" style={{ fontWeight: 700 }}>
                  {tier.locked && <Lock className="w-4 h-4 text-muted-foreground" />}
                  {tier.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-4">{tier.subtitle}</p>
                <motion.div
                  className="mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-4xl font-display text-electric" style={{ fontWeight: 700 }}>
                    $<CountUp end={tier.price} duration={1.5} separator="," enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-sm text-muted-foreground ml-1 block mt-1">{tier.priceSuffix}</span>
                </motion.div>

                <div className="flex-1 space-y-2.5 mb-6 mt-4">
                  {tier.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.highlighted ? "text-safety" : "text-electric"}`} />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? "btn-safety"
                      : "border border-border text-foreground bg-card glass-hover"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantee Box */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <div
            className="max-w-3xl mx-auto p-8 rounded-xl border-2 border-safety/40 text-center"
            style={{ background: "hsla(25, 100%, 50%, 0.04)", boxShadow: "0 0 40px rgba(255,107,0,0.1)" }}
          >
            <Shield className="w-8 h-8 text-safety mx-auto mb-3" />
            <h3 className="font-display text-2xl text-foreground uppercase mb-3" style={{ fontWeight: 900 }}>
              THE NO-BS GUARANTEE
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              If after 60 days you're not seeing improvement in your ad performance, we'll part ways — no long-term contracts, no complicated refund process, no hard feelings.
            </p>
            <p className="text-sm text-foreground font-semibold mt-3">
              You're either getting better results or you're not working with us. Simple as that.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;
