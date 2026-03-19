import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const PostPricingCTA = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding section-funnel section-dark">
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="max-w-[700px] mx-auto text-center"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-primary-foreground mb-4">
          READY TO LOCK IN YOUR SPOT?
        </h2>
        <p className="text-primary-foreground/70 leading-relaxed mb-8">
          We can only take 3 new sprint clients per month. Book your Sprint Audit now before your competitors do.
        </p>
        <button
          onClick={scrollToContact}
          className="btn-primary cta-pulse inline-flex items-center gap-2 px-10 py-5 rounded-lg text-lg"
        >
          Schedule Your Sprint Audit
          <ArrowRight size={18} className="arrow-icon transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default PostPricingCTA;
