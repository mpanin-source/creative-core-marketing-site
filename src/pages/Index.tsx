import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import TheSystem from "@/components/landing/TheSystem";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Problem from "@/components/landing/Problem";
import InvestmentTransparency from "@/components/landing/InvestmentTransparency";
import WhatYouBring from "@/components/landing/WhatYouBring";
import GuaranteeBanner from "@/components/landing/GuaranteeBanner";
import PostPricingCTA from "@/components/landing/PostPricingCTA";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import FAQSection from "@/components/landing/FAQSection";
import WindowClosing from "@/components/landing/WindowClosing";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import MouseGlowEffect from "@/components/MouseGlowEffect";
import StickyUrgencyBanner from "@/components/landing/StickyUrgencyBanner";

const Index = () => {
  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-14">
        <Hero />
        <MarqueeStrip />
        <ThreePillarEngine />
        <TheSystem />
        <div className="section-divider" />
        <Problem />
        <div className="section-divider" />
        <InvestmentTransparency />
        {/* Comparison Table — value justification after investment ask */}
        <ComparisonTable />
        {/* What We Need From You — after pricing, before guarantee */}
        <WhatYouBring />
        <GuaranteeBanner />
        <PostPricingCTA />
        <div className="section-divider" />
        <LeadPhilosophy />
        <div className="section-divider" />
        <FAQSection />
        <div className="section-divider" />
        <WindowClosing />
        <ContactForm />
      </main>
      <Footer />
      <StickyUrgencyBanner />
    </>
  );
};

export default Index;
