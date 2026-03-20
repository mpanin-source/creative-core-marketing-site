import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import SprintEngine from "@/components/landing/SprintEngine";
import WhyDifferent from "@/components/landing/WhyDifferent";
import Deliverables from "@/components/landing/Deliverables";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import PricingTiers from "@/components/landing/PricingTiers";
import WhyOffering from "@/components/landing/WhyOffering";
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
        <WhoThisIsFor />
        <div className="section-divider" />
        <SprintEngine />
        <div className="section-divider" />
        <WhyDifferent />
        <div className="section-divider" />
        <Deliverables />
        <div className="section-divider" />
        <LeadPhilosophy />
        <div className="section-divider" />
        <PricingTiers />
        <div className="section-divider" />
        <WhyOffering />
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
