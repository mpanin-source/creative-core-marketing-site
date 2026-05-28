import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { ReactNode } from "react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

interface DeepDiveProps {
  id: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  icon?: LucideIcon;
  alt?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  children: ReactNode;
}

const DeepDive = ({ id, eyebrow, title, titleAccent, icon: Icon, alt, ctaLabel, ctaHref, children }: DeepDiveProps) => {
  return (
    <section id={id} className={`px-6 py-24 md:py-28 md:px-8 scroll-mt-24 ${alt ? "section-alt" : ""}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark flex items-center justify-center gap-2">
            {Icon && <Icon className="w-4 h-4" />}
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground leading-tight" style={{ fontWeight: 900 }}>
            {title}
            {titleAccent && (
              <>
                <br />
                <span className="italic text-shimmer-blue">{titleAccent}</span>
              </>
            )}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}
          variants={sectionFade}
          className="bg-card border border-border rounded-2xl p-7 md:p-10 space-y-5 text-base text-muted-foreground leading-relaxed"
        >
          {children}
        </motion.div>

        {ctaLabel && ctaHref && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-8"
          >
            <Link
              to={ctaHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral/80 transition-colors"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DeepDive;
