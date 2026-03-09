import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Users, User } from "lucide-react";

type Avatar = "solo" | "scaling";

const FitSection = () => {
  const [avatar, setAvatar] = useState<Avatar>("scaling");

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card" id="fit">
      <div className="container-wide">
        <div className="container-narrow text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">
              Qualification
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wider">
            IS THIS A FIT?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We serve two types of clients. Which one sounds like you?
          </p>
        </div>

        {/* Avatar Toggle */}
        <div className="flex gap-4 justify-center mb-10">
          <button
            onClick={() => setAvatar("solo")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-display text-sm tracking-wider transition-all ${
              avatar === "solo"
                ? "border-accent bg-accent/10 text-accent shadow-lg"
                : "border-border text-muted-foreground hover:border-accent/50"
            }`}
          >
            <User className="w-4 h-4" />
            Solo-Pro / Small Team
          </button>
          <button
            onClick={() => setAvatar("scaling")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-display text-sm tracking-wider transition-all ${
              avatar === "scaling"
                ? "border-accent bg-accent/10 text-accent shadow-lg"
                : "border-border text-muted-foreground hover:border-accent/50"
            }`}
          >
            <Users className="w-4 h-4" />
            Scaling Team (3+)
          </button>
        </div>

        <AnimatePresence mode="wait">
          {avatar === "solo" ? (
            <motion.div
              key="solo"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Fit Criteria */}
                <div className="p-8 bg-background rounded-xl border-2 border-accent/20">
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-6">
                    YOU'RE A GOOD FIT IF:
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Can commit 5–10 hours/week (not 30+)",
                      "Own ad account access (no team sign-off needed)",
                      "Budget: $5K–$20K total spend",
                      "Want faster results than 30–45 days",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-accent font-semibold">
                    Your best option: TIER 2 (Seasonal Sprint) or Performance-Based Pricing
                  </p>
                </div>

                {/* Performance-Based Option */}
                <div className="p-8 bg-background rounded-xl border-2 border-accent shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                    <span className="text-xs font-bold tracking-wider text-accent uppercase">
                      Solo-Pro Only
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-foreground tracking-wider mb-2">
                    CAN'T AFFORD UPFRONT? WE'VE GOT OPTIONS.
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Performance-based pricing designed for solo-pros testing seasonal positioning.
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                      <span className="text-sm text-foreground">Entry (Phase 1 Setup)</span>
                      <span className="font-display text-lg text-accent">$2,000</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                      <span className="text-sm text-foreground">Performance Kicker</span>
                      <span className="font-display text-lg text-accent">15% of lead value</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                      <span className="text-sm text-foreground">Cap</span>
                      <span className="font-display text-lg text-accent">$15K or 90 days</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                      <span className="text-sm text-foreground">After Cap</span>
                      <span className="font-display text-lg text-accent">$299/mo flat</span>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <p className="text-xs font-bold tracking-wider text-accent uppercase mb-3">YOUR PATH TO OWNERSHIP</p>
                    <div className="flex items-center gap-1 overflow-x-auto pb-2">
                      {[
                        { label: "$2K Setup", sub: "You're in" },
                        { label: "15% Kicker", sub: "We earn as you earn" },
                        { label: "$15K Cap Hit", sub: "Kicker stops" },
                        { label: "$299/mo", sub: "Forever" },
                      ].map((step, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <div className="px-3 py-2 bg-accent/10 border border-accent/20 rounded-lg text-center min-w-[80px]">
                            <p className="text-xs font-bold text-accent">{step.label}</p>
                            <p className="text-[10px] text-muted-foreground">{step.sub}</p>
                          </div>
                          {i < 3 && <ArrowRight className="w-3 h-3 text-accent/40 shrink-0" />}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-6">
                    <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wider">Example:</p>
                    <p className="text-sm text-foreground">
                      $10K ads → $100K leads over 90 days → You pay $2K + 15% = $17K total → After cap: $299/mo flat
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 italic">
                      "This isn't a retainer trap. There's a finish line. Once you hit the cap, you own a high-margin lead machine and we maintain it for $299/mo."
                    </p>
                  </div>

                  <motion.button
                    onClick={scrollToContact}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display text-sm tracking-wider hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                  >
                    SCHEDULE PHASE 1 AUDIT (PERFORMANCE OPTION)
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="scaling"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto"
            >
              <div className="p-8 bg-background rounded-xl border-2 border-accent/20">
                <h3 className="font-display text-xl text-foreground tracking-wider mb-6">
                  YOU'RE A GOOD FIT IF:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Team of 2+ people",
                    "Budget: $20K+ annual ad spend",
                    "Want full done-with-you sprint",
                    "Need training + handoff documentation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-accent font-semibold">
                  Your best option: TIER 3 (Sprint Plus) or TIER 4 (90-Day Partnership)
                </p>
                <motion.button
                  onClick={() =>
                    document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" })
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-display text-sm tracking-wider hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
                >
                  VIEW TIER 3 & 4
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FitSection;
