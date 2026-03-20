import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
} as const;

const nicheBadges = [
  { label: "HVAC", tip: "June-Aug peak · Build now, launch June 1" },
  { label: "Landscaping", tip: "April-June peak · Launch in 7 days" },
  { label: "Pest Control", tip: "April-Aug · Execute now OR prep for summer" },
  { label: "Wellness", tip: "Spring/Fall peaks · Launch by April 15" },
  { label: "Home Services", tip: "Year-round + seasonal · Always ready" },
];

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
              className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1.1] text-foreground uppercase mt-16 mb-10"
              style={{ fontWeight: 900 }}
            >
              SPEED TO DECISION IS THE ONLY
              <br />
              <span className="text-shimmer-blue opacity-70">DESIGN METRIC</span> THAT MATTERS.
            </motion.h1>

            {/* Video with Scanning Line */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="w-full max-w-[800px] mt-16 mb-0"
            >
              <AspectRatio ratio={16 / 9}>
                <div className="w-full h-full rounded-xl bg-secondary border border-border flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                  <div className="scan-line" />
                  <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center border border-electric/30">
                    <Play className="w-6 h-6 text-electric ml-0.5" />
                  </div>
                  <span className="text-sm font-medium text-foreground tracking-wide text-center px-6 leading-snug">
                    See How HVAC Companies Are Filling Their Summer Calendar in 30 Days
                  </span>
                  <p className="text-xs text-muted-foreground/60 max-w-[280px] text-center leading-relaxed">
                    (45-second explainer — no pitch, just the system)
                  </p>
                </div>
              </AspectRatio>
            </motion.div>

            {/* Niche badges — title only, tooltip on hover */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible" custom={2.5}
              className="flex flex-wrap justify-center gap-3 mt-24 mb-12"
            >
              <TooltipProvider delayDuration={200}>
                {nicheBadges.map((badge) => (
                  <Tooltip key={badge.label}>
                    <TooltipTrigger asChild>
                      <div className="px-5 py-2.5 rounded-xl border border-electric/20 bg-card text-center shadow-subtle cursor-default transition-all duration-300 hover:border-safety/60 hover:shadow-[0_0_16px_rgba(255,107,0,0.2)]">
                        <span className="text-xs font-bold text-foreground tracking-wider font-display uppercase">{badge.label}</span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="bottom" className="bg-card border-safety/30 text-xs text-muted-foreground">
                      {badge.tip}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-[620px]"
            >
              We build intensive 30-day campaigns that capture your peak season — or prep you for the next one. April-June sprints launch in 7 days. June-August sprints build now, go live when demand spikes. <span className="text-safety font-semibold">15+ qualified calls in 45 days or 50% refund.</span>
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
