import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: "sm" | "md" | "lg";
}

const AnimatedLogo = ({ size = "sm" }: AnimatedLogoProps) => {
  const creative = "CREATIVE";
  const core = "CORE";

  const sizeClasses = {
    sm: { desktop: "text-2xl", mobile: "text-lg", glow: "0 0 12px" },
    md: { desktop: "text-[2.15rem]", mobile: "text-xl", glow: "0 0 16px" },
    lg: { desktop: "text-5xl", mobile: "text-3xl", glow: "0 0 24px" },
  };

  const s = sizeClasses[size];

  return (
    <a href="/" className="flex items-center gap-1 group relative chrome-shine">
      {/* Mobile: static logo */}
      <div className="md:hidden flex items-center">
        <span className={`${s.mobile} font-display tracking-tight`} style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE </span>
          <span className="text-electric" style={{ filter: `drop-shadow(${s.glow} rgba(0,209,255,0.4))` }}>CORE</span>
        </span>
      </div>

      {/* Desktop: animated letter reveal */}
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
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: creative.length * 0.06 }}
          className={`${s.desktop} font-display`}
          style={{ fontWeight: 700 }}
        >
          &nbsp;
        </motion.span>
        {core.split("").map((letter, i) => (
          <motion.span
            key={`o-${i}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (creative.length + 1 + i) * 0.06 }}
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
