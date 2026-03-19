import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import ComparisonTable from "@/components/landing/ComparisonTable";
import Problem from "@/components/landing/Problem";
import InvestmentTransparency from "@/components/landing/InvestmentTransparency";
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
        {/* 1. Hero */}
        <Hero />
        {/* 2. How 30-Day Sprints Work */}
        <ThreePillarEngine />
        {/* 3. Creative Core vs Generic Agency */}
        <ComparisonTable />
        {/* 4. Where Your Funnel Is Losing Money */}
        <Problem />
        {/* 5. Sprint Pricing */}
        <InvestmentTransparency />
        {/* 6. Post-Pricing CTA */}
        <PostPricingCTA />
        {/* 7. Why Sprints Beat Retainers */}
        <LeadPhilosophy />
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
