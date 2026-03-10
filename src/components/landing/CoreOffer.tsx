import { useState } from "react";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CoreOffer = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      title: "PHASE 1 · SEASONAL ALIGNMENT & OFFER FIT (5–10 days)",
      problem: "\"I don't know my seasonal window or how to position to it\"",
      summary:
        "Deep-dive audit to map YOUR market's exact seasonal demand calendar. Craft buyer personas, seasonal positioning angles, and set KPI targets.",
      bullets: [
        "Written seasonal demand map for your market",
        "Buyer persona: who buys during YOUR peak window",
        "Positioning document (copy angles tested, e.g. \"Don't freeze this winter\")",
        "KPI target sheet: leads, booked calls, and ROAS benchmarks",
      ],
      effort: "Time investment from you: 3–4 hours (interview + feedback)",
    },
    {
      title: "PHASE 2 · HIGH-INTENSITY LAUNCH & OPTIMIZATION (20–25 days)",
      problem: "\"I need ads live fast and I need them to convert\"",
      summary:
        "Campaign architecture on Meta + Google built around seasonal positioning. Rapid creative testing, daily optimization, and lead quality filtering.",
      bullets: [
        "Live paid campaigns (Meta + Google) with seasonal positioning",
        "A/B test headlines, CTAs, form fields on landing page",
        "Launch 3 ad angles, kill the losers by Day 5",
        "Daily budget reallocation to top-performing angles",
        "Non-pitch SMS vetting to prove lead quality before you call",
        "Lead quality scoring to separate real buyers from tire-kickers",
        "Daily performance dashboard (CPC, CVR, ROAS)",
      ],
      effort: "Time investment from you: 5–10 hours/week (review ads, approve creative)",
      guarantee:
        "First-Peak Lead Guarantee: If we don't generate 2x your total ad spend in qualified lead value by the end of your peak window, we work for free until we do.",
    },
    {
      title: "PHASE 3 · DATA-DRIVEN HANDOVER & SCALE PLAN (5–10 days)",
      problem: "\"How do I maintain this after you're done? What's next?\"",
      summary:
        "Comprehensive documentation, team training, and a 90-day growth roadmap so you can maintain and scale independently.",
      bullets: [
        "Comprehensive Loom walkthrough of every campaign and decision",
        "90-day bottleneck map with prioritized action items",
        "Team training: your in-house team learns to maintain + optimize",
        "Quarterly growth roadmap",
        "Optional retainer proposal if you want ongoing support",
      ],
      effort: "Time investment from you: 3–5 hours (review Loom, ask questions)",
    },
  ];

  const included = [
    "Seasonal demand mapping for your specific market",
    "Buyer persona + peak-window positioning (2–3 test angles)",
    "Paid campaign setup (Meta, Google, or both)",
    "Landing page A/B testing + optimization",
    "Daily performance monitoring + budget reallocation",
    "Lead quality scoring + filtering",
    "First-Peak Lead Guarantee (work for free if we miss targets)",
    "Comprehensive Loom documentation (Phase 3)",
    "90-day growth roadmap",
    "Optional: 90-day retainer proposal",
  ];

  const notIncluded = [
    "A long-term expensive retainer with undefined scope",
    "A \"magic lead machine\" (your offer still has to be solid)",
    "Organic social media, SEO, or content marketing",
    "Endless revisions or hand-holding (focused sprint, not ongoing consulting)",
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
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4">
            BY INVITE ONLY AFTER YOUR FREE CORE FUNNEL AUDIT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 tracking-wider">
            THE SEASONAL GROWTH SPRINT (30–45 DAYS)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A focused 30–45 day sprint for HVAC, Roofing, and Solar companies
            who are ready to stop wasting ad spend and start capturing buyers
            during their peak-demand windows. We rebuild your entire approach
            around timing, not guessing.
          </p>
          <p className="text-sm text-accent font-semibold mt-4">
            Real dollar value of deliverables: $15,000–$25,000 if purchased separately
          </p>
        </div>

        {/* Three Phases */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`bg-card rounded-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedPhase === index
                  ? "border-accent shadow-lg"
                  : "border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-md"
              }`}
              onClick={() => togglePhase(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground tracking-wider">
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
                      <p className="text-xs text-muted-foreground italic">
                        {phase.effort}
                      </p>
                      {phase.guarantee && (
                        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                          <p className="text-sm font-bold text-accent">
                            {phase.guarantee}
                          </p>
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
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="p-6 bg-background rounded-lg shadow-md border border-accent/20">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider">
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

          <div className="p-6 bg-muted rounded-lg shadow-md">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider">
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
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-xl" />
            <div className="relative bg-gradient-to-r from-card via-card to-card border-2 border-accent/30 rounded-xl px-8 py-6 md:px-12 md:py-8 shadow-lg">
              <p className="text-2xl md:text-3xl lg:text-4xl font-display tracking-wider text-foreground leading-tight">
                EVERY SEASONAL SPRINT STARTS WITH A{" "}
                <button
                  onClick={scrollToContact}
                  className="text-accent hover:text-accent/80 italic underline underline-offset-4 decoration-2 transition-colors duration-200"
                >
                  FREE CORE FUNNEL AUDIT
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
