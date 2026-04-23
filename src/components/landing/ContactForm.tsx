import { useState } from "react";
import { motion, type Variants } from "framer-motion";
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

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    serviceType: "",
    adSpend: "",
    currentSetup: "",
    monthlyRevenue: "",
    holdback: "",
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

  const handleSelect = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canSubmit =
    formData.name &&
    formData.email &&
    formData.website &&
    formData.serviceType &&
    formData.adSpend &&
    formData.currentSetup &&
    formData.holdback;

  const inputClasses =
    "bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:border-electric focus:ring-electric/20 focus:ring-2 h-12 transition-all duration-200 rounded-lg";
  const labelClasses =
    "block text-foreground text-xs uppercase tracking-wider mb-2 font-semibold";

  if (showSuccess) {
    return (
      <section className="relative section-padding section-funnel section-dark" id="contact">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-electric/15 border-2 border-electric flex items-center justify-center">
            <Shield className="w-10 h-10 text-electric" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-foreground uppercase mb-4" style={{ fontWeight: 700 }}>
            SPRINT AUDIT SCHEDULED
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
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
          <h2 className="font-display text-foreground uppercase text-3xl sm:text-4xl md:text-5xl mb-4" style={{ fontWeight: 700 }}>
            SCHEDULE YOUR 15-MIN SPRINT AUDIT
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'll analyze your funnel, identify friction points, and show you exactly what a 30-day sprint would look like for your business. No pitch. No obligation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
          className="max-w-xl mx-auto"
        >
          <div className="bg-card rounded-xl p-6 sm:p-8 border border-border shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className={labelClasses}>Your Name *</label>
                <Input type="text" name="name" placeholder="Full name" value={formData.name} onChange={handleChange} required className={inputClasses} />
              </div>
              {/* Email */}
              <div>
                <label className={labelClasses}>Work Email *</label>
                <Input type="email" name="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className={inputClasses} />
              </div>
              {/* Phone */}
              <div>
                <label className={labelClasses}>Phone Number</label>
                <Input type="tel" name="phone" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} className={inputClasses} />
                <p className="text-muted-foreground text-xs mt-1.5">For faster scheduling (optional)</p>
              </div>
              {/* Website */}
              <div>
                <label className={labelClasses}>Website URL *</label>
                <Input type="url" name="website" placeholder="https://yourbusiness.com" value={formData.website} onChange={handleChange} required className={inputClasses} />
              </div>
              {/* Business Type */}
              <div>
                <label className={labelClasses}>What type of business are you? *</label>
                <Select value={formData.serviceType} onValueChange={(v) => handleSelect("serviceType", v)}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[
                      { value: "hvac", label: "HVAC" },
                      { value: "landscaping", label: "Landscaping" },
                      { value: "pest-control", label: "Pest Control" },
                      { value: "wellness", label: "Wellness/Med Spa" },
                      { value: "home-services", label: "Home Services (plumbing, roofing, etc.)" },
                      { value: "other-local", label: "Other Local Service Business" },
                      { value: "not-local", label: "Not a local service business" },
                    ].map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-foreground focus:bg-electric/10 focus:text-foreground">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Monthly Ad Spend */}
              <div>
                <label className={labelClasses}>Current Monthly Ad Spend *</label>
                <Select value={formData.adSpend} onValueChange={(v) => handleSelect("adSpend", v)}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select your ad spend" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[
                      { value: "under-1k", label: "Under $1,000/month" },
                      { value: "1k-2k", label: "$1,000 – $2,000/month" },
                      { value: "2k-5k", label: "$2,000 – $5,000/month" },
                      { value: "5k-10k", label: "$5,000 – $10,000/month" },
                      { value: "10k-plus", label: "$10,000+/month" },
                    ].map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-foreground focus:bg-electric/10 focus:text-foreground">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Current Setup */}
              <div>
                <label className={labelClasses}>Who's running your ads right now? *</label>
                <Select value={formData.currentSetup} onValueChange={(v) => handleSelect("currentSetup", v)}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select current setup" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[
                      { value: "agency", label: "I'm working with an agency" },
                      { value: "myself", label: "I'm doing it myself" },
                      { value: "in-house", label: "I have an in-house team" },
                      { value: "not-running", label: "I'm not running ads yet" },
                    ].map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-foreground focus:bg-electric/10 focus:text-foreground">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Monthly Revenue */}
              <div>
                <label className={labelClasses}>Current Monthly Revenue</label>
                <Select value={formData.monthlyRevenue} onValueChange={(v) => handleSelect("monthlyRevenue", v)}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Optional" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[
                      { value: "under-50k", label: "Under $50k/month" },
                      { value: "50k-100k", label: "$50k – $100k/month" },
                      { value: "100k-250k", label: "$100k – $250k/month" },
                      { value: "250k-500k", label: "$250k – $500k/month" },
                      { value: "500k-plus", label: "$500k+/month" },
                    ].map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-foreground focus:bg-electric/10 focus:text-foreground">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {/* Holdback Diagnostic */}
              <div>
                <label className={labelClasses}>What's the #1 thing holding your business back? *</label>
                <Select value={formData.holdback} onValueChange={(v) => handleSelect("holdback", v)}>
                  <SelectTrigger className={inputClasses}>
                    <SelectValue placeholder="Select what's holding you back" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[
                      { value: "not-enough-leads", label: "Not enough leads" },
                      { value: "leads-not-converting", label: "Leads aren't converting to customers" },
                      { value: "low-customer-value", label: "Customers aren't spending enough / coming back" },
                      { value: "capacity", label: "Can't handle the work we already have" },
                      { value: "unsure", label: "Honestly not sure" },
                    ].map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-foreground focus:bg-electric/10 focus:text-foreground">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <button type="submit" disabled={!canSubmit || isSubmitting}
                className="w-full h-14 btn-primary rounded-lg text-base uppercase tracking-wider transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? "SUBMITTING..." : "SEND MY FUNNEL AUDIT"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-border space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Shield className="w-4 h-4 shrink-0 text-electric" />
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