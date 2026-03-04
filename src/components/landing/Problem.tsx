import { motion } from "framer-motion";

const problems = [
  {
    num: "1",
    title: "You're running heating ads in June",
    description:
      "Most HVAC companies run year-round campaigns because their agency said \"consistency matters.\" You're paying for 10,000 impressions in July when nobody is Googling \"furnace repair.\" Result: 70% of budget wasted on off-season clicks.",
  },
  {
    num: "2",
    title: "Your peak-season windows are unplanned",
    description:
      "When Feb 1 hits and the freeze warnings come, your competitors already have campaigns live. You scramble to launch ads, make mistakes, and miss the $30K revenue opportunity.",
  },
  {
    num: "3",
    title: "You have no idea who your seasonal buyer is",
    description:
      "Your lead quality is mixed—some are real buyers, some are tire-kickers. You don't know HOW to position to seasonal buying behavior, so you sound like everyone else.",
  },
  {
    num: "4",
    title: "You can't prove seasonal demand actually exists",
    description:
      'Your gut says "people buy furnace repairs in winter" but you have zero data. We show you the data, the exact window, and the buyer profile for YOUR market.',
  },
];

const Problem = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-wider">
            WHY YOUR ADS ARE BLEEDING MONEY
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            4 seasonal pain points killing HVAC, Roofing & Solar ad budgets right now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center mb-5">
                <span className="text-destructive font-display text-lg">{p.num}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-wider">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
