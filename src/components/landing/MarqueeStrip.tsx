const items = [
  "HVAC SPECIALISTS",
  "LANDSCAPING PROS",
  "PEST CONTROL EXPERTS",
  "HOME SERVICES",
  "WELLNESS CLINICS",
  "LOCAL SERVICE BUSINESSES",
];

const MarqueeStrip = () => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden py-5 border-y border-border bg-background">
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="flex-shrink-0 inline-flex items-center mx-8 text-sm font-display tracking-widest text-electric whitespace-nowrap"
            style={{ fontWeight: 700 }}
          >
            <span className="w-2 h-2 rounded-full mr-4 bg-electric flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;