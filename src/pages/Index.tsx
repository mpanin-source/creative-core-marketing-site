import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import Problem from "@/components/landing/Problem";
import TestimonialSection from "@/components/landing/TestimonialSection";
import InvestmentTransparency from "@/components/landing/InvestmentTransparency";
import GuaranteeBanner from "@/components/landing/GuaranteeBanner";
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
        {/* 1. Hero — Generalist Home Services */}
        <Hero />
        {/* 2. 3-Pillar Growth Engine — How It Works */}
        <ThreePillarEngine />
        {/* 3. Problem — Pain Amplification */}
        <Problem />
        {/* 4. Social Proof */}
        <TestimonialSection />
        {/* 5. Old Way vs Our Way */}
        <LeadPhilosophy />
        {/* 6. Investment & Transparency (Consolidated) */}
        <InvestmentTransparency />
        {/* 7. Guarantee Banner (Compact) */}
        <GuaranteeBanner />
        {/* 8. FAQ */}
        <FAQSection />
        {/* 9. Urgency */}
        <WindowClosing />
        {/* 10. Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
