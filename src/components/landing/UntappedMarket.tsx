import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const channels = [
  "Google Search",
  "YouTube",
  "Google LSA",
  "Meta (all placements)",
  "Retargeting",
  "Direct Mail",
];

const UntappedMarket = () => {
  const scrollToCTA = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="untapped-market" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm tracking-[0.2em] uppercase mb-4"
        >
          The Reality Check
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight"
        >
          YOUR MARKET ISN'T SATURATED —{" "}
          <span className="text-warning">YOU'RE JUST USING ONE CHANNEL</span>
        </motion.h2>

        {/* Body copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-5 text-muted-foreground text-base md:text-lg max-w-3xl mb-16"
        >
          <p>
            Most local service businesses think their market is "tapped out"
            because they see 3-4 competitors running Facebook ads.
          </p>
          <p className="text-foreground font-semibold">Here's the reality:</p>
          <p>
            Your industry does{" "}
            <span className="text-primary font-semibold">billions</span> of
            dollars in revenue annually. Your competitors are getting new
            customers every single day. The market isn't saturated — your reach
            is just limited to{" "}
            <span className="text-warning font-semibold">one platform</span>.
          </p>
        </motion.div>

        {/* What you're doing vs What the market looks like */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Current */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-foreground font-semibold text-lg">
              What you're currently doing:
            </h3>
            <div className="bg-secondary/50 border border-border rounded-xl p-6">
              <p className="text-muted-foreground">
                Facebook News Feed ads to homeowners within 15 miles
              </p>
            </div>
          </motion.div>

          {/* Actual market */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-foreground font-semibold text-lg">
              What the ACTUAL market looks like:
            </h3>
            <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 space-y-2">
              {[
                "Google Search (people actively searching for your service RIGHT NOW)",
                "YouTube (before/after videos, how-to content)",
                "Google Local Service Ads (top of search results)",
                "Meta Feed + Stories + Reels (multiple placements, not just one)",
                "Retargeting (hitting people who visited but didn't convert)",
                "Direct response channels your competitors ignore",
              ].map((item, i) => (
                <p key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Truth statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mb-20 space-y-4"
        >
          <p className="text-foreground font-semibold text-lg">
            <span className="text-primary">The truth:</span> If your competitor
            got a customer yesterday, that proves there's market left. The
            question isn't "Is there opportunity?" — it's "How much of it can{" "}
            <span className="text-primary">YOU</span> capture?"
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            We help you go from owning 5% of the local market to{" "}
            <span className="text-primary font-semibold">25%+</span> by
            expanding beyond the{" "}
            <span className="text-warning font-semibold">single channel</span>{" "}
            you're stuck on.
          </p>
        </motion.div>

        {/* Visual diagram */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-16"
        >
          {/* Small circle */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full border-2 border-warning/50 bg-warning/10 flex items-center justify-center">
              <span className="text-warning text-3xl font-bold">1</span>
            </div>
            <p className="text-muted-foreground text-sm text-center max-w-[140px]">
              Your Current Reach:{" "}
              <span className="text-warning font-semibold">One Platform</span>
            </p>
          </div>

          {/* Arrow */}
          <div className="text-primary text-3xl font-bold rotate-90 md:rotate-0">→</div>

          {/* Large circle */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-44 h-44 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center">
              <span className="text-primary text-5xl font-bold">6+</span>
            </div>
            <p className="text-muted-foreground text-sm text-center max-w-[180px]">
              The Actual Market:{" "}
              <span className="text-primary font-semibold">All Channels</span>
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mt-2">
              {channels.map((ch) => (
                <div key={ch} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                  {ch}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button size="xl" onClick={scrollToCTA} className="text-base">
            See Your Untapped Opportunity
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UntappedMarket;
