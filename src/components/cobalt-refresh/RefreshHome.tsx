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
        <GlowOrb color="#3a86ff" opacity={0.25} size={680} top="-10%" left="110%" animated />
      </div>

      {/* Orbit Six Systems — coral brand with BLUE #3a86ff as the third accent (orbit glow/spoke/proof) */}
      <OrbitSixSystems palette={{ bg: "#FAF6EF", ink: "#1A1714", primary: "#FF4D2E", accent: "#3a86ff", hubText: "#FFFFFF" }} />

      <div className="relative">
        <NewBattlefield />
        <SparkField color="#3a86ff" opacity={0.6} animated variant={0} />
      </div>

      {/* LocalPlaybook: hero treatment — blue contour waves + blue glow behind the cards. */}
      <div className="relative bg-cream-light [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <ContourBg color="#3a86ff" opacity={0.16} animated />
        <GlowOrb color="#3a86ff" opacity={0.25} size={680} top="-10%" left="110%" animated />
        <LocalPlaybook />
      </div>

      {/* CantMeasure: blue twinkling stars. */}
      <div className="relative bg-cream [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <SparkField color="#3a86ff" opacity={0.6} animated variant={2} />
        <CantMeasure />
      </div>

      {/* Outcomes: blue orbit rings from the bottom-left corner — the "data/proof" section
          reads in blue (matching the azure metric numbers). Cards stay 100% opaque. */}
      <div className="relative bg-cream-light [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <OrbitRings color="#3a86ff" opacity={0.18} cx="6%" cy="94%" rings={6} animated />
        <Outcomes />
      </div>

      {/* HowWeWork: blue twinkling stars behind the step cards. */}
      <div className="relative bg-cream [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <SparkField color="#3a86ff" opacity={0.6} animated variant={0} />
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
