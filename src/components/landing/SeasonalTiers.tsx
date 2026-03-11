import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Check, X as XIcon, ArrowRight, Lock } from "lucide-react";

interface TierFeature {
  text: string;
  included: boolean;
}

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
    features: [
      { text: "Phase 1 (Seasonal Alignment & Offer Fit)", included: true },
      { text: "Market analysis + positioning document", included: true },
      { text: "KPI target sheet", included: true },
      { text: "Campaign setup", included: false },
      { text: "Daily optimization", included: false },
      { text: "First-Peak Lead Guarantee", included: false },
      { text: "Loom documentation", included: false },
      { text: "90-day growth roadmap", included: false },
    ] as TierFeature[],
    result: "You'll know your peak window, your ideal buyer, and your positioning angle",
    bestFor: "Testing whether seasonal approach makes sense",
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
    features: [
      { text: "Phases 1 + 2 (Alignment + Launch)", included: true },
      { text: "Campaign setup + optimization", included: true },
      { text: "First-Peak Lead Guarantee", included: true },
      { text: "Loom documentation (light)", included: true },
      { text: "30 days optimization + daily monitoring", included: true },
      { text: "Phase 3 handover", included: false },
      { text: "90-day growth roadmap", included: false },
      { text: "Weekly check-in calls", included: false },
    ] as TierFeature[],
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
    forWho: "Companies wanting full sprint with Phase 3 + retainer",
    features: [
      { text: "Phases 1 + 2 + 3 (Full sprint + handover)", included: true },
      { text: "Campaign setup + daily optimization", included: true },
      { text: "First-Peak Lead Guarantee", included: true },
      { text: "Comprehensive Loom documentation", included: true },
      { text: "90-day growth roadmap", included: true },
      { text: "60 days of access/support", included: true },
      { text: "Weekly check-in calls", included: false },
      { text: "Quarterly strategy review", included: false },
    ] as TierFeature[],
    result: "Full sprint + documented process + ready to scale",
    bestFor: "Established businesses investing in long-term growth",
    colorClass: "bg-tier-purple",
    textClass: "text-tier-purple-foreground",
    borderClass: "border-tier-purple",
    badge: "PREMIUM",
  },
  {
    id: "partnership",
    label: "TIER 4",
    name: "90-DAY PARTNERSHIP",
    price: "$15,000 – $30,000",
    priceNote: "Sprint + Partnership",
    monthly: "+ $599/mo after 90 days",
    tagline: "Done-With-You Growth Partner for Market Domination",
    forWho: "Companies wanting done-with-you approach + ongoing growth",
    features: [
      { text: "Phases 1 + 2 + 3 (Full sprint + deep handover)", included: true },
      { text: "First-Peak Lead Guarantee", included: true },
      { text: "90 days included retainer ($1,797 value)", included: true },
      { text: "Weekly check-in calls", included: true },
      { text: "Quarterly strategy review", included: true },
      { text: "Lead-scoring refinement", included: true },
      { text: "Loom documentation + 90-day roadmap", included: true },
    ] as TierFeature[],
    result: "Full sprint + 3-month partnership to scale",
    bestFor: "Market leaders ready to dominate aggressively",
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
    <section id="tiers" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-4">
            CHOOSE YOUR GROWTH PATH
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each tier builds on the last. Pick the sprint that matches where you are right now.
          </p>
        </motion.div>

        {/* Tier Selector */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto mb-16">
          {tiers.map((tier) => (
            <button
              key={tier.id}
              onClick={() => scrollToTier(tier.id)}
              className={`p-4 rounded-lg border transition-all duration-200 text-left font-body text-sm leading-relaxed ${
                activeTier === tier.id
                  ? `${tier.borderClass} bg-secondary shadow-elevated`
                  : "border-border hover:border-muted-foreground/30 glass-card"
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
              ref={(el) => { cardRefs.current[tier.id] = el; }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className={`rounded-2xl overflow-hidden ${tier.colorClass} ${tier.textClass} ${
                tier.id === "partnership" ? "ring-2 ring-tier-gold/50" : ""
              }`}
            >
              <div className="p-6 md:p-8 lg:p-12">
                {tier.badge && (
                  <span className="inline-block px-3 py-1 text-xs font-bold font-body tracking-wider rounded-full bg-white/20 backdrop-blur mb-4">
                    {tier.badge}
                  </span>
                )}

                <p className="font-body text-sm tracking-wider opacity-80 mb-1">
                  {tier.label} · {tier.name}
                </p>
                <h3 className="font-display text-3xl md:text-4xl font-black mb-2">
                  {tier.tagline}
                </h3>
                <p className="font-body text-sm opacity-70 mb-6 italic">
                  For: {tier.forWho}
                </p>

                <div className="bg-white/10 rounded-xl p-5 mb-8 inline-block">
                  <span className="font-display text-3xl md:text-4xl font-black">
                    {tier.price}
                  </span>
                  <span className="font-body text-sm ml-2 opacity-80">({tier.priceNote})</span>
                  {tier.monthly && (
                    <div className="mt-1">
                      <span className="font-body text-base opacity-80">{tier.monthly}</span>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="font-display text-lg font-bold mb-3">FEATURES:</p>
                    <ul className="space-y-2">
                      {tier.features.map((feature, j) => (
                        <li
                          key={j}
                          className={`flex items-start gap-2 font-body text-sm leading-relaxed ${
                            !feature.included ? "opacity-50" : ""
                          }`}
                        >
                          {feature.included ? (
                            <Check size={16} className="mt-0.5 flex-shrink-0 text-green-400" />
                          ) : (
                            <XIcon size={16} className="mt-0.5 flex-shrink-0 text-red-400" />
                          )}
                          <span className={!feature.included ? "line-through" : ""}>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="font-display text-sm font-bold mb-1">RESULT:</p>
                      <p className="font-body text-sm">{tier.result}</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="font-display text-sm font-bold mb-1">BEST FOR:</p>
                      <p className="font-body text-sm">{tier.bestFor}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className="mt-8 px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur font-display text-lg font-bold tracking-wider transition-all duration-200 flex items-center gap-2"
                >
                  SCHEDULE GROWTH AUDIT
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
            <span className="font-body text-sm">No commitment required — let's just talk.</span>
          </div>
          <button
            onClick={scrollToContact}
            className="btn-gold px-10 py-4 rounded-lg text-xl flex items-center gap-3 mx-auto transition-all hover:scale-105"
          >
            SCHEDULE YOUR GROWTH AUDIT
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalTiers;
