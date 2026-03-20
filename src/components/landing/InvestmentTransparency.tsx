import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import CountUp from "react-countup";

const tiers = [
  {
    name: "FOUNDATION",
    price: 2500,
    priceDisplay: "$2,500",
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
    price: 4500,
    priceDisplay: "$4,500",
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
    price: 7500,
    priceDisplay: "$7,500",
    retainer: "$399/month retainer (optional)",
    items: [
      "Everything in Growth",
      "UGC Creative Suite (Higgsfield AI)",
      "Wake-Up Agent (Predictive re-activation)",
      "Authority Content (Reels/TikTok scripts)",
      "Dedicated account manager",
    ],
    guarantee: true,
    cta: "Book Sprint Audit",
    highlight: false,
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const InvestmentTransparency = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-alt" id="pricing">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-8"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            NO HIDDEN FEES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
            TRANSPARENT SPRINT PRICING
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Every dollar mapped to a deliverable. No hidden fees. No ad spend markups. You pay Meta and Google directly.
          </p>
        </motion.div>

        {/* Scarcity badge */}
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

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className={`bg-card rounded-xl p-8 md:p-10 flex flex-col relative ${
                tier.highlight
                  ? "border-2 border-safety shadow-[0_0_20px_hsla(25,100%,50%,0.3)] glass-hover-orange"
                  : tier.name === "SCALE"
                    ? "border border-border shadow-subtle glass-hover-orange"
                    : "border border-border shadow-subtle glass-hover"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-safety text-black whitespace-nowrap">
                  MOST POPULAR FOR HVAC
                </div>
              )}
              <h3 className="font-display text-xl text-foreground mb-1 mt-2" style={{ fontWeight: 700 }}>
                TIER {i + 1}: {tier.name}
              </h3>
              <motion.p
                className="text-3xl font-display text-electric"
                style={{ fontWeight: 700 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                $<CountUp end={tier.price} duration={1.5} separator="," enableScrollSpy scrollSpyOnce />
              </motion.p>
              <p className="text-xs text-muted-foreground mb-6">{tier.retainer}</p>

              <div className="flex-1 space-y-3 mb-6">
                {tier.items.map((item, j) => (
                  <div key={j} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
                {tier.guarantee && (
                  <div className="flex items-start gap-2 mt-2">
                    <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-electric">15+ Qualified Calls in 45 Days or 50% Refund</span>
                  </div>
                )}
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 rounded-lg font-body font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 ${
                  tier.highlight
                    ? "btn-safety"
                    : "border border-border text-foreground bg-card glass-hover"
                }`}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Key notes */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="max-w-3xl mx-auto text-center space-y-2 mb-8"
        >
          {[
            "You pay Meta/Google ad spend directly — we don't mark it up",
            "Monthly retainer is optional after sprint completes",
            "All infrastructure (landing pages, CRM, creative assets) is yours forever",
          ].map((note, i) => (
            <p key={i} className="text-sm text-muted-foreground">• {note}</p>
          ))}
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Sprint Value If Purchased Separately</p>
          <p className="text-3xl font-display text-foreground" style={{ fontWeight: 700 }}>$8K–$20K</p>
        </motion.div>
      </div>
    </section>
  );
};

export default InvestmentTransparency;