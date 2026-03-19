import { motion, type Variants } from "framer-motion";
import { Search, Hammer, Target, ArrowRight } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "PHASE 1",
    days: "Days 1-7",
    title: "Speed to Decision Analysis",
    subtitle: "We find friction in your funnel",
    description: "We analyze your current offer → ad → landing page → call flow and identify where prospects drop off. You get a 15-min Loom breakdown showing exactly where you're losing money.",
    stat: "Most businesses lose 60% of leads to funnel friction",
    bgColor: "bg-[hsla(207,38%,76%,0.08)]",
  },
  {
    icon: Hammer,
    phase: "PHASE 2",
    days: "Days 8-14",
    title: "Creative Execution",
    subtitle: "We rebuild for speed",
    description: "10+ ad creative variations (Meta + Google). 2-3 high-converting landing pages. CRM setup with lead scoring automation. All designed to eliminate friction and accelerate decisions.",
    stat: "Average 40% improvement in landing page conversion",
    bgColor: "bg-[hsla(96,15%,43%,0.08)]",
  },
  {
    icon: Target,
    phase: "PHASE 3",
    days: "Days 15-45",
    title: "Launch & Scale",
    subtitle: "We run, test, improve daily",
    description: "Ads go live. We monitor daily, A/B test creative, optimize for qualified call volume (not just clicks). You get 15+ qualified calls in 45 days, or we refund 50% of your sprint investment.",
    stat: "$15-$40 cost per qualified lead (Meta) vs $75+ industry avg",
    bgColor: "bg-[hsla(202,35%,45%,0.08)]",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const ThreePillarEngine = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-blue" id="engine">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "hsl(96, 15%, 43%)" }}>
            THE SEASONAL SPRINT METHOD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-4">
            HOW 30-DAY SEASONAL SPRINTS WORK
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            We don't lock you into 12-month retainers. We build intensive 30-45 day campaigns designed to capture your peak season, then give you the option to continue monthly.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className={`${phase.bgColor} rounded-xl p-6 md:p-8 border border-accent/30 glass-hover`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center feature-icon" style={{ background: "hsla(207, 38%, 76%, 0.15)" }}>
                  <phase.icon className="w-5 h-5" style={{ color: "hsl(96, 15%, 43%)" }} />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wider" style={{ color: "hsl(96, 15%, 43%)" }}>{phase.phase}</p>
                  <p className="text-xs text-muted-foreground">{phase.days}</p>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {phase.title}
              </h3>
              <p className="text-xs font-semibold mb-4" style={{ color: "hsl(207, 38%, 76%)" }}>{phase.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {phase.description}
              </p>
              <div className="p-3 bg-card border border-border rounded-lg">
                <p className="text-xs font-semibold" style={{ color: "hsl(96, 15%, 43%)" }}>{phase.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool stack */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Meta Ads", "Google Search + LSA", "Higgsfield (UGC)", "GoHighLevel CRM"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-card border border-accent/30 rounded-lg text-sm font-medium text-foreground shadow-subtle glass-hover">
                {tool}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillarEngine;
