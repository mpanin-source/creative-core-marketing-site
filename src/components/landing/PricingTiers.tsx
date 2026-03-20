import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Zap, Shield } from "lucide-react";
import CountUp from "react-countup";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const tiers = [
  {
    name: "STARTER",
    subtitle: "Test the waters",
    price: 1500,
    retainer: "No retainer required",
    items: [
      "Funnel Audit (15-min Loom)",
      "Seasonal Sprint Plan",
      "5 Ad Creative Variations",
      "1 Landing Page",
      "Basic CRM Setup",
    ],
    guarantee: false,
    popular: false,
  },
  {
    name: "GROWTH",
    subtitle: "Most common starting point",
    price: 3500,
    retainer: "$299/mo retainer (optional)",
    items: [
      "Everything in Starter",
      "10 Ad Creative Variations",
      "2 Landing Page Variants",
      "Lead Scoring Automation",
      "Email + SMS Sequences",
      "Pixel Tracking Setup",
    ],
    guarantee: true,
    popular: false,
  },
  {
    name: "MARKET DOMINANCE",
    subtitle: "Own your zip code",
    price: 6000,
    retainer: "$349/mo retainer (optional)",
    items: [
      "Everything in Growth",
      "Exclusive Territory Lock",
      "UGC Creative Suite",
      "Lead Vault (Full CRM)",
      "Authority Content Package",
      "Dedicated Account Manager",
    ],
    guarantee: true,
    popular: true,
  },
  {
    name: "FULL TAKEOVER",
    subtitle: "We become your marketing dept",
    price: 10000,
    retainer: "$499/mo retainer (optional)",
    items: [
      "Everything in Market Dominance",
      "Wake-Up Agent (Off-Season)",
      "Multi-Platform Campaigns",
      "Weekly Strategy Calls",
      "Predictive Lead Reactivation",
      "Priority Support & Scaling",
    ],
    guarantee: true,
    popular: false,
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
            CHOOSE YOUR <span className="italic text-shimmer-blue">SPRINT TIER</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-[600px] mx-auto">
            Every dollar mapped to a deliverable. No hidden fees. You pay Meta and Google directly.
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
            <span className="text-sm font-bold text-safety">Limited to 3 new sprint clients per month</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-card rounded-xl p-6 md:p-8 flex flex-col relative ${
                tier.popular
                  ? "border-2 border-safety shadow-[0_0_28px_hsla(25,100%,50%,0.25)] lg:scale-105 z-10"
                  : "border border-border shadow-subtle"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-safety text-black whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-display text-lg text-foreground mt-1" style={{ fontWeight: 700 }}>
                {tier.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-4">{tier.subtitle}</p>
              <motion.p
                className="text-3xl font-display text-electric mb-1"
                style={{ fontWeight: 700 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                $<CountUp end={tier.price} duration={1.5} separator="," enableScrollSpy scrollSpyOnce />
              </motion.p>
              <p className="text-[11px] text-muted-foreground mb-6">{tier.retainer}</p>

              <div className="flex-1 space-y-2.5 mb-6">
                {tier.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${tier.popular ? "text-safety" : "text-electric"}`} />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
                {tier.guarantee && (
                  <div className="flex items-start gap-2 mt-1 pt-2 border-t border-border">
                    <Shield className="w-4 h-4 text-safety flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-safety">15+ Calls / 45 Days or 50% Refund</span>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] ${
                  tier.popular
                    ? "btn-safety"
                    : "border border-border text-foreground bg-card glass-hover"
                }`}
              >
                Book Discovery Call
              </button>
            </motion.div>
          ))}
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
            <h3 className="font-display text-2xl text-foreground uppercase mb-2" style={{ fontWeight: 900 }}>
              THE 50% REFUND GUARANTEE
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
              If we don't deliver 15+ qualified calls within 45 days of campaign launch, you get 50% of your sprint
              investment back. A "qualified call" means they showed up, matched your ICP, and had real intent. No weasel words.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;
