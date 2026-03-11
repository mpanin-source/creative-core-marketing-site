import { X, Check } from "lucide-react";

const LeadPhilosophy = () => {
  const oldWay = ["6-12 month expensive retainers", 'Paying for ads during off-season "dead zones"', "Vague reports that hide real metrics", "Budget bleeds during slow periods", "Locked into rigid, long-term contracts"];
  const creativeWay = ["High-intensity 30-day growth sprints", "Ads only run during your peak demand windows", "Full transparency on funnel leaks & wins", "Budget stops the second demand stops", "Zero long-term commitment—we earn your business every season"];

  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase mb-4">Our Philosophy</p>
            <h2 className="text-3xl md:text-5xl font-display font-black text-accent mb-4">STOP GUESSING. START EXECUTING.</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">Most agencies want you on a 12-month retainer so they can get paid while your demand is low. We only move when the data says "Go".</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="glass-card border-destructive/10 p-8 md:p-10 rounded-xl">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">The Old Way</h3>
              <p className="text-sm text-muted-foreground mb-6 italic">The Revenue Leak</p>
              <ul className="space-y-4">
                {oldWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-muted flex items-center justify-center mt-0.5"><X className="w-3 h-3 text-muted-foreground/60" /></div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card border-accent/20 p-8 md:p-10 rounded-xl shadow-[0_0_30px_-5px_hsl(var(--accent)/0.1)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.2)] hover:scale-[1.02] transition-all duration-300">
              <h3 className="text-xl font-display font-bold text-foreground mb-2">The Creative Core Way</h3>
              <p className="text-sm text-accent mb-6 italic">The High-Performance System</p>
              <ul className="space-y-4">
                {creativeWay.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5"><Check className="w-3 h-3 text-accent" /></div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg md:text-xl text-foreground">
              The transition starts with your{' '}
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:text-accent/80 font-display font-bold italic underline underline-offset-4 transition-colors duration-200">FREE Growth Audit</button>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;
