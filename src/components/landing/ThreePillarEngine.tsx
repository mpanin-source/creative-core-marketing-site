import { motion } from "framer-motion";
import { Target, MessageSquareText, DatabaseZap, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "PRECISION ADS",
    subtitle: "Meta + Google Targeted Lead Capture",
    description: "We run hyper-targeted campaigns on Meta and Google during your peak demand windows. No wasted budget on off-season clicks.",
    stats: "$12–18 cost per lead vs $75+ industry avg",
  },
  {
    icon: MessageSquareText,
    title: "INSTANT SMS VETTING",
    subtitle: "Automated 5-Minute Response",
    description: "Every lead gets an A2P-verified SMS within 5 minutes. Non-pitch vetting qualifies real buyers before you ever pick up the phone.",
    stats: "3x higher contact rate vs email-only",
  },
  {
    icon: DatabaseZap,
    title: "DATABASE REACTIVATION",
    subtitle: "Turning Old Leads Into New Revenue",
    description: "Your past leads are goldmines. Our SMS engine re-engages them at month 6 and 12, converting $2K repairs into $15K+ replacements.",
    stats: "$15K–$30K avg reactivation deal size",
  },
];

const ThreePillarEngine = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding" id="engine">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            THE MULTI-CHANNEL ENGINE
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-4">
            OUR 3-PILLAR GROWTH ENGINE
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just run ads. We build an ecosystem that you own forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 md:p-8 hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {pillar.title}
              </h3>
              <p className="text-xs text-accent font-semibold mb-4">{pillar.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {pillar.description}
              </p>
              <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                <p className="text-xs font-semibold text-accent">{pillar.stats}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool stack */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Meta Ads", "Google LSA", "Verified SMS", "Momentum CRM"].map((tool) => (
              <span key={tool} className="px-4 py-2 glass-card rounded-lg text-sm font-semibold text-foreground">
                {tool}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToContact}
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
          >
            Schedule Your Growth Audit
            <ArrowRight size={18} />
          </button>
          <p className="text-xs text-muted-foreground mt-2">15-min strategy session to identify your revenue leaks.</p>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarEngine;
