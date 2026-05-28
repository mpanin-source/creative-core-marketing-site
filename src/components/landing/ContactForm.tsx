import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Shield } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CALENDLY_URL = "https://calendly.com/paninmax2002/strategy-call";

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
    timeline: "",
    holdback: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setShowSuccess(true);
    toast({
      title: "Sending you to Calendly…",
      description: "Pick a time in the next 14 days. We'll see you there.",
    });
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.phone,
    });
    setTimeout(() => {
      window.location.href = `${CALENDLY_URL}?${params.toString()}`;
    }, 800);
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
    formData.timeline &&
    formData.holdback;

  // R7.6 Phase 7: cream/white discipline. Inputs are white bg + charcoal text. Labels charcoal. Placeholders muted-dark.
  const inputClasses =
    "bg-white border border-charcoal/20 text-charcoal placeholder:text-muted-dark focus:border-coral focus:ring-2 focus:ring-coral/20 h-12 transition-all duration-200 rounded-md";
  const labelClasses =
    "block text-charcoal text-xs uppercase tracking-[0.15em] mb-2 font-semibold";

  if (showSuccess) {
    return (
      <section id="contact" className="bg-cream-light py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-coral/15 border-2 border-coral flex items-center justify-center">
            <Shield className="w-10 h-10 text-coral-dark" />
          </div>
          <h2
            className="font-display text-3xl md:text-5xl text-charcoal mb-4 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Redirecting to Calendly…
          </h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Pick a time that works for you. We'll see you there.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-cream-light py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.15em] font-medium text-coral-dark mb-4">
            Start here
          </p>
          <h2
            className="font-display text-4xl md:text-5xl text-charcoal mb-4 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Tell us about your business.
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            We'll review your situation, identify where leads are leaking, and map out which Creative Core path makes sense.
            No pitch — just a plan.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-10 border border-charcoal/10 shadow-sm">
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
              <p className="text-muted-dark text-xs mt-1.5">For faster scheduling (optional)</p>
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
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "hvac", label: "HVAC" },
                    { value: "roofing", label: "Roofing" },
                    { value: "plumbing", label: "Plumbing" },
                    { value: "pest-control", label: "Pest Control" },
                    { value: "window-tinting", label: "Window Tinting" },
                    { value: "painting", label: "Painting" },
                    { value: "tree-service", label: "Tree Service" },
                    { value: "garage-repair", label: "Garage Door Repair" },
                    { value: "junk-removal", label: "Junk Removal" },
                    { value: "other-home", label: "Other Home Services" },
                    { value: "not-local", label: "Not a Florida home service" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
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
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "under-1k", label: "Under $1,000/month" },
                    { value: "1k-2k", label: "$1,000 – $2,000/month" },
                    { value: "2k-5k", label: "$2,000 – $5,000/month" },
                    { value: "5k-10k", label: "$5,000 – $10,000/month" },
                    { value: "10k-plus", label: "$10,000+/month" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
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
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "agency", label: "I'm working with an agency" },
                    { value: "myself", label: "I'm doing it myself" },
                    { value: "in-house", label: "I have an in-house team" },
                    { value: "not-running", label: "I'm not running ads yet" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
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
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "under-50k", label: "Under $50k/month" },
                    { value: "50k-100k", label: "$50k – $100k/month" },
                    { value: "100k-250k", label: "$100k – $250k/month" },
                    { value: "250k-500k", label: "$250k – $500k/month" },
                    { value: "500k-plus", label: "$500k+/month" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {/* Timeline */}
            <div>
              <label className={labelClasses}>What timeline are you on? *</label>
              <Select value={formData.timeline} onValueChange={(v) => handleSelect("timeline", v)}>
                <SelectTrigger className={inputClasses}>
                  <SelectValue placeholder="Select your timeline" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "30-days", label: "Ready to start within 30 days" },
                    { value: "60-days", label: "Within 60 days" },
                    { value: "90-days", label: "Within 90 days" },
                    { value: "exploring", label: "Just exploring options" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-muted-dark text-xs mt-1.5">We prioritize businesses ready to start in the next 30 days.</p>
            </div>
            {/* Holdback Diagnostic */}
            <div>
              <label className={labelClasses}>What's the #1 thing holding your business back? *</label>
              <Select value={formData.holdback} onValueChange={(v) => handleSelect("holdback", v)}>
                <SelectTrigger className={inputClasses}>
                  <SelectValue placeholder="Select what's holding you back" />
                </SelectTrigger>
                <SelectContent className="bg-white border border-charcoal/20">
                  {[
                    { value: "not-enough-leads", label: "Not enough leads" },
                    { value: "leads-not-converting", label: "Leads aren't converting to customers" },
                    { value: "low-customer-value", label: "Customers aren't spending enough / coming back" },
                    { value: "capacity", label: "Can't handle the work we already have" },
                    { value: "unsure", label: "Honestly not sure" },
                  ].map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full h-14 rounded-md bg-coral hover:bg-coral-dark text-white text-base font-medium tracking-wider transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Submitting…" : "Book my strategy call"}
              {!isSubmitting && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-charcoal/10">
            <div className="flex items-center gap-3 text-sm text-muted-dark">
              <Shield className="w-4 h-4 shrink-0 text-coral-dark" />
              <span>15-minute strategy session — no pitch, no obligation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
