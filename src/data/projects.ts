export type ProjectStackGroup = {
  label: string;
  items: string[];
};

export type ProjectImage = {
  src?: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  role: string;
  timeline: string;
  tags: string[];
  stack: ProjectStackGroup[];
  tools: string[];
  highlights: string[];
  sections: ProjectSection[];
  images: ProjectImage[];
  live?: string;
  github?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "receiptflow",
    name: "Receiptflow",
    tagline: "Automated receipt management for accountants and finance teams.",
    desc: "Just instant receipt data extraction, built by an Accountant who lived the problem.",
    role: "Backend Engineer",
    timeline: "2024 — 2026",
    tags: [
      "Nest.js",
      "PostgreSQL",
      "GoCardless",
      "Redis",
      "Supabase",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    stack: [
      { label: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
      { label: "Backend", items: ["Nest.js", "PostgreSQL", "Redis", "BullMQ", "Supabase"] },
      { label: "Infrastructure", items: ["Railway"] },
    ],
    tools: ["GoCardless", "Stripe", "GitHub Actions"],
    highlights: [
      "End-to-end receipt pipeline: upload → storage → workers → Postgres",
      "BullMQ + Redis for async security and AI extraction",
      "Gemini extraction with retries, fallbacks, and field recovery",
      "Manual review queue for low-confidence results",
      "Upload-time validation + async malware/content scanning",
      "Multi-tenant RBAC for practice and business orgs",
      "Stripe + GoCardless billing with webhook sync",
      "WebSocket updates during document processing",
    ],
    sections: [
      {
        title: "Overview",
        body: "Receiptflow helps accountants and businesses eliminate manual receipt entry. Users upload photos or PDFs, and the platform extracts structured financial data, categorises spend, and connects to tools like accounting software and bank feeds. I owned the backend end to end — from secure upload and cloud storage, through the security and AI extraction workers, to persisting structured results in the database.",
      },
      {
        title: "What I built",
        body: "On Receiptflow, I helped build a production document-management platform that turns uploaded receipts and invoices into structured financial data. The main challenge was designing a pipeline that could handle varied file formats, untrusted uploads, and inconsistent AI extraction quality — all at scale for multiple organisations. I solved this by architecting a staged async processing system: immediate file validation on upload, background security scanning (OCR + malware + content analysis), then AI extraction with fallback providers and automatic recovery of missing fields. For performance-sensitive areas like PDF report generation, I introduced concurrency limits and shared resource pooling. The result was a reliable, secure, and observable document-processing system integrated with banking (GoCardless), accounting (Xero), and real-time client updates.",
      },
      {
        title: "Outcome",
        body: "Receiptflow went from prototype to production. We improved extraction reliability by combining AI confidence scoring and automatic field recovery with a manual review workflow for edge cases — such as faded thermal receipts — so uncertain results are corrected by a human before they’re treated as final.",
      },
    ],
    images: [
      { src: "/projects/rf/rf-dash.png", alt: "Receiptflow dashboard overview" },
      { src: "/projects/rf/rf-doc-table.png", alt: "Receipt document table" },
      { src: "/projects/rf/rf-doc-viewer.png", alt: "Receipt document viewer" },
      { src: "/projects/rf/rf-reports.png", alt: "Receiptflow reports" },
      { src: "/projects/rf/rf-team.png", alt: "Receiptflow team" },
    ],
    live: "https://app.receiptflow.co",
    accent: "from-indigo-500/30 to-fuchsia-500/20",
  },
  {
    slug: "axone-health",
    name: "Axone Health",
    tagline: "Voice-first AI that transforms clinical documentation. You talk. Axone writes.",
    desc: "Voice-first AI EMR for clinicians — I improved the UI and built a streaming disease explainer in a sidebar.",
    role: "Frontend Developer",
    timeline: "2025 — 2026",
    tags: ["Next.js", "Prisma", "TailwindCSS", "OpenAI"],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"] },
      { label: "Backend", items: ["Next.js", "Prisma", "PostgreSQL", "tRPC", "OpenAI"] },
    ],
    tools: ["Vercel", "Prisma Studio"],
    highlights: [
      "Fixed UI bugs across the app — layout issues, component states, and visual inconsistencies.",
      "Built a sidebar that opens when a clinician taps a disease pill and streams an AI-generated explanation in real time.",
      "Wired the frontend to render the response token-by-token so users see the explanation appear as it's generated.",
    ],
    sections: [
      {
        title: "Overview",
        body: "Axone Health is a voice-first AI EMR that helps clinicians spend less time on documentation. On the frontend, I started by fixing UI bugs — polish work that made the product feel more reliable day to day. The main feature I owned was the disease explainer: when a user selects a disease pill, a sidebar slides open and an AI response streams in, walking them through what that condition means in plain language.",
      },
      {
        title: "Technical approach",
        body: "The disease pills trigger a sidebar panel on the client. From there, the frontend opens a streaming connection to the AI endpoint and appends each chunk to the UI as it arrives — no waiting for the full response before showing anything. I handled loading and empty states, kept the sidebar scroll behaviour smooth as content grew, and made sure the streamed text rendered cleanly without layout jumps. The rest of the stack is Next.js and Tailwind on the frontend; my work stayed on the UI layer and how streaming data gets displayed.",
      },
    ],
    images: [
      {
        src: "/projects/axone/Screenshot 2026-06-16 at 12.19.31 PM.png",
        alt: "Axone Health Login Page",
      },
    ],
    live: "https://axonehealth.com/",
    accent: "from-cyan-500/30 to-emerald-500/20",
  },
  {
    slug: "maruti-techlabs",
    name: "Maruti Techlabs",
    tagline: "Award-winning custom software development company website.",
    desc: "Maruti Techlabs specializes in leveraging Gen-Next technology to unlock boundless opportunities for your business.",
    role: "Lead Frontend Developer",
    timeline: "2022 — 2023",
    tags: ["Next.js", "StrapiCMS"],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "TypeScript", "SCSS modules"] },
      { label: "CMS", items: ["Strapi", "REST API", "Media library"] },
      { label: "Performance", items: ["ISR", "Image optimisation", "Lazy loading"] },
    ],
    tools: ["Strapi CMS", "Figma", "GitHub", "Vercel"],
    highlights: [
      "Migrated content-heavy pages to a headless CMS so marketing could publish without deploys.",
      "Improved Core Web Vitals with ISR and optimised image delivery.",
      "Built reusable section components for case studies, services, and team pages.",
    ],
    sections: [
      {
        title: "Overview",
        body: "Maruti Techlabs needed a modern marketing site that could scale with new service lines and case studies. I helped rebuild key pages on Next.js with Strapi as the content backend, keeping the design polished while making updates self-serve for the content team.",
      },
    ],
    images: [
      { src: "/projects/mtech/mtech-1.png", alt: "Maruti Techlabs hero section" },
      { src: "/projects/mtech/mtech-2.png", alt: "Maruti Techlabs services section" },
      { src: "/projects/mtech/mtech-3.png", alt: "Maruti Techlabs case studies section" },
      { src: "/projects/mtech/mtech-4.png", alt: "Maruti Techlabs team section" },
      { src: "/projects/mtech/mtech-5.png", alt: "Maruti Techlabs contact section" },
    ],
    live: "https://www.marutitech.com",
    accent: "from-amber-500/30 to-rose-500/20",
  },
  {
    slug: "prime-furniture-inc",
    name: "Prime Furniture Inc",
    tagline: "Wholesale furniture platform for dealers in High Point, NC.",
    desc: "Wholesale furniture and home décor for dealers. Shop collections, manage orders, and connect with our team.",
    role: "Full-Stack Developer",
    timeline: "2025 — Present",
    tags: ["Nest.js", "Nuxt.js", "MySQL", "Stripe", "AWS"],
    stack: [
      { label: "Frontend", items: ["Nuxt.js", "Vue 3", "Pinia", "Tailwind CSS"] },
      { label: "Backend", items: ["Nest.js", "MySQL", "TypeORM", "Redis"] },
      { label: "Commerce", items: ["Stripe", "Webhook handlers", "Order management"] },
    ],
    tools: ["AWS EC2", "S3", "MySQL Workbench", "Postman"],
    highlights: [
      "Built dealer portal with catalogue browsing, cart, and order history.",
      "Integrated Stripe for deposits and payment status tracking.",
      "Deployed on AWS with separate staging and production environments.",
    ],
    sections: [
      {
        title: "Overview",
        body: "Prime Furniture Inc sells wholesale to furniture dealers. The platform lets dealers browse collections, place orders, and track shipments — replacing a mix of phone orders and spreadsheets with a single web app.",
      },
      {
        title: "Architecture",
        body: "Nuxt handles the customer-facing storefront while Nest.js powers the API and admin tools. MySQL stores catalogue and order data; Stripe handles payments with webhook-driven order status updates.",
      },
    ],
    images: [
      { src: "/projects/prime-furniture/pf1.png", alt: "pf1" },
      { src: "/projects/prime-furniture/pf2.png", alt: "pf2" },
      { src: "/projects/prime-furniture/pf3.png", alt: "pf3" },
      { src: "/projects/prime-furniture/pf4.png", alt: "pf4" },
      { src: "/projects/prime-furniture/pf5.png", alt: "pf5" },
    ],
    live: "https://www.primefurnitureinc.com/",
    accent: "from-orange-500/30 to-stone-400/20",
  },
  {
    slug: "peddle",
    name: "Peddle",
    tagline: "Sell your car the easy way — no hoops, haggles, or headaches.",
    desc: "Sell your old, busted, or junk car with no hoops, haggles, or headaches.",
    role: "Frontend Developer",
    timeline: "2021 — 2022",
    tags: ["Next.js", "SanityCMS", "GSAP", "TailwindCSS"],
    stack: [
      { label: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "GSAP"] },
      { label: "CMS", items: ["Sanity", "GROQ queries", "Portable Text"] },
      { label: "Animations", items: ["GSAP ScrollTrigger", "Timeline sequences"] },
    ],
    tools: ["Sanity Studio", "Figma", "Chrome DevTools", "Lighthouse"],
    highlights: [
      "Implemented scroll-driven animations for the marketing landing experience.",
      "Connected Sanity CMS for content editors to update copy and imagery.",
      "Maintained accessibility while delivering rich motion on supported devices.",
      "Redesigned the mobile screen menu bar.",
    ],
    sections: [
      {
        title: "Overview",
        body: "Peddle's marketing site needed to feel fast and trustworthy while explaining a simple value prop: get an instant offer and sell your car without the usual hassle. I worked on page builds, CMS integration, and GSAP-powered scroll animations. I also redesigned the mobile screen menu bar to be more user-friendly.",
      },
      {
        title: "Technical approach",
        body: "The marketing site is built on Next.js with Sanity as the CMS. GSAP is used for scroll-driven animations and responsive design. The site is fully responsive and accessible.",
      },
    ],
    images: [
      { src: "/projects/peddle/peddle1.png", alt: "peddle mobile nav-1" },
      { src: "/projects/peddle/peddle2.png", alt: "peddle mobile nav-2" },
      { src: "/projects/peddle/peddle3.png", alt: "peddle about us hero section" },
      { src: "/projects/peddle/peddle4.png", alt: "peddle cta section" },
      { src: "/projects/peddle/peddle5.png", alt: "peddle vision section" },
      { src: "/projects/peddle/peddle6.png", alt: "peddle leadership section" },
      { src: "/projects/peddle/peddle7.png", alt: "peddle crew section" },
    ],
    live: "https://www.peddle.com/about-us",
    accent: "from-slate-400/30 to-blue-500/20",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getOtherProjects(currentSlug: string, limit = 3): Project[] {
  return projects.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
