import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

const title = "Tec-Technology — Software Development Agency";
const description =
  "Tec-Technology builds e-commerce platforms, portfolio sites and custom software. React, TypeScript and Node.js engineering delivered end to end.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className="sr-only">Tec-Technology — software development agency</h1>
      <Hero />
      <Vision />
      <Services />
      <Projects />
      <Stats />
      <Testimonials />
      <Contact />
    </main>
  );
}
