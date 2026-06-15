import { motion } from "framer-motion";
import { Layout, Server, Rocket } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Full-Stack Web App Development",
    desc: "End-to-end product builds with React, TypeScript, and a tested Node.js backend you can hand off.",
  },
  {
    icon: Server,
    title: "API & Backend Engineering",
    desc: "Type-safe REST and event-driven services with observability, auth, and clean OpenAPI contracts.",
  },
  {
    icon: Rocket,
    title: "SaaS Product Development",
    desc: "Multi-tenant architecture, billing, onboarding, and the boring infrastructure that keeps it all running.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Services</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">How I can help.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-glow"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
