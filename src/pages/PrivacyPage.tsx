// DRAFT — have a Florida attorney review before relying on this.
//
// Accuracy notes (verified against the codebase, 2026-07-06):
// - NO analytics/tracking scripts exist on this site (no Clarity, GA/gtag, GTM,
//   Meta pixel, Hotjar, etc.) and no tracking cookies are set. If any are ever
//   added, this policy MUST be updated first.
// - Third parties actually in use: Web3Forms (contact-form relay), Calendly
//   (booking widget, loaded on demand), Lovable (hosting), Google Fonts.

const effectiveDate = "Effective: July 6, 2026";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-x-clip bg-cream-light pt-32 md:pt-36 pb-16 md:pb-20 px-6">
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-wider font-medium text-azure-dark mb-4">
            Legal
          </p>
          <h1
            className="font-display text-5xl md:text-6xl text-charcoal mb-4 leading-[0.95]"
            style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-charcoal/60">{effectiveDate}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Who we are
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Creative Core is a marketing agency for Florida home service businesses, operated
              from Sarasota, Florida, USA. This policy explains what information we collect
              through creativecoremarketing.com, why we collect it, and what we do with it. If
              you have any question this page doesn't answer, email us at{" "}
              <a href="mailto:paninmax2002@gmail.com" className="text-azure-dark underline underline-offset-2 hover:text-charcoal transition-colors">
                paninmax2002@gmail.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              What we collect
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              We only collect what you give us and the minimum technical data required to serve
              the site:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-base text-charcoal/80 leading-relaxed">
              <li>
                <span className="font-semibold text-charcoal">Contact form.</span> If you submit
                the form on our pricing page, we receive what you enter: your name, work email,
                phone number (optional), business website, business type, current ad spend, and
                anything you write in free-text fields. The submission is relayed to our email
                inbox by Web3Forms, a third-party form delivery service.
              </li>
              <li>
                <span className="font-semibold text-charcoal">Booking data.</span> Strategy calls
                are scheduled through Calendly. When you open the scheduler, Calendly's widget
                loads on the page and any details you enter (name, email, answers to booking
                questions) are collected by Calendly under{" "}
                <a
                  href="https://calendly.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-azure-dark underline underline-offset-2 hover:text-charcoal transition-colors"
                >
                  Calendly's own privacy policy
                </a>
                , then shared with us so we can hold the call.
              </li>
              <li>
                <span className="font-semibold text-charcoal">Technical data.</span> The site is
                hosted on Lovable, whose infrastructure may keep standard server logs (IP
                address, browser type, pages requested). Our fonts are served by Google Fonts,
                which means your browser sends your IP address to Google when it downloads them.
              </li>
            </ul>
            <p className="text-base text-charcoal/80 leading-relaxed">
              <span className="font-semibold text-charcoal">What we don't collect:</span> this
              site does not use analytics or advertising cookies, tracking pixels, or session
              recording tools. We don't buy data about you, and we never ask for financial
              information through this website.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Why we collect it
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              We use your information to respond to your inquiry, schedule and prepare for your
              strategy call, evaluate whether we're a fit to work together, and keep the site
              running. That's it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Who we share it with
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              We never sell your information, and we never share it for advertising. The only
              parties that touch your data are the service providers that make the site work:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base text-charcoal/80 leading-relaxed">
              <li>Web3Forms — relays contact-form submissions to our email</li>
              <li>Calendly — handles call scheduling</li>
              <li>Lovable — hosts this website</li>
              <li>Google — serves our fonts, and inquiries arrive in a Gmail inbox</li>
            </ul>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Each of these providers processes data under its own privacy policy. We may also
              disclose information if the law requires it.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              How long we keep it
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              We keep inquiry and booking information for as long as we need it to handle your
              request or maintain a business relationship with you, then delete it. You can
              shorten that at any time — see below.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Your rights
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              You can ask us what information we hold about you, ask us to correct it, or ask us
              to delete it. Email{" "}
              <a href="mailto:paninmax2002@gmail.com" className="text-azure-dark underline underline-offset-2 hover:text-charcoal transition-colors">
                paninmax2002@gmail.com
              </a>{" "}
              and we'll respond promptly.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Consent to be contacted
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              By submitting the contact form or booking a call, you consent to us contacting you
              by email or phone about your request. We will not send you SMS messages unless you
              separately opt in to receive them — and if you do, you can opt out at any time by
              replying STOP.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Children
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              This site is for business owners and is not directed at anyone under 18. We do not
              knowingly collect information from minors.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Changes to this policy
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              If we change how we handle your information — for example, if we ever add analytics
              — we'll update this page and its effective date before the change takes effect.
            </p>
          </div>

          <div className="space-y-4 border-t border-charcoal/10 pt-10">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Contact
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Creative Core
              <br />
              Sarasota, Florida, USA
              <br />
              <a href="mailto:paninmax2002@gmail.com" className="text-azure-dark underline underline-offset-2 hover:text-charcoal transition-colors">
                paninmax2002@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
