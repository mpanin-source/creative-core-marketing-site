import { motion, type Variants } from "framer-motion";
import { TestTube, TrendingUp, Zap } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const cards = [
  {
    icon: TestTube,
    title: "CONTINUOUS A/B TESTING",
    desc: "Every ad. Every keyword. Every landing page variant. Tested on a constant cycle — not when an analyst remembers to log in.",
  },
  {
    icon: TrendingUp,
    title: "DATA-DRIVEN OPTIMIZATION",
    desc: "We don't optimize on guesses. The moment a test hits statistical significance, budget shifts toward winners and losers get killed. No emotion. No politics.",
  },
  {
    icon: Zap,
    title: "ACTION ON EVERY WIN",
    desc: "When a winning ad emerges, we don't wait until next month's report. We scale it, replicate it, and use it as the seed for the next test — same day.",
  },
];

const OptimizationSection = () => {
  return (
    <section id="optimization" className="px-6 py-32 md:px-8 section-warm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">
            WHY WE CAN DO MORE FOR LESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            24/7 OPTIMIZATION. CONSTANT A/B TESTING. <span className="italic text-shimmer-blue">NEVER STOPPED.</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[760px] mx-auto">
            Most agencies optimize once a month. We track your KPIs continuously and act on data the moment we have enough to act on. While they wait for their monthly review, we're already running the next test based on what just won. Your campaigns are never sitting still.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-7 md:p-8 border border-border outcome-card"
            >
              <div className="outcome-icon w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                <c.icon className="w-5 h-5 text-coral" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-3" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptimizationSection;
