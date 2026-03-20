import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Clock, Crosshair, Eye, Award, Play } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
} as const;

const bullets = [
  { icon: Shield, label: "EXCLUSIVE", text: "We only take ONE client per niche per local area." },
  { icon: Clock, label: "TIMED", text: "30-45 day sprints synced to YOUR peak demand window." },
  { icon: Crosshair, label: "TECHNICAL", text: "Pixel tracking + lead scoring for conversion optimization." },
  { icon: Eye, label: "TRANSPARENT", text: "No ad spend markup — pay Meta/Google directly." },
  { icon: Award, label: "GUARANTEED", text: "15+ qualified calls in 45 days or 50% refund." },
];

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
            SEASONAL MARKETING SPRINTS FOR LOCAL SERVICE BUSINESSES
          </motion.p>

          {/* Headline — White text */}
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl md:text-5xl lg:text-7xl font-display leading-[0.95] text-foreground uppercase mb-8"
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            DOMINATE YOUR LOCAL
            <br />
            MARKET BEFORE YOUR
          </motion.h1>

          {/* Video Placeholder */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={1.5}
            className="w-full max-w-[800px] mb-8"
          >
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full rounded-xl bg-secondary border border-border flex flex-col items-center justify-center gap-3 relative overflow-hidden">
                <div className="scan-line" />
                <div className="w-14 h-14 rounded-full bg-electric/10 flex items-center justify-center border border-electric/30">
                  <Play className="w-6 h-6 text-electric ml-0.5" />
                </div>
                <span className="text-sm font-medium text-foreground tracking-wide text-center px-6 leading-snug">
                  See How Local Service Businesses Fill Their Calendar in 30 Days
                </span>
                <p className="text-xs text-muted-foreground/60 max-w-[280px] text-center leading-relaxed">
                  (45-second explainer — no pitch, just the system)
                </p>
              </div>
            </AspectRatio>
          </motion.div>

          {/* Headline — Blue italic text with shimmer */}
          <motion.h2
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-4xl md:text-5xl lg:text-7xl font-display uppercase mb-8 italic text-shimmer-blue"
            style={{ fontWeight: 900, lineHeight: 1 }}
          >
            COMPETITORS DO
          </motion.h2>

          {/* Subhead */}
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-[680px]"
          >
            We help local service businesses (HVAC, landscaping, pest control, wellness, home services)
            capture peak season demand with intensive 30-45 day campaigns — built and launched by our
            AI-powered team for speed and scale.
          </motion.p>

          {/* Bullet list */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="w-full max-w-[600px] space-y-3 mb-10 text-left"
          >
            {bullets.map((b) => (
              <div key={b.label} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-electric/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <b.icon className="w-4 h-4 text-electric" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-bold text-electric tracking-wide">{b.label}:</span>{" "}
                  {b.text}
                </p>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={4}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-4"
          >
            <button
              onClick={scrollToContact}
              className="btn-safety cta-pulse-orange px-8 py-4 rounded-lg text-base group flex items-center gap-2"
            >
              BOOK YOUR FREE DISCOVERY CALL
              <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
            </button>
          </motion.div>

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={4.5}
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
