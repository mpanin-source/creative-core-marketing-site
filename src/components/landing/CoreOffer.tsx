import { useState } from "react";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CoreOffer = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      title: "PHASE 1 · SEASONAL ALIGNMENT & OFFER FIT (5–10 days)",
      problem: "\"I don't know my seasonal window or how to position to it\"",
      summary: "Deep-dive audit to map YOUR market's exact seasonal demand calendar.",
      bullets: [
        "Written seasonal demand map for your market",
        "Buyer persona: who buys during YOUR peak window",
        "Positioning document (copy angles tested)",
        "KPI target sheet: leads, booked calls, and ROAS benchmarks",
      ],
      effort: "Time investment from you: 3–4 hours (interview + feedback)",
    },
    {
      title: "PHASE 2 · HIGH-INTENSITY LAUNCH & OPTIMIZATION (20–25 days)",
      problem: "\"I need ads live fast and I need them to convert\"",
      summary: "Campaign architecture on Meta + Google built around seasonal positioning.",
      bullets: [
        "Live paid campaigns (Meta + Google) with seasonal positioning",
        "A/B test headlines, CTAs, form fields on landing page",
        "Launch 3 ad angles, kill the losers by Day 5",
        "Daily budget reallocation to top-performing angles",
        "Non-pitch SMS vetting to prove lead quality before you call",
        "Lead quality scoring to separate real buyers from tire-kickers",
        "Daily performance dashboard (CPC, CVR, ROAS)",
      ],
      effort: "Time investment from you: 5–10 hours/week",
      guarantee: "The 2x Lead Value Guarantee: If we don't generate at least 2x your ad spend in vetted appointment value in your first window, we work for free until we do.",
    },
    {
      title: "PHASE 3 · DATA-DRIVEN HANDOVER & SCALE PLAN (5–10 days)",
      problem: "\"How do I maintain this after you're done? What's next?\"",
      summary: "Comprehensive documentation, team training, and a 90-day growth roadmap.",
      bullets: [
        "Comprehensive Loom walkthrough of every campaign and decision",
        "90-day bottleneck map with prioritized action items",
        "Team training: your in-house team learns to maintain + optimize",
        "Quarterly growth roadmap",
        "Optional retainer proposal if you want ongoing support",
      ],
      effort: "Time investment from you: 3–5 hours",
    },
  ];

  const included = [
    "Seasonal demand mapping for your specific market",
    "Buyer persona + peak-window positioning",
    "Paid campaign setup (Meta, Google, or both)",
    "Landing page A/B testing + optimization",
    "Daily performance monitoring + budget reallocation",
    "Lead quality scoring + filtering",
    "First-Peak Lead Guarantee",
    "Comprehensive Loom documentation",
    "90-day growth roadmap",
    "Optional: 90-day retainer proposal",
  ];

  const notIncluded = [
    "A long-term expensive retainer with undefined scope",
    "A \"magic lead machine\" (your offer still has to be solid)",
    "Organic social media, SEO, or content marketing",
    "Endless revisions (focused sprint, not ongoing consulting)",
    "Guaranteed revenue (we guarantee lead QUALITY and QUANTITY, not close rates)",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section className="section-padding" id="offer">
      <div className="max-w-[1200px] mx-auto">
        <div className="container-narrow text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            BY INVITE ONLY AFTER YOUR FREE GROWTH AUDIT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-foreground mb-6">
            THE SEASONAL GROWTH SPRINT (30–45 DAYS)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A focused sprint for Home Services companies ready to stop wasting ad spend and start capturing buyers during peak-demand windows.
          </p>
          <p className="text-sm text-accent font-semibold mt-4">
            Real dollar value: $15,000–$25,000 if purchased separately
          </p>
        </div>

        {/* Three Phases */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`glass-card rounded-lg cursor-pointer overflow-hidden transition-all duration-300 ${
                expandedPhase === index
                  ? "border-accent/50 shadow-lg"
                  : "hover:border-accent/30 hover:-translate-y-1 hover:shadow-md"
              }`}
              onClick={() => togglePhase(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 pr-4">
                    {phase.summary}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </div>

              <AnimatePresence>
                {expandedPhase === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/50 space-y-4">
                      <p className="text-xs text-destructive italic">
                        Problem this solves: {phase.problem}
                      </p>
                      <ul className="space-y-3">
                        {phase.bullets.map((bullet, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                            <span className="text-sm text-foreground/90">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-muted-foreground italic">{phase.effort}</p>
                      {phase.guarantee && (
                        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                          <p className="text-sm font-bold text-accent">{phase.guarantee}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Included / Not Included */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto mb-12">
          <div className="p-8 glass-card rounded-lg border-accent/20">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              What's Included
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 glass-card rounded-lg">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">
              What This Is Not
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground/60 mt-0.5 shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-accent/5 rounded-2xl blur-xl" />
            <div className="relative glass-card border-accent/30 rounded-xl px-8 py-6 md:px-12 md:py-8 shadow-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-foreground leading-tight">
                EVERY SEASONAL SPRINT STARTS WITH A{" "}
                <button
                  onClick={scrollToContact}
                  className="text-accent hover:text-accent/80 italic underline underline-offset-4 decoration-2 transition-colors duration-200"
                >
                  FREE GROWTH AUDIT
                </button>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreOffer;
