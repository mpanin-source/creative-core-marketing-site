import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import StickyUrgencyBanner from "@/components/landing/StickyUrgencyBanner";
import MouseGlowEffect from "@/components/MouseGlowEffect";
import FloatingCTA from "@/components/global/FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isPricingPage = location.pathname.startsWith("/pricing-and-booking");

  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
      {isPricingPage && <StickyUrgencyBanner />}
      <FloatingCTA />
    </>
  );
};

export default Layout;
