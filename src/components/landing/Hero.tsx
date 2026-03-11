import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEngine = () => {
    document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding min-h-[85vh] flex items-center -mt-16 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38,92%,55%,0.06),transparent_60%)]" />
      
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-6 animate-fade-in">
            HOME SERVICE GROWTH SYSTEMS
          </p>
          <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-black leading-[1.05] text-foreground mb-6 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
            DOMINATE YOUR LOCAL MARKET.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2 animate-fade-in [animation-delay:200ms] opacity-0">
            We install the <span className="text-foreground font-semibold">Revenue Architecture</span> (Ads + CRM + SMS) that Home Service Contractors use to scale.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 animate-fade-in [animation-delay:220ms] opacity-0">
            One system. Any trade. Proven results.
          </p>

          {/* Trade badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in [animation-delay:250ms] opacity-0">
            {["HVAC", "Plumbing", "Roofing", "Electrical", "Landscaping", "Cleaning", "Solar"].map((trade) => (
              <span key={trade} className="px-4 py-1.5 rounded-full border border-border bg-secondary text-xs font-semibold text-muted-foreground tracking-wider">
                {trade}
              </span>
            ))}
          </div>

          {/* Value props */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 animate-fade-in [animation-delay:280ms] opacity-0">
            {[
              "First leads in 7 days",
              "You own all accounts",
              "2x Lead Value Guarantee",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in [animation-delay:300ms] opacity-0">
            <div className="flex flex-col items-center">
              <button
                onClick={scrollToContact}
                className="btn-gold px-8 py-4 rounded-lg text-base group flex items-center gap-2 transition-all hover:scale-105"
              >
                Schedule Your Growth Audit
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs text-muted-foreground mt-2 max-w-[280px]">
                15-min strategy session. No pitch, just a plan.
              </span>
            </div>
            <button
              onClick={scrollToEngine}
              className="px-6 py-4 rounded-lg border border-border text-foreground font-display font-bold text-sm hover:bg-secondary transition-all hover:scale-105"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
