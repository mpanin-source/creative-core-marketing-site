import { useState } from "react";
import { X, Menu } from "lucide-react";
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
    { label: "How It Works", id: "engine" },
    { label: "Why Us", id: "why-different" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          backgroundColor: 'rgba(10, 14, 20, 0.8)',
          borderBottom: '1px solid rgba(0, 209, 255, 0.15)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between" style={{ height: '64px' }}>
            <AnimatedLogo size="md" />
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="relative text-sm text-muted-foreground hover:text-electric transition-colors duration-150 font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary px-5 py-2.5 rounded-lg text-sm"
              >
                Free Ad Audit
              </button>
            </nav>
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary px-4 py-2 rounded-lg text-sm"
              >
                Free Audit
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} className="text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-background/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-card rounded-t-2xl p-6 pb-8 shadow-elevated border border-border animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl text-foreground" style={{ fontWeight: 700 }}>MENU</h3>
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-full hover:bg-secondary transition-colors">
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-bold btn-primary"
              >
                Get Free Ad Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
