const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-10 md:py-20 border-t border-border">
      <div className="max-w-[1200px] mx-auto">
        {/* Footer CTA */}
        <div className="text-center mb-10 pb-10 border-b border-border">
          <p className="text-lg text-muted-foreground mb-4">Still reading? You're our ideal client.</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold inline-flex items-center gap-2 px-8 py-4 rounded-lg text-base transition-all hover:scale-105"
          >
            Schedule Your Sprint Audit
          </button>
        </div>

        <div className="text-center mb-8 pb-8 border-b border-border">
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Creative Core · Seasonal Marketing Sprints for Local Service Businesses.
            Speed to decision is the only design metric that matters.
          </p>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm text-accent font-semibold">
            Now accepting 3 new sprint clients per month. Currently serving HVAC, Landscaping, Pest Control, Wellness & Home Services.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-bold text-foreground">Creative Core</p>
            <p className="text-sm text-muted-foreground mt-1">Seasonal Marketing Sprints</p>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Creative Core. Built with OpenClaw.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
