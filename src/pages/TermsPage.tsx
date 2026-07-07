// DRAFT — have a Florida attorney review before relying on this.

const effectiveDate = "Effective: July 6, 2026";

const TermsPage = () => {
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
            Terms of Service
          </h1>
          <p className="text-sm text-charcoal/60">{effectiveDate}</p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              About these terms
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              creativecoremarketing.com is the informational website of Creative Core, a
              marketing agency for Florida home service businesses based in Sarasota, Florida.
              By using this site you agree to these terms. If you don't agree, please don't use
              the site.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Website content is not a contract
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Everything on this site — service descriptions, pricing, timelines, and any stated
              commitment including the 30-Day Launch Guarantee — is informational. Our actual
              service commitments are defined solely in a signed service agreement between
              Creative Core and a client. Until you have one, nothing on this site creates an
              obligation for either of us, and site content may change at any time without
              notice.
            </p>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Any benchmarks, statistics, examples, or projected results shown on this site are
              illustrative. Marketing outcomes depend on factors outside anyone's full control,
              and past or industry results do not guarantee your results.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Intellectual property
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              The content, copy, design, and branding on this site belong to Creative Core. You
              may view and share it for personal or business-evaluation purposes, but you may not
              copy, republish, or use it commercially without our written permission.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Acceptable use
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              Don't misuse the site. That means no attempting to disrupt or overload it, no
              automated scraping or harvesting of content or contact details, no submitting
              false or misleading information through our forms, and no using the site for
              anything unlawful.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Third-party links and services
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              This site links to and embeds third-party services — for example, Calendly for
              scheduling. Those services are governed by their own terms and privacy policies,
              and we're not responsible for their content or practices.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              No warranties
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              The site is provided "as is" and "as available," without warranties of any kind,
              express or implied — including accuracy, availability, fitness for a particular
              purpose, or non-infringement. We work to keep the site accurate and online, but we
              can't promise it will always be either.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Limitation of liability
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              To the fullest extent permitted by law, Creative Core is not liable for any
              indirect, incidental, consequential, or punitive damages arising from your use of
              this site or reliance on its content. Our total liability related to your use of
              the site will not exceed one hundred US dollars ($100). Liability for services we
              actually deliver is addressed in the signed service agreement, not these terms.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Governing law
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              These terms are governed by the laws of the State of Florida, USA, without regard
              to conflict-of-law rules. Any dispute arising from these terms or your use of the
              site will be brought exclusively in the state or federal courts located in
              Sarasota County, Florida.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-display text-2xl md:text-3xl text-charcoal leading-tight" style={{ fontWeight: 700 }}>
              Changes to these terms
            </h2>
            <p className="text-base text-charcoal/80 leading-relaxed">
              We may update these terms from time to time. The effective date at the top of this
              page reflects the latest version, and continued use of the site after a change
              means you accept the updated terms.
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

export default TermsPage;
