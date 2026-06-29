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

      {/* Lower half — Playbook → CantMeasure → Outcomes → HowWeWork → EndCTA all share
          one continuous container with a unified bg-cream tone and a single very faint
          OrbitRings backdrop carrying the eye through every seam. Per-block accent rings
          remain as foreground texture. */}
      <div className="relative overflow-x-clip bg-cream [&_section]:!bg-transparent [&_section]:relative [&_section]:z-[1]">
        {/* One — and only one — orbit field for the entire lower half. Whisper-faint,
            anchored off-canvas right, providing a single unifying signature behind
            every block below instead of stacked overlapping ring layers. */}
        <OrbitRings color="#3a86ff" opacity={0.06} cx="110%" cy="40%" rings={6} animated />

        <LocalPlaybook />
        <CantMeasure />

        {/* Seam bleed: gradient overlay across CantMeasure↔Outcomes boundary. */}
        <div className="relative h-0">
          <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-transparent via-azure/[0.04] to-transparent pointer-events-none" />
        </div>

        <Outcomes />
        <HowWeWork />

        {/* Bridging glow into EndCTA — diffuse light, not lines. */}
        <div className="relative h-0">
          <GlowOrb color="#3a86ff" opacity={0.32} size={700} top="-10%" left="-5%" animated />
          <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-b from-transparent via-azure/[0.05] to-transparent pointer-events-none" />
        </div>

        {/* EndCTA in seamless mode — no own bg, tighter top padding, glow bleeds upward. */}
        <EndCTA
          headline="Bring us your county."
          accentPhrases={["We'll bring the AI.", "We'll bring the results.", "We'll bring the traffic."]}
          subhead="Month-to-month engagements starting at $1,500/mo. A 30-minute strategy call is free — and you'll leave with a working hypothesis even if we never work together."
          secondaryCtaText="See pricing"
          secondaryCtaHref="/pricing-and-booking"
          seamless
          glowSide="left"
        />
      </div>

    </>
  );
}
