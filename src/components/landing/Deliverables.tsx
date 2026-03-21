import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { TrendingDown, Zap, UserCheck } from "lucide-react";

const outcomes = [
  {
    icon: TrendingDown,
    label: "Cost Per Lead",
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
    label: "Funnel Speed",
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
    label: "Lead Follow-Up",
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

const STEP_COUNT = outcomes.length;

const Deliverables = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIdx, setActiveIdx] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(STEP_COUNT - 1, Math.floor(v * STEP_COUNT));
    setActiveIdx(idx);
  });

  const band = 1 / STEP_COUNT;
  const opacity0 = useTransform(scrollYProgress, [0, band * 0.15, band * 0.85, band], [0, 1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [band, band + band * 0.15, band + band * 0.85, band * 2], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [band * 2, band * 2 + band * 0.15, band * 2 + band * 0.85, 1], [0, 1, 1, 0]);
  const stepOpacities = [opacity0, opacity1, opacity2];

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="deliverables">
      {/* Mobile: stacked cards */}
      <div className="md:hidden px-6 py-16">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            OUTCOMES, NOT FEATURES
          </p>
          <h2 className="text-3xl font-display text-foreground" style={{ fontWeight: 900 }}>
            HERE'S WHAT <span className="italic text-shimmer-blue">CHANGES</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
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
      </div>

      {/* Desktop: LangChain-style horizontal tabs with sticky pinning */}
      <div ref={containerRef} className="hidden md:block relative" style={{ height: `${STEP_COUNT * 70}vh` }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          {/* Header inside sticky area */}
          <div className="text-center mb-10 px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
              OUTCOMES, NOT FEATURES
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
              HERE'S WHAT <span className="italic text-shimmer-blue">CHANGES</span>
            </h2>
          </div>

          {/* Horizontal tab bar */}
          <div className="max-w-3xl mx-auto w-full px-8 mb-2">
            <div className="flex items-center justify-center gap-1 p-1.5 rounded-2xl bg-card/40 border border-border backdrop-blur-sm">
              {outcomes.map((item, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={item.label}
                    className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-400 cursor-default flex-1 justify-center ${
                      isActive ? "bg-electric/10 shadow-[0_0_20px_rgba(0,209,255,0.12)]" : ""
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="del-tab-bg"
                        className="absolute inset-0 rounded-xl border border-electric/40 bg-electric/5"
                        transition={{ type: "spring", stiffness: 200, damping: 28 }}
                      />
                    )}
                    <item.icon className={`relative z-10 w-4 h-4 transition-colors duration-300 ${
                      isActive ? "text-electric" : "text-muted-foreground"
                    }`} />
                    <span className={`relative z-10 font-display text-sm uppercase transition-colors duration-300 ${
                      isActive ? "text-electric" : "text-muted-foreground"
                    }`} style={{ fontWeight: 700 }}>
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-0.5 rounded-full bg-border/50 overflow-hidden">
              <motion.div className="h-full bg-electric rounded-full" style={{ width: progressBarWidth }} />
            </div>
          </div>

          {/* Content panel – cross-fade */}
          <div className="max-w-3xl mx-auto w-full px-8 mt-6">
            <div className="relative min-h-[340px]">
              {outcomes.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="absolute inset-0 p-10 rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
                  style={{ opacity: stepOpacities[i] }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-electric" />
                    </div>
                    <h3 className="font-display text-2xl text-foreground uppercase" style={{ fontWeight: 700 }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  {item.extra && (
                    <p className="text-sm text-muted-foreground/80 leading-relaxed italic mb-6 border-l-2 border-electric/30 pl-4">
                      {item.extra}
                    </p>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    {item.bullets.map((b, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{b}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
