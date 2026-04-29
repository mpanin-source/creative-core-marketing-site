import { motion, type Variants } from "framer-motion";
import { ArrowRight, PackageOpen, TrendingUp, ArrowRightCircle } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const columns = [
  {
    icon: PackageOpen,
    title: "WHAT YOU GET",
    items: [
      "Custom-built single-page website (residential conversion focus)",
      "Custom domain registered in your name",
      "60 days of free hosting included",
      "Loom audit video explaining every change we made and why",
      "Conversion tracking installed (so you can see what's working)",
      "Mobile-first design (where 70% of your customers actually visit from)",
      "Edit anytime for $99 after Month 2",
    ],
  },
  {
    icon: TrendingUp,
    title: "WHAT IT'S WORTH",
    items: [
      "Most agencies charge $2,000–$5,000 for this same scope",
      "You're getting it for $497 because we want to prove ourselves first",
      "After 60 days, hosting is $39.99/mo standalone — or FREE on Tier 2+",
      "This is the bottom rung — your launchpad, not your finish line",
    ],
  },
  {
    icon: ArrowRightCircle,
    title: "THE LINE IN THE SAND",
    items: [
      "Day 1–7: We build your site",
      "Day 8: Optional 15-min Zoom to discuss next steps (we recommend this)",
      "After Day 8: Want to keep going? Start Foundation Sprint or above",
      "Don't want to keep going? Take the site and walk. No hard feelings.",
    ],
  },
];

const GatewayOffer = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="gateway-offer" className="px-6 py-32 md:px-8 section-warm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">START HERE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            THE <span className="hero-gradient-text">$497</span> LAUNCH-READY WEBSITE
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[720px] mx-auto">
            Custom-built for Florida home services. Mobile-first. Optimized to convert. Built in 7 days. Yours to keep — even if you walk away after.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border outcome-card"
            >
              <div className="outcome-icon w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-4" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <ul className="space-y-2.5">
                {c.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-electric mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg inline-flex items-center gap-2"
          >
            GET MY $497 WEBSITE
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
          <p className="text-xs text-muted-foreground/80 mt-4">
            7 days from payment to live site. Available to first 3 Florida home service clients per county.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GatewayOffer;
