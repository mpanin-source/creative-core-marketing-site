import Hero from "@/components/landing/Hero";
import SixSystems from "@/components/landing/SixSystems";
import NewBattlefield from "@/components/landing/NewBattlefield";
import LocalPlaybook from "@/components/landing/LocalPlaybook";
import CantMeasure from "@/components/landing/CantMeasure";
import Outcomes from "@/components/landing/Outcomes";
import HowWeWork from "@/components/landing/HowWeWork";
import EndCTA from "@/components/shared/EndCTA";

const Index = () => {
  return (
    <>
      <Hero />
      <SixSystems />
      <NewBattlefield />
      <LocalPlaybook />
      <CantMeasure />
      <Outcomes />
      <HowWeWork />
      <EndCTA
        headline="Bring us your county."
        headlineAccent="We'll bring the AI."
        subhead="Month-to-month engagements starting at $1,500/mo. A 30-minute strategy call is free — and you'll leave with a working hypothesis even if we never work together."
        secondaryCtaText="See pricing"
        secondaryCtaHref="/pricing-and-booking"
      />
    </>
  );
};

export default Index;
