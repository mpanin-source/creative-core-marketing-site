import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import OpportunityMap from "@/components/landing/OpportunityMap";
import Problem from "@/components/landing/Problem";
import TestimonialSection from "@/components/landing/TestimonialSection";
import QuoteSection from "@/components/landing/QuoteSection";
import CoreOffer from "@/components/landing/CoreOffer";
import WhatYouBring from "@/components/landing/WhatYouBring";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import WhyItWorks from "@/components/landing/WhyItWorks";
import SeasonalTiers from "@/components/landing/SeasonalTiers";
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
        {/* 1. Hero — Dream Outcome + Time Delay */}
        <Hero />
        {/* 2. Opportunity Map — Seasonal Context */}
        <OpportunityMap />
        {/* 3. Problem — Pain Amplification */}
        <Problem />
        {/* 4. Testimonials — Early Proof */}
        <TestimonialSection />
        {/* 5. Guarantee Quote — Sequential Animation */}
        <QuoteSection variant="guarantee" />
        {/* 6. Core Offer — Grand Slam Architecture */}
        <CoreOffer />
        {/* 7. What You Bring — Effort & Sacrifice */}
        <WhatYouBring />
        {/* 8. Lead Philosophy — Old Way vs Core Way */}
        <LeadPhilosophy />
        {/* 9. Why It Works — Science of Momentum */}
        <WhyItWorks />
        {/* 10. Reinforcement Quote */}
        <QuoteSection variant="short" />
        {/* 11. Seasonal Tiers — Red/Green Pricing */}
        <SeasonalTiers />
        {/* 12. AI Receptionist — Coming Soon FOMO */}
        <AIReceptionist />
        {/* 13. First-Peak Guarantee — Risk Reversal */}
        <FirstPeakGuarantee />
        {/* 14. Qualification — Solo-Pro vs Scaling */}
        <FitSection />
        {/* 15. Confidence Quote */}
        <QuoteSection variant="confidence" />
        {/* 16. À La Carte — Horizontal Cards */}
        <AlaCarteSection />
        {/* 17. Contact Form — Scarcity + Qualification */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
