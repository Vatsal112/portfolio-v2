import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Contact } from "@/components/portfolio/Contact";
import { ProjectDetail } from "@/components/portfolio/ProjectDetail";
import { SiteHeader } from "@/components/portfolio/SiteHeader";
import { getProjectBySlug, projects, SITE_URL } from "@/data/projects";
import { projectSchema } from "@/lib/jsonld";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const projectUrl = `${SITE_URL}/projects/${slug}`;

  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: projectUrl },
    openGraph: {
      title: `${project.name} | Vatsal Dendpara`,
      description: project.tagline,
      url: projectUrl,
      type: "article",
      images: [
        {
          url: `/projects/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Vatsal Dendpara`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema(project)) }}
      />
      <SiteHeader />
      <ProjectDetail project={project} />
      <Contact />
    </>
  );
}
