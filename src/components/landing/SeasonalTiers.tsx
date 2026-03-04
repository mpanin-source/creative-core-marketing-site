import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Lock } from "lucide-react";

const tiers = [
  {
    id: "foundation",
    label: "TIER 1",
    name: "SEASONAL FOUNDATION",
    price: "$2,500 – $4,500",
    priceNote: "One-Time",
    monthly: null,
    tagline: "Understand Your Seasonal Window Before Committing",
    forWho: "Companies wanting to understand their seasonal window before committing",
    includes: [
      "Phase 1 only (Seasonal Alignment & Offer Fit)",
      "Market analysis + positioning document",
      "KPI target sheet",
    ],
    result:
      "You'll know your peak window, your ideal buyer, and your positioning angle",
    bestFor: "Testing whether seasonal approach makes sense for your business",
    colorClass: "bg-tier-blue",
    textClass: "text-tier-blue-foreground",
    borderClass: "border-tier-blue",
    badge: null,
  },
  {
    id: "sprint",
    label: "TIER 2",
    name: "SEASONAL SPRINT",
    price: "$4,500 – $7,500",
    priceNote: "Sprint",
    monthly: "+ $299/mo optional retainer",
    tagline: "Launch, Optimize, Prove ROAS",
    forWho: "Companies ready to run Phase 1 + 2, then decide on retainer",
    includes: [
      "Phases 1 + 2 (Seasonal Alignment + Launch & Optimization)",
      "Campaign setup + optimization",
      "First-Peak Lead Guarantee",
      "Loom documentation (light version)",
      "30 days of optimization + daily monitoring",
    ],
    result: "Live campaigns capturing peak-season buyers + proven ROAS",
    bestFor: "Ready to launch and see results this season",
    colorClass: "bg-tier-teal",
    textClass: "text-tier-teal-foreground",
    borderClass: "border-tier-teal",
    badge: "MOST POPULAR",
  },
  {
    id: "sprint-plus",
    label: "TIER 3",
    name: "SEASONAL SPRINT PLUS",
    price: "$7,500 – $15,000",
    priceNote: "Full Sprint",
    monthly: "+ $399/mo retainer",
    tagline: "Full Sprint + Handover + Scale Plan",
    forWho: "Companies wanting full 30–45 day sprint with Phase 3 + light retainer",
    includes: [
      "Phases 1 + 2 + 3 (Full sprint + handover)",
      "Campaign setup + daily optimization",
      "First-Peak Lead Guarantee",
      "Comprehensive Loom documentation",
      "90-day growth roadmap",
      "60 days of access/support",
    ],
    result: "Full sprint + documented process + ready to scale",
    bestFor: "Established businesses ready to invest in long-term growth",
    colorClass: "bg-tier-purple",
    textClass: "text-tier-purple-foreground",
    borderClass: "border-tier-purple",
    badge: "PREMIUM",
  },
  {
    id: "partnership",
    label: "TIER 4",
    name: "SEASONAL + 90-DAY PARTNERSHIP",
    price: "$15,000 – $30,000",
    priceNote: "Sprint + Partnership",
    monthly: "+ $599/mo after 90 days",
    tagline: "Done-With-You Growth Partner for Market Domination",
    forWho: "Companies wanting done-with-you approach + ongoing growth partner",
    includes: [
      "Phases 1 + 2 + 3 (Full sprint + deep handover)",
      "First-Peak Lead Guarantee",
      "90 days of included retainer ($1,797 value)",
      "Weekly check-in calls",
      "Quarterly strategy review",
      "Lead-scoring refinement",
      "Comprehensive Loom documentation + 90-day roadmap",
    ],
    result: "Full sprint + 3-month partnership to scale beyond seasonal window",
    bestFor: "Market leaders ready to dominate and scale aggressively",
    colorClass: "bg-tier-gold",
    textClass: "text-tier-gold-foreground",
    borderClass: "border-tier-gold",
    badge: "MARKET LEADER",
  },
];

const SeasonalTiers = () => {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToTier = (id: string) => {
    setActiveTier(id);
    cardRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tiers" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            CHOOSE YOUR SEASONAL GROWTH PATH
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tier builds on the last. Pick the sprint that matches where you
            are right now.
          </p>
        </motion.div>

        {/* Tier Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => scrollToTier(tier.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left font-body text-sm leading-relaxed ${
                activeTier === tier.id
                  ? `${tier.borderClass} bg-background shadow-elevated`
                  : "border-border hover:border-muted-foreground/30 bg-card"
              }`}
            >
              <span className="font-semibold block mb-1 text-foreground">
                {tier.label}: {tier.name}
              </span>
              <span className="text-muted-foreground text-xs">{tier.price}</span>
            </button>
          ))}
        </div>

        {/* Tier Cards */}
        <div className="space-y-10">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              ref={(el) => {
                cardRefs.current[tier.id] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl overflow-hidden ${tier.colorClass} ${tier.textClass} ${
                tier.id === "partnership" ? "ring-2 ring-tier-gold/50" : ""
              }`}
            >
              <div className="p-8 md:p-12">
                {tier.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-semibold font-body tracking-wider rounded-full bg-white/20 backdrop-blur mb-4">
                    {tier.badge}
                  </span>
                )}

                <p className="font-body text-sm tracking-wider opacity-80 mb-1">
                  {tier.label} · {tier.name}
                </p>
                <h3 className="font-display text-3xl md:text-4xl mb-2">
                  {tier.tagline}
                </h3>
                <p className="font-body text-sm opacity-70 mb-6 italic">
                  For: {tier.forWho}
                </p>

                {/* Price */}
                <div className="bg-white/10 rounded-xl p-5 mb-8 inline-block">
                  <span className="font-display text-3xl md:text-4xl">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm ml-2 opacity-80">
                    ({tier.priceNote})
                  </span>
                  {tier.monthly && (
                    <div className="mt-1">
                      <span className="font-body text-base opacity-80">
                        {tier.monthly}
                      </span>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-display text-lg mb-3">INCLUDES:</p>
                    <ul className="space-y-2">
                      {tier.includes.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 font-body text-sm leading-relaxed"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 flex-shrink-0 opacity-80"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="font-display text-sm mb-1">RESULT:</p>
                      <p className="font-body text-sm">{tier.result}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="font-display text-sm mb-1">BEST FOR:</p>
                      <p className="font-body text-sm">{tier.bestFor}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-8 px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur font-display text-lg tracking-wider transition-all duration-200 flex items-center gap-2"
                >
                  SCHEDULE FREE AUDIT
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <Lock size={14} />
            <span className="font-body text-sm">
              No commitment required — let's just talk.
            </span>
          </div>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 rounded-lg bg-accent text-accent-foreground font-display text-xl tracking-wider hover:bg-accent/90 transition-all duration-200 flex items-center gap-3 mx-auto shadow-elevated"
          >
            SCHEDULE YOUR FREE AUDIT
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalTiers;
