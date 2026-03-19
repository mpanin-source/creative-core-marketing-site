import { ArrowRight, Check, Play } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToEngine = () => {
    document.getElementById("engine")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="section-padding min-h-[85vh] flex items-center -mt-16 pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38,92%,55%,0.06),transparent_60%)]" />

      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy + CTA */}
          <div>
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-6 animate-fade-in">
              SEASONAL MARKETING SPRINTS FOR LOCAL SERVICE BUSINESSES
            </p>
            <h1 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] font-display font-black leading-[1.05] text-foreground mb-6 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
              SPEED TO DECISION IS THE ONLY DESIGN METRIC THAT MATTERS.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4 animate-fade-in [animation-delay:200ms] opacity-0">
              We build intensive 30-day campaigns that capture your peak season before your competitors do. More qualified calls. Lower cost per lead. 15+ calls in 45 days or 50% refund.
            </p>
            <div className="text-sm text-muted-foreground leading-relaxed mb-6 animate-fade-in [animation-delay:220ms] opacity-0 space-y-1">
              <p className="text-foreground font-semibold mb-2">We're not just an agency. We're a creative design studio obsessed with user experience through your entire funnel:</p>
              <ul className="space-y-1 ml-1">
                <li>• The ad that stops the scroll</li>
                <li>• The landing page that eliminates friction</li>
                <li>• The CRM that scores and nurtures automatically</li>
                <li>• The call script that closes faster</li>
              </ul>
              <p className="mt-3 text-foreground/80 italic">User experience generates sales. Not just the ad.</p>
            </div>

            {/* Niche badges */}
            <div className="flex flex-wrap gap-2 mb-6 animate-fade-in [animation-delay:250ms] opacity-0">
              {["HVAC", "Landscaping", "Pest Control", "Wellness", "Home Services"].map((trade) => (
                <span key={trade} className="px-3 py-1.5 rounded-full border border-border bg-secondary text-xs font-semibold text-muted-foreground tracking-wider">
                  {trade}
                </span>
              ))}
            </div>

            {/* Value props */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in [animation-delay:280ms] opacity-0">
              {[
                "First qualified calls in 30 days",
                "You own all infrastructure forever",
                "15+ calls in 45 days or 50% refund",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground/70 mb-8 animate-fade-in [animation-delay:290ms] opacity-0">
              *Qualified call = showed up for appointment, matches your ICP (budget fit, service area fit, intent confirmed). No bullshit.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <div className="flex flex-col">
                <button
                  onClick={scrollToContact}
                  className="btn-gold px-8 py-4 rounded-lg text-base group flex items-center gap-2 transition-all hover:scale-105"
                >
                  Schedule Your 15-Min Sprint Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-muted-foreground mt-2 max-w-[320px]">
                  No pitch. Just a breakdown of where your funnel is losing speed.
                </span>
              </div>
              <button
                onClick={scrollToEngine}
                className="px-6 py-4 rounded-lg border border-border text-foreground font-display font-bold text-sm hover:bg-secondary transition-all hover:scale-105"
              >
                Watch How It Works
              </button>
            </div>
          </div>

          {/* Right: Video Placeholder */}
          <div className="animate-fade-in [animation-delay:400ms] opacity-0">
            <div className="glass-card rounded-xl overflow-hidden aspect-video relative group cursor-pointer">
              <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-accent ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm font-medium">Coming Soon</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">
              Watch Max explain the seasonal sprint model (75 seconds)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
