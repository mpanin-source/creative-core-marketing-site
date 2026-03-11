import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, ArrowRight, Users, User } from "lucide-react";

type Avatar = "solo" | "scaling";

const FitSection = () => {
  const [avatar, setAvatar] = useState<Avatar>("scaling");
  const scrollToContact = () => { document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section className="section-padding" id="fit">
      <div className="max-w-[1200px] mx-auto">
        <div className="container-narrow text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-bold tracking-widest text-accent uppercase">Qualification</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">IS THIS A FIT?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">We serve two types of clients. Which one sounds like you?</p>
        </div>

        <div className="flex gap-4 justify-center mb-10">
          {[{ key: "solo" as Avatar, icon: User, label: "Solo-Pro / Small Team" }, { key: "scaling" as Avatar, icon: Users, label: "Scaling Team (3+)" }].map(({ key, icon: Icon, label }) => (
            <button key={key} onClick={() => setAvatar(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-display text-sm font-bold transition-all ${avatar === key ? "border-accent bg-accent/10 text-accent shadow-lg" : "border-border text-muted-foreground hover:border-accent/50"}`}>
              <Icon className="w-4 h-4" />{label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {avatar === "solo" ? (
            <motion.div key="solo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-10">
                <div className="p-8 glass-card rounded-xl border-accent/20">
                  <h3 className="font-display text-xl font-bold text-foreground mb-6">YOU'RE A GOOD FIT IF:</h3>
                  <ul className="space-y-4">
                    {["Can commit 5–10 hours/week", "Own ad account access", "Budget: $5K–$20K total spend", "Want faster results than 30–45 days"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-foreground text-sm">{item}</span></li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-accent font-semibold">Your best option: TIER 2 (Seasonal Sprint) or Performance-Based Pricing</p>
                </div>
                <div className="p-8 glass-card rounded-xl border-accent/30 shadow-[0_0_30px_hsl(var(--accent)/0.08)]">
                  <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                    <span className="text-xs font-bold tracking-wider text-accent uppercase">Solo-Pro Only</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">CAN'T AFFORD UPFRONT? WE'VE GOT OPTIONS.</h3>
                  <p className="text-sm text-muted-foreground mb-6">Performance-based pricing for solo-pros.</p>
                  <div className="space-y-3 mb-6">
                    {[{ l: "Entry (Phase 1 Setup)", v: "$2,000" }, { l: "Performance Kicker", v: "15% of lead value" }, { l: "Cap", v: "$15K or 90 days" }, { l: "After Cap", v: "$299/mo flat" }].map((r, i) => (
                      <div key={i} className="flex justify-between items-center p-3 bg-secondary rounded-lg">
                        <span className="text-sm text-foreground">{r.l}</span>
                        <span className="font-display text-lg font-bold text-accent">{r.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mb-6">
                    <p className="text-xs font-bold tracking-wider text-accent uppercase mb-3">YOUR PATH TO OWNERSHIP</p>
                    <div className="flex items-center gap-1 overflow-x-auto pb-2">
                      {[{ label: "$2K Setup", sub: "You're in" }, { label: "15% Kicker", sub: "We earn as you earn" }, { label: "$15K Cap Hit", sub: "Kicker stops" }, { label: "$299/mo", sub: "Forever" }].map((step, i) => (
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
                  <motion.button onClick={scrollToContact} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="w-full btn-gold px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all">
                    SCHEDULE GROWTH AUDIT (PERFORMANCE OPTION)<ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div key="scaling" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="max-w-2xl mx-auto">
              <div className="p-8 glass-card rounded-xl border-accent/20">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">YOU'RE A GOOD FIT IF:</h3>
                <ul className="space-y-4">
                  {["Team of 2+ people", "Budget: $20K+ annual ad spend", "Want full done-with-you sprint", "Need training + handoff documentation"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3"><Check className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-foreground text-sm">{item}</span></li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-accent font-semibold">Your best option: TIER 3 (Sprint Plus) or TIER 4 (90-Day Partnership)</p>
                <motion.button onClick={() => document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" })} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full btn-gold px-6 py-3 rounded-lg text-sm flex items-center justify-center gap-2 transition-all">
                  VIEW TIER 3 & 4<ArrowRight size={16} />
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
