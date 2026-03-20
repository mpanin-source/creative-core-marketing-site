import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, Zap, Shield } from "lucide-react";
import CountUp from "react-countup";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const tiers = [
  {
    name: "TRIAL SPRINT",
    subtitle: "Test the waters — see if we're a good fit",
    price: 1500,
    priceSuffix: "/month (First 60 Days)",
    badge: null,
    items: [
      "Complete ad account audit (15-min Loom)",
      "60-day campaign setup (Google + Meta)",
      "5 ad creative variations",
      "1 landing page",
      "Basic CRM setup",
      "Weekly optimization",
      "Transparent reporting",
    ],
    cta: "Book Free Audit Call",
    highlighted: true,
  },
  {
    name: "ONGOING PARTNERSHIP",
    subtitle: "After the trial, if you're happy with results",
    price: 2500,
    priceSuffix: "/month",
    badge: "AVAILABLE AFTER TRIAL",
    items: [
      "Everything in Trial Sprint",
      "10 ad creative variations per month",
      "2 landing page variants",
      "Lead scoring automation",
      "Email + SMS sequences",
      "Pixel tracking setup",
      "Bi-weekly optimization calls",
    ],
    cta: "Start With Trial Sprint",
    highlighted: false,
  },
];

const PricingTiers = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-warm" id="pricing">
      <div className="max-w-5xl mx-auto">
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
            <span className="text-sm font-bold text-safety">Limited to 8 clients total — 3 spots remaining</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-card rounded-xl p-6 md:p-8 flex flex-col relative ${
                tier.highlighted
                  ? "border-2 border-safety shadow-[0_0_28px_hsla(25,100%,50%,0.25)]"
                  : "border border-border shadow-subtle"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-electric/20 text-electric border border-electric/30 whitespace-nowrap">
                  {tier.badge}
                </div>
              )}
              <h3 className="font-display text-xl text-foreground mt-1" style={{ fontWeight: 700 }}>
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
                <span className="text-sm text-muted-foreground ml-1">{tier.priceSuffix}</span>
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
