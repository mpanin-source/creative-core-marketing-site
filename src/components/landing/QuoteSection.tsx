import { motion } from "framer-motion";

interface QuoteSectionProps {
  variant: "full" | "short" | "confidence";
}

const QuoteSection = ({ variant }: QuoteSectionProps) => {
  if (variant === "full") {
    return (
      <section id="philosophy-quote" className="section-padding bg-background">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0.3, 1] }}
          className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12 border-l-4 border-accent shadow-sm"
          style={{ background: "hsl(var(--accent) / 0.05)" }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
            ROAS is one of the most misunderstood metrics in paid ads. HVAC and
            roofing companies chase big numbers without understanding what they
            mean in context. You need to know your close rates, deal size, and
            lifetime value before judging performance.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            When you understand your full customer journey—from first click to
            signed contract—the numbers don't lie.{" "}
            <span className="font-bold text-accent">And neither do we.</span>
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">
            — Seasonal Momentum
          </p>
        </motion.div>
      </section>
    );
  }

  if (variant === "short") {
    return (
      <section id="reinforcement-quote" className="py-8 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 py-4 text-center border-t-2 border-b-2 border-accent"
        >
          <p className="text-lg md:text-xl italic text-foreground">
            "We don't chase vanity numbers. We chase profit. And we guarantee it
            with our First-Peak Lead Guarantee."
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">
            — Seasonal Momentum Philosophy
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="confidence-quote" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.32, 0.72, 0.3, 1] }}
        className="max-w-3xl mx-auto rounded-xl p-6 md:p-8"
        style={{ background: "hsl(var(--primary) / 0.1)" }}
      >
        <p className="text-lg md:text-xl font-bold text-foreground">
          Is your ROAS "good" but your bank account doesn't feel it?
        </p>
        <p className="text-base md:text-lg text-foreground my-3">
          Here's the issue: You're optimizing the wrong metric for the wrong
          season.
        </p>
        <p className="text-lg font-bold text-accent">
          We fix the timing first. Then the numbers follow.
        </p>
        <motion.button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-4 text-sm text-accent hover:text-accent/80 transition-colors font-medium inline-flex items-center gap-1"
          whileHover={{ x: 4 }}
        >
          Ready to see what's actually working? →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
