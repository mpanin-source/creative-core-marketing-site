import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const BottomLine = () => {
  const scrollToEngine = () => {
    document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="bottom-line">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-10" style={{ fontWeight: 900 }}>
            THE <span className="italic text-shimmer-blue">BOTTOM LINE</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          <p>
            We lower your cost per lead through <span className="text-foreground font-semibold">better ad testing</span>.
          </p>
          <p>
            We increase your conversion rate through <span className="text-foreground font-semibold">instant follow-up</span>.
          </p>
          <p>
            You close more customers and <span className="text-foreground font-semibold">spend less doing it</span>.
          </p>
          <p className="text-foreground font-bold text-2xl md:text-3xl font-display pt-4" style={{ fontWeight: 900 }}>
            That's the formula.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={scrollToEngine}
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base"
          >
            SEE HOW IT WORKS
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomLine;
