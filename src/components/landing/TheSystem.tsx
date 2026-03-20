import { motion, type Variants } from "framer-motion";
import { Sun, Snowflake, Bot, TrendingUp, Calendar, BarChart3, Megaphone, RefreshCw } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const inSeason = [
  { icon: Megaphone, title: "Sprint Campaigns", desc: "30-day blitz campaigns timed to your peak season. Maximum budget, maximum aggression." },
  { icon: TrendingUp, title: "Lead Surge Protocol", desc: "We scale ad spend and creative output to capture every high-intent prospect in your market." },
  { icon: Calendar, title: "Calendar Domination", desc: "Goal: fill your schedule 2-3 weeks out so you can plan crews, equipment, and capacity." },
  { icon: BarChart3, title: "Daily Optimization", desc: "Real-time bid adjustments, creative swaps, and budget reallocation based on what's converting." },
];

const outOfSeason = [
  { icon: Bot, title: "Wake-Up Agent", desc: "AI-powered reactivation sequences that re-engage past leads 6-8 weeks before your next peak season.", highlight: true },
  { icon: RefreshCw, title: "Retargeting Nurture", desc: "Low-cost retargeting keeps your brand top-of-mind with warm audiences through the off-season." },
  { icon: Snowflake, title: "Content Banking", desc: "We stockpile testimonials, case studies, and UGC so your next sprint launches with loaded creative." },
  { icon: Sun, title: "Pre-Season Warm-Up", desc: "Ramp campaigns 3-4 weeks before peak to build pipeline momentum before competitors wake up." },
];

const TheSystem = () => {
  return (
    <section className="px-6 py-32 md:px-8" id="system">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE SYSTEM
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
            A YEAR-ROUND GROWTH ENGINE
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Most agencies disappear when leads slow down. Our system keeps your pipeline warm 365 days a year.
          </p>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* In-Season Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
          >
            <div className="flex items-center gap-2 mb-6">
              <Sun className="w-5 h-5 text-electric" />
              <h3 className="font-display text-xl text-electric uppercase" style={{ fontWeight: 700 }}>In-Season</h3>
            </div>
            <div className="flex flex-col gap-4">
              {inSeason.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                  className="p-6 rounded-xl border border-electric/20 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-electric/50 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-electric/10 flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-electric" />
                    </div>
                    <div>
                      <h4 className="font-display text-base text-foreground mb-1" style={{ fontWeight: 700 }}>{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Out-of-Season Column */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={sectionFade}
          >
            <div className="flex items-center gap-2 mb-6">
              <Snowflake className="w-5 h-5 text-safety" />
              <h3 className="font-display text-xl text-safety uppercase" style={{ fontWeight: 700 }}>Out-of-Season</h3>
            </div>
            <div className="flex flex-col gap-4">
              {outOfSeason.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                  className={`p-6 rounded-xl border bg-card/60 backdrop-blur-sm transition-all duration-300 ${
                    item.highlight
                      ? "border-safety/40 hover:border-safety/70 hover:shadow-[0_0_24px_rgba(255,107,0,0.25)]"
                      : "border-safety/20 hover:border-safety/50 hover:shadow-[0_0_20px_rgba(255,107,0,0.15)]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      item.highlight ? "bg-safety/20" : "bg-safety/10"
                    }`}>
                      <item.icon className="w-4 h-4 text-safety" />
                    </div>
                    <div>
                      <h4 className={`font-display text-base mb-1 ${item.highlight ? "text-safety" : "text-foreground"}`} style={{ fontWeight: 700 }}>
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TheSystem;
