import { motion, type Variants } from "framer-motion";
import LazyAgencyCarousel from "./LazyAgencyCarousel";
import UsVsThem from "./UsVsThem";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

/**
 * Combined section wrapping LazyAgencyCarousel + UsVsThem.
 * Renders both child components sequentially without refactoring their internals.
 * The shared eyebrow/headline is rendered by the carousel itself; we only add
 * an `id="lazy-agency"` anchor at the wrapper level and a transition line is
 * already handled by LazyAgencyCarousel below the carousel.
 */
const LazyAgencySection = () => {
  return (
    <div id="lazy-agency">
      <LazyAgencyCarousel />
      <motion.div
        initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
        className="text-center max-w-3xl mx-auto px-6 -mt-16 mb-4"
      >
        <p className="italic text-sm md:text-base text-coral/80">
          Here's exactly how we're different — line by line.
        </p>
      </motion.div>
      <UsVsThem />
    </div>
  );
};

export default LazyAgencySection;
