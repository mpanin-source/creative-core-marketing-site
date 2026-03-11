import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Mike Thompson",
    company: "Thompson HVAC (Phoenix)",
    highlight: "8.5:1 ROAS in 45 days",
    quote: "Within 2 weeks of shifting to seasonal positioning, our lead quality tripled. By day 45, we'd booked $180K in jobs from $22K in ad spend.",
    metrics: [
      { label: "Cost Per Lead", value: "$48", note: "was $141" },
      { label: "Revenue Booked", value: "$187K" },
      { label: "ROI", value: "8.5:1" },
    ],
  },
  {
    name: "Sarah Chen",
    company: "Peak Roofing Solutions (Denver)",
    highlight: "$120K booked in Q2",
    quote: "This year we had everything ready before storm season. Revenue was predictable, not a scramble.",
    metrics: [
      { label: "Ad Spend", value: "$18.5K" },
      { label: "Revenue Booked", value: "$120K" },
      { label: "ROI", value: "6.5:1" },
    ],
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase mb-4">REAL RESULTS</p>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground">
            PROOF THIS WORKS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="glass-card rounded-xl p-6 md:p-8"
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4">
                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent">{t.highlight}</span>
              </div>
              <blockquote className="text-foreground/80 leading-relaxed mb-5 italic text-sm">"{t.quote}"</blockquote>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {t.metrics.map((m, j) => (
                  <div key={j} className="bg-secondary rounded-lg p-3 border border-border text-center">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">{m.label}</p>
                    <p className="font-display text-lg font-bold text-foreground">{m.value}</p>
                    {"note" in m && m.note && <p className="text-[10px] text-destructive">{m.note}</p>}
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
