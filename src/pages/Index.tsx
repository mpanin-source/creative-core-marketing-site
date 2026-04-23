import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import SprintEngine from "@/components/landing/SprintEngine";
import WhyDifferent from "@/components/landing/WhyDifferent";
import Deliverables from "@/components/landing/Deliverables";
import BottomLine from "@/components/landing/BottomLine";
import UntappedMarket from "@/components/landing/UntappedMarket";
import PricingTiers from "@/components/landing/PricingTiers";
import AIVoiceUpsells from "@/components/landing/AIVoiceUpsells";
import Day60Transition from "@/components/landing/Day60Transition";
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
      <main className="pt-16">
        <Hero />
        <MarqueeStrip />
        <div className="section-divider-gradient" />
        <WhoThisIsFor />
        <div className="section-divider-gradient" />
        <SprintEngine />
        <div className="section-divider-gradient" />
        <WhyDifferent />
        <Deliverables />
        <BottomLine />
        <div className="section-divider-gradient" />
        <UntappedMarket />
        <div className="section-divider-gradient" />
        <PricingTiers />
        <div className="section-divider-gradient" />
        <AIVoiceUpsells />
        <div className="section-divider-gradient" />
        <Day60Transition />
        <div className="section-divider-gradient" />
        <WhyOffering />
        <div className="section-divider-gradient" />
        <FAQSection />
        <div className="section-divider-gradient" />
        <WindowClosing />
        <ContactForm />
      </main>
      <Footer />
      <StickyUrgencyBanner />
    </>
  );
};

export default Index;
