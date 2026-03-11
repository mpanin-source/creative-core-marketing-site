import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp, TrendingDown, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlaybook = () => {
    document.getElementById("opportunity-map")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding min-h-[90vh] flex items-center -mt-16 pt-16 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(38,92%,55%,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(217,80%,50%,0.04),transparent_60%)]" />
      
      <div className="max-w-[1200px] mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-6 animate-fade-in">
              HOME SERVICES GROWTH PARTNER
            </p>
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-black leading-[1.05] text-foreground mb-6 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
              WE CAPTURE YOUR PEAK SEASON MOMENTUM.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-2 animate-fade-in [animation-delay:200ms] opacity-0">
              We install the <span className="text-foreground font-semibold">Revenue Architecture</span> (Ads + CRM + SMS) that turns your busy season into year-round wealth.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 animate-fade-in [animation-delay:220ms] opacity-0">
              Specialized for Home Services, optimized for ROI.
            </p>

            {/* Value Drivers */}
            <ul className="space-y-3 mb-8 animate-fade-in [animation-delay:250ms] opacity-0">
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Results visible Week 1 · First leads in 7 days</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>You keep all ad account access. We handle the heavy lifting.</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>2x Lead Value Guarantee: vetted appointment value or we work free</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <div className="flex flex-col">
                <button
                  onClick={scrollToContact}
                  className="btn-gold px-8 py-4 rounded-lg text-base group flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  Schedule Your Growth Audit
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs text-muted-foreground mt-2 text-center sm:text-left max-w-[280px]">
                  A 15-min strategy session to identify your revenue leaks. No pitch, just a plan.
                </span>
              </div>
              <button
                onClick={scrollToPlaybook}
                className="px-6 py-4 rounded-lg border border-border text-foreground font-display font-bold text-sm hover:bg-secondary transition-all hover:scale-105"
              >
                See Growth Playbook
              </button>
            </div>
          </div>

          {/* Right Column - Campaign Snapshot */}
          <div className="hidden lg:block animate-fade-in [animation-delay:400ms] opacity-0 max-w-md ml-auto">
            <div className="glass-card rounded-xl p-8 shadow-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Campaign Snapshot
                </h3>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Click-Through Rate
                      </p>
                      <p className="text-2xl font-display font-bold text-foreground">6.8%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+2.6%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Conversion Rate
                      </p>
                      <p className="text-2xl font-display font-bold text-foreground">18.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+5.8%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Cost Per Lead
                      </p>
                      <p className="text-2xl font-display font-bold text-foreground">$12</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-medium">vs $45 avg</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Real seasonal campaign metrics · Peak-window results
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
