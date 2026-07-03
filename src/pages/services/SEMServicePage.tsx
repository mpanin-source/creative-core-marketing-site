import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function SEMServicePage() {
  return (
    <ServicePageTemplate
      heroEyebrow="SEM & Paid Search"
      heroTitle="Convert intent into appointments."
      heroSubhead="Google Local Services Ads, Search, Performance Max. Zero markup on ad spend. Your card pays the platforms directly. Our fee is for the work — not a cut of your media."
      contrarianEyebrow="The AI advantage"
      contrarianTitle="Zero markup. Incentives aligned with appointments."
      contrarianBody={[
        "Most agencies make their margin on a percentage of your ad spend. The bigger your budget, the more they earn — whether or not the campaigns convert.",
        "We don't operate that way. You pay platforms directly. We get paid for managing the campaigns. When your media spend grows, our fee doesn't auto-grow with it.",
        "That's how incentives stay aligned with appointments, not ad waste.",
      ]}
      pullQuote="If the agency's margin grows with your ad waste, they're not on your team."
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="What we deliver."
      capabilities={[
        { number: "01", title: "LSA + Google Verified", description: "Setup, certification, lead-quality monitoring with credit recovery via Google's review process. Benchmark-beating CPLs on the channel built for home-services intent." },
        { number: "02", title: "Performance Max", description: "2026's dominant Google campaign type. $72 average CPL vs $149 non-branded search — per 2026 HVAC ad benchmarks." },
        { number: "03", title: "Paid Social (Meta) — add-on", description: "Available to Growth & Scale clients once your GBP, reviews, and foundation are live. Scoped on a call — you approve every dollar." },
        { number: "04", title: "Search Ads", description: "Branded + non-branded queries. Negative keywords managed weekly." },
        { number: "05", title: "Creative iteration", description: "Ad copy and assets refreshed based on what your search-term and conversion data actually say — scaled to your spend, not a testing quota." },
        { number: "06", title: "AI Max migration", description: "We're already preparing client accounts for Google's AI Max transition." },
      ]}
      includedEyebrow="What's included"
      includedTitle="Inside the retainer."
      included={[
        "LSA setup + Google Verified certification",
        "Lead-quality monitoring + credit recovery",
        "Google Ads campaign management (Search, Performance Max)",
        "Paid Social (Meta) — readiness-gated add-on for Growth & Scale",
        "Ad copy iteration driven by conversion data",
        "Negative keyword + match type refinement",
        "Quality Score monitoring + improvement",
        "Monthly performance reporting",
        "Quarterly strategy reviews",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "What's the minimum ad spend?",
          a: "$3,000/month recommended. Below that, optimization data is sparse and Performance Max can't learn fast enough to outperform manual.",
        },
        {
          q: "Is there really zero markup?",
          a: "Yes. Ad accounts in your name. Cards on file are yours. Our fee is for the work — not a percentage of your media budget.",
        },
        {
          q: "How fast do paid ads convert?",
          a: "LSA can produce calls in week 1. Performance Max takes 30–60 days to optimize. Don't trust agencies promising faster.",
        },
        {
          q: "What if I'm already running Google Ads?",
          a: "We audit, restructure, and either take over or hand back better than we found it. Either outcome is a win for you.",
        },
        {
          q: "Do you do TikTok or LinkedIn ads?",
          a: "Not for home services. The audience isn't there yet. Meta + Google + LSA is the right stack for Florida residential.",
        },
      ]}
      closingTitle="Ready to convert intent into appointments?"
    />
  );
}
