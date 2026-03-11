import { Brain, Clock, Target, Vault } from "lucide-react";

const pillars = [
  { icon: Brain, title: "NEURO-SEASONAL ALIGNMENT", description: "We align your brand with the biological triggers of your audience—\"Fresh Start\" optimism in Spring, \"Security & Comfort\" in Winter.", badge: "PSYCHOLOGY-BACKED" },
  { icon: Clock, title: "THE 21-DAY INTENT WINDOW", description: "We launch our \"Wake-Up Agent\" exactly 21 days before demand peaks, capturing intent while competitors are still in neutral." },
  { icon: Target, title: "DATA-DRIVEN VELOCITY", description: "Every click is tagged. We use intent data to identify high-value prospects already researching your solution." },
  { icon: Vault, title: "COMPOUNDING DATA ASSETS", description: "Our CRM infrastructure builds a \"Lead Vault\" that compounds in value, lowering your acquisition costs every season." },
];

const WhyItWorks = () => (
  <section className="section-padding">
    <div className="max-w-[1200px] mx-auto">
      <div className="container-narrow text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-6">THE SCIENCE OF PREDICTIVE MOMENTUM</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">We don't chase leads; we anticipate demand.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
        {pillars.map((pillar, i) => (
          <div key={i} className="relative p-8 glass-card rounded-lg hover:border-accent/30 transition-colors">
            {pillar.badge && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full">
                <span className="text-[10px] font-bold tracking-widest text-accent uppercase">{pillar.badge}</span>
              </div>
            )}
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5"><pillar.icon className="w-6 h-6 text-accent" /></div>
            <h3 className="text-lg font-display font-bold text-foreground mb-3">{pillar.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{pillar.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyItWorks;
