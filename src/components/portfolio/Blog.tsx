import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "Designing idempotent APIs that survive retries",
    date: "May 12, 2026",
    read: "8 min read",
    tag: "Backend",
  },
  {
    title: "From monolith to modular: a pragmatic split",
    date: "Apr 02, 2026",
    read: "12 min read",
    tag: "Architecture",
  },
  {
    title: "Why I still reach for Postgres before anything else",
    date: "Feb 18, 2026",
    read: "6 min read",
    tag: "Databases",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Writing</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">Notes from the trenches.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-brand/40 hover:shadow-glow"
            >
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="rounded-full border border-border px-2 py-0.5">{p.tag}</span>
                <span>·</span>
                <span>{p.date}</span>
                <span>·</span>
                <span>{p.read}</span>
              </div>
              <h3 className="mt-4 flex-1 text-lg font-semibold tracking-tight">{p.title}</h3>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foreground">
                Read more
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
