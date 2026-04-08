import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const CCEmblem = ({ size, delay }: { size: "sm" | "md" | "lg"; delay: number }) => {
  const dims = { sm: 28, md: 36, lg: 48 };
  const d = dims[size];

  return (
    <motion.svg
      width={d}
      height={d}
      viewBox="0 0 48 48"
      initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, delay, type: "spring", stiffness: 120, damping: 14 }}
      className="mx-0.5 relative"
      style={{ filter: "drop-shadow(0 0 6px rgba(0,209,255,0.5))" }}
    >
      <defs>
        <linearGradient id="metalC1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="40%" stopColor="#b0b0b0" />
          <stop offset="70%" stopColor="#d4d4d4" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="metalC2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D1FF" />
          <stop offset="40%" stopColor="#00A5CC" />
          <stop offset="70%" stopColor="#33DDFF" />
          <stop offset="100%" stopColor="#0090B0" />
        </linearGradient>
      </defs>
      {/* First C - silver/chrome, positioned left */}
      <path
        d="M22 10 A13 13 0 1 0 22 38"
        fill="none"
        stroke="url(#metalC1)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Second C - cyan, positioned right, mirrored */}
      <path
        d="M26 10 A13 13 0 1 1 26 38"
        fill="none"
        stroke="url(#metalC2)"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </motion.svg>
  );
};

const AnimatedLogo = ({ size = "sm" }: AnimatedLogoProps) => {
  const creative = "CREATIVE";
  const core = "CORE";

  const sizeClasses = {
    sm: { desktop: "text-2xl", mobile: "text-lg", glow: "0 0 12px" },
    md: { desktop: "text-[2.15rem]", mobile: "text-xl", glow: "0 0 16px" },
    lg: { desktop: "text-5xl", mobile: "text-3xl", glow: "0 0 24px" },
  };

  const s = sizeClasses[size];
  const emblemDelay = creative.length * 0.06 + 0.1;

  return (
    <a href="/" className="flex items-center gap-1 group relative chrome-shine">
      {/* Mobile: static logo with emblem */}
      <div className="md:hidden flex items-center">
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE</span>
        </span>
        <CCEmblem size={size} delay={0} />
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-electric" style={{ filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))` }}>CORE</span>
        </span>
      </div>

      {/* Desktop: animated letter reveal with emblem */}
      <div className="hidden md:flex items-center">
        {creative.split("").map((letter, i) => (
          <motion.span
            key={`c-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`${s.desktop} font-display tracking-tight text-foreground`}
            style={{ fontWeight: 700 }}
          >
            {letter}
          </motion.span>
        ))}

        <CCEmblem size={size} delay={emblemDelay} />

        {core.split("").map((letter, i) => (
          <motion.span
            key={`o-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: emblemDelay + 0.3 + i * 0.06 }}
            className={`${s.desktop} font-display tracking-tight text-electric transition-all duration-300`}
            style={{
              fontWeight: 700,
              filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))`,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </a>
  );
};

export default AnimatedLogo;
