import { motion } from "framer-motion";

const AnimatedLogo = () => {
  const creative = "CREATIVE";
  const core = "CORE";

  return (
    <a href="/" className="flex items-center gap-1 group relative h-10 md:h-12 chrome-shine">
      {/* Mobile: static logo */}
      <div className="md:hidden flex items-center">
        <span className="text-lg font-display tracking-tight" style={{ fontWeight: 700 }}>
          <span className="text-foreground">CREATIVE </span>
          <span className="text-electric">CORE</span>
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
            className="text-2xl font-display tracking-tight text-foreground"
            style={{ fontWeight: 700 }}
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: creative.length * 0.06 }}
          className="text-2xl font-display"
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
            className="text-2xl font-display tracking-tight text-electric group-hover:drop-shadow-[0_0_8px_rgba(0,209,255,0.6)] transition-all duration-300"
            style={{ fontWeight: 700 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </a>
  );
};

export default AnimatedLogo;