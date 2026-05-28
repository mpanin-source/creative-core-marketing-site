import { motion, type Variants } from "framer-motion";
import { ArrowRight, PackageOpen, Settings, XCircle } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const columns = [
  {
    icon: PackageOpen,
    title: "WHAT YOU GET",
    items: [
      "Custom Lovable-built website (AI-search-ready by default)",
      "7-day delivery",
      "Up to 5 pages: Home, Services, About, Contact + 1 service-specific landing page",
      "Mobile-first design with Core Web Vitals optimization",
      "Click-to-call functionality on every page",
      "Contact form with proper TCPA consent language",
      "Schema markup (LocalBusiness + service-specific)",
      "Google Business Profile basics setup",
      "Basic SEO meta tags + Open Graph for social",
      "Google Analytics 4 + Search Console verification",
      "One round of revisions during build",
      "Day 30 check-in call (15 min)",
    ],
  },
  {
    icon: Settings,
    title: "HOW IT WORKS",
    items: [
      "You create your own Lovable workspace",
      "You purchase your own domain (Cloudflare or Namecheap, ~$12–$15/year)",
      "We get added as collaborators to your workspace",
      "We build inside your workspace, in your name",
      "You own everything from day one",
      "Lovable hosting paid by you directly ($0 free tier with Lovable branding, or $20/mo Pro for custom domain)",
    ],
  },
  {
    icon: XCircle,
    title: "WHAT'S NOT INCLUDED (HONEST)",
    items: [
      "Active ad management",
      "Content production",
      "Active review management",
      "Voice/SMS setup",
      "Active CRO testing",
      "Active speed-to-lead workflows",
      "The $497 is a launch-ready website. To actively grow leads, you graduate to Foundation Sprint.",
    ],
  },
];

const GatewayOffer = () => {
  const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="gateway" className="px-6 py-32 md:px-8 section-warm scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-coral-dark">START HERE</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-5" style={{ fontWeight: 900 }}>
            THE <span className="hero-gradient-text">$497</span> LAUNCH-READY WEBSITE
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-[720px] mx-auto">
            Custom-built on Lovable. Mobile-first. AI-search-ready by default. Built in 7 days. You own everything from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {columns.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border outcome-card"
            >
              <div className="outcome-icon w-11 h-11 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                <c.icon className="w-5 h-5 text-coral" />
              </div>
              <h3 className="font-display text-base text-foreground uppercase mb-4" style={{ fontWeight: 800 }}>
                {c.title}
              </h3>
              <ul className="space-y-2.5">
                {c.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-coral mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <button
            onClick={scrollToContact}
            className="btn-safety cta-pulse-orange px-10 py-5 rounded-lg text-lg inline-flex items-center gap-2"
          >
            GET MY $497 WEBSITE
            <ArrowRight className="w-5 h-5 arrow-icon transition-transform" />
          </button>
          <p className="text-xs text-muted-foreground/80 mt-4">
            7 days from payment to live site. Available to first 3 Florida home service clients per county.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GatewayOffer;
