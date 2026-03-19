import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import ComparisonTable from "@/components/landing/ComparisonTable";
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
        {/* 1. Hero */}
        <Hero />
        {/* 2. How 30-Day Sprints Work */}
        <ThreePillarEngine />
        {/* 3. Creative Core vs Generic Agency */}
        <ComparisonTable />
        {/* 4. Where Your Funnel Is Losing Money */}
        <Problem />
        {/* 5. Results-Driven Guarantee */}
        <TestimonialSection />
        {/* 6. Sprint Pricing */}
        <InvestmentTransparency />
        {/* 7. Guarantee Banner */}
        <GuaranteeBanner />
        {/* 8. Why Sprints Beat Retainers */}
        <LeadPhilosophy />
        {/* 9. FAQ */}
        <FAQSection />
        {/* 10. Urgency */}
        <WindowClosing />
        {/* 11. Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
