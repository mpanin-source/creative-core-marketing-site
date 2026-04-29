import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { TrendingDown, Zap, Target, Check } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const tabs = [
  {
    icon: TrendingDown,
    label: "COST PER BOOKED JOB",
    headline: "YOUR COST PER BOOKED JOB DROPS 30–50%",
    body: "We don't care about leads. We care about jobs booked on your calendar. Most clients see a 30–50% reduction in what it costs to get a booked appointment within 3 weeks — through better targeting, sharper offers, and continuous testing.",
    callout: "Lower acquisition cost = more profit per job. That's the only metric that matters.",
    bullets: [
      "More booked jobs for the same ad spend",
      "Continuous offer + creative testing (weekly)",
      "Transparent attribution — know which dollar made which sale",
      "Zero ad spend markup (you pay Google + Meta directly)",
    ],
  },
  {
    icon: Zap,
    label: "SPEED TO ANSWER",
    headline: "YOU ANSWER EVERY LEAD IN 60 SECONDS",
    body: "Google LSA ranking is based on response rate. Most contractors can't answer fast — they're on a job. We solve that with automated voice and SMS systems so you never miss a lead, never drop in rankings, and never lose a job to the faster competitor.",
    callout: "60-second response = 100x higher conversion. 5-minute response = lead is cold.",
    bullets: [
      "60-second automated voice + SMS response",
      "Generative AI conversations (not template scripts)",
      "Google LSA ranking boost from high response rate",
      "No lead left behind while you're working",
    ],
  },
  {
    icon: Target,
    label: "DOMINATION",
    headline: "DOMINATION IN YOUR SERVICE AREA",
    body: "Your service area isn't one zip code. It's the county you actually work in. We cover every relevant search, every neighborhood, every local audience that matters. One install becomes 200 more prospects in surrounding homes.",
    callout: "Your competitors can't hire us if they wanted to.",
    bullets: [
      "Neighborhood cluster targeting after every install",
      "One client per niche per county (territory lock)",
      "Full county-wide search dominance",
      "Geo-fenced retargeting around service areas",
    ],
    bigCallout: true,
  },
];

const OutcomesNotFeatures = () => {
  const [active, setActive] = useState(0);
  const t = tabs[active];
  const Icon = t.icon;

  return (
    <section id="outcomes" className="px-6 py-32 md:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">OUTCOMES, NOT FEATURES</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground" style={{ fontWeight: 900 }}>
            WHAT YOU ACTUALLY <span className="italic text-shimmer-blue">GET</span>
          </h2>
        </motion.div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {tabs.map((tab, i) => {
            const TabIcon = tab.icon;
            const isActive = i === active;
            return (
              <button
                key={tab.label}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider transition-all duration-200 border ${
                  isActive
                    ? "bg-electric/15 border-electric text-electric shadow-[0_0_20px_rgba(0,209,255,0.2)]"
                    : "bg-card border-border text-muted-foreground hover:border-electric/40 hover:text-foreground"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12"
          >
            <div className="outcome-icon w-12 h-12 rounded-xl bg-electric/10 flex items-center justify-center mb-5">
              <Icon className="w-6 h-6 text-electric" />
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-foreground uppercase mb-4" style={{ fontWeight: 900 }}>
              {t.headline}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-5 max-w-3xl">{t.body}</p>
            {!t.bigCallout && (
              <p className="italic text-sm md:text-base text-electric mb-6">{t.callout}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-3 mb-2">
              {t.bullets.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-electric flex-shrink-0 mt-1" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>
            {t.bigCallout && (
              <p className="italic text-electric text-xl md:text-2xl text-center mt-8 leading-snug" style={{ textShadow: "0 0 20px rgba(0,209,255,0.3)" }}>
                "{t.callout}"
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OutcomesNotFeatures;
