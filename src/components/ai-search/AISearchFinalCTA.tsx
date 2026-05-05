import { motion, type Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const AISearchFinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-32 md:px-8 section-warm">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground uppercase mb-6 leading-tight"
          style={{ fontWeight: 900 }}
        >
          GET YOUR BUSINESS MENTIONED BY<br />
          <span className="italic text-shimmer-blue">GOOGLE'S AI</span> BEFORE YOUR COMPETITORS ARE
        </motion.h2>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
        >
          One client per niche, per Florida county. The early movers win this decade.
        </motion.p>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
        >
          <button
            onClick={() => navigate("/pricing-and-booking")}
            className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg inline-flex items-center gap-2"
          >
            SEE PRICING &amp; BOOK CALL
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AISearchFinalCTA;
