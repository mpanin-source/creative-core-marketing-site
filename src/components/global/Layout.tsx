import { ReactNode } from "react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import MouseGlowEffect from "@/components/MouseGlowEffect";
import FloatingCTA from "@/components/global/FloatingCTA";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MouseGlowEffect />
      <Header />
      <main className="pt-16">{children}</main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Layout;
