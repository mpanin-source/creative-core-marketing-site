import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";

const FloatingCTA = () => {
  const location = useLocation();
  const navigate = useNavigate();

  if (location.pathname.startsWith("/pricing-and-booking")) return null;

  return (
    <motion.button
      onClick={() => navigate("/pricing-and-booking")}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        boxShadow: [
          "0 8px 24px rgba(0,209,255,0.35)",
          "0 8px 32px rgba(0,209,255,0.55)",
          "0 8px 24px rgba(0,209,255,0.35)",
        ],
      }}
      transition={{
        opacity: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        y: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        boxShadow: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="fixed z-[9998] btn-primary font-bold tracking-wide flex items-center justify-center gap-2 rounded-full
        bottom-3 inset-x-3 py-3 text-sm
        md:bottom-6 md:right-6 md:inset-x-auto md:left-auto md:py-3.5 md:px-6 md:text-sm"
      aria-label="See pricing and book a call"
    >
      <Calendar className="w-4 h-4" />
      <span className="uppercase">See Pricing &amp; Book Call</span>
    </motion.button>
  );
};

export default FloatingCTA;
