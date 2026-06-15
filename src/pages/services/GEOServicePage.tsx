import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function GEOServicePage() {
  return (
    <ServicePageTemplate
      heroEyebrow="GEO & AI Search"
      heroTitle="Get recommended by AI before they search."
      heroSubhead="Generative Engine Optimization — engineering your business to be recommended by name inside ChatGPT, Claude, Perplexity, Gemini, and Google's AI Overview. The new front page of search."
      contrarianEyebrow="The AI advantage"
      contrarianTitle="Schema isn't enough. Real GEO needs all seven signals."
      contrarianBody={[
        "Most agencies still don't have a GEO service. The ones that do treat it as \"schema markup\" and call it done. That's not enough.",
        "Real GEO requires schema, atomic answer formatting, review velocity, photo-attached reviews, citation velocity across industry sources, entity linking, and multi-platform optimization. We do all of it.",
        "AI search sends fewer visitors than Google today — but they arrive mid-decision, already comparing providers by name. Early data shows they convert at least as well as organic, and the businesses cited in those answers capture the most qualified leads.",
      ]}
      pullQuote="AI search is higher-intent because the buyer's already choosing. Get cited in the answer and you're on the shortlist."
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="What we deliver."
      capabilities={[
        { number: "01", title: "AI Overview schema", description: "LocalBusiness + service-specific markup. Makes you eligible for citations." },
        { number: "02", title: "Atomic Answer formatting", description: "The content format AI systems extract from. We engineer for it." },
        { number: "03", title: "Review velocity", description: "Heaviest-weighted GEO signal. We ask every customer the same way — un-gated, no incentives, FTC-compliant. 75+ reviews is where compound visibility starts." },
        { number: "04", title: "Photo-attached reviews", description: "AI vision trust signal. Most agencies miss this." },
        { number: "05", title: "Citation velocity", description: "Industry publications, local news, Reddit, YouTube, podcast guest spots." },
        { number: "06", title: "Multi-platform optimization", description: "Not just Google. ChatGPT, Claude, Perplexity, Gemini, each with different signals." },
      ]}
      includedEyebrow="What's included"
      includedTitle="Inside the retainer."
      included={[
        "AI Overview eligibility audit + schema deployment",
        "Atomic Answer formatting on key content",
        "Review velocity workflows",
        "Photo-attached review acquisition",
        "Citation building across industry + local sources",
        "Entity linking (sameAs + structured-data signals)",
        "Multi-platform GEO optimization",
        "Monthly AI Visibility Reports with screenshot evidence (sampled snapshots, not a live rank tracker)",
        "Competitor visibility comparison",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "What's \"GEO\" mean exactly?",
          a: "Generative Engine Optimization. Like SEO, but for AI search engines — ChatGPT, Claude, Perplexity, Gemini, Google's AI Overview.",
        },
        {
          q: "Does GEO replace SEO?",
          a: "No. They complement. Schema + reviews benefit both. Content strategy differs — GEO favors atomic, citation-rich content; SEO still rewards depth.",
        },
        {
          q: "Can I see actual AI mentions?",
          a: "Yes. Monthly reports include screenshots of AI responses mentioning your business — and what your competitors look like in the same queries. AI answers shift with phrasing and over time, so we report a sampled snapshot, not a fixed ranking.",
        },
        {
          q: "Why is AI search traffic higher-intent?",
          a: "Higher buying intent. Someone asking ChatGPT \"best HVAC company in Sarasota\" is closer to buying than someone Googling \"HVAC.\" The friction filters out the casual.",
        },
        {
          q: "Is GEO worth it if my competitors aren't doing it?",
          a: "Especially then. Early movers compound the visibility. Late movers fight for scraps once AI signals settle.",
        },
      ]}
      closingTitle="Ready to get recommended by AI?"
    />
  );
}
