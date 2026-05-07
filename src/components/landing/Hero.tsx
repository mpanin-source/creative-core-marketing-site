import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const scrollToOutcomes = () => {
    document.getElementById("outcomes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 -mt-16 pt-16 relative overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="max-w-[900px] mx-auto w-full relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6 text-electric"
          >
            ONE CLIENT PER NICHE. ONE NICHE PER COUNTY.
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-7xl font-display leading-[0.95] text-foreground uppercase mb-6"
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            OWN YOUR COUNTY.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-[720px]"
          >
            Florida home services. Marketed differently. Territory exclusive — one client per niche per county. Start at $497, or walk away after 60 days if we don't reduce your cost-per-lead by <span className="text-electric font-semibold">20%</span> OR grow your booked appointments by <span className="text-electric font-semibold">25%</span> — and keep everything we built.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="flex flex-col sm:flex-row items-center gap-3 mb-4 pb-16"
          >
            <button
              onClick={scrollToOutcomes}
              className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg group flex items-center gap-2"
            >
              SEE WHAT WE DO
              <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
            </button>
            <button
              onClick={() => navigate("/pricing-and-booking")}
              className="px-6 py-3 rounded-lg text-sm font-semibold border border-electric/40 text-electric hover:bg-electric/10 transition-colors"
            >
              GO STRAIGHT TO PRICING
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToOutcomes}
      >
        <span className="text-xs text-electric/60 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-electric/60 scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
