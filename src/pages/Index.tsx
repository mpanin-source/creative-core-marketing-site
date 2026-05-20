import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import ThreePillarEngine from "@/components/landing/ThreePillarEngine";
import GEOEducation from "@/components/landing/GEOEducation";
import OptimizationSection from "@/components/landing/OptimizationSection";
import OutcomesNotFeatures from "@/components/landing/OutcomesNotFeatures";
import WhyDifferent from "@/components/landing/WhyDifferent";
import BottomLine from "@/components/landing/BottomLine";
import LazyAgencySection from "@/components/landing/LazyAgencySection";
import WindowClosing from "@/components/landing/WindowClosing";

const Divider = () => <div className="section-divider-gradient" />;

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const id = state.scrollTo;
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Divider />
      <ThreePillarEngine />
      <Divider />
      <GEOEducation />
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
      <WindowClosing />
    </>
  );
};

export default Index;
