import { motion } from "framer-motion";
import { Image, KeyRound, ThumbsUp, Clock } from "lucide-react";

const items = [
  {
    icon: Image,
    title: "Brand Assets",
    description: "Logo, colors, existing photos",
    time: "15 min",
  },
  {
    icon: KeyRound,
    title: "Ad Account Access",
    description: "Facebook / Google — read-only is fine",
    time: "10 min",
  },
  {
    icon: ThumbsUp,
    title: "Final Approval on Creative",
    description: "We show, you approve — that's it",
    time: "5 min",
  },
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const WhatYouBring = () => (
  <section className="section-padding" style={{ background: "hsl(40, 20%, 97%)" }}>
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionFade}
      className="max-w-[800px] mx-auto text-center"
    >
      <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">
        WHAT WE NEED FROM YOU
      </h2>
      <p className="text-muted-foreground mb-10">
        We handle execution. You provide three things.
      </p>

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
            className="bg-card rounded-xl border border-border p-6 glass-hover text-center"
          >
            <div className="w-11 h-11 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <item.icon className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-1">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.description}</p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-success">
              <Clock className="w-3.5 h-3.5" />
              {item.time}
            </span>
          </motion.div>
        ))}
      </div>

      <p className="text-sm font-semibold text-foreground">
        Total time investment: <span className="text-accent">~30 minutes</span> to launch your sprint.
      </p>
    </motion.div>
  </section>
);

export default WhatYouBring;
