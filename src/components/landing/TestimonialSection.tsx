import { Shield } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">OUR PROMISE</p>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground">
            RESULTS-DRIVEN GUARANTEE
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-xl p-8 md:p-12 text-center border-accent/20">
            <Shield className="w-12 h-12 text-accent mx-auto mb-6" />
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We're new, which means we have to prove ourselves. Here's our guarantee:
            </p>
            <p className="text-2xl md:text-3xl font-display font-black text-accent mb-6">
              15+ QUALIFIED CALLS IN 45 DAYS OR 50% REFUND
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              We define 'qualified' as: showed up for call, matches your ICP (budget fit, service area fit, intent confirmed). No weasel words. No bullshit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
