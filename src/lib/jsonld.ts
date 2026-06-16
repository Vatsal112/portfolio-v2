import { SITE_URL } from "@/data/projects";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Vatsal Dendpara",
        url: SITE_URL,
        jobTitle: "Full-Stack Developer",
        description:
          "Full-stack developer with 4+ years building AI-powered SaaS products using React, Next.js, Node.js and TypeScript.",
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "NestJS",
          "PostgreSQL",
          "Redis",
          "Docker",
          "SaaS Development",
          "AI Integration",
        ],
        sameAs: [
          "https://github.com/vatsaldendpara",
          "https://linkedin.com/in/vatsaldendpara",
          "https://twitter.com/vatsaldendpara",
          "https://www.instagram.com/_v_a_t_s_a_l/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Vatsal Dendpara",
        description:
          "Portfolio of Vatsal Dendpara — full-stack developer specialising in AI-powered SaaS products.",
        author: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: "Vatsal Dendpara — Full-Stack Developer",
        description:
          "Full-stack developer with 4+ years building AI-powered SaaS products. Available for freelance and contract work.",
        mainEntity: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-US",
      },
    ],
  };
}

export function projectSchema(project: {
  name: string;
  slug: string;
  tagline: string;
  desc: string;
  role: string;
  tags: string[];
  live?: string;
}) {
  const projectUrl = `${SITE_URL}/projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}/#project`,
        name: project.name,
        description: project.tagline,
        url: project.live ?? projectUrl,
        author: { "@id": `${SITE_URL}/#person` },
        keywords: project.tags.join(", "),
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SITE_URL}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: projectUrl,
          },
        ],
      },
    ],
  };
}
