import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Alex rebuilt our checkout in six weeks and conversion jumped 18%. He treats deadlines like they matter, which is rarer than it should be.",
    name: "Priya Raman",
    role: "CTO, Orbit Commerce",
    initials: "PR",
  },
  {
    quote: "One of the few engineers I trust to design an API I'll still like in two years. Clear thinking, no drama, ships on time.",
    name: "Marcus Liang",
    role: "Founder, Pulse",
    initials: "ML",
  },
  {
    quote: "We brought Alex in for two months and he stayed for two years. He upgraded our whole engineering bar, not just the code.",
    name: "Sofia Becker",
    role: "VP Engineering, Northwind",
    initials: "SB",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Kind Words</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            From people I've shipped with.
          </h2>
        </div>

        <div className="-mx-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex snap-x snap-mandatory gap-5 md:grid md:grid-cols-3 md:gap-6">
            {items.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card relative w-[85%] shrink-0 snap-start rounded-2xl p-6 md:w-auto"
              >
                <Quote className="h-5 w-5 text-brand" />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
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
