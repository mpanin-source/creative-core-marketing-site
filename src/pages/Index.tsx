import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import OpportunityMap from "@/components/landing/OpportunityMap";
import Problem from "@/components/landing/Problem";
import TestimonialSection from "@/components/landing/TestimonialSection";
import CoreOffer from "@/components/landing/CoreOffer";
import WhatYouBring from "@/components/landing/WhatYouBring";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import WhyItWorks from "@/components/landing/WhyItWorks";
import SeasonalTiers from "@/components/landing/SeasonalTiers";
import FirstPeakGuarantee from "@/components/landing/FirstPeakGuarantee";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import QuoteSection from "@/components/landing/QuoteSection";
import MouseGlowEffect from "@/components/MouseGlowEffect";

const Index = () => {
  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-16">
        <Hero />
        <OpportunityMap />
        <Problem />
        <TestimonialSection />
        <QuoteSection variant="full" />
        <CoreOffer />
        <WhatYouBring />
        <LeadPhilosophy />
        <WhyItWorks />
        <QuoteSection variant="short" />
        <SeasonalTiers />
        <FirstPeakGuarantee />
        <QuoteSection variant="confidence" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
