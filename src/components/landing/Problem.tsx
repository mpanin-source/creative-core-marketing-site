import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const problems = [
  {
    num: "1",
    title: "The Ad",
    description: "Your ad looks like an ad. It gets scrolled past. We build UGC-style creative that looks native (real customer testimonials, before/after iPhone videos). Native creative outperforms 'ad-looking ads' by 3x.",
  },
  {
    num: "2",
    title: "The Landing Page",
    description: "Your landing page asks too many questions. Too many form fields. No social proof. No urgency. We redesign for one goal: speed to decision. Fewer fields, stronger proof, clear next step.",
  },
  {
    num: "3",
    title: "The Follow-Up",
    description: "Lead comes in. You call 2 hours later. They've already called 3 competitors. We automate 5-minute SMS response + lead scoring so you only call high-intent prospects when they're hot.",
  },
];

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const Problem = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-warm" id="problem">
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4" style={{ fontWeight: 700 }}>
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
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
              className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-subtle glass-hover"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-electric/10">
                <span className="font-display text-lg text-electric" style={{ fontWeight: 700 }}>{p.num}</span>
              </div>
              <h3 className="text-xl font-display text-foreground mb-3" style={{ fontWeight: 700 }}>{p.title}</h3>
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
            <ArrowRight size={18} className="arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;