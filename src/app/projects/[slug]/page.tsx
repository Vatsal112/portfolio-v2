import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Contact } from "@/components/portfolio/Contact";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Vatsal Dendpara`,
    description: project.tagline,
    openGraph: {
      title: `${project.name} — Vatsal Dendpara`,
      description: project.tagline,
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <ProjectDetail project={project} />
      <Contact />
    </>
  );
}
