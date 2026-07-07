import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowRight, Shield } from "lucide-react";
import { openCalendlyPopup } from "@/lib/calendly";
import { CALENDLY_URL } from "@/config/site";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Web3Forms client-side relay (https://web3forms.com). Keys are designed to be exposed
// in frontend code — submissions are relayed to the account inbox (paninmax2002@gmail.com).
const WEB3FORMS_ACCESS_KEY = "307765c8-b142-4e7b-b91b-4f2751de2ec3";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const OWNER_EMAIL = "paninmax2002@gmail.com";

type Option = { value: string; label: string };

const BUSINESS_TYPES: Option[] = [
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
];

const AD_SPEND_OPTIONS: Option[] = [
  { value: "under-1k", label: "Under $1,000/month" },
  { value: "1k-2k", label: "$1,000 – $2,000/month" },
  { value: "2k-5k", label: "$2,000 – $5,000/month" },
  { value: "5k-10k", label: "$5,000 – $10,000/month" },
  { value: "10k-plus", label: "$10,000+/month" },
];

const CURRENT_SETUP_OPTIONS: Option[] = [
  { value: "agency", label: "I'm working with an agency" },
  { value: "myself", label: "I'm doing it myself" },
  { value: "in-house", label: "I have an in-house team" },
  { value: "not-running", label: "I'm not running ads yet" },
];

const MONTHLY_REVENUE_OPTIONS: Option[] = [
  { value: "under-50k", label: "Under $50k/month" },
  { value: "50k-100k", label: "$50k – $100k/month" },
  { value: "100k-250k", label: "$100k – $250k/month" },
  { value: "250k-500k", label: "$250k – $500k/month" },
  { value: "500k-plus", label: "$500k+/month" },
];

const TIMELINE_OPTIONS: Option[] = [
  { value: "30-days", label: "Ready to start within 30 days" },
  { value: "60-days", label: "Within 60 days" },
  { value: "90-days", label: "Within 90 days" },
  { value: "exploring", label: "Just exploring options" },
];

const HOLDBACK_OPTIONS: Option[] = [
  { value: "not-enough-leads", label: "Not enough leads" },
  { value: "leads-not-converting", label: "Leads aren't converting to customers" },
  { value: "low-customer-value", label: "Customers aren't spending enough / coming back" },
  { value: "capacity", label: "Can't handle the work we already have" },
  { value: "unsure", label: "Honestly not sure" },
];

// Send human-readable labels (not slugs like "1k-2k") in the lead email.
const labelFor = (options: Option[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  // Honeypot field (Web3Forms "botcheck" convention) — humans never see it.
  const [botcheck, setBotcheck] = useState("");

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
    setSubmitError(false);

    // Honeypot filled → bot. Silently pretend success, send nothing.
    if (botcheck) {
      setShowSuccess(true);
      return;
    }

    setIsSubmitting(true);
    try {
      // Never pretend a lead was delivered while the relay key is unconfigured.
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "REPLACE_WITH_WEB3FORMS_ACCESS_KEY") {
        throw new Error("Web3Forms access key not configured");
      }

      const businessType = labelFor(BUSINESS_TYPES, formData.serviceType);
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New strategy call request — ${formData.name} (${businessType})`,
          from_name: "Creative Core Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          website: formData.website,
          business_type: businessType,
          monthly_ad_spend: labelFor(AD_SPEND_OPTIONS, formData.adSpend),
          current_setup: labelFor(CURRENT_SETUP_OPTIONS, formData.currentSetup),
          monthly_revenue:
            labelFor(MONTHLY_REVENUE_OPTIONS, formData.monthlyRevenue) || "Not provided",
          timeline: labelFor(TIMELINE_OPTIONS, formData.timeline),
          biggest_holdback: labelFor(HOLDBACK_OPTIONS, formData.holdback),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Web3Forms submission failed");
      }

      setShowSuccess(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
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

  // Failed relay must never lose a lead — mailto fallback carries their details.
  const mailtoFallback = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
    `Strategy call request — ${formData.name || "my business"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website}`
  )}`;

  const openCalendlyWithPrefill = () => {
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      a1: formData.phone,
    });
    void openCalendlyPopup(`${CALENDLY_URL}?${params.toString()}`);
  };

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
            Request received.
          </h2>
          <p className="text-lg text-charcoal/70 mb-8 max-w-xl mx-auto leading-relaxed">
            Thanks — we'll review your details and reply within one business day.
            Want to skip the wait? Grab a time on the calendar now.
          </p>
          <button
            type="button"
            onClick={openCalendlyWithPrefill}
            className="h-14 px-8 rounded-md bg-coral hover:bg-coral-dark text-white text-base font-medium tracking-wider transition-colors inline-flex items-center justify-center gap-2"
          >
            Book my strategy call
            <ArrowRight className="w-5 h-5" />
          </button>
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
            {/* Honeypot (Web3Forms botcheck) — hidden from humans, bots fill it */}
            <input
              type="text"
              name="botcheck"
              value={botcheck}
              onChange={(e) => setBotcheck(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />
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
                  {BUSINESS_TYPES.map((t) => (
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
                  {AD_SPEND_OPTIONS.map((t) => (
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
                  {CURRENT_SETUP_OPTIONS.map((t) => (
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
                  {MONTHLY_REVENUE_OPTIONS.map((t) => (
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
                  {TIMELINE_OPTIONS.map((t) => (
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
                  {HOLDBACK_OPTIONS.map((t) => (
                    <SelectItem key={t.value} value={t.value} className="text-charcoal focus:bg-coral/10 focus:text-charcoal">{t.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {submitError && (
              <div className="rounded-md bg-coral/10 border border-coral/40 p-4 text-sm text-charcoal leading-relaxed">
                Something went wrong sending your request. Email us directly at{" "}
                <a href={mailtoFallback} className="font-semibold text-coral-dark underline hover:text-coral transition-colors">
                  {OWNER_EMAIL}
                </a>{" "}
                and we'll take it from there — no lead gets lost.
              </div>
            )}

            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="w-full h-14 rounded-md bg-coral hover:bg-coral-dark text-white text-base font-medium tracking-wider transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Submitting…" : "Book my strategy call"}
              {!isSubmitting && <ArrowRight className="w-5 h-5" />}
            </button>

            <p className="text-xs text-muted-dark text-center leading-relaxed">
              By submitting, you agree we may contact you about your request. See our{" "}
              <a href="/privacy" className="underline hover:text-charcoal transition-colors">privacy policy</a>.
            </p>
          </form>

          <div className="mt-6 pt-6 border-t border-charcoal/10">
            <div className="flex items-center gap-3 text-sm text-muted-dark">
              <Shield className="w-4 h-4 shrink-0 text-coral-dark" />
              <span>30-minute strategy session — no pitch, no obligation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
