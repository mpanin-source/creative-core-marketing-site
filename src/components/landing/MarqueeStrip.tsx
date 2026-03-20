const items = [
  "HVAC SPECIALISTS",
  "LANDSCAPING PROS",
  "PEST CONTROL EXPERTS",
  "HOME SERVICES",
  "WELLNESS CLINICS",
  "LOCAL SERVICE BUSINESSES",
];

const MarqueeStrip = () => {
  const repeated = [...items, ...items];

  return (
    <div className="overflow-hidden py-5 border-y border-border bg-background">
      <div className="marquee-track whitespace-nowrap">
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 text-sm font-display tracking-widest text-electric"
            style={{ fontWeight: 700 }}
          >
            <span className="w-2 h-2 rounded-full mr-4 bg-electric" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;