const Footer = () => {
  return (
    <footer className="px-6 py-12 md:px-8 lg:px-12 border-t border-border">
      <div className="container-wide">
        <div className="text-center mb-8 pb-8 border-b border-border">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Seasonal Momentum is built for HVAC, Roofing, and Solar companies
            ready to capture peak-demand buyers. No hype—just data, timing, and
            ads that convert.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-medium text-foreground">
              Seasonal Momentum
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Full-Funnel Growth for HVAC, Roofing, Solar
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
