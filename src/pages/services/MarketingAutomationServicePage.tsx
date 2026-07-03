import ServicePageTemplate from "@/components/services/ServicePageTemplate";

const MarketingAutomationServicePage = () => {
  return (
    <ServicePageTemplate
      currentSlug="marketing-automation"
      heroEyebrow="Marketing Automation"
      heroTitle="Stop doing manual marketing."
      heroSubhead="Behavioral triggers, lead scoring, and review-request automation — live on email and CRM today. Voice AI and SMS text-back are rolling out. We architect the systems; you handle the jobs."
      contrarianEyebrow="The workflow reality"
      contrarianTitle="Done right, automation feels personal. Done wrong, it feels like spam."
      contrarianBody={[
        "Most home services owners are running marketing manually because they don't trust automation — or they tried generic CRM workflows and it spammed their customers.",
        "Real marketing automation isn't \"send blast emails.\" It's behavioral systems that respond to what each customer actually does. A missed call triggers an SMS within 60 seconds. A completed job triggers a review request 48 hours later. A 3-month-old customer triggers a maintenance offer at exactly the right time.",
        "Done right, automation feels personal. Done wrong, it feels like spam. We engineer for the former.",
      ]}
      pullQuote="If your automation sounds like a robot, the work isn't finished."
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="What we deliver."
      capabilities={[
        {
          number: "01",
          title: "Voice AI for missed calls (launching Q3)",
          description:
            "Voicemail-to-text + AI agent that handles initial booking. Captures leads when the technicians can't. Rolling out Q3 — retainer clients get first access.",
        },
        {
          number: "02",
          title: "SMS workflows",
          description:
            "Confirmation, reminder, post-job follow-up sequences. TCPA-compliant. STOP keyword handled. Live once your carrier registration clears (1–2 weeks, filed in week 1).",
        },
        {
          number: "03",
          title: "Review acquisition systems",
          description:
            "Automated review requests timed to job completion — every customer asked the same way, un-gated and FTC-compliant. Recapture flows for the customers who didn't respond.",
        },
        {
          number: "04",
          title: "Lead scoring + qualification",
          description:
            "Hot leads route to phone, cold leads to nurture. Tuned to your specific trade and conversion patterns.",
        },
        {
          number: "05",
          title: "Customer lifecycle automation",
          description:
            "Maintenance reminders, win-back campaigns, referral asks. Triggered by behavior and timing, not blast schedules.",
        },
        {
          number: "06",
          title: "CRM workflow integration",
          description:
            "Built inside whatever CRM you already use. We don't force migrations — we make your existing stack work harder.",
        },
      ]}
      includedEyebrow="What's included"
      includedTitle="Inside the retainer."
      included={[
        "Workflow audit + architecture design",
        "Voice AI — launching Q3, retainer clients get first access",
        "SMS workflow build (TCPA-compliant, STOP-handled — live after your 1–2 week carrier registration)",
        "Review acquisition system deployment",
        "Lead scoring model tuned to your trade",
        "Lifecycle automation sequences",
        "Performance dashboard",
        "Monthly optimization based on real conversion data",
      ]}
      faqsEyebrow="Common questions"
      faqsTitle="Frequently asked."
      faqs={[
        {
          q: "Will customers hate getting automated messages?",
          a: "They will if the messages are generic blasts. They won't if the messages are timely and useful — \"hey, your maintenance is due next month, want to book?\" feels personal. Generic \"hi, just checking in\" feels spammy. We build the former.",
        },
        {
          q: "Does this replace my receptionist or just augment them?",
          a: "Augment. Voice AI handles the calls your team misses (after hours, mid-job, during peak). Your receptionist handles the calls they pick up. The automation removes the gaps, not the humans.",
        },
        {
          q: "What's the TCPA compliance situation?",
          a: "Use case is transactional: inbound lead capture + existing customer nurture. We handle 10DLC brand and campaign registration ($4 + $15 one-time), AI self-identification in greetings, STOP keyword automation, and hours-of-operation enforcement. We don't send marketing blasts.",
        },
        {
          q: "Can this work with my existing CRM?",
          a: "Yes. We integrate inside whatever you already use — HubSpot, Salesforce, ServiceTitan, Housecall Pro, GoHighLevel. If you're on spreadsheets, we set you up on GHL during onboarding.",
        },
        {
          q: "How fast do automation systems show results?",
          a: "Speed-to-lead automation produces measurable lift within the first week. Review velocity systems compound over 60–90 days as response rates build. Lifecycle automation pays off over months as the back-catalog of customers gets touched.",
        },
        {
          q: "What if I'm too small for full automation?",
          a: "Start with one workflow — usually missed-call text-back, since it produces the fastest measurable lift. Add others as the value becomes obvious. We scope based on your volume, not a one-size package.",
        },
      ]}
      closingTitle="Ready to stop doing manual marketing?"
    />
  );
};

export default MarketingAutomationServicePage;
