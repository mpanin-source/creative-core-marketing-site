import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Lock, ChevronDown, MapPin } from "lucide-react";
import CountUp from "react-countup";
import { openCalendlyPopup } from "@/lib/calendly";
import { OrbitRings } from "@/components/cobalt-refresh/patterns";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

interface Tier {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  priceSuffix: string;
  badge: string | null;
  locked: boolean;
  items: string[];
  cta: string;
  highlighted: boolean;
  qualifier?: string;
}

const tiers: Tier[] = [
  {
    id: "foundation-tier",
    name: "FOUNDATION SPRINT",
    subtitle: "Lower your CPL",
    price: 1500,
    priceSuffix: "/month",
    badge: "MOST POPULAR",
    locked: false,
    items: [
      "Local SEO foundation (schema + NAP + GBP setup)",
      "LSA application management + Google Verified enrollment",
      "GEO eligibility schema (AI Overview entry ticket)",
      "Website CRO overhaul + Core Web Vitals — we optimize the site you have.",
      "Review system (automated requests + response automation)",
      "Speed-to-Lead CRM + missed-call text-back (sub-60-second response)",
      "Day 30 check-in + 60-day guarantee active",
    ],
    cta: "Book free audit call",
    highlighted: true,
  },
  {
    id: "growth",
    name: "GROWTH PARTNER",
    subtitle: "Pack your calendar",
    price: 3000,
    priceSuffix: "/month",
    badge: null,
    locked: false,
    items: [
      "Everything in Foundation Sprint — LSA management, review & reputation system, and speed-to-lead CRM with missed-call text-back",
      "Call tracking + CSR & booking-rate coaching — we score the inbound calls and coach the close",
      "Local content engine: 4 in-depth, locally-specific articles + weekly GBP posts each month — built to earn AI citations, not hit a word-count quota.",
      "Citation velocity + basic entity linking",
      "Review velocity push (75+ reviews target)",
      "Service & service-area coverage pages — scoped to your real services and top counties.",
      "Monthly AI Visibility Reports (Google AI Overview via Search Console + sampled LLM tracking)",
      "Conversion testing + heat-map analysis",
    ],
    cta: "Start with Foundation Sprint",
    highlighted: false,
  },
  {
    id: "scale",
    name: "SCALE PARTNER",
    subtitle: "Own your county",
    price: 5000,
    priceSuffix: "/month (qualification required)",
    badge: "QUALIFICATION REQUIRED",
    locked: true,
    items: [
      "Everything in Growth Partner — every table-stakes system: LSA, reviews, speed-to-lead + missed-call text-back, call tracking, and CSR coaching",
      "Local content engine, upgraded: 6 articles/mo — including 2 Information-Gain deep dives built on original local data — each engineered to earn AI citations",
      "4 short videos/mo — you film from our briefs, we edit and distribute. Long-form video: coming soon.",
      "Advanced structured-data + entity optimization (LocalBusiness, service & sameAs schema)",
      "Monthly AI Visibility Reports across Google AI Overview, ChatGPT, Perplexity & Gemini (sampled snapshots, not a live rank tracker)",
      "AI Max migration + source-personalized landing pages",
      "Multi-channel ROI attribution",
    ],
    cta: "See if you qualify",
    highlighted: false,
    qualifier: "Typical clients $1M+. Custom pricing for multi-location.",
  },
];

