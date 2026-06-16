"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ImageIcon, ZoomIn } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
import { useMemo, useState } from "react";

import type { Project, ProjectImage } from "@/data/projects";
import { getOtherProjects } from "@/data/projects";
import { ProjectImageGallery } from "@/components/portfolio/ProjectImageGallery";

function ProjectScreenshot({
  image,
  accent,
  index,
  onOpen,
}: {
  image: ProjectImage;
  accent: string;
  index: number;
  onOpen?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !image.src || failed;
  const canOpen = !showPlaceholder && onOpen;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card"
    >
      {showPlaceholder ? (
        <div className="relative aspect-video overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-50`} />
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-border/60 bg-background/40">
              <ImageIcon className="h-5 w-5 text-muted-foreground" />
            </span>
            <p className="text-sm text-muted-foreground">Add screenshot — {image.alt}</p>
            <p className="text-xs text-muted-foreground/70">
              Place images in{" "}
              <code className="rounded bg-background/50 px-1.5 py-0.5">public/projects/</code>
            </p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => onOpen?.()}
          className="relative block w-full cursor-zoom-in text-left"
          aria-label={`Open ${image.alt}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            onError={() => setFailed(true)}
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {canOpen && (
            <span className="absolute inset-0 flex items-center justify-center bg-background/0 transition-colors group-hover:bg-background/30">
              <span className="grid h-11 w-11 scale-90 place-items-center rounded-full border border-border bg-background/80 text-foreground opacity-0 backdrop-blur transition-all group-hover:scale-100 group-hover:opacity-100">
                <ZoomIn className="h-5 w-5" />
              </span>
            </span>
          )}
        </button>
      )}
      {image.caption && (
        <figcaption className="border-t border-border px-4 py-3 text-xs text-muted-foreground">
          {image.caption}
        </figcaption>
      )}
    </motion.figure>
  );
}

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const others = getOtherProjects(project.slug);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const galleryImages = useMemo(
    () => project.images.filter((image): image is ProjectImage & { src: string } => !!image.src),
    [project.images],
  );

  const openGallery = (image: ProjectImage) => {
    const index = galleryImages.findIndex((item) => item.src === image.src);
    if (index === -1) return;
    setGalleryIndex(index);
    setGalleryOpen(true);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="absolute inset-0 -z-10 grid-bg" />
        <div
          className={`pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-gradient-to-br ${project.accent} blur-3xl opacity-40`}
        />

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Case Study</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                {project.role}
              </span>
              <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                {project.timeline}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
                >
                  View live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-2.5 text-sm font-medium backdrop-blur transition-colors hover:border-brand/50"
                >
                  Source code
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="min-w-0 space-y-12">
            {project.sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, delay: i * 0.06, ease }}
              >
                <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {section.body}
                </p>
              </motion.div>
            ))}

            <div>
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.65, ease }}
                className="text-2xl font-semibold tracking-tight"
              >
                Key highlights
              </motion.h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                    className="flex gap-3 items-center text-sm leading-relaxed text-muted-foreground md:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Tech stack
              </h3>
              <div className="mt-5 space-y-5">
                {project.stack.map((group) => (
                  <div key={group.label}>
                    <p className="text-xs font-medium text-foreground/80">{group.label}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Tools & services
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border bg-background/40 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                Tags
              </h3>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-brand-gradient px-2.5 py-0.5 text-[11px] font-medium text-brand-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {project.images.length > 0 && (
        <section className="border-t border-border py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Gallery</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Screenshots & <span className="text-gradient">visuals</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {project.images.map((image, i) => (
                <ProjectScreenshot
                  key={`${image.alt}-${i}`}
                  image={image}
                  accent={project.accent}
                  index={i}
                  onOpen={() => openGallery(image)}
                />
              ))}
            </div>

            <ProjectImageGallery
              images={galleryImages}
              open={galleryOpen}
              startIndex={galleryIndex}
              onOpenChange={setGalleryOpen}
            />
          </div>
        </section>
      )}

      <section className="border-t border-border py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">More work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">Other projects</h2>
            </div>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View all <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {others.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:border-brand/40 hover:shadow-glow"
                >
                  <div
                    className={`pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-50 transition-opacity group-hover:opacity-80`}
                  />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold tracking-tight">{p.name}</h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
