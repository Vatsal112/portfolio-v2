import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Cloud,
  Database,
  Layers,
  Container,
  Box,
  Cpu,
  Boxes,
  Triangle,
} from "lucide-react";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: Atom },
      { name: "Next.js", icon: Triangle },
      { name: "TypeScript", icon: Box },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: Server },
      { name: "NestJS", icon: Layers },
      { name: "PostgreSQL", icon: Database },
      { name: "Redis", icon: Cpu },
      { name: "Supabase", icon: Boxes },
    ],
  },
  {
    title: "DevOps & Tools",
    items: [
      { name: "Railway", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Netlify", icon: Cloud },
      { name: "Docker", icon: Container },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stack</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
            Tools I reach for, daily.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {groups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="text-sm font-medium text-muted-foreground">{group.title}</h3>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                {group.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: gi * 0.1 + i * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="group flex flex-col items-center gap-2 rounded-xl border border-border bg-card/40 p-4 transition-colors hover:border-brand/40 hover:bg-card"
                  >
                    <item.icon className="h-6 w-6 text-foreground/80 transition-colors group-hover:text-brand" />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
