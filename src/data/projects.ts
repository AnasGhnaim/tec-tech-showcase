export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "E-commerce" | "Portfolio" | "SaaS" | "Mobile";
  summary: string;
  description: string;
  year: string;
  liveUrl: string;
  tech: string[];
  image: string;
  results: { label: string; value: string }[];
}

import ecommerce from "@/assets/project-ecommerce.jpg";
import portfolio from "@/assets/project-portfolio.jpg";
import saas from "@/assets/project-saas.jpg";
import mobile from "@/assets/project-mobile.jpg";
import marketplace from "@/assets/project-marketplace.jpg";
import studio from "@/assets/project-studio.jpg";

export const projects: Project[] = [
  {
    slug: "atlas-commerce",
    title: "Atlas Commerce",
    client: "Atlas Home Goods",
    category: "E-commerce",
    summary: "Headless storefront replacing a legacy platform, rebuilt around a 3-step checkout.",
    description:
      "Atlas was losing carts on a template store that took nine seconds to render a category page. We rebuilt the storefront headless: a React front end backed by a typed product API, edge-cached catalogue pages, and a checkout collapsed from six steps to three. Inventory, pricing and promotions stay in the client's existing ERP and sync through a webhook pipeline we maintain.",
    year: "2025",
    liveUrl: "https://example.com/atlas",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    image: ecommerce,
    results: [
      { label: "Checkout completion", value: "+41%" },
      { label: "Category page load", value: "0.8s" },
      { label: "SKUs migrated", value: "12,400" },
    ],
  },
  {
    slug: "meridian-studio",
    title: "Meridian Studio",
    client: "Meridian Architects",
    category: "Portfolio",
    summary: "An editorial portfolio for an architecture practice, built around large-format imagery.",
    description:
      "Meridian needed their built work to carry the site rather than the layout. We designed a typographic, near-monochrome shell with progressive image loading so 40-megapixel project photography opens instantly on mobile. Editors publish new projects themselves through a structured content model — no developer in the loop.",
    year: "2025",
    liveUrl: "https://example.com/meridian",
    tech: ["React", "TypeScript", "Framer Motion", "Sanity CMS"],
    image: studio,
    results: [
      { label: "Lighthouse performance", value: "99" },
      { label: "Enquiries per month", value: "3.2x" },
      { label: "Publish time per project", value: "6 min" },
    ],
  },
  {
    slug: "cadence-ops",
    title: "Cadence Ops",
    client: "Cadence Logistics",
    category: "SaaS",
    summary: "Multi-tenant operations dashboard for fleet dispatchers, live to 600 daily users.",
    description:
      "A dispatch platform where every second of latency is a delayed delivery. We built a multi-tenant workspace with role-scoped access, a websocket event stream that keeps 600 concurrent dispatchers in sync, and an audit log that satisfies the client's compliance obligations. Row-level security is enforced in the database, not the client.",
    year: "2024",
    liveUrl: "https://example.com/cadence",
    tech: ["React", "TypeScript", "PostgreSQL", "WebSockets", "Docker"],
    image: saas,
    results: [
      { label: "Daily active dispatchers", value: "600+" },
      { label: "Event latency p95", value: "120ms" },
      { label: "Manual reports removed", value: "18" },
    ],
  },
  {
    slug: "northline-mobile",
    title: "Northline",
    client: "Northline Bank",
    category: "Mobile",
    summary: "Cross-platform banking companion app with biometric auth and offline statements.",
    description:
      "A companion app for a regional bank's retail customers. Biometric authentication, offline-readable statements, and instant card freeze — all built on a shared React Native codebase so a single team ships iOS and Android in the same sprint. Every network call is certificate-pinned and the app passed third-party penetration testing on the first pass.",
    year: "2024",
    liveUrl: "https://example.com/northline",
    tech: ["React Native", "TypeScript", "GraphQL", "Node.js"],
    image: mobile,
    results: [
      { label: "App store rating", value: "4.8" },
      { label: "Support calls", value: "-27%" },
      { label: "Cold start", value: "1.1s" },
    ],
  },
  {
    slug: "verdant-market",
    title: "Verdant Market",
    client: "Verdant Growers Co-op",
    category: "E-commerce",
    summary: "Subscription grocery marketplace for a 40-farm co-operative with split fulfilment.",
    description:
      "Forty independent farms selling from one storefront, each with their own stock, cut-off times and delivery radius. We modelled split fulfilment properly: one customer basket becomes several producer orders, payouts are reconciled weekly, and subscribers can pause or swap a box up to 24 hours before dispatch.",
    year: "2025",
    liveUrl: "https://example.com/verdant",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe Connect"],
    image: marketplace,
    results: [
      { label: "Producers onboarded", value: "40" },
      { label: "Weekly subscriptions", value: "2,100" },
      { label: "Fulfilment errors", value: "-63%" },
    ],
  },
  {
    slug: "ravel-portfolio",
    title: "Ravel",
    client: "Ravel Sound Design",
    category: "Portfolio",
    summary: "Audio-first showcase site with waveform players and a bookings pipeline.",
    description:
      "A sound studio whose work can only be judged by listening. We built custom waveform players that stream without blocking scroll, a reel that adapts to connection speed, and a booking flow that drops enquiries straight into the studio's calendar with the referenced track attached.",
    year: "2024",
    liveUrl: "https://example.com/ravel",
    tech: ["React", "TypeScript", "Web Audio API", "Tailwind CSS"],
    image: portfolio,
    results: [
      { label: "Average session", value: "4m 12s" },
      { label: "Booking conversion", value: "+58%" },
      { label: "Reel bandwidth saved", value: "44%" },
    ],
  },
];

export const projectCategories = ["All", "E-commerce", "Portfolio", "SaaS", "Mobile"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
