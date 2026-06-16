import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import "../styles.css";

export const metadata: Metadata = {
  title: "Vatsal Dendpara — Full-Stack Developer",
  description:
    "Full-stack developer building reliable SaaS products with React, Node.js, and modern cloud infrastructure.",
  openGraph: {
    title: "Vatsal Dendpara — Full-Stack Developer",
    description:
      "Full-stack developer building reliable SaaS products with React, Node.js, and modern cloud infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vatsal Dendpara — Full-Stack Developer",
    description:
      "Full-stack developer building reliable SaaS products with React, Node.js, and modern cloud infrastructure.",
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
