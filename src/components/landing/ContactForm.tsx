import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield, Clock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    toast({
      title: "Sprint Audit Scheduled!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit = formData.name && formData.email && formData.serviceType;

  const inputClasses =
    "bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/20 focus:ring-2 h-12 transition-all duration-200 rounded-lg";
  const labelClasses =
    "block text-foreground text-xs uppercase tracking-wider mb-2 font-semibold";

  if (showSuccess) {
    return (
      <section className="relative section-padding section-funnel section-dark" id="contact">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/15 border-2 border-success flex items-center justify-center">
            <Shield className="w-10 h-10 text-success" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground uppercase mb-4">
            SPRINT AUDIT SCHEDULED
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-6">
            We'll be in touch within 24 hours with your funnel breakdown.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative section-padding section-funnel section-dark" id="contact">
      <div className="relative z-10 max-w-[1000px] mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-12"
        >
          <h2 className="font-display text-primary-foreground uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            SCHEDULE YOUR 15-MIN SPRINT AUDIT
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            We'll analyze your funnel, identify friction points, and show you exactly what a 30-day sprint would look like for your business. No pitch. No obligation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className={labelClasses}>Name *</label>
                <Input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Email *</label>
                <Input type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Phone</label>
                <Input type="tel" name="phone" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Business Type *</label>
                <Select value={formData.serviceType} onValueChange={(v) => setFormData((prev) => ({ ...prev, serviceType: v }))}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select your trade" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {["HVAC", "Landscaping", "Pest Control", "Wellness", "Home Services", "Other"].map((t) => (
                      <SelectItem key={t} value={t.toLowerCase()} className="text-foreground focus:bg-accent/10 focus:text-foreground">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={labelClasses}>Message (optional)</label>
                <Textarea name="message" placeholder="Anything else we should know?" value={formData.message} onChange={handleChange}
                  className="bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/20 focus:ring-2 transition-all duration-200 min-h-[80px] rounded-lg" />
              </div>
              <button type="submit" disabled={!canSubmit || isSubmitting}
                className="w-full h-14 btn-primary rounded-lg text-base uppercase tracking-wider transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? "SUBMITTING..." : "SCHEDULE AUDIT"}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span>15-minute strategy session — no pitch, no obligation.</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-warning shrink-0" />
                <span className="text-muted-foreground">
                  <span className="text-warning font-semibold">3 spots left</span> this month.
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
