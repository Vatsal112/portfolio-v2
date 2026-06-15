import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    name: "Northwind Analytics",
    desc: "Multi-tenant SaaS dashboard with real-time charts, cohort analysis, and a self-serve billing portal.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    live: "#",
    repo: "#",
    accent: "from-indigo-500/30 to-fuchsia-500/20",
  },
  {
    name: "Orbit Commerce",
    desc: "Headless e-commerce platform with subscription products, abandoned cart recovery, and 40+ payment regions.",
    tags: ["React", "NestJS", "Supabase", "AWS"],
    live: "#",
    repo: "#",
    accent: "from-cyan-500/30 to-emerald-500/20",
  },
  {
    name: "Pulse REST API",
    desc: "OpenAPI-first event ingestion service handling 1.2M req/day with idempotent writes and SOC2-ready audit logs.",
    tags: ["Node.js", "TypeScript", "Docker", "PostgreSQL"],
    live: "#",
    repo: "#",
    accent: "from-amber-500/30 to-rose-500/20",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Selected Work</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Recent things I've <span className="text-gradient">built</span>.
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-brand/40 hover:shadow-glow"
            >
              <div className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`} />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs">
                  <a href={p.live} className="inline-flex items-center gap-1 font-medium text-foreground hover:text-brand">
                    Live <ArrowUpRight className="h-3 w-3" />
                  </a>
                  <a href={p.repo} className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground">
                    <Github className="h-3 w-3" /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
