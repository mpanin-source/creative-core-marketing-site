import { motion } from "framer-motion";
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
    bgColor: "bg-[hsl(213,68%,58%,0.06)]",
  },
  {
    icon: Hammer,
    phase: "PHASE 2",
    days: "Days 8-14",
    title: "Creative Execution",
    subtitle: "We rebuild for speed",
    description: "10+ ad creative variations (Meta + Google). 2-3 high-converting landing pages. CRM setup with lead scoring automation. All designed to eliminate friction and accelerate decisions.",
    stat: "Average 40% improvement in landing page conversion",
    bgColor: "bg-[hsl(157,52%,65%,0.06)]",
  },
  {
    icon: Target,
    phase: "PHASE 3",
    days: "Days 15-45",
    title: "Launch & Scale",
    subtitle: "We run, test, improve daily",
    description: "Ads go live. We monitor daily, A/B test creative, optimize for qualified call volume (not just clicks). You get 15+ qualified calls in 45 days, or we refund 50% of your sprint investment.",
    stat: "$15-$40 cost per qualified lead (Meta) vs $75+ industry avg",
    bgColor: "bg-[hsl(263,54%,52%,0.06)]",
  },
];

const ThreePillarEngine = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-alt" id="engine">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">
            THE SEASONAL SPRINT METHOD
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            HOW 30-DAY SEASONAL SPRINTS WORK
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            We don't lock you into 12-month retainers. We build intensive 30-45 day campaigns designed to capture your peak season, then give you the option to continue monthly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-16">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`${phase.bgColor} rounded-xl p-6 md:p-8 border border-border hover:shadow-card transition-all duration-200 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <phase.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-bold text-accent tracking-wider">{phase.phase}</p>
                  <p className="text-xs text-muted-foreground">{phase.days}</p>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {phase.title}
              </h3>
              <p className="text-xs text-accent font-semibold mb-4">{phase.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {phase.description}
              </p>
              <div className="p-3 bg-card border border-border rounded-lg">
                <p className="text-xs font-semibold text-accent">{phase.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tool stack */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {["Meta Ads", "Google Search + LSA", "Higgsfield (UGC)", "GoHighLevel CRM"].map((tool) => (
              <span key={tool} className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium text-foreground shadow-subtle">
                {tool}
              </span>
            ))}
          </div>
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ThreePillarEngine;