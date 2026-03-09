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
    <section className="section-padding min-h-[85vh] flex items-center px-6 md:px-8 lg:px-12 -mt-16 pt-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-6 animate-fade-in">
              SEASONAL MOMENTUM · HVAC / ROOFING / SOLAR
            </p>
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-display font-black leading-[0.95] tracking-wide text-foreground mb-4 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
              YOUR PEAK SEASON IS YOUR GOLDMINE. WE SHOW YOU HOW TO MINE IT.
              <span
                style={{
                  textShadow:
                    "0 0 15px rgba(59, 130, 246, 0.4), 2px 2px 0px rgba(255,255,255,0.7)",
                }}
                className="block text-accent tracking-[-0.02em] font-display -mt-2 md:-mt-4 skew-x-[-3deg] italic animate-slide-up [animation-delay:500ms] opacity-0 text-[2.25rem] md:text-4xl lg:text-5xl text-left leading-[0.85]"
              >
                NOT A LEAD-GENERATION GAMBLE.
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-full animate-fade-in [animation-delay:200ms] opacity-0">
              Most HVAC/Roofing/Solar companies waste 40–50% of their ad budget
              running campaigns in off-season windows. We flip the timing,
              capture peak-demand buyers, and guarantee you 2x return on every ad
              dollar during your first seasonal window.
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
                <span>First-Peak Lead Guarantee: 2x ad spend in qualified lead value</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <div className="flex flex-col">
                <Button
                  variant="accent"
                  size="xl"
                  onClick={scrollToContact}
                  className="group w-full sm:w-auto transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  Schedule Free Core Funnel Audit
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                <span className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
                  15-minute Loom breakdown · No obligation · Reveal exactly how
                  much you're leaving on the table
                </span>
              </div>
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToPlaybook}
                className="hover:bg-foreground hover:text-background hover:border-foreground w-full sm:w-auto transition-transform hover:scale-105"
              >
                See Q1 Growth Playbook
              </Button>
            </div>
          </div>

          {/* Right Column - HVAC-Specific Dashboard */}
          <div className="hidden lg:block animate-fade-in [animation-delay:400ms] opacity-0">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  HVAC Seasonal Campaign Snapshot
                </h3>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Click-Through Rate
                      </p>
                      <p className="text-2xl font-display text-foreground">6.8%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+2.6%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Conversion Rate
                      </p>
                      <p className="text-2xl font-display text-foreground">18.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+5.8%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">
                        Cost Per Lead
                      </p>
                      <p className="text-2xl font-display text-foreground">$12</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-medium">vs $45 avg</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Real seasonal campaign metrics · HVAC peak-window results
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
