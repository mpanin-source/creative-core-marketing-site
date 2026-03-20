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
  },
  {
    icon: Hammer,
    phase: "PHASE 2",
    days: "Days 8-14",
    title: "Creative Execution",
    subtitle: "We rebuild for speed",
    description: "10+ ad creative variations (Meta + Google). 2-3 high-converting landing pages. CRM setup with lead scoring automation. All designed to eliminate friction and accelerate decisions.",
    stat: "Average 40% improvement in landing page conversion",
  },
  {
    icon: Target,
    phase: "PHASE 3",
    days: "Days 15-45",
    title: "Launch & Scale",
    subtitle: "We run, test, improve daily",
    description: "Ads go live. We monitor daily, A/B test creative, optimize for qualified call volume (not just clicks). You get <span class='text-safety font-bold'>15+ qualified calls</span> in 45 days, or we <span class='text-safety font-bold'>refund</span> 50% of your sprint investment.",
    stat: "$15-$40 cost per qualified lead (Meta) vs $75+ industry avg",
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
    <section className="px-6 py-32 md:px-8" id="engine">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">
            THE SEASONAL SPRINT METHOD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
            HOW 30-DAY SEASONAL SPRINTS WORK
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            We don't lock you into 12-month retainers. We build intensive 30-45 day campaigns designed to capture your peak season, then give you the option to continue monthly.
          </p>
        </motion.div>

        {/* Vertical Stack with Connecting Line */}
        <div className="relative mb-16">
          {/* Electric Blue connecting line */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(to bottom, transparent, hsl(191, 100%, 50%) 10%, hsl(191, 100%, 50%) 90%, transparent)",
              opacity: 0.3,
            }}
          />

          <div className="flex flex-col gap-8">
            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
                className="relative z-10 bg-card rounded-xl p-8 md:p-10 border border-border transition-all duration-300 hover:border-safety/60 glass-hover"
                style={{
                  // Override the default blue glow with orange on hover via CSS below
                }}
              >
                {/* Phase connector dot on the line */}
                <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-6 h-6 rounded-full bg-background border-2 border-electric flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-electric" />
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center feature-icon bg-electric/10">
                    <phase.icon className="w-5 h-5 text-electric" />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-wider text-electric">{phase.phase}</p>
                    <p className="text-xs text-muted-foreground">{phase.days}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground mb-1" style={{ fontWeight: 700 }}>
                  {phase.title}
                </h3>
                <p className="text-xs font-semibold mb-4 text-electric/70">{phase.subtitle}</p>
                <p
                  className="text-sm text-muted-foreground leading-relaxed mb-4"
                  dangerouslySetInnerHTML={{ __html: phase.description }}
                />
                <div className="p-3 bg-secondary border border-border rounded-lg">
                  <p className="text-xs font-semibold text-electric">{phase.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Meta Ads", "Google Search + LSA", "Higgsfield (UGC)", "GoHighLevel CRM"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground shadow-subtle glass-hover">
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
