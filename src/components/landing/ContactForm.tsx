import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Shield } from "lucide-react";
import { openCalendlyPopup } from "@/lib/calendly";
import { CALENDLY_URL } from "@/config/site";

// Web3Forms client-side relay (https://web3forms.com). Keys are designed to be exposed
// in frontend code — submissions are relayed to the account inbox (paninmax2002@gmail.com).
const WEB3FORMS_ACCESS_KEY = "307765c8-b142-4e7b-b91b-4f2751de2ec3";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const OWNER_EMAIL = "paninmax2002@gmail.com";


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
    service: "",
    city: "",
    focus: "",
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
      if (!WEB3FORMS_ACCESS_KEY) {
        throw new Error("Web3Forms access key not configured");
      }

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New strategy call request — ${formData.name}`,
          from_name: "Creative Core Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          service: formData.service,
          city_market: formData.city,
          fix_first: formData.focus || "Not provided",
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

  const canSubmit =
    formData.name &&
    formData.email &&
    formData.phone &&
    formData.website &&
    formData.service &&
    formData.city;

  // Failed relay must never lose a lead — mailto fallback carries their details.
  const mailtoFallback = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
    `Strategy call request — ${formData.name || "my business"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nWebsite: ${formData.website}\nService: ${formData.service}\nCity/market: ${formData.city}`
  )}`;

  // Calendly prefill. `name`/`email` hit its built-in fields; a1..aN map to the CUSTOM
  // invitee questions BY POSITION — there is no prefill-by-name for custom questions.
  //
  // Live /30min custom-question order (confirmed with owner 2026-08-13; Phone is a
  // CUSTOM field on this event, not Calendly's built-in, which is what sets these
  // indices): a1 Website URL · a2 Phone · a3 Your Service · a4 City/Primary Market(s) ·
  // a5 marketing spend · a6 ad-creative link · a7 bottleneck.
  //
  // We prefill a1–a4 — every field this form collects that maps 1:1. a5 (spend) is
  // required in Calendly and isn't asked here, so they still pick it. a7 is deliberately
  // left alone: if the link question ever moves, an off-by-one would paste their answer
  // into the wrong box, and a mis-filled field is worse than an empty one.
  //
  // ⚠️ Reordering questions in Calendly silently breaks this. Re-check on any change.
  const openCalendlyWithPrefill = () => {
    const params = new URLSearchParams({ name: formData.name, email: formData.email });
    const byPosition = {
      a1: formData.website,
      a2: formData.phone,
      a3: formData.service,
      a4: formData.city,
    };
    for (const [key, value] of Object.entries(byPosition)) {
      if (value) params.set(key, value);
    }
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
          {/* Green, not coral: this is the one confirmation state on the site, and coral
              reads as "action needed" everywhere else. Solid fill + white glyph rather than
              a tinted circle — that's the pattern people read as "done" without thinking. */}
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success flex items-center justify-center">
            <Shield className="w-10 h-10 text-white" />
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
              <label className={labelClasses}>Phone Number *</label>
              <Input type="tel" name="phone" placeholder="+1 (555) 123-4567" value={formData.phone} onChange={handleChange} required className={inputClasses} />
            </div>
            {/* Website */}
            <div>
              <label className={labelClasses}>Website URL *</label>
              <Input type="url" name="website" placeholder="https://yourbusiness.com" value={formData.website} onChange={handleChange} required className={inputClasses} />
            </div>
            {/* Service + city mirror the Calendly invitee questions so both surfaces
                collect the same thing. City/market is what makes the county exclusivity
                check (and the cross-brand check) runnable before the call. */}
            <div>
              <label className={labelClasses}>Your Service *</label>
              <Input type="text" name="service" placeholder="e.g. HVAC repair &amp; install" value={formData.service} onChange={handleChange} required className={inputClasses} />
            </div>
            <div>
              <label className={labelClasses}>City / Primary Market(s) You Serve *</label>
              <Input type="text" name="city" placeholder="e.g. Sarasota &amp; Manatee County" value={formData.city} onChange={handleChange} required className={inputClasses} />
            </div>
            {/* The one open question — optional on purpose. The qualifier lives in the
                Calendly booking intake (Call Kit §3a); this path is for people not ready
                to book, so it must stay LIGHTER than booking, never heavier. */}
            <div>
              <label className={labelClasses}>What would you want fixed first?</label>
              <Textarea
                name="focus"
                placeholder="Optional — a sentence is plenty."
                value={formData.focus}
                onChange={handleChange}
                rows={3}
                className={`${inputClasses} h-auto py-3 resize-y`}
              />
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
              <span>Free strategy call — no pitch, no obligation.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
