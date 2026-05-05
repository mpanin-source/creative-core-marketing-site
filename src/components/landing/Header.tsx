import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToFAQ = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "faq" } });
    }
  };

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
            <Link to="/" aria-label="Home"><AnimatedLogo size="md" /></Link>
            <nav className="hidden md:flex items-center gap-7">
              <Link to="/" className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">Home</Link>
              <Link to="/ai-search" className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">AI Search</Link>
              <Link to="/pricing-and-booking" className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">Pricing</Link>
              <button onClick={goToFAQ} className="relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left">FAQ</button>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/pricing-and-booking" className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold">
                Get Started
              </Link>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <Link to="/pricing-and-booking" className="btn-primary px-4 py-1.5 rounded-lg text-xs font-semibold">
                Get Started
              </Link>
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
              <Link to="/" onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">Home</Link>
              <Link to="/ai-search" onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">AI Search</Link>
              <Link to="/pricing-and-booking" onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">Pricing</Link>
              <button onClick={goToFAQ} className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">FAQ</button>
              <Link to="/pricing-and-booking" onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl font-body text-base font-bold btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
