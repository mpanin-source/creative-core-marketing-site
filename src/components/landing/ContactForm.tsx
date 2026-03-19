import { useState } from "react";
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
    "bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/30 focus:ring-2 h-12 transition-all duration-200";
  const labelClasses =
    "block text-foreground/90 text-xs uppercase tracking-wider mb-2 font-semibold";

  if (showSuccess) {
    return (
      <section className="relative section-padding" id="contact">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/20 border-2 border-success flex items-center justify-center">
            <Shield className="w-10 h-10 text-success" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-accent uppercase mb-4">
            SPRINT AUDIT SCHEDULED
          </h2>
          <p className="text-xl text-foreground/90 mb-6">
            We'll be in touch within 24 hours with your funnel breakdown.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative section-padding" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(239,84%,67%,0.04),transparent_70%)]" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-accent uppercase text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            SCHEDULE YOUR 15-MIN SPRINT AUDIT
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            We'll analyze your funnel, identify friction points, and show you exactly what a 30-day sprint would look like for your business. No pitch. No obligation.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="glass-card rounded-xl p-6 sm:p-8 shadow-elevated">
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
                      <SelectItem key={t} value={t.toLowerCase()} className="text-foreground focus:bg-accent/20 focus:text-foreground">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={labelClasses}>Message (optional)</label>
                <Textarea name="message" placeholder="Anything else we should know?" value={formData.message} onChange={handleChange}
                  className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/30 focus:ring-2 transition-all duration-200 min-h-[80px]" />
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;