import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import useEmblaCarousel from "embla-carousel-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
} as const;

const nicheBadges = [
  { label: "HVAC", quote: "My peak season starts June 1. If I'm building my funnel in June, I'm losing $20K in the first 3 weeks." },
  { label: "Landscaping", quote: "April hits and everyone wants their yard done yesterday. If I'm not already running ads, I'm invisible." },
  { label: "Pest Control", quote: "Termite season doesn't wait. By the time I 'get around to marketing,' my competitors have booked my zip code." },
  { label: "Wellness", quote: "New Year and Spring are my money months. If I'm not prepped by mid-March, I'm chasing leads all summer." },
  { label: "Home Services", quote: "I get busy, I stop marketing. Then it dries up and I panic. I need a system that runs whether I'm on a job or not." },
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

            {/* "Is This You?" Carousel */}
            <IsThisYouCarousel />

            {/* Subtitle */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-[620px]"
            >
              We build intensive 30-day campaigns that capture your peak season — or prep you for the next one. April-June sprints launch in 7 days. June-August sprints build now, go live when demand spikes. <span className="text-safety font-semibold">15+ calls in 45 days or 50% refund.</span>
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
              className="text-xs text-muted-foreground pb-16"
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
