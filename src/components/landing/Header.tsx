import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, Menu, ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const services = [
  { label: "$497 Launch Site → Stop Losing Leads", anchor: "gateway" },
  { label: "Foundation Sprint → Lower Your CPL", anchor: "foundation-sprint" },
  { label: "Growth Partner → Pack Your Calendar", anchor: "growth-partner" },
  { label: "Scale Partner → Own Your County", anchor: "scale-partner" },
  { label: "SEO for Florida Home Services → Rank Above Local Competitors", anchor: "seo" },
  { label: "SEM & Paid Search → Convert High-Intent Searchers", anchor: "sem" },
  { label: "GEO & AI Search → Get Mentioned First", anchor: "geo" },
  { label: "Custom Software Solutions → Fix Your Bottlenecks", anchor: "custom-solutions" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 50);
    }
  };

  const handleServiceClick = (anchor: string) => {
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileOpen(false);
    if (location.pathname === "/faq") {
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/faq", { state: { scrollTo: anchor } });
    }
  };

  const navLinkClass =
    "relative text-[13px] text-muted-foreground hover:text-foreground transition-colors duration-150 font-medium tracking-wide after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-[1px] after:bg-electric after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left";

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
            <a href="/" onClick={handleLogoClick} aria-label="Home"><AnimatedLogo size="md" /></a>
            <nav className="hidden md:flex items-center gap-7">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div
                    className="absolute top-full left-0 mt-3 w-[380px] rounded-xl backdrop-blur-xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                    style={{
                      backgroundColor: 'rgba(10, 14, 20, 0.92)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 209, 255, 0.08)',
                    }}
                  >
                    {services.map((s) => (
                      <button
                        key={s.anchor}
                        onClick={() => handleServiceClick(s.anchor)}
                        className="block w-full text-left px-3 py-2.5 rounded-lg text-[13px] text-muted-foreground hover:text-foreground hover:bg-electric/10 transition-colors"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => handleNavClick("/ai-search")} className={navLinkClass}>AI Search</button>
              <button onClick={() => handleNavClick("/pricing-and-booking")} className={navLinkClass}>Pricing</button>
              <button onClick={() => handleNavClick("/faq")} className={navLinkClass}>FAQ</button>
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <Link to="/pricing-and-booking" className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold">
                START AT $497
              </Link>
            </div>
            <div className="flex md:hidden items-center gap-2">
              <Link to="/pricing-and-booking" className="btn-primary px-4 py-1.5 rounded-lg text-xs font-semibold">
                START AT $497
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
            className="w-full max-w-lg bg-card rounded-t-2xl p-6 pb-8 shadow-elevated border border-border animate-in slide-in-from-bottom duration-300 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl text-foreground" style={{ fontWeight: 700 }}>MENU</h3>
              <button onClick={() => setMobileOpen(false)} className="p-1 rounded-full hover:bg-secondary transition-colors">
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="rounded-xl bg-secondary overflow-hidden">
                <button
                  onClick={() => setMobileServicesOpen((s) => !s)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left font-body text-base font-semibold text-foreground"
                >
                  Services
                  <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="border-t border-border px-2 py-2 space-y-1">
                    {services.map((s) => (
                      <button
                        key={s.anchor}
                        onClick={() => handleServiceClick(s.anchor)}
                        className="block w-full text-left px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button onClick={() => handleNavClick("/ai-search")} className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">AI Search</button>
              <button onClick={() => handleNavClick("/pricing-and-booking")} className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">Pricing</button>
              <button onClick={() => handleNavClick("/faq")} className="w-full text-left px-4 py-3 rounded-xl font-body text-base font-semibold text-foreground bg-secondary hover:bg-muted transition-colors">FAQ</button>
              <Link to="/pricing-and-booking" onClick={() => setMobileOpen(false)} className="block w-full text-left px-4 py-3 rounded-xl font-body text-base font-bold btn-primary">
                START AT $497
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
