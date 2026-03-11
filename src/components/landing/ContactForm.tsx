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
    company: "",
    serviceType: "",
    adSpend: "",
    challenge: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setShowSuccess(true);
    toast({
      title: "Audit Request Received!",
      description: "Your personalized Growth Audit will be delivered within 48 hours.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const canSubmit = formData.name && formData.email && formData.serviceType && formData.adSpend;

  const inputClasses =
    "bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/40 focus:ring-2 h-12 transition-all duration-200";
  const labelClasses =
    "block text-foreground/90 text-xs uppercase tracking-wider mb-2 font-semibold";

  if (showSuccess) {
    return (
      <section className="relative section-padding" id="contact">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
            <Shield className="w-10 h-10 text-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-black text-accent uppercase mb-4">
            AUDIT REQUEST RECEIVED
          </h2>
          <p className="text-xl text-foreground/90 mb-6">
            Your personalized Growth Audit will be delivered within 48 hours.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative section-padding" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(38,92%,55%,0.06),transparent_70%)]" />
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-accent uppercase text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            SCHEDULE YOUR GROWTH AUDIT
          </h2>
          <p className="text-lg text-foreground/90 max-w-2xl mx-auto">
            A 15-minute strategy session to identify your revenue leaks. No pitch, just a plan.
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
                <label className={labelClasses}>Company Name</label>
                <Input type="text" name="company" placeholder="Your company" value={formData.company} onChange={handleChange} className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Service Type *</label>
                <Select value={formData.serviceType} onValueChange={(v) => setFormData((prev) => ({ ...prev, serviceType: v }))}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select your trade" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {["HVAC", "Plumbing", "Roofing", "Electrical", "Landscaping", "Cleaning", "Solar", "Other"].map((t) => (
                      <SelectItem key={t} value={t.toLowerCase()} className="text-foreground focus:bg-accent/20 focus:text-foreground">{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={labelClasses}>Current Monthly Ad Spend *</label>
                <Select value={formData.adSpend} onValueChange={(v) => setFormData((prev) => ({ ...prev, adSpend: v }))}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select your ad spend" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="under-1k" className="text-foreground focus:bg-accent/20 focus:text-foreground">Under $1K/month</SelectItem>
                    <SelectItem value="1k-5k" className="text-foreground focus:bg-accent/20 focus:text-foreground">$1K – $5K/month</SelectItem>
                    <SelectItem value="5k-10k" className="text-foreground focus:bg-accent/20 focus:text-foreground">$5K – $10K/month</SelectItem>
                    <SelectItem value="10k-plus" className="text-foreground focus:bg-accent/20 focus:text-foreground">$10K+/month</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className={labelClasses}>Biggest Challenge Right Now</label>
                <Textarea name="challenge" placeholder="What's your biggest pain point?" value={formData.challenge} onChange={handleChange}
                  className="bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:ring-accent/40 focus:ring-2 transition-all duration-200 min-h-[80px]" />
              </div>
              <div>
                <label className={labelClasses}>Email *</label>
                <Input type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className={inputClasses} />
              </div>
              <div>
                <label className={labelClasses}>Phone</label>
                <Input type="tel" name="phone" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} className={inputClasses} />
              </div>
              <button type="submit" disabled={!canSubmit || isSubmitting}
                className="w-full h-14 btn-gold rounded-lg text-base uppercase tracking-wider transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? "SUBMITTING..." : "SCHEDULE MY GROWTH AUDIT"}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Shield className="w-4 h-4 text-accent shrink-0" />
                <span>15-minute strategy session—no pitch, just a plan.</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span className="text-muted-foreground">
                  Now accepting <span className="text-accent font-semibold">3 new partners</span> for Spring 2026.
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
