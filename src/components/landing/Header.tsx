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
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-4 pointer-events-none">
        <header
          className="pointer-events-auto w-full max-w-[1100px] rounded-2xl backdrop-blur-xl px-5 md:px-8"
          style={{
            backgroundColor: 'rgba(10, 14, 20, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 209, 255, 0.06)',
          }}
        >
          <div className="flex items-center justify-between" style={{ height: '56px' }}>
            <AnimatedLogo size="md" />
            <nav className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold"
              >
                Free Funnel Audit
              </button>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => scrollTo("contact")}
                className="btn-primary px-4 py-1.5 rounded-lg text-xs font-semibold"
              >
                Free Audit
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg hover:bg-secondary/50 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={18} className="text-foreground" />
              </button>
            </div>
          </div>
        </header>
      </div>

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