const PricingTiers = () => {
  const [showQual, setShowQual] = useState(false);

  const openBooking = () => {
    void openCalendlyPopup();
  };

  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-8 bg-cream" id="pricing">
      <OrbitRings color="#3a86ff" opacity={0.16} cx="92%" cy="10%" rings={6} animated />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-6"
        >
          <p className="text-xs font-medium tracking-[0.15em] uppercase mb-4 text-coral-dark">
            Transparent pricing
          </p>
          <h2
            className="font-display text-3xl md:text-5xl mb-4 text-charcoal leading-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Simple, honest pricing.
          </h2>
          <p className="text-base text-charcoal/70 max-w-[600px] mx-auto">
            No hidden fees. No ad spend markup. You pay Meta and Google directly.
          </p>
        </motion.div>

        {/* Scarcity */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="flex justify-center mb-16 mt-6"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral-soft border border-coral-dark/20"
            style={{ boxShadow: "0 0 18px rgba(255, 77, 46, 0.18)" }}
          >
            <span className="text-sm font-semibold text-coral-dark">
              Now accepting 3 Florida home service clients
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 pt-4">
          {tiers.map((tier, i) => {
            // Card backgrounds: highlighted = white (dominant), others = cream-light (subtle)
            const cardBg = tier.highlighted ? "bg-white" : "bg-cream-light";
            const cardBorder = tier.highlighted
              ? "border-2 border-coral shadow-[0_8px_30px_rgba(255,77,46,0.15)]"
              : "border border-charcoal/10";
            const cardScale = tier.highlighted ? "md:scale-105" : "";
            const priceSize = tier.highlighted ? "text-5xl" : "text-4xl";

            // Badge style — coral for MOST POPULAR, coral-soft for QUALIFICATION (R7.6 Phase 7.5: purple removed)
            const badgeStyle = tier.locked
              ? "bg-coral-soft text-coral-dark border border-coral-dark/20"
              : "bg-coral text-white border border-coral";

            return (
              <motion.div
                key={tier.name}
                id={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-xl p-6 md:p-8 flex flex-col relative scroll-mt-24 transition-shadow duration-300 ${cardBg} ${cardBorder} ${cardScale}`}
              >
                {tier.badge && (
                  <div
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap flex items-center gap-1.5 ${badgeStyle}`}
                    style={tier.locked ? { boxShadow: "0 0 16px rgba(255, 77, 46, 0.2)" } : undefined}
                  >
                    {tier.locked && <Lock className="w-3 h-3" />}
                    {tier.badge}
                  </div>
                )}

                <h3
                  className="font-display text-xl text-charcoal mt-1 mb-1 tracking-wide flex items-center gap-2"
                  style={{ fontWeight: 700 }}
                >
                  {tier.locked && <Lock className="w-4 h-4 text-charcoal/40" />}
                  {tier.name}
                </h3>
                <p className="text-xs text-charcoal/60 mb-4">{tier.subtitle}</p>

                <motion.div
                  className="mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <span
                    className={`font-display text-coral-dark ${priceSize} leading-none`}
                    style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
                  >
                    $<CountUp end={tier.price} duration={1.5} separator="," enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-sm text-charcoal/60 ml-1 block mt-2">{tier.priceSuffix}</span>
                </motion.div>

                {tier.qualifier ? (
                  <p className="text-xs text-muted-dark mt-2 italic">{tier.qualifier}</p>
                ) : null}

                <div className="flex-1 space-y-2.5 mb-6 mt-5">
                  {tier.items.map((item, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral" />
                      <span className="text-sm text-charcoal/80">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={openBooking}
                  className={`w-full py-3 rounded-md font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? "bg-coral hover:bg-coral-dark text-white"
                      : "border-2 border-azure/60 text-azure-dark hover:bg-azure hover:text-white hover:border-azure"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-charcoal/50 text-center mt-3 leading-snug">
                  Month-to-month · cancel anytime · keep everything we build
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* R8.2 — territory exclusivity strip (replaces the standalone TerritoryCallout section; placement A, owner pick pending) */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="flex justify-center -mt-6 mb-16"
        >
          <div className="inline-flex items-start gap-3 rounded-lg bg-coral-soft border border-coral-dark/15 px-5 py-3.5 max-w-3xl">
            <MapPin className="w-4 h-4 text-coral-dark flex-shrink-0 mt-1" />
            <p className="text-sm text-charcoal/80 leading-relaxed">
              <span className="font-semibold text-charcoal">One client per niche, per county.</span>{" "}
              When your spot is taken, your competitors lose access to us. Florida home services only — currently accepting three clients per county per niche.
            </p>
          </div>
        </motion.div>

        {/* Tier 3 Qualification Accordion */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="max-w-3xl mx-auto"
        >
          <button
            onClick={() => setShowQual(!showQual)}
            className="w-full flex items-center justify-between p-5 rounded-md border border-coral-dark/20 bg-coral-soft/50 hover:bg-coral-soft hover:border-coral-dark/40 transition-colors"
            aria-expanded={showQual}
          >
            <span
              className="font-display text-base uppercase tracking-wide flex items-center gap-2 text-charcoal"
              style={{ fontWeight: 700 }}
            >
              <Lock className="w-4 h-4 text-coral-dark" />
              See if you qualify for Tier 3
            </span>
            <ChevronDown className={`w-5 h-5 transition-transform text-coral-dark ${showQual ? "rotate-180" : ""}`} />
          </button>
          {showQual && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="rounded-md p-6 md:p-8 mt-3 space-y-6 border border-charcoal/10 bg-white">
                <div>
                  <h4
                    className="font-display text-sm uppercase tracking-widest mb-3 text-coral-dark"
                    style={{ fontWeight: 700 }}
                  >
                    Tier 3 qualification
                  </h4>
                  <p className="text-sm text-charcoal/70 mb-4">
                    You qualify for Tier 3 if you meet either path:
                  </p>
                </div>

                <div>
                  <p
                    className="font-display text-sm uppercase mb-3 text-charcoal"
                    style={{ fontWeight: 700 }}
                  >
                    Standard Path (after 60 days at Tier 2)
                  </p>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {[
                      "Verified Google Business Profile with 50+ reviews at 4.5+ stars",
                      "3–5 reviews in last 90 days (recency matters)",
                      "Functional mobile-responsive website",
                      "Currently servicing 15+ qualified appointments/month",
                      "Sales close rate at minimum 25%",
                      "60+ days at Tier 2 with us showing measurable CPL improvement",
                      "Willing to produce/approve 4 pieces of content/month",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p
                    className="font-display text-sm uppercase mb-3 text-charcoal"
                    style={{ fontWeight: 700 }}
                  >
                    Skip-Ahead Path (bypass Tier 2)
                  </p>
                  <ul className="space-y-2 text-sm text-charcoal/70">
                    {[
                      "75+ Google reviews at 4.5+ stars",
                      "Active LSA with Google Verified badge",
                      "Existing schema markup deployed",
                      "Active GBP (services, photos, weekly posts)",
                      "60-day baseline metrics available",
                      "Functional CRM with lead tracking",
                      "20+ booked appointments/month consistently",
                      "3+ existing pieces of content (blogs, videos)",
                      "Service-area pages for at least 3 specific cities",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-coral" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="italic text-sm border-t pt-4 text-charcoal/70 border-charcoal/10">
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
