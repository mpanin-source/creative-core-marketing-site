import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import SGEEducation from "@/components/landing/SGEEducation";
import OptimizationSection from "@/components/landing/OptimizationSection";
import OutcomesNotFeatures from "@/components/landing/OutcomesNotFeatures";
import WhyDifferent from "@/components/landing/WhyDifferent";
import BottomLine from "@/components/landing/BottomLine";
import LazyAgencySection from "@/components/landing/LazyAgencySection";
import FAQSection from "@/components/landing/FAQSection";
import WindowClosing from "@/components/landing/WindowClosing";

const Divider = () => <div className="section-divider-gradient" />;

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll-to-anchor when navigated from another route via state
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      // Wait a tick for sections to mount
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      // Clear state so it never re-triggers
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Divider />
      <SGEEducation />
      <Divider />
      <OptimizationSection />
      <Divider />
      <OutcomesNotFeatures />
      <Divider />
      <WhyDifferent />
      <Divider />
      <BottomLine />
      <Divider />
      <LazyAgencySection />
      <Divider />
      <FAQSection />
      <Divider />
      <WindowClosing />
    </>
  );
};

export default Index;
