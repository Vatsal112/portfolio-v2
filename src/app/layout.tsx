import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "../styles.css";
import { SITE_URL } from "@/data/projects";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Vatsal Dendpara — Full-Stack Developer for Hire",
    template: "%s | Vatsal Dendpara",
  },

  description:
    "Full-stack developer with 4+ years building AI-powered SaaS products. Expert in React, Next.js, Node.js & TypeScript. Available for freelance and contract work.",

  keywords: [
    "Vatsal Dendpara",
    "Full-Stack Developer",
    "Freelance Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "SaaS Developer",
    "Hire Software Engineer",
    "AI SaaS development",
    "Portfolio",
  ],

  authors: [{ name: "Vatsal Dendpara", url: SITE_URL }],
  creator: "Vatsal Dendpara",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Vatsal Dendpara",
    title: "Vatsal Dendpara — Full-Stack Developer for Hire",
    description:
      "Full-stack developer with 4+ years building AI-powered SaaS products. Expert in React, Next.js, Node.js & TypeScript. Available for freelance and contract work.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Vatsal Dendpara — Full-Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vatsal Dendpara — Full-Stack Developer for Hire",
    description:
      "Full-stack developer with 4+ years building AI-powered SaaS products. Expert in React, Next.js, Node.js & TypeScript.",
    images: ["/opengraph-image"],
    creator: "@vatsaldendpara",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </head>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <Providers />
      </body>
    </html>
  );
}
