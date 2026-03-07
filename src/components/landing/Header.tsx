import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu, Zap } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const navLinks = [
    { label: "How It Works", id: "offer" },
    { label: "Proof", id: "testimonials" },
    { label: "For HVAC/Roofing/Solar", id: "opportunity-map" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <AnimatedLogo />
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("ala-carte")}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-medium hover:bg-accent/10 transition-colors"
              >
                <Zap className="w-3.5 h-3.5" />
                Just Want The Website?
              </button>
              <Button
                variant="accent"
                size="sm"
                onClick={() => scrollTo("contact")}
                className="transition-transform hover:scale-105"
              >
                Schedule Free Audit
              </Button>
            </nav>
            <div className="flex md:hidden items-center gap-2">
              <Button
                variant="accent"
                size="sm"
                onClick={() => scrollTo("contact")}
              >
                Free Audit
              </Button>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/50 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-card rounded-t-2xl p-6 pb-8 shadow-elevated animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl text-foreground tracking-wide">
                MENU
              </h3>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-full hover:bg-muted transition-colors"
              >
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-4 py-3 rounded-xl font-display text-base tracking-wide text-foreground bg-muted hover:bg-muted/80 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("ala-carte")}
                className="w-full text-left px-4 py-3 rounded-xl font-display text-base tracking-wide text-accent bg-accent/10 hover:bg-accent/15 transition-colors flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Just Want The Website?
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-3 rounded-xl font-display text-base tracking-wide bg-accent text-accent-foreground"
              >
                Schedule Free Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
