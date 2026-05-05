import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Clock } from "lucide-react";
import GatewayOffer from "@/components/landing/GatewayOffer";
import SprintEngine from "@/components/landing/SprintEngine";
import CostTransparency from "@/components/pricing/CostTransparency";
import CostReveal from "@/components/pricing/CostReveal";
import PricingTiers from "@/components/landing/PricingTiers";
import GuaranteeSection from "@/components/pricing/GuaranteeSection";
import AIVoiceUpsells from "@/components/landing/AIVoiceUpsells";
import Day60Transition from "@/components/landing/Day60Transition";
import WhyOffering from "@/components/landing/WhyOffering";
import ContactForm from "@/components/landing/ContactForm";

const Divider = () => <div className="section-divider-gradient" />;

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const MiniHero = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="px-6 py-32 md:px-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground uppercase mb-5 leading-[0.95]"
          style={{ fontWeight: 900 }}
        >
          PICK YOUR <span className="italic text-shimmer-blue">STARTING POINT</span>
        </motion.h1>
        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Whether you're starting with the $497 Launch-Ready Website or going straight to a full agency tier — we have a path that fits where you are.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => scrollTo("gateway")}
            className="bg-card border border-border rounded-2xl p-7 outcome-card text-left hover:border-electric/40 transition-colors"
          >
            <div className="outcome-icon w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-electric" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-electric mb-2">Start Small</p>
            <h3 className="font-display text-2xl text-foreground mb-2" style={{ fontWeight: 800 }}>$497 LAUNCH-READY WEBSITE</h3>
            <p className="text-sm text-muted-foreground mb-4">Fix the leak first. See if we're the right fit.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-electric">
              See Gateway Details <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => scrollTo("pricing")}
            className="bg-card border border-safety/40 rounded-2xl p-7 outcome-card text-left hover:border-safety transition-colors"
            style={{ background: "hsla(25, 100%, 50%, 0.04)" }}
          >
            <div className="outcome-icon w-11 h-11 rounded-xl bg-safety/15 flex items-center justify-center mb-4">
              <Rocket className="w-5 h-5 text-safety" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-safety mb-2">Go All-In</p>
            <h3 className="font-display text-2xl text-foreground mb-2" style={{ fontWeight: 800 }}>FOUNDATION SPRINT OR HIGHER</h3>
            <p className="text-sm text-muted-foreground mb-4">Full agency tier. 60-day No-BS Guarantee.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-safety">
              See Tier Pricing <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const TrustBlock = () => (
  <section className="px-6 py-20 md:px-8">
    <motion.div
      initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="max-w-2xl mx-auto text-center"
    >
      <Clock className="w-8 h-8 text-warning mx-auto mb-4" />
      <p className="font-display text-xl md:text-2xl text-foreground uppercase mb-2" style={{ fontWeight: 800 }}>
        3 spots left this month — first come, first served
      </p>
      <p className="text-sm text-muted-foreground">
        Florida home services only • One client per niche per county
      </p>
    </motion.div>
  </section>
);

const PricingAndBooking = () => {
  return (
    <>
      <MiniHero />
      <Divider />
      <GatewayOffer />
      <Divider />
      <SprintEngine />
      <Divider />
      <CostTransparency />
      <Divider />
      <CostReveal />
      <Divider />
      <PricingTiers />
      <Divider />
      <GuaranteeSection />
      <Divider />
      <AIVoiceUpsells deemphasized />
      <Divider />
      <Day60Transition />
      <Divider />
      <WhyOffering />
      <Divider />
      <ContactForm />
      <TrustBlock />
    </>
  );
};

export default PricingAndBooking;
