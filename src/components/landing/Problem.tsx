import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    num: "1",
    title: "The Ad",
    description: "Your ad looks like an ad. It gets scrolled past. We build UGC-style creative that looks native (real customer testimonials, before/after iPhone videos). Native creative outperforms 'ad-looking ads' by 3x.",
    bg: "bg-[hsl(213,68%,58%,0.05)]",
  },
  {
    num: "2",
    title: "The Landing Page",
    description: "Your landing page asks too many questions. Too many form fields. No social proof. No urgency. We redesign for one goal: speed to decision. Fewer fields, stronger proof, clear next step.",
    bg: "bg-[hsl(157,52%,65%,0.05)]",
  },
  {
    num: "3",
    title: "The Follow-Up",
    description: "Lead comes in. You call 2 hours later. They've already called 3 competitors. We automate 5-minute SMS response + lead scoring so you only call high-intent prospects when they're hot.",
    bg: "bg-[hsl(35,25%,94%)]",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const Problem = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-green" id="problem">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            WHERE YOUR FUNNEL IS LOSING MONEY
          </h2>
          <p className="text-lg text-muted-foreground">
            3 friction points we fix in every sprint.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-16">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`p-6 md:p-8 ${p.bg} rounded-xl border border-border shadow-subtle hover:-translate-y-1 hover:shadow-card transition-all duration-200`}
            >
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <span className="text-accent font-display text-lg font-bold">{p.num}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{p.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            Schedule Your Sprint Audit
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
