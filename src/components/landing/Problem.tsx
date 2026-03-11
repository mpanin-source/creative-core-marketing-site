import { motion } from "framer-motion";

const problems = [
  {
    num: "1",
    title: "You're running ads in the wrong season",
    description: "Most home service companies run year-round campaigns because their agency said \"consistency matters.\" Result: 70% of budget wasted on off-season clicks when nobody needs your service.",
  },
  {
    num: "2",
    title: "Your peak-season windows are unplanned",
    description: "When demand spikes, your competitors already have campaigns live. You scramble to launch ads, make mistakes, and miss the revenue window.",
  },
  {
    num: "3",
    title: "You have no follow-up system",
    description: "You're getting leads but losing them. No CRM, no SMS follow-up, no nurture sequence. That $15K replacement job walks out the door because nobody followed up at month 6.",
  },
  {
    num: "4",
    title: "Your old leads are dying on the vine",
    description: "Your database is full of past customers and old leads. Every month they get colder. Without reactivation, you're leaving tens of thousands in revenue on the table.",
  },
];

const Problem = () => {
  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="container-narrow text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">
            WHY YOUR ADS ARE BLEEDING MONEY
          </h2>
          <p className="text-lg text-muted-foreground">
            4 growth killers we see in every home service business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="p-6 md:p-8 glass-card rounded-lg"
            >
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center mb-4">
                <span className="text-destructive font-display text-lg font-bold">{p.num}</span>
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
