import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { X, Menu, ChevronDown } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const services = [
  { label: "SEO", href: "/services/seo" },
  { label: "SEM & Paid Search", href: "/services/sem" },
  { label: "GEO & AI Search", href: "/services/geo" },
  { label: "CRO", href: "/services/cro" },
  { label: "Marketing Automation", href: "/services/marketing-automation" },
  { label: "Custom Software Solutions", href: "/services/custom-software" },
];

const navLinks = [
  { label: "Pricing", to: "/pricing-and-booking" },
  { label: "Process", to: "/process" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

const CALENDLY = "https://calendly.com/paninmax2002/strategy-call";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  const handleNavTo = (path: string) => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
    }
  };

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = services.some((s) => location.pathname === s.href);

  const headerSurface = scrolled
    ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10"
    : "bg-transparent border-b border-transparent";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerSurface}`}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" onClick={handleLogoClick} aria-label="Home" className="flex items-center text-charcoal">
              <AnimatedLogo size="md" />
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-7">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesOpen((s) => !s)}
                  className={`flex items-center gap-1 text-[13px] font-medium tracking-wide transition-colors ${
                    isServicesActive ? "text-charcoal" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                  aria-expanded={servicesOpen}
                >
                  Services
                  <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[260px] rounded-lg bg-white border border-charcoal/10 shadow-xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-3 py-2.5 rounded-md text-[13px] transition-colors ${
                          isActive(s.href)
                            ? "text-charcoal bg-cream-light"
                            : "text-charcoal/70 hover:text-charcoal hover:bg-cream-light"
                        }`}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.map((n) => (
                <button
                  key={n.to}
                  onClick={() => handleNavTo(n.to)}
                  className={`text-[13px] font-medium tracking-wide transition-colors ${
                    isActive(n.to) ? "text-charcoal" : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coral hover:bg-coral-dark text-white px-5 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Book a strategy call
              </a>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-coral hover:bg-coral-dark text-white px-4 py-1.5 rounded-md text-xs font-medium"
              >
                Book a call
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="p-2 rounded-lg hover:bg-charcoal/10 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={18} className="text-charcoal" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay — stays bg-charcoal, text-cream */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal md:hidden overflow-y-auto">
          <div className="px-5 pt-5 pb-10">
            <div className="flex items-center justify-between mb-10">
              <a href="/" onClick={handleLogoClick} aria-label="Home" className="text-cream">
                <AnimatedLogo size="md" />
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-lg hover:bg-charcoal-light transition-colors"
                aria-label="Close menu"
              >
                <X size={22} className="text-cream" />
              </button>
            </div>

            <nav className="space-y-1">
              <button
                onClick={() => setMobileServicesOpen((s) => !s)}
                className="w-full flex items-center justify-between px-4 py-4 rounded-lg text-base font-medium text-cream hover:bg-charcoal-light transition-colors"
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileServicesOpen && (
                <div className="pl-2 pb-2 space-y-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      to={s.href}
                      onClick={() => {
                        setMobileServicesOpen(false);
                        setMobileOpen(false);
                      }}
                      className="block px-4 py-3 rounded-lg text-sm text-cream/70 hover:text-cream hover:bg-charcoal-light transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.map((n) => (
                <button
                  key={n.to}
                  onClick={() => handleNavTo(n.to)}
                  className="w-full text-left px-4 py-4 rounded-lg text-base font-medium text-cream hover:bg-charcoal-light transition-colors"
                >
                  {n.label}
                </button>
              ))}

              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center mt-6 px-4 py-4 rounded-md bg-coral hover:bg-coral-dark text-white text-base font-medium transition-colors"
              >
                Book a strategy call
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
