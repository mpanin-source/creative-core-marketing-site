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
            className="inline-flex items-center mx-8 text-sm font-display font-bold tracking-widest"
            style={{ color: "hsl(96, 15%, 43%)" }}
          >
            <span className="w-2 h-2 rounded-full mr-4" style={{ background: "hsl(207, 38%, 76%)" }} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
