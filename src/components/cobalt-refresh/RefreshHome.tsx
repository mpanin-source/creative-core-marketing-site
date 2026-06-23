import Hero from "@/components/landing/Hero";
import OrbitSixSystems from "../cobalt/OrbitSixSystems";
import NewBattlefield from "@/components/landing/NewBattlefield";
import LocalPlaybook from "@/components/landing/LocalPlaybook";
import CantMeasure from "@/components/landing/CantMeasure";
import Outcomes from "@/components/landing/Outcomes";
import HowWeWork from "@/components/landing/HowWeWork";
import EndCTA from "@/components/shared/EndCTA";
import { ContourBg, SparkField, MonogramTile, DotGrid, OrbitRings, GlowOrb } from "./patterns";

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
        <ContourBg color="#3a86ff" opacity={0.09} />
      </div>

      {/* Orbit Six Systems — coral brand with BLUE #3a86ff as the third accent (orbit glow/spoke/proof) */}
      <OrbitSixSystems palette={{ bg: "#FAF6EF", ink: "#1A1714", primary: "#FF4D2E", accent: "#3a86ff", hubText: "#FFFFFF" }} />

      <div className="relative">
        <NewBattlefield />
        <SparkField color="#3a86ff" opacity={0.5} />
      </div>

      {/* LocalPlaybook: faint blue dot-grid behind the play cards (cards stay opaque). */}
      <div className="relative bg-cream-light [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <DotGrid color="#3a86ff" opacity={0.16} />
        <LocalPlaybook />
      </div>

      {/* CantMeasure: blue orbit rings anchored top-right echo the "signal" theme. */}
      <div className="relative bg-cream [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <OrbitRings color="#3a86ff" opacity={0.1} cx="88%" cy="12%" rings={6} />
        <CantMeasure />
      </div>

      {/* Outcomes: monogram pattern fills the section BEHIND the content (section made
          transparent + lifted above the tile) so the cards stay 100% opaque. */}
      <div className="relative bg-cream-light [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <MonogramTile color="#1A1714" opacity={0.07} />
        <Outcomes />
      </div>

      {/* HowWeWork: soft blue glow orb top-right adds depth behind the step cards. */}
      <div className="relative bg-cream [&>section]:!bg-transparent [&>section]:relative [&>section]:z-[1]">
        <GlowOrb color="#3a86ff" opacity={0.14} size={560} top="-6%" left="82%" />
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
        <SparkField color="#3a86ff" opacity={0.45} />
      </div>
    </>
  );
}
