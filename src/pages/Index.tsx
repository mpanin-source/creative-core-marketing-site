import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import OpportunityMap from "@/components/landing/OpportunityMap";
import Problem from "@/components/landing/Problem";
import TestimonialSection from "@/components/landing/TestimonialSection";
import CompetitivePositioning from "@/components/landing/CompetitivePositioning";
import QuoteSection from "@/components/landing/QuoteSection";
import CoreOffer from "@/components/landing/CoreOffer";
import RevenueLifecycle from "@/components/landing/RevenueLifecycle";
import TransparencyStack from "@/components/landing/TransparencyStack";
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
import WindowClosing from "@/components/landing/WindowClosing";
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
        {/* 2. Revenue Lifecycle — Dual-Threat Emotional Hook */}
        <RevenueLifecycle />
        {/* 3. Opportunity Map — Seasonal Context */}
        <OpportunityMap />
        {/* 4. Problem — Pain Amplification */}
        <Problem />
        {/* 5. Testimonials — Early Proof */}
        <TestimonialSection />
        {/* 6. Competitive Positioning — 3 Pain Points */}
        <CompetitivePositioning />
        {/* 7. ROAS Quote — Sequential Animation */}
        <QuoteSection variant="guarantee" />
        {/* 8. Core Offer — Grand Slam Architecture */}
        <CoreOffer />
        {/* 9. Transparency Stack — Dollar-Value Justification */}
        <TransparencyStack />
        {/* 10. Upfront Fee Breakdown — Transparency */}
        <UpfrontFeeBreakdown />
        {/* 11. Proof Layer — Google Trends + Competitive Data */}
        <ProofLayer />
        {/* 12. What You Bring — Effort & Sacrifice */}
        <WhatYouBring />
        {/* 13. Qualified Lead Definition — Transparency */}
        <QualifiedLeadDefinition />
        {/* 14. Lead Philosophy — Old Way vs Core Way */}
        <LeadPhilosophy />
        {/* 15. Why It Works — Science of Momentum */}
        <WhyItWorks />
        {/* 16. LSA vs PPC — Educational */}
        <LSAvsPPC />
        {/* 17. Seasonal Tiers — Red/Green Pricing */}
        <SeasonalTiers />
        {/* 18. AI Receptionist — Coming Soon FOMO */}
        <AIReceptionist />
        {/* 19. First-Peak Guarantee — Risk Reversal */}
        <FirstPeakGuarantee />
        {/* 20. Qualification — Solo-Pro vs Scaling */}
        <FitSection />
        {/* 21. À La Carte */}
        <AlaCarteSection />
        {/* 22. The Window Is Closing — Urgency */}
        <WindowClosing />
        {/* 23. Contact Form — Scarcity + Qualification */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
