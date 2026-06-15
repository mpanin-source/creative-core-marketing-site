import ServicePageTemplate from "@/components/services/ServicePageTemplate";

export default function CustomSoftwareServicePage() {
  return (
    <ServicePageTemplate
      heroEyebrow="Custom Software Solutions"
      heroTitle="Fix what your funnel can't."
      heroSubhead="The proprietary tooling that powers your marketing — dashboards, lead-routers, integration bridges and reporting we build when off-the-shelf software caps your results. Productized, not a bespoke dev shop."
      contrarianEyebrow="The AI advantage"
      contrarianTitle="Off-the-shelf solves general. We solve yours."
      contrarianBody={[
        "Off-the-shelf tools solve general problems. Your business has specific bottlenecks.",
        "After a CRO audit, we often find that the biggest wins aren't in marketing — they're in the gaps between your tools. A dispatcher spending 2 hours/day reconciling jobs. A lead scoring system that can't tell which calls are highest value. A reporting layer that misses the metric that matters most.",
        "Custom software fixes these.",
      ]}
      pullQuote="The biggest wins aren't in marketing. They're in the gaps between your tools."
      capabilitiesEyebrow="What we build"
      capabilitiesTitle="The tooling that powers the marketing."
      capabilities={[
        { number: "01", title: "Custom dispatching tools", description: "Automated job assignment based on technician availability, location, skill set." },
        { number: "02", title: "Lead scoring algorithms", description: "Tuned to your specific trade and conversion patterns. Routes hot leads first." },
        { number: "03", title: "Integration bridges", description: "Legacy CRM to modern stack. ServiceTitan to GHL. Custom APIs." },
        { number: "04", title: "Reporting layers", description: "Beyond standard analytics. Custom dashboards showing the metrics you actually care about." },
        { number: "05", title: "AI agents", description: "Voice agents, SMS agents, internal AI assistants tuned to your data." },
        { number: "06", title: "Internal tools", description: "Whatever your team does manually that could be automated. We build it." },
      ]}
      includedEyebrow="Our process"
      includedTitle="How a Custom Software engagement works."
      included={[
        "CRO audit reveals the opportunity",
        "Scope + timeline + investment proposed",
        "Discovery + requirements gathering",
        "Design + architecture",
        "Build + testing",
        "Deploy + train your team",
        "30-day support post-launch",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "What's the typical project investment?",
          a: "$5,000–$50,000 depending on scope. Most engagements are 4–12 weeks from kickoff to deploy.",
        },
        {
          q: "Is this part of my marketing retainer?",
          a: "No. Custom software is project-based and quoted separately after we've identified the opportunity through a CRO audit.",
        },
        {
          q: "Do you only build for marketing?",
          a: "No. We build whatever solves a real business bottleneck — operational, sales, reporting, internal tools.",
        },
        {
          q: "What tech stack do you use?",
          a: "Modern web tech: React, Node, Python. AI integrations via OpenAI, Anthropic, and other current best-in-class APIs.",
        },
        {
          q: "Will I own the code?",
          a: "Yes. You own the codebase. We deliver, you keep it. No vendor lock-in.",
        },
      ]}
      closingTitle="Ready to fix what your funnel can't?"
    />
  );
}
