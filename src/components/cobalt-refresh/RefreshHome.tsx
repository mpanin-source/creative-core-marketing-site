import Hero from "@/components/landing/Hero";
import OrbitSixSystems from "../cobalt/OrbitSixSystems";
import NewBattlefield from "@/components/landing/NewBattlefield";
import LocalPlaybook from "@/components/landing/LocalPlaybook";
import CantMeasure from "@/components/landing/CantMeasure";
import Outcomes from "@/components/landing/Outcomes";
import HowWeWork from "@/components/landing/HowWeWork";
import EndCTA from "@/components/shared/EndCTA";
import { ContourBg, SparkField, OrbitRings, GlowOrb } from "./patterns";

/**
 * The REAL homepage (current cream + coral brand, real sections/content) with the kit's
 * pattern backgrounds layered onto select sections where they fit. Logo (header) + preloader
 * are handled by the route wrapper. Live homepage is untouched — this just re-composes it.
 */
export default function RefreshHome() {
  return (
    <>
      <div className="relative">
        <Hero />
        <ContourBg color="#3a86ff" opacity={0.16} animated />
        <GlowOrb color="#3a86ff" opacity={0.35} size={800} top="-5%" left="105%" animated />
      </div>

      {/* Orbit Six Systems — coral brand with BLUE #3a86ff as the third accent (orbit glow/spoke/proof) */}
      <OrbitSixSystems palette={{ bg: "#FAF6EF", ink: "#1A1714", primary: "#FF4D2E", accent: "#3a86ff", hubText: "#FFFFFF" }} />

      <div className="relative">
        <NewBattlefield />
        <SparkField color="#3a86ff" opacity={0.6} animated variant={0} />
      </div>

      {/* LocalPlaybook + CantMeasure: merged background with a single sweeping OrbitRings
          anchored off the right edge so the rings bleed continuously across both sections. */}
      <div className="relative overflow-x-clip bg-cream [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <OrbitRings color="#3a86ff" opacity={0.18} cx="94%" cy="50%" rings={8} animated />
        <LocalPlaybook />
        <CantMeasure />
      </div>

      {/* Outcomes + HowWeWork: merged background. Single large OrbitRings anchored on the
          left side spans both sections so the orbit pattern flows through the seam. */}
      <div className="relative overflow-x-clip bg-cream-light [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <OrbitRings color="#3a86ff" opacity={0.16} cx="6%" cy="50%" rings={8} animated />
        <Outcomes />
        <HowWeWork />
      </div>

      <div className="relative">
        <EndCTA
          headline="Bring us your county."
          headlineAccent="We'll bring the AI."
          subhead="Month-to-month engagements starting at $1,500/mo. A 30-minute strategy call is free — and you'll leave with a working hypothesis even if we never work together."
          secondaryCtaText="See pricing"
          secondaryCtaHref="/pricing-and-booking"
        />
        <SparkField color="#3a86ff" opacity={0.6} animated variant={1} />
      </div>
    </>
  );
}
