import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.floor(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = v + suffix;
    });
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { label: "Years of experience", value: 4, suffix: "+" },
  { label: "Projects delivered", value: 10, suffix: "" },
  { label: "Clients served", value: 5, suffix: "+" },
  { label: "Production uptime", value: 99, suffix: "%" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Engineering software that <span className="text-gradient">earns trust</span>.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              I'm a Full-Stack Developer with 4+ years helping startups build AI-powered SaaS
              applications using Javascript frameworks. I work across the full stack — from
              responsive frontends with React.js and Next.js to reliable backends with Node.js &
              NestJS. I design RESTful APIs, handle database architecture, and integrate third-party
              services. I take end-to-end ownership of every project, delivering clean, maintainable
              code that scales. Whether building from scratch or improving an existing app, I'm here
              to help.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card rounded-2xl p-5"
              >
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
