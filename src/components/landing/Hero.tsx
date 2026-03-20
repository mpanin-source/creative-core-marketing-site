import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
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
    <>
      <section id="hero" className="min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12 -mt-16 pt-16 relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto w-full relative z-10">
          {/* Center-Flow Funnel: Headline → Video → CTA */}
          <div className="flex flex-col items-center text-center">
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={0}
              className="text-sm font-semibold tracking-widest uppercase mb-5 text-electric"
            >
              SEASONAL MARKETING SPRINTS FOR LOCAL SERVICE BUSINESSES
            </motion.p>

            {/* Headline — Bebas Neue */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-foreground uppercase mb-10"
              style={{ fontWeight: 900 }}
            >
              SPEED TO DECISION IS THE ONLY
              <br />
              <span className="text-shimmer-blue">DESIGN METRIC</span> THAT MATTERS.
            </motion.h1>

            {/* Video with Scanning Line */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="w-full max-w-[800px] mb-12"
            >
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full rounded-xl bg-secondary border border-border flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  {/* Scanning diagnostic line */}
                  <div className="scan-line" />
                  <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center border border-electric/30">
                    <Play className="w-6 h-6 text-electric ml-0.5" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground tracking-wide">Video Coming Soon</span>
                  <p className="text-xs text-muted-foreground/60 max-w-[220px] text-center leading-relaxed">
                    75-second explainer: seasonal sprints, speed-to-decision, 50% refund guarantee
                  </p>
                </div>
              </AspectRatio>
            </motion.div>

            {/* Niche badges — increased margin */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
              className="flex flex-wrap justify-center gap-2 my-12"
            >
              {["HVAC", "Landscaping", "Pest Control", "Wellness", "Home Services"].map((trade) => (
                <span key={trade} className="px-3 py-1.5 rounded-full border border-electric/20 bg-card text-xs font-medium text-muted-foreground tracking-wider shadow-subtle">
                  {trade}
                </span>
              ))}
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-[560px]"
            >
              We build intensive 30-day campaigns that capture your peak season before your competitors do. More qualified calls. Lower cost per lead. 15+ calls in 45 days or 50% refund.
            </motion.p>

            {/* Value props */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={3.5}
              className="flex flex-wrap justify-center gap-x-5 gap-y-2.5 mb-5"
            >
              {[
                "First qualified calls in 30 days",
                "You own all infrastructure forever",
                "15+ calls in 45 days or 50% refund",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-electric flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={4}
              className="text-xs text-muted-foreground/70 mb-8"
            >
              *Qualified call = showed up for appointment, matches your ICP. No bullshit.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={4.5}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-3"
            >
              <button
                onClick={scrollToContact}
                className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg group flex items-center gap-2"
              >
                Schedule Your Sprint Audit
                <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
              </button>
              <button
                onClick={scrollToEngine}
                className="px-6 py-4 rounded-lg border border-electric/30 bg-card text-foreground font-body font-semibold text-sm glass-hover shadow-subtle"
              >
                Watch How It Works
              </button>
            </motion.div>

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={5}
              className="text-xs text-muted-foreground"
            >
              No pitch. Just a breakdown of where your funnel is losing speed.
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
    </>
  );
};

export default Hero;