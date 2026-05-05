import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { AlertCircle, Search, Sparkles, ArrowRight } from "lucide-react";

const sectionFade: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const blocks = [
  {
    icon: AlertCircle,
    label: "THE PROBLEM",
    body: "When someone searches 'best window tinting in Sarasota' today, Google doesn't just show them a list of websites anymore. It generates an AI summary at the top — answering their question, recommending businesses, and pulling info from across the web.",
  },
  {
    icon: Search,
    label: "THE REALITY",
    body: "That AI summary is now the FIRST thing 60% of searchers see. They never scroll to the regular results. They never click on competitor websites. The AI just tells them who to call.",
    mockup: true,
  },
  {
    icon: Sparkles,
    label: "THE OPPORTUNITY",
    body: "Whoever Google's AI mentions wins. Most local agencies don't even know this is happening. We optimize the signals Google's AI uses — reviews, schema, content, video — so YOUR business is the one mentioned first.",
  },
];

const SGEEducation = () => {
  return (
    <section id="sge-education" className="px-6 py-32 md:px-8 section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-electric">WHY THIS MATTERS</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground max-w-4xl mx-auto leading-tight" style={{ fontWeight: 900 }}>
            WHAT IS GOOGLE'S AI OVERVIEW —<br />
            <span className="italic text-shimmer-blue">AND WHY IT'S CHANGING EVERYTHING</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {blocks.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card border border-border rounded-2xl p-7 outcome-card"
            >
              <div className="outcome-icon w-11 h-11 rounded-xl bg-electric/10 flex items-center justify-center mb-4">
                <b.icon className="w-5 h-5 text-electric" />
              </div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-electric mb-3">{b.label}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{b.body}</p>
              {b.mockup && (
                <div className="mt-4 rounded-lg border border-electric/30 bg-background/60 p-4 font-mono text-xs">
                  <p className="text-muted-foreground italic mb-2">"best [your service] in [your city]"</p>
                  <div className="flex items-center gap-2 text-electric mb-2">
                    <Sparkles className="w-3 h-3" />
                    <span className="font-semibold">AI Overview</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    "Top-rated providers: <span className="text-foreground font-semibold">[Your Business]</span> offers 5-star service with..."
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="italic text-center text-base md:text-lg text-foreground max-w-3xl mx-auto mb-10"
        >
          This is the most important shift in local search in 15 years. We're not just keeping up — we're 12 months ahead.
        </motion.p>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          variants={sectionFade}
          className="text-center"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-2">
            Want the full breakdown of how AI search works?{" "}
            <Link to="/ai-search" className="text-electric font-semibold hover:underline inline-flex items-center gap-1">
              See our deep dive <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SGEEducation;
