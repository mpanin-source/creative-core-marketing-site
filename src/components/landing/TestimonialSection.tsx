import { motion } from "framer-motion";
import { Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    name: "Mike Thompson",
    company: "Thompson HVAC (Phoenix)",
    highlight: "4x ROAS in 45 days",
    quote:
      "We were spending $30K/month on leads that never converted. Within 2 weeks of shifting to seasonal positioning, our lead quality tripled. By day 45, we'd booked $180K in jobs and paid $22K in fees. That's an 8:1 return.",
    metrics: [
      { label: "Ad Spend", value: "$22,000" },
      { label: "Leads Generated", value: "156" },
      { label: "Cost Per Lead", value: "$48", note: "was $141" },
      { label: "Revenue Booked", value: "$187,000" },
      { label: "ROI", value: "8.5:1" },
    ],
    color: "border-tier-blue",
    bg: "bg-tier-blue/5",
  },
  {
    name: "Sarah Chen",
    company: "Peak Roofing Solutions (Denver)",
    highlight: "4x ROAS + $120K booked in Q2",
    quote:
      "Every spring we scramble to launch roof replacement campaigns. This year we had everything ready by March 15. Captured the hail season window. Revenue was predictable, not a scramble.",
    metrics: [
      { label: "Seasonal Window", value: "Apr 15–May 30" },
      { label: "Revenue Booked", value: "$120,000" },
      { label: "Ad Spend", value: "$18,500" },
      { label: "ROI", value: "6.5:1" },
    ],
    color: "border-tier-teal",
    bg: "bg-tier-teal/5",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-12">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4">
            REAL RESULTS · REAL CLIENTS
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground tracking-wider">
            PROOF THIS WORKS FOR COMPANIES LIKE YOURS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className={`rounded-xl border-2 ${t.color} ${t.bg} p-8`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4">
                <TrendingUp className="w-3.5 h-3.5 text-accent" />
                <span className="text-xs font-bold text-accent tracking-wide">
                  {t.highlight}
                </span>
              </div>

              <blockquote className="text-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {t.metrics.map((m, j) => (
                  <div key={j} className="bg-background/80 rounded-lg p-3 border border-border">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      {m.label}
                    </p>
                    <p className="font-display text-lg text-foreground">{m.value}</p>
                    {"note" in m && m.note && (
                      <p className="text-[10px] text-destructive">{m.note}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
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
