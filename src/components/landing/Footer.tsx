const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-10 md:py-20 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 pb-8 border-b border-border">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative Core · Full-Funnel Growth for HVAC, Roofing, and Solar companies.
            No hype—just data, timing, and ads that convert.
          </p>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-accent font-semibold">
            Now accepting 3 new partners for the Spring 2026 rollout.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-foreground">
              Creative Core
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Full-Funnel Growth for Home Services
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
