import { motion } from "framer-motion";
import { Shield, ArrowRight } from "lucide-react";

const FirstPeakGuarantee = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl border border-accent/30 overflow-hidden shadow-[0_0_40px_hsl(var(--accent)/0.1)]">
            <div className="bg-accent px-8 py-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <Shield className="w-12 h-12 text-accent-foreground flex-shrink-0" />
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-black text-accent-foreground">
                  FIRST-PEAK LEAD GUARANTEE
                </h2>
                <p className="text-accent-foreground/90 font-body text-lg">
                  2x Ad Spend in Vetted Appointment Value — Guaranteed
                </p>
              </div>
            </div>

            <div className="glass-card p-8 md:p-12 space-y-6 border-t-0 rounded-t-none">
              <p className="text-foreground leading-relaxed">
                We don't ask for blind faith. We've built our entire approach around this guarantee:
              </p>

              <p className="text-foreground leading-relaxed font-semibold">
                The 2x Lead Value Guarantee: If we don't generate at least 2x your ad spend in vetted appointment value in your first window, we work for free until we do.
              </p>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <p className="font-display text-base font-bold text-foreground mb-3">
                  WHAT DOES "2X YOUR AD SPEND IN VETTED APPOINTMENT VALUE" MEAN?
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">→</span>
                    You spend $10K on campaigns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">→</span>
                    We generate leads worth at least $20K (based on your typical deal size + close rate)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">→</span>
                    If we miss that target, we don't stop until we hit it—and you don't pay another dime
                  </li>
                </ul>
              </div>

              <p className="text-foreground italic">
                This is how confident we are in the seasonal positioning strategy.{" "}
                <span className="font-bold text-accent">We eat our own cooking.</span>
              </p>

              <div className="border-t border-border pt-6">
                <blockquote className="text-sm text-muted-foreground italic">
                  "The guarantee is why I said yes. No agency had ever put their money where their mouth is like that. Within 45 days they delivered 8.5:1 ROAS."
                </blockquote>
                <p className="text-xs text-muted-foreground mt-2 font-semibold">
                  — Mike Thompson, Thompson HVAC
                </p>
              </div>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto btn-gold px-8 py-4 rounded-lg text-lg flex items-center justify-center gap-2 transition-all"
              >
                CLAIM YOUR GUARANTEED SPRINT
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FirstPeakGuarantee;
