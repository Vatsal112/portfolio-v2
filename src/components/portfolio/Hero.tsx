"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const titles = ["Full-Stack Developer", "AI Workflow Expert", "SaaS Engineer", "Software Engineer"];

const ease = [0.22, 1, 0.36, 1] as const;

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[i];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return text;
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const typed = useTyping();
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 600], [0, 120]);
  const gridY = useTransform(scrollY, [0, 600], [0, 60]);
  const contentY = useTransform(scrollY, [0, 600], [0, -40]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* Parallax background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 bg-hero-gradient" />
      <motion.div style={{ y: gridY }} className="absolute inset-0 -z-10 grid-bg" />

      {/* Content parallax (moves up slightly on scroll for depth) */}
      <motion.div style={{ y: contentY }} className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur"
        >
          <Sparkles className="h-3 w-3 text-brand" />
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient"
        >
          Vatsal Dendpara
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16, ease }}
          className="mt-4 text-2xl md:text-3xl font-medium text-foreground/90"
        >
          <span>{typed}</span>
          <span className="caret-blink ml-0.5 inline-block h-7 w-[2px] translate-y-1 bg-brand md:h-8" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          I help startups ship dependable AI-powered SaaS products — from polished React interfaces
          to scalable Node.js backends and the cloud they run on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            Let's Talk
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
