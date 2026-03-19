import { motion } from "framer-motion";
import { ArrowRight, Check, Play, ChevronDown } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEngine = () => {
    document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 -mt-16 pt-16 relative overflow-hidden">
      <div className="max-w-[1000px] mx-auto w-full relative z-10 text-center">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
          className="text-sm font-semibold tracking-widest text-accent uppercase mb-6"
        >
          SEASONAL MARKETING SPRINTS FOR LOCAL SERVICE BUSINESSES
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="text-[2.8rem] md:text-6xl lg:text-7xl font-display font-bold leading-[1.02] text-foreground mb-8 uppercase"
        >
          SPEED TO DECISION IS THE ONLY DESIGN METRIC THAT MATTERS.
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-[700px] mx-auto"
        >
          We build intensive 30-day campaigns that capture your peak season before your competitors do. More qualified calls. Lower cost per lead. 15+ calls in 45 days or 50% refund.
        </motion.p>

        {/* Value props */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6"
        >
          {[
            "First qualified calls in 30 days",
            "You own all infrastructure forever",
            "15+ calls in 45 days or 50% refund",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-foreground">
              <Check className="w-4 h-4 text-success flex-shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={3.5}
          className="text-xs text-muted-foreground/70 mb-10"
        >
          *Qualified call = showed up for appointment, matches your ICP (budget fit, service area fit, intent confirmed). No bullshit.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={4}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
        >
          <button
            onClick={scrollToContact}
            className="btn-primary cta-pulse px-10 py-5 rounded-lg text-lg group flex items-center gap-2"
          >
            Schedule Your Sprint Audit
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={scrollToEngine}
            className="px-6 py-4 rounded-lg border border-border bg-card text-foreground font-body font-semibold text-sm hover:bg-secondary transition-all duration-200 hover:-translate-y-0.5 shadow-subtle"
          >
            Watch How It Works
          </button>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={4.5}
          className="text-xs text-muted-foreground"
        >
          No pitch. Just a breakdown of where your funnel is losing speed.
        </motion.p>

        {/* Niche badges */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={5}
          className="flex flex-wrap justify-center gap-2 mt-10"
        >
          {["HVAC", "Landscaping", "Pest Control", "Wellness", "Home Services"].map((trade) => (
            <span key={trade} className="px-3 py-1.5 rounded-full border border-border bg-card text-xs font-medium text-muted-foreground tracking-wider shadow-subtle">
              {trade}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={scrollToEngine}
      >
        <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground/60 scroll-indicator" />
      </motion.div>
    </section>
  );
};

export default Hero;
