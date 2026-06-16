"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease }}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.05, ease }}
              className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight"
            >
              Recent projects I've <span className="text-gradient">worked on</span>.
            </motion.h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            // Outer div: entrance animation only
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              {/* Inner article: hover only, fully independent */}
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-brand/40 hover:shadow-glow"
              >
                <div
                  className={`pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 transition-opacity group-hover:opacity-100`}
                />

                <div className="relative">
                  <Link href={`/projects/${p.slug}`} className="block">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Link>

                  <div className="mt-6 flex items-center gap-4 text-xs">
                    <Link
                      href={`/projects/${p.slug}`}
                      className="inline-flex items-center gap-1 font-medium text-foreground group-hover:text-brand"
                    >
                      View case study <ArrowUpRight className="h-3 w-3" />
                    </Link>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground"
                      >
                        Live <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
