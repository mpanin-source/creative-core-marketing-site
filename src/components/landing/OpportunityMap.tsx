import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Thermometer, Sun, Snowflake } from "lucide-react";

const seasons = [
  {
    id: "q1",
    label: "Q1 (Jan–Mar)",
    title: "HEATING & FURNACE SEASON",
    icon: Snowflake,
    peak: "Feb 1 – Mar 15",
    mistake: "Bleeding money on summer AC ads",
    smart: "Capture homeowners panicking about heat",
  },
  {
    id: "q2",
    label: "Q2 (Apr–Jun)",
    title: "ROOF / SOLAR SEASON",
    icon: Sun,
    peak: "Apr 15 – May 30",
    mistake: 'Running generic "roof replacement" ads',
    smart: "Position before spring storms, tax incentives kick in",
  },
  {
    id: "q3",
    label: "Q3 (Jul–Sep)",
    title: "AC UPGRADES & MAINTENANCE",
    icon: Thermometer,
    peak: "Jul 1 – Aug 31",
    mistake: "Ad fatigue, budget depletion",
    smart: "Seasonal positioning + targeting homeowners suffering",
  },
];

export default function OpportunityMap() {
  const [activeQ, setActiveQ] = useState("q1");
  const active = seasons.find((s) => s.id === activeQ)!;
  const ActiveIcon = active.icon;

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="opportunity-map" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
              FOR HVAC / ROOFING / SOLAR
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-foreground mb-4">
              THE SEASONAL DEMAND CALENDAR
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "Seasonal momentum" isn't fluff—it's the literal buying cycle of
              your customers. Here's when they're ready to buy.
            </p>
          </div>

          {/* Quarter Selector */}
          <div className="flex gap-3 justify-center mb-8 flex-wrap">
            {seasons.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveQ(s.id)}
                className={`px-5 py-2.5 rounded-lg border font-display font-bold text-sm transition-all ${
                  activeQ === s.id
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border hover:border-accent/50 text-muted-foreground"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Active Season Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto glass-card rounded-2xl border-accent/20 p-8 md:p-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <ActiveIcon className="w-8 h-8 text-accent" />
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {active.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-secondary rounded-lg p-5 border border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-bold">
                    Peak Demand Window
                  </p>
                  <p className="font-display text-lg font-bold text-accent">{active.peak}</p>
                </div>

                <div className="bg-destructive/5 rounded-lg p-5 border border-destructive/20">
                  <p className="text-xs uppercase tracking-wider text-destructive mb-2 font-bold">
                    Most Companies
                  </p>
                  <p className="text-sm text-muted-foreground">{active.mistake}</p>
                </div>

                <div className="bg-accent/5 rounded-lg p-5 border border-accent/20">
                  <p className="text-xs uppercase tracking-wider text-accent mb-2 font-bold">
                    Smart Move
                  </p>
                  <p className="text-sm text-foreground">{active.smart}</p>
                </div>
              </div>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm uppercase tracking-wider transition-all"
              >
                Capture This Window
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
