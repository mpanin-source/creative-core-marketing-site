import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Activity, Shield, Lock, Eye } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const moats = [
  {
    icon: Activity,
    title: "PIXEL TRACKING INTELLIGENCE",
    shortTitle: "Pixel Tracking",
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
    title: "ONE CLIENT PER NICHE PER AREA",
    shortTitle: "Territory Lock",
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
    title: "YOU OWN EVERYTHING",
    shortTitle: "Full Ownership",
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
    title: "FULL TRANSPARENCY, ZERO MARKUP",
    shortTitle: "Zero Markup",
    description: "You pay Meta and Google directly. We never touch your ad spend. You see every dollar, every click, every conversion in real-time dashboards. Our only revenue is the sprint fee.",
    bullets: [
      "Pay ad platforms directly",
      "We never touch your ad spend",
      "Real-time performance dashboards",
      "Our only fee is the management fee",
    ],
  },
];

const WhyDifferent = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = moats[activeIdx];

  return (
    <section className="px-6 py-32 md:px-8" id="why-different">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE TECHNICAL MOAT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            WHY WE'RE <span className="italic text-shimmer-blue">DIFFERENT</span>
          </h2>
        </motion.div>

        {/* Mobile: stacked cards */}
        <div className="md:hidden flex flex-col gap-4">
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
            {moats.map((item, i) => {
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
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {active.description}
                </p>
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

export default WhyDifferent;
