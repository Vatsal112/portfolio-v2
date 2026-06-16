"use client";

import { motion } from "framer-motion";
import { Layout, Server, Rocket } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

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
          <motion.p
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease }}
            className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight"
          >
            How I can help.
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            // Outer div: entrance animation only
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              {/* Inner div: hover only */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-glow"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-brand-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
