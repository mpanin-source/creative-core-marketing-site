import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, ArrowRight, Shield } from "lucide-react";

const sections = [
  {
    icon: AlertTriangle,
    tag: "PAIN POINT #1",
    headline: "Are You Getting Outbid in LSA?",
    problem: "You're fighting in the Red Sea—competing on proximity and review count. The big players have more of both. You can't win that war.",
    insight: "The top 5 HVAC agencies in Florida pay $75–160 per lead because they're stuck in this Red Sea.",
    solution: "Move to PPC first. Build your authority while competitors sleep. Use a killer offer to break the location barrier. Once you have 500+ reviews, come back to LSA and dominate.",
    cta: "We'll help you transition from LSA Red Sea to PPC Blue Sea",
    body: "If you're running Local Service Ads and constantly losing to competitors with more reviews, you're not alone. You've got a solid business. Good service. But Google prioritizes the guy with 10,000 reviews over your 200.",
  },
  {
    icon: TrendingUp,
    tag: "PAIN POINT #2",
    headline: "Seasonal Positioning Beats Year-Round Waste",
    problem: "You're fighting seasonal demand instead of riding it.",
    insight: "Abel Air (top local agency) charges $30–50 per lead because most of their leads come free (organic). Del-Air charges $75–160 because they waste money in off-season.",
    solution: "Front-load your budget to peak seasons. Don't spread it thin across 12 months. Same spend. 5–10x more leads. We show you exactly when to spend and when to hold back.",
    cta: "See how seasonal positioning beats generic year-round waste",
    body: "You're running ads year-round. January, July, doesn't matter. Same budget. Same desperation. Most agencies do this because it's easier—set and forget. But when it's 85°F in July, NOBODY is searching for furnace repair. You're paying $100/lead for window shoppers.",
  },
  {
    icon: Shield,
    tag: "PAIN POINT #3",
    headline: "Ready to Scale Beyond Your Local Market?",
    problem: "Your local authority doesn't travel. You start from zero in new markets.",
    insight: "Jack Rabbit (Fort Myers-based) scales into Englewood by using PPC with strong offers ($0 service call). They can't win LSA there (Veteran Air has too many reviews), so they buy their way in.",
    solution: "We use PPC to build your name in new markets first. Establish authority. Get reviews. THEN you move to LSA and own that market too. Regional scale without starting from zero every time.",
    cta: "Learn how we scale you regionally while protecting your margins",
    body: "You're crushing it in your home town. Everyone knows your name. Your LSA is performing. But when you try to expand to the next zip code over, you hit a wall. You're \"the new guy\" there. You don't have reviews in their market. You can't compete in LSA. You're stuck paying $120–150/lead in PPC.",
  },
];

const CompetitivePositioning = () => {
  return (
    <section className="section-padding bg-card" id="competitive">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <p className="text-sm font-medium tracking-widest text-accent uppercase mb-4">
            COMPETITIVE INTELLIGENCE
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 tracking-wider">
            WHY MOST HVAC AGENCIES LEAVE MONEY ON THE TABLE
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Three positioning failures we see in every market—and how to fix them.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background rounded-xl border border-border p-8 md:p-10"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full mb-4">
                <section.icon className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold tracking-widest text-accent uppercase">
                  {section.tag}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-foreground tracking-wider mb-4">
                {section.headline}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {section.body}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-destructive/5 border border-destructive/10 rounded-lg">
                  <p className="text-xs font-bold tracking-wider text-destructive uppercase mb-2">The Problem</p>
                  <p className="text-sm text-foreground">{section.problem}</p>
                </div>
                <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                  <p className="text-xs font-bold tracking-wider text-accent uppercase mb-2">The Insight</p>
                  <p className="text-sm text-foreground">{section.insight}</p>
                </div>
                <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <p className="text-xs font-bold tracking-wider text-green-600 uppercase mb-2">The Solution</p>
                  <p className="text-sm text-foreground">{section.solution}</p>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 font-medium transition-colors group"
              >
                {section.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitivePositioning;
