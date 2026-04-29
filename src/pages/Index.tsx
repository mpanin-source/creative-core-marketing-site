import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import GatewayOffer from "@/components/landing/GatewayOffer";
import OutcomesNotFeatures from "@/components/landing/OutcomesNotFeatures";
import SprintEngine from "@/components/landing/SprintEngine";
import WhyDifferent from "@/components/landing/WhyDifferent";
import SGEEducation from "@/components/landing/SGEEducation";
import Deliverables from "@/components/landing/Deliverables";
import BottomLine from "@/components/landing/BottomLine";
import LazyAgencyCarousel from "@/components/landing/LazyAgencyCarousel";
import UsVsThem from "@/components/landing/UsVsThem";
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

const Divider = () => <div className="section-divider-gradient" />;

const Index = () => {
  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-16">
        <Hero />
        <MarqueeStrip />
        <Divider />
        <WhoThisIsFor />
        <Divider />
        <GatewayOffer />
        <Divider />
        <OutcomesNotFeatures />
        <Divider />
        <SprintEngine />
        <Divider />
        <WhyDifferent />
        <Divider />
        <SGEEducation />
        <Divider />
        <Deliverables />
        <Divider />
        <BottomLine />
        <Divider />
        <LazyAgencyCarousel />
        <Divider />
        <UsVsThem />
        <Divider />
        <UntappedMarket />
        <Divider />
        <PricingTiers />
        <Divider />
        <AIVoiceUpsells />
        <Divider />
        <Day60Transition />
        <Divider />
        <WhyOffering />
        <Divider />
        <FAQSection />
        <Divider />
        <WindowClosing />
        <ContactForm />
      </main>
      <Footer />
      <StickyUrgencyBanner />
    </>
  );
};

export default Index;
