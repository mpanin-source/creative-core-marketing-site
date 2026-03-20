import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
} as const;

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEngine = () => {
    document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 -mt-16 pt-16 relative overflow-hidden"
    >
      <div className="max-w-[900px] mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-electric"
          >
            BETTER ADS, BETTER RESULTS — FOR HALF THE PRICE
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-7xl font-display leading-[0.95] text-foreground uppercase mb-6"
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            WE'LL RUN YOUR ADS
            <br />
            BETTER THAN YOUR
            <br />
            CURRENT AGENCY —{" "}
            <span className="italic text-shimmer-blue">FOR HALF THE PRICE</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-[680px]"
          >
            60-day trial at $1,500/month for local service businesses. If you're not seeing better results after 60 days, walk away — no hard feelings.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col items-center mb-4"
          >
            <button
              onClick={scrollToContact}
              className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg group flex items-center gap-2"
            >
              GET YOUR FREE AD AUDIT
              <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={3.5}
            className="text-xs text-muted-foreground/70 pb-16"
          >
            15 Minutes — No Pitch, Just a Plan
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToEngine}
      >
        <span className="text-xs text-electric/60 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-electric/60 scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
