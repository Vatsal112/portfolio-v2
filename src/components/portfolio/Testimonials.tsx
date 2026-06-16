"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  {
    quote:
      "Our deploys were basically a coin flip every Friday. Vatsal fixed the pipeline in his first week — we haven't had a midnight hotfix since. I don't say that lightly.",
    name: "Surya Sahu",
    role: "Founder and CEO",
    initials: "SS",
  },
  {
    quote:
      "GoCardless billing had eaten two months of runway and we were still nervous pushing to prod. He got webhooks and failed-payment handling sorted in about ten days. PRs were small enough that I could actually review them.",
    name: "Tanvir Alam",
    role: "Founder and CEO",
    initials: "TA",
  },
  {
    quote:
      "I expected code and a handoff. Instead we got a typed API, docs that weren't embarrassing, and someone who didn't get annoyed when juniors asked questions in standup. Our codebase is in better shape than when he joined.",
    name: "Prit R",
    role: "Technical Lead",
    initials: "PR",
  },
  {
    quote:
      "The AI review workflow he built saves us maybe an hour a day. Nothing flashy — just sensible error handling for when the model gets things wrong. That's the part most people skip.",
    name: "Sharwon",
    role: "Co-founder, early-stage SaaS",
    initials: "S",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Kind Words
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight"
          >
            From people I've shipped with.
          </motion.h2>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 md:grid md:grid-cols-2 md:gap-6">
            {items.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 32, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
                className="glass-card relative w-[85%] shrink-0 snap-start rounded-2xl p-6 md:w-auto"
              >
                <Quote className="h-5 w-5 text-brand" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-gradient text-xs font-semibold text-brand-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
