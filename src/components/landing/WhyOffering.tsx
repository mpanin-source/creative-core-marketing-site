import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const WhyOffering = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="px-6 py-32 md:px-8 section-alt" id="why-offering">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">
            THE HONEST TRUTH
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-12" style={{ fontWeight: 900 }}>
            TERRITORY EXCLUSIVITY <span className="italic text-shimmer-blue">ISN'T MARKETING</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 text-xl md:text-2xl text-foreground leading-relaxed font-medium"
        >
          <p>We don't accept clients who already have an agency running their AI Search optimization. If you're with us, your local competitors can't be — that's the whole point.</p>
          <p>3 Florida home service clients per niche per county. Once your county fills in your niche, we close to new clients in that area.</p>
          <p className="text-coral italic">If you're reading this, your county is still open. That won't be true forever.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <button
            onClick={scrollToContact}
            className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg inline-flex items-center gap-2"
          >
            CLAIM YOUR COUNTY
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyOffering;
