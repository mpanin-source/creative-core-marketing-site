import { motion } from "framer-motion";
import { KeyRound, Clock, Users, Target, FlaskConical } from "lucide-react";

const requirements = [
  { icon: KeyRound, title: "ACCESS TO YOUR ADS ACCOUNT", description: "You keep all passwords. We use read-only access. You see every change in real-time." },
  { icon: Clock, title: "30 MINUTES PER WEEK", description: "You review performance, approve creative, answer clarifying questions. We handle the heavy lifting." },
  { icon: Users, title: "SALES TEAM BUY-IN", description: "Your team needs to know new ads are live + understand the new positioning. We provide scripts + training." },
  { icon: Target, title: "REALISTIC EXPECTATIONS", description: "We fix the funnel + timing. We can't fix a fundamentally broken offer. (Screened in Phase 1.)" },
  { icon: FlaskConical, title: "WILLINGNESS TO TEST", description: "Some ads will lose. That's how we find winners. You need to be comfortable killing underperformers fast." },
];

const WhatYouBring = () => (
  <section className="section-padding">
    <div className="max-w-[1200px] mx-auto">
      <div className="container-narrow text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-black text-foreground mb-4">SUCCESS REQUIRES THESE 5 THINGS FROM YOU</h2>
        <p className="text-lg text-muted-foreground">We're transparent about what you must bring to make this work.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {requirements.map((req, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`p-6 glass-card rounded-lg hover:border-accent/30 transition-colors ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"><req.icon className="w-6 h-6 text-accent" /></div>
            <h3 className="font-display text-base font-bold text-foreground mb-2">{req.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{req.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouBring;
