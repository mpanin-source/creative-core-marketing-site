import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Problem from "@/components/landing/Problem";
import InvestmentTransparency from "@/components/landing/InvestmentTransparency";
import GuaranteeBanner from "@/components/landing/GuaranteeBanner";
import PostPricingCTA from "@/components/landing/PostPricingCTA";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import FAQSection from "@/components/landing/FAQSection";
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
        {/* 1. Hero — full viewport, centered */}
        <Hero />
        {/* Scrolling marquee */}
        <MarqueeStrip />
        {/* 2. How 30-Day Sprints Work */}
        <ThreePillarEngine />
        <div className="section-divider" />
        {/* 3. Creative Core vs Generic Agency */}
        <ComparisonTable />
        <div className="section-divider" />
        {/* 4. Where Your Funnel Is Losing Money */}
        <Problem />
        <div className="section-divider" />
        {/* 5. Sprint Pricing */}
        <InvestmentTransparency />
        {/* Guarantee */}
        <GuaranteeBanner />
        {/* 6. Post-Pricing CTA — dark, bold */}
        <PostPricingCTA />
        <div className="section-divider" />
        {/* 7. Why Sprints Beat Retainers */}
        <LeadPhilosophy />
        <div className="section-divider" />
        {/* 8. FAQ */}
        <FAQSection />
        <div className="section-divider" />
        {/* 9. Urgency */}
        <WindowClosing />
        {/* 10. Contact Form — dark */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
