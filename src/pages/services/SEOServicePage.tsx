import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function SEOServicePage() {
  return (
    <ServicePageTemplate
      heroEyebrow="Local SEO"
      heroTitle="Rank where your county is searching."
      heroSubhead="Map Pack rankings, Google Business Profile mastery, and schema deployment that makes you eligible for AI Overview citations. The foundation everything else compounds on."
      contrarianEyebrow="The AI advantage"
      contrarianTitle="Map Pack first. AI Overview second. Everything else compounds."
      contrarianBody={[
        "Most agencies still treat SEO as \"blog posts and backlinks.\" That's 2018 thinking. In 2026, the Map Pack drives the largest share of clicks for local home-service searches.",
        "If you're not in the top 3 map results, most of your county can't find you. Period.",
        "We engineer for the Map Pack first, AI Overview second, traditional organic third. That's the order that produces appointments.",
      ]}
      pullQuote="Whoever owns the Map Pack owns the county. Everything else is downstream."
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="What we deliver."
      capabilities={[
        { number: "01", title: "Schema markup", description: "LocalBusiness + service-specific markup. The entry ticket for AI Overview eligibility." },
        { number: "02", title: "NAP consistency", description: "Name, address, phone synchronized across every major citation directory." },
        { number: "03", title: "Google Business Profile", description: "Setup, weekly posts, Q&A monitoring, photo management. The most important asset." },
        { number: "04", title: "On-page optimization", description: "Title tags, meta descriptions, header structure, internal linking, service-area pages." },
        { number: "05", title: "Review velocity", description: "75+ reviews is where Map Pack rankings compound. We engineer the acquisition." },
        { number: "06", title: "Service-area pages", description: "Dedicated landing pages for each city you serve. Hyperlocal targeting." },
      ]}
      includedEyebrow="What's included"
      includedTitle="Inside the retainer."
      included={[
        "Local SEO audit + competitive benchmarking",
        "Schema deployment (LocalBusiness + service-specific)",
        "NAP consistency across all major citation directories",
        "Google Business Profile setup + weekly post management",
        "Service-area landing pages for each city served",
        "On-page SEO basics on all key pages",
        "Review velocity workflows",
        "Monthly ranking + visibility reports",
        "Quarterly strategy reviews",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "How long until I see results?",
          a: "3–6 months for measurable Map Pack movement. Compound growth from there. Anyone promising rankings in 30 days is overselling.",
        },
        {
          q: "Do you guarantee a #1 ranking?",
          a: "No agency can. We guarantee process and quality. Rankings follow consistent execution — they don't follow promises.",
        },
        {
          q: "What about Google's algorithm updates?",
          a: "We build to fundamentals, not loopholes. Updates don't hurt clients who do this right. They tend to reward us.",
        },
        {
          q: "Is SEO worth it if I'm already running Google Ads?",
          a: "Yes. Different traffic, different cost structure. SEO is the long-term moat; ads are the short-term lift. You want both.",
        },
        {
          q: "How does this work with my existing CRM?",
          a: "We integrate. No forced migrations. Full breakdown lives on the FAQ page under CRM strategy.",
        },
      ]}
      closingTitle="Ready to rank where your county is searching?"
    />
  );
}
