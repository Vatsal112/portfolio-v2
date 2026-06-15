import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Blog } from "@/components/portfolio/Blog";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vatsal Dendpara — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer building reliable SaaS products with React, Node.js, and modern cloud infrastructure.",
      },
      { property: "og:title", content: "Vatsal Dendpara — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-stack developer building reliable SaaS products with React, Node.js, and modern cloud infrastructure.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      {/* <Blog /> */}
      <Contact />
      <Toaster theme="dark" position="bottom-right" />
    </main>
  );
}
