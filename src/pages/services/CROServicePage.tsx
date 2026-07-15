import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const CROServicePage = () => {
  return (
    <ServicePageTemplate
      currentSlug="cro"
      heroEyebrow="Conversion Rate Optimization"
      heroTitle="Make every visit count."
      heroSubhead="Intelligent optimization that turns traffic into appointments. Mobile-first audits, speed-to-lead workflows, and A/B testing on every conversion-critical page. Built for profit, not just traffic."
      contrarianEyebrow="The CRO reality"
      contrarianTitle="Fix the funnel first. Everything else compounds from there."
      contrarianBody={[
        "Most home services agencies treat conversion rate optimization as an afterthought. They drive traffic, hope it converts, and report on impressions when it doesn't.",
        "We invert that. CRO is the foundation underneath every other system — without it, paid search burns budget, SEO traffic bounces, and AI search visibility never compounds into appointments.",
        "Fix the funnel first. Everything else compounds from there.",
      ]}
      pullQuote="Traffic isn't the problem. The funnel is."
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="What we deliver."
      capabilities={[
        {
          number: "01",
          title: "Mobile-first conversion audits",
          description:
            "60–90% of Florida home services traffic is mobile. We audit there first. Desktop is the secondary review.",
        },
        {
          number: "02",
          title: "Speed-to-lead workflows",
          description:
            "Sub-60-second response time is the single highest-leverage conversion fix for home services — responding in the first minute sharply lifts contact and close rates.",
        },
        {
          number: "03",
          title: "Core Web Vitals optimization",
          description:
            "Page speed is a conversion lever first — a slow site loses the appointment before the form loads. We optimize LCP, INP, and CLS systematically (a minor ranking signal, a major conversion one).",
        },
        {
          number: "04",
          title: "CTA placement testing",
          description:
            "A/B testing on click-to-call, form submissions, every funnel step. Move buttons based on data, not opinions.",
        },
        {
          number: "05",
          title: "Trust signal integration",
          description:
            "Reviews, licensing, certifications surfaced where decisions get made. Where conversion actually happens.",
        },
        {
          number: "06",
          title: "Funnel drop-off analysis",
          description:
            "Heat maps, session recordings, exit intent tracking. Find where prospects abandon and fix it.",
        },
      ]}
      includedEyebrow="What's included"
      includedTitle="Inside the retainer."
      included={[
        "Mobile-first conversion audit",
        "Speed-to-lead workflow setup in your CRM",
        "Core Web Vitals optimization (LCP, INP, CLS)",
        "A/B testing on 3 conversion-critical pages",
        "Heat map + session recording analysis",
        "Form optimization + click-to-call verification",
        "Trust signal integration (reviews, licensing badges)",
        "Monthly conversion reports + optimization decisions",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "Isn't CRO just \"make the buttons bigger\"?",
          a: "No. CRO is testing what actually changes behavior — and most of the wins aren't visual at all. They're in load speed, form length, response time, trust signal placement, and offer clarity. Buttons are the last thing we touch.",
        },
        {
          q: "How fast do conversion gains show up?",
          a: "Speed-to-lead workflows produce measurable lift within days. A/B test outcomes typically reach statistical significance in 2–4 weeks depending on traffic volume. Core Web Vitals improvements mostly pay off in conversion — and a little in SEO — and compound over time.",
        },
        {
          q: "Do I need a new website to get CRO benefits?",
          a: "Usually no. We optimize what you already have — CRO and GBP work on your existing site. If the site is genuinely broken or missing, FirstChoice — our website arm — rebuilds it as a separate engagement, then optimization begins.",
        },
        {
          q: "Why does mobile-first matter so much for home services?",
          a: "Because 60–90% of your prospects are searching from a phone — often standing in the broken thing they need fixed. If your site doesn't load in 2 seconds or your call button isn't thumb-reachable, you've lost them.",
        },
        {
          q: "Can CRO work without paid traffic to test on?",
          a: "Yes, but slower. Organic traffic provides smaller test samples, so statistical significance takes longer. Most clients pair CRO with paid acquisition so we have enough volume to test rapidly.",
        },
      ]}
      closingTitle="Ready to make every visit count?"
    />
  );
};

export default CROServicePage;
