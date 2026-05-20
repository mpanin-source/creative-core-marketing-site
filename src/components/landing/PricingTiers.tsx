import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Zap, Lock, ChevronDown } from "lucide-react";
import CountUp from "react-countup";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const tiers = [
  {
    id: "foundation-tier",
    name: "FOUNDATION SPRINT",
    subtitle: "Test the waters — prove the system works",
    price: 1500,
    priceSuffix: "/month (First 60 Days) → $2,000/mo ongoing",
    badge: null as string | null,
    locked: false,
    items: [
      "Local SEO foundation (schema + NAP + GBP setup)",
      "LSA + Google Guaranteed certification setup",
      "GEO eligibility schema (AI Overview entry ticket)",
      "Conversion-optimized landing page + Core Web Vitals",
      "Review system (automated requests + response automation)",
      "Speed-to-Lead CRM setup (sub-60-second response time)",
      "Day 30 check-in + 60-day guarantee active",
    ],
    cta: "Book Free Audit Call",
    highlighted: true,
  },
  {
    id: "growth",
    name: "GROWTH PARTNER",
    subtitle: "Scale what worked + activate GEO presence",
    price: 3000,
    priceSuffix: "/month",
    badge: "MOST POPULAR",
    locked: false,
    items: [
      "Everything in Foundation Sprint",
      "Weekly content production + Atomic Answer formatting",
      "Performance Max + advanced Meta optimization",
      "Citation velocity + basic entity linking",
      "Review velocity push (75+ reviews target)",
      "8 service-specific landing pages",
      "Monthly AI Visibility Reports (Google + ChatGPT)",
      "A/B testing + heat-map analysis",
    ],
    cta: "Start With Foundation Sprint",
    highlighted: false,
  },
  {
    id: "scale",
    name: "SCALE PARTNER",
    subtitle: "Full search domination + the Information Gain content engine",
    price: 5000,
    priceSuffix: "/month (qualification required)",
    badge: "QUALIFICATION REQUIRED",
    locked: true,
    items: [
      "Everything in Growth Partner",
      "Information Gain content engine (no separate add-on fee)",
      "Multi-format content (YouTube, Reddit, podcasts)",
      "Schema 3.0 + Knowledge Graph engineering",
      "Weekly AI Visibility Reports across 4 platforms",
      "AI Max migration + source-personalized landing pages",
      "Multi-channel ROI attribution",
    ],
    cta: "See If You Qualify",
    highlighted: false,
  },
];

const PricingTiers = () => {
  const [showQual, setShowQual] = useState(false);
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
                id={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`bg-card rounded-xl p-6 md:p-8 flex flex-col relative scroll-mt-24 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
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

        {/* Tier 3 Qualification Accordion */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="max-w-3xl mx-auto"
        >
          <button
            onClick={() => setShowQual(!showQual)}
            className="w-full flex items-center justify-between p-5 rounded-xl border border-electric/30 bg-card hover:border-electric/60 transition-colors"
            aria-expanded={showQual}
          >
            <span className="font-display text-base text-electric uppercase tracking-wide flex items-center gap-2" style={{ fontWeight: 700 }}>
              <Lock className="w-4 h-4" />
              See If You Qualify For Tier 3
            </span>
            <ChevronDown className={`w-5 h-5 text-electric transition-transform ${showQual ? "rotate-180" : ""}`} />
          </button>
          {showQual && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-card border border-electric/20 rounded-xl p-6 md:p-8 mt-3 space-y-6">
                <div>
                  <h4 className="font-display text-sm text-electric uppercase tracking-widest mb-3" style={{ fontWeight: 800 }}>
                    Tier 3 Qualification
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">You qualify for Tier 3 if you meet either path:</p>
                </div>

                <div>
                  <p className="font-display text-sm text-foreground uppercase mb-3" style={{ fontWeight: 700 }}>
                    Standard Path (After 60 Days At Tier 2)
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Verified Google Business Profile with 50+ reviews at 4.5+ stars",
                      "3–5 reviews in last 90 days (recency matters)",
                      "Functional mobile-responsive website",
                      "Currently servicing 15+ qualified appointments/month",
                      "Sales close rate at minimum 25%",
                      "60+ days at Tier 2 with us with 20%+ CPL reduction achieved",
                      "Willing to produce/approve 4 pieces of content/month",
                      "6-month minimum commitment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-display text-sm text-foreground uppercase mb-3" style={{ fontWeight: 700 }}>
                    Skip-Ahead Path (Bypass Tier 2)
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "75+ Google reviews at 4.5+ stars",
                      "Active LSA with Google Guaranteed badge",
                      "Existing schema markup deployed",
                      "Active GBP (services, photos, weekly posts)",
                      "60-day baseline metrics available",
                      "Functional CRM with lead tracking",
                      "20+ booked appointments/month consistently",
                      "3+ existing pieces of content (blogs, videos)",
                      "Service-area pages for at least 3 specific cities",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-electric flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="italic text-sm text-muted-foreground border-t border-border pt-4">
                  Don't qualify yet? Foundation Sprint ($1,500/mo) gets you ready in 60–90 days. Growth Partner ($3,000/mo) builds you to qualification in 90–120 days.
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTiers;
