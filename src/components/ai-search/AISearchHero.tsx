import { motion, type Variants } from "framer-motion";
import { SparkField, GlowOrb } from "@/components/cobalt-refresh/patterns";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const AISearchHero = () => {
  return (
    <section className="px-6 py-32 md:px-8 relative overflow-hidden">
      {/* Blue stars + glow for the AI-search page (secondary accent) */}
      <SparkField color="#3a86ff" opacity={0.6} animated variant={2} />
      <GlowOrb color="#3a86ff" opacity={0.18} size={620} top="6%" left="18%" animated />
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-azure-dark"
        >
          GEO & AI SEARCH DOMINATION
        </motion.p>
        <motion.h1
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground uppercase mb-6 leading-[0.95]"
          style={{ fontWeight: 900 }}
        >
          GET YOUR BUSINESS MENTIONED BY GOOGLE'S AI <span className="italic text-shimmer-blue">BEFORE YOUR COMPETITORS ARE</span>
        </motion.h1>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
        >
          Your competitors who get mentioned by Google's AI in 2026 will own their county for the next five years. The ones who wait will spend triple in ad spend trying to catch up. Search just changed forever — here's how we get you ahead.
        </motion.p>
      </div>
    </section>
  );
};

export default AISearchHero;
