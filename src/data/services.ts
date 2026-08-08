import type { ComponentType, SVGProps } from "react";
import {
  BrowserGlyph,
  CartGlyph,
  LayersGlyph,
  PhoneGlyph,
  PenGlyph,
  ServerGlyph,
} from "@/components/icons/ServiceGlyphs";

export interface Service {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export const services: Service[] = [
  {
    id: "web",
    title: "Web Development",
    description:
      "Production web applications built on React and TypeScript — typed end to end, tested, and shipped behind CI.",
    bullets: ["Design systems", "SSR & performance budgets", "Accessibility to WCAG AA"],
    Icon: BrowserGlyph,
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    description:
      "Headless storefronts, subscription billing and split fulfilment — checkout flows measured against revenue, not vanity metrics.",
    bullets: ["Headless storefronts", "Payments & tax", "ERP / inventory sync"],
    Icon: CartGlyph,
  },
  {
    id: "portfolio",
    title: "Portfolio Sites",
    description:
      "Editorial sites for studios and practices where the work leads: fast image pipelines and a CMS the team actually uses.",
    bullets: ["Structured content models", "Image optimisation", "SEO foundations"],
    Icon: LayersGlyph,
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description:
      "Cross-platform iOS and Android apps from a single React Native codebase, with offline state and biometric auth.",
    bullets: ["React Native", "Offline-first sync", "Store release pipelines"],
    Icon: PhoneGlyph,
  },
  {
    id: "design",
    title: "UI/UX Design",
    description:
      "Interface design grounded in the real data model — prototypes you can click through before a line of production code exists.",
    bullets: ["Product discovery", "Interactive prototypes", "Component libraries"],
    Icon: PenGlyph,
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description:
      "Schemas, APIs and infrastructure designed for the traffic you will have in two years, not just the demo.",
    bullets: ["PostgreSQL modelling", "REST & GraphQL APIs", "Observability & alerting"],
    Icon: ServerGlyph,
  },
];
