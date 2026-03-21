import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Activity, Shield, Lock, Eye } from "lucide-react";

const moats = [
  {
    icon: Activity,
    label: "Pixel Tracking",
    title: "PIXEL TRACKING INTELLIGENCE",
    description: "We install behavioral tracking on your landing pages. A visitor who scrolls 80% of your page, watches your video, and clicks your CTA twice is flagged as a warm lead — before they even submit a form. Your sales team calls the hottest leads first.",
    bullets: [
      "Behavioral tracking on all landing pages",
      "Warm lead scoring before form submission",
      "Sales team focuses on hottest prospects",
      "Real-time visitor intent signals",
    ],
  },
  {
    icon: Lock,
    label: "Territory Lock",
    title: "ONE CLIENT PER NICHE PER AREA",
    description: "We don't work with your competitors. If we sign an HVAC company in Phoenix, no other HVAC company in Phoenix can hire us. Your territory is locked. Your campaigns, creative, and data stay exclusive.",
    bullets: [
      "Exclusive territory protection",
      "No competing clients in your niche/area",
      "Your data and creative stay private",
      "Competitive advantage by default",
    ],
  },
  {
    icon: Shield,
    label: "Full Ownership",
    title: "YOU OWN EVERYTHING",
    description: "Your ad accounts. Your landing pages. Your CRM data. Your creative assets. If you leave tomorrow, you take it all. We build in YOUR accounts, not ours. No hostage situations.",
    bullets: [
      "Your ad accounts, your control",
      "Landing pages built in your domain",
      "CRM data stays with you",
      "Leave anytime, take everything",
    ],
  },
  {
    icon: Eye,
    label: "Zero Markup",
    title: "FULL TRANSPARENCY, ZERO MARKUP",
    description: "You pay Meta and Google directly. We never touch your ad spend. You see every dollar, every click, every conversion in real-time dashboards. Our only revenue is the sprint fee.",
    bullets: [
      "Pay ad platforms directly",
      "We never touch your ad spend",
      "Real-time performance dashboards",
      "Our only fee is the management fee",
    ],
  },
];

const STEP_COUNT = moats.length;

const WhyDifferent = () => {
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
  const opacity2 = useTransform(scrollYProgress, [band * 2, band * 2 + band * 0.15, band * 2 + band * 0.85, band * 3], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [band * 3, band * 3 + band * 0.15, band * 3 + band * 0.85, 1], [0, 1, 1, 0]);
  const stepOpacities = [opacity0, opacity1, opacity2, opacity3];

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="why-different">
      {/* Mobile: stacked cards */}
      <div className="md:hidden px-6 py-16">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE TECHNICAL MOAT
          </p>
          <h2 className="text-3xl font-display text-foreground" style={{ fontWeight: 900 }}>
            WHY WE'RE <span className="italic text-shimmer-blue">DIFFERENT</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {moats.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/60 backdrop-blur-sm outcome-card"
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
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop: LangChain-style horizontal tabs with sticky pinning */}
      <div ref={containerRef} className="hidden md:block relative" style={{ height: '250vh' }}>
        <div className="sticky top-0 h-screen flex flex-col justify-center">
          {/* Header inside sticky area */}
          <div className="text-center mb-10 px-8">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
              THE TECHNICAL MOAT
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
              WHY WE'RE <span className="italic text-shimmer-blue">DIFFERENT</span>
            </h2>
          </div>

          {/* Horizontal tab bar */}
          <div className="max-w-4xl mx-auto w-full px-8 mb-2">
            <div className="flex items-center justify-center gap-1 p-1.5 rounded-2xl bg-card/40 border border-border backdrop-blur-sm">
              {moats.map((item, i) => {
                const isActive = i === activeIdx;
                return (
                  <div
                    key={item.label}
                    className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl transition-all duration-400 cursor-default flex-1 justify-center ${
                      isActive
                        ? "bg-electric/10 shadow-[0_0_20px_rgba(0,209,255,0.12)]"
                        : ""
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="why-tab-bg"
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
          <div className="max-w-4xl mx-auto w-full px-8 mt-6">
            <div className="relative min-h-[320px]">
              {moats.map((item, i) => (
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
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
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

export default WhyDifferent;
