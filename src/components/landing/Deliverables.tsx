import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { TrendingDown, Zap, UserCheck } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const outcomes = [
  {
    icon: TrendingDown,
    shortTitle: "Cost Per Lead",
    title: "YOUR COST PER LEAD DROPS 30-50%",
    description: "We test 10+ creative variations and optimize daily. Most clients see a 30-50% reduction in cost-per-lead within 3 weeks — which means you get more leads for the same ad budget.",
    extra: "Plus, our automated follow-up ensures more of those leads actually convert into customers.",
    bullets: [
      "More leads for same budget",
      "Continuous A/B testing",
      "Weekly optimization",
      "Full transparency on what's working",
    ],
  },
  {
    icon: Zap,
    shortTitle: "Funnel Speed",
    title: "YOUR FUNNEL GETS FASTER",
    description: "From ad click to booked call in under 10 clicks. We strip out every unnecessary step, question, and page load that slows your prospect down.",
    extra: null,
    bullets: [
      "Streamlined conversion path",
      "Faster page load times",
      "Fewer form fields, more conversions",
      "Mobile-optimized funnels",
    ],
  },
  {
    icon: UserCheck,
    shortTitle: "Lead Follow-Up",
    title: "YOUR LEADS GET FOLLOWED UP (AND CONVERT BETTER)",
    description: "Automated SMS + email sequences fire within 60 seconds of opt-in. No lead sits untouched. No opportunity dies in your inbox.",
    extra: "Why this matters: Responding in 60 seconds instead of 5 minutes makes you 100x more likely to convert that lead into a customer. Our automation ensures you're always first to respond — while they're hot.",
    bullets: [
      "60-second automated response",
      "SMS + email sequences",
      "100x higher conversion likelihood",
      "No lead left behind",
    ],
  },
];

const Deliverables = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = outcomes[activeIdx];

  return (
    <section className="px-6 py-32 md:px-8" id="deliverables">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            OUTCOMES, NOT FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            HERE'S WHAT <span className="italic text-shimmer-blue">CHANGES</span>
          </h2>
        </motion.div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-4">
          {outcomes.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="outcome-card p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="outcome-icon w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-electric" />
                </div>
                <h3 className="font-display text-base text-foreground uppercase" style={{ fontWeight: 700 }}>
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              {item.extra && (
                <p className="text-sm text-muted-foreground leading-relaxed mt-3 italic">{item.extra}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop: step navigation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:flex gap-10"
        >
          {/* Left nav */}
          <div className="w-[280px] flex-shrink-0 space-y-2 sticky top-28 self-start">
            {outcomes.map((item, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={item.title}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center gap-3 group ${
                    isActive
                      ? "bg-electric/10 border-electric/40 shadow-[0_0_20px_rgba(0,209,255,0.1)]"
                      : "bg-card/40 border-border hover:bg-card/70 hover:border-border"
                  }`}
                >
                  <div className="relative flex items-center">
                    {isActive && (
                      <span className="absolute -left-[22px] w-2 h-2 rounded-full bg-electric shadow-[0_0_8px_rgba(0,209,255,0.6)]" />
                    )}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isActive ? "bg-electric/20" : "bg-muted"
                    }`}>
                      <item.icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? "text-electric" : "text-muted-foreground"}`} />
                    </div>
                  </div>
                  <span className={`font-display text-sm uppercase transition-colors duration-300 ${
                    isActive ? "text-electric" : "text-muted-foreground group-hover:text-foreground"
                  }`} style={{ fontWeight: 700 }}>
                    {item.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right content */}
          <div className="flex-1 min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                    <active.icon className="w-6 h-6 text-electric" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground uppercase" style={{ fontWeight: 700 }}>
                    {active.title}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed mb-4">
                  {active.description}
                </p>
                {active.extra && (
                  <p className="text-sm text-muted-foreground/80 leading-relaxed italic mb-6 border-l-2 border-electric/30 pl-4">
                    {active.extra}
                  </p>
                )}
                <div className="space-y-3">
                  {active.bullets.map((b, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: j * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                      <span className="text-sm text-foreground/80">{b}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Deliverables;
