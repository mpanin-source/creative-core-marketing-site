import { motion, type Variants } from "framer-motion";
import { Phone, MessageSquare, Star } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: Phone,
    title: "GENERATIVE VOICE + SMS AUTOMATION",
    body: "If your data shows lead response delays are killing conversion, we deploy AI agents that answer calls and qualify leads while you're on the job.",
    tag: "Available for Tier 1 + Tier 2 + Tier 3",
  },
  {
    icon: MessageSquare,
    title: "AUTOMATED CRM NURTURE",
    body: "If your CRM shows cold leads going untouched, we set up automated nurture sequences. AI watches behavior and re-engages with personalized outreach.",
    tag: "Available for Tier 2 + Tier 3",
  },
  {
    icon: Star,
    title: "AUTOMATED REVIEW ACQUISITION",
    body: "If your reviews are stale or scattered, we deploy automated review acquisition + response systems. Builds the SGE signals Google AI weights heaviest.",
    tag: "Available for Tier 1 + Tier 2 + Tier 3",
  },
];

const CustomSolutions = () => {
  return (
    <section id="custom-solutions" className="px-6 py-32 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            BEYOND THE TIERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            CUSTOM SOLUTIONS,<br />
            <span className="italic text-shimmer-blue">DIAGNOSED DURING ONBOARDING</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Every business is different. During your first 30 days, we analyze YOUR data to identify YOUR specific bottlenecks. If we diagnose a real problem, we offer the solution as a custom upsell — not a feature dump. We don't sell you what you don't need.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-electric/20 rounded-2xl p-5 outcome-card hover:border-electric/50 transition-colors"
            >
              <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-electric" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-3 leading-snug" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.body}</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-electric/80">{c.tag}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="italic text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
        >
          Custom solutions priced individually based on scope. We don't recommend them unless your data proves you need them.
        </motion.p>
      </div>
    </section>
  );
};

export default CustomSolutions;
