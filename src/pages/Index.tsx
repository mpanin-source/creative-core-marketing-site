import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import OpportunityMap from "@/components/landing/OpportunityMap";
import Problem from "@/components/landing/Problem";
import TestimonialSection from "@/components/landing/TestimonialSection";
import CompetitivePositioning from "@/components/landing/CompetitivePositioning";
import QuoteSection from "@/components/landing/QuoteSection";
import CoreOffer from "@/components/landing/CoreOffer";
import UpfrontFeeBreakdown from "@/components/landing/UpfrontFeeBreakdown";
import ProofLayer from "@/components/landing/ProofLayer";
import WhatYouBring from "@/components/landing/WhatYouBring";
import QualifiedLeadDefinition from "@/components/landing/QualifiedLeadDefinition";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import WhyItWorks from "@/components/landing/WhyItWorks";
import SeasonalTiers from "@/components/landing/SeasonalTiers";
import LSAvsPPC from "@/components/landing/LSAvsPPC";
import AIReceptionist from "@/components/landing/AIReceptionist";
import FirstPeakGuarantee from "@/components/landing/FirstPeakGuarantee";
import FitSection from "@/components/landing/FitSection";
import AlaCarteSection from "@/components/landing/AlaCarteSection";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import MouseGlowEffect from "@/components/MouseGlowEffect";

const Index = () => {
  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-16">
        {/* 1. Hero — Dream Outcome */}
        <Hero />
        {/* 2. Opportunity Map — Seasonal Context */}
        <OpportunityMap />
        {/* 3. Problem — Pain Amplification */}
        <Problem />
        {/* 4. Testimonials — Early Proof */}
        <TestimonialSection />
        {/* 5. Competitive Positioning — 3 Pain Points */}
        <CompetitivePositioning />
        {/* 6. ROAS Quote — Sequential Animation */}
        <QuoteSection variant="guarantee" />
        {/* 7. Core Offer — Grand Slam Architecture */}
        <CoreOffer />
        {/* 8. Upfront Fee Breakdown — Transparency */}
        <UpfrontFeeBreakdown />
        {/* 9. Proof Layer — Google Trends + Competitive Data */}
        <ProofLayer />
        {/* 10. What You Bring — Effort & Sacrifice */}
        <WhatYouBring />
        {/* 11. Qualified Lead Definition — Transparency */}
        <QualifiedLeadDefinition />
        {/* 12. Lead Philosophy — Old Way vs Core Way */}
        <LeadPhilosophy />
        {/* 13. Why It Works — Science of Momentum */}
        <WhyItWorks />
        {/* 14. LSA vs PPC — Educational */}
        <LSAvsPPC />
        {/* 15. Seasonal Tiers — Red/Green Pricing */}
        <SeasonalTiers />
        {/* 16. AI Receptionist — Coming Soon FOMO */}
        <AIReceptionist />
        {/* 17. First-Peak Guarantee — Risk Reversal */}
        <FirstPeakGuarantee />
        {/* 18. Qualification — Solo-Pro vs Scaling */}
        <FitSection />
        {/* 19. À La Carte */}
        <AlaCarteSection />
        {/* 20. Contact Form — Scarcity + Qualification */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
