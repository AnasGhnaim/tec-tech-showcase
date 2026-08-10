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



import alKharouf2 from "@/assets/alkharouf2.png";
import alameer from "@/assets/alameer.png";
import Verdent from "@/assets/Verdant.png"
import slimfit from "@/assets/slimfit.png"
import QawiWeb from "@/assets/QawiWeb.png";
import QawiMobile from "@/assets/QawiMobile.png";

export const projects: Project[] = [
  
  {
    slug: "Al-Kharouf",
    title: "Al-Kharouf",
    client: "Tareq AlKharouf",
    category: "Portfolio",
    summary: "AlKharouf is a name built on the belief that a suit is more than fabric and thread. Since 1951, we have pursued excellence in every detail, from the weave of the cloth to the precision of each cut. Our creations carry heritage and purpose, designed for men who move through the world with quiet distinction.",
    description:
      "A live full-stack tailoring platform for a bespoke suit business. Includes product catalog, custom orders, suit workflow management, and secure customer interactions.",
    year: "2025",
    liveUrl: "https://www.al-kharouf.com/",
    tech: ["React", "TypeScript", "Node.js","Express.js" ,"PostgreSQL","Tailwind CSS", "Framer Motion"],
    image: alKharouf2,
    results: [
      { label: "Checkout completion", value: "+41%" },
      { label: "Category page load", value: "0.8s" },
      { label: "SKUs migrated", value: "12,400" },
    ],
  },
  {
    slug: "al-ameer",
    title: "Al-Ameer Paper & Board",
    client: "Waleed Shaheen",
    category: "Portfolio",
    summary: "Established in 2001, Al-Ameer Paper & Board Trading Co. began with a vision to become Jordan's most trusted supplier of premium paperboard and printing materials. From day one, we committed ourselves to quality, reliability, and exceptional service.",
    description:
      "A professional business website developed to showcase products, company profile, and services with a clean, responsive design.",
    year: "2025",
    liveUrl: "https://www.alameerpaper.com/",
    tech: ["React", "TypeScript", "Framer Motion"],
    image: alameer,
    results: [
      { label: "Lighthouse performance", value: "99" },
      { label: "Enquiries per month", value: "3.2x" },
      { label: "Publish time per project", value: "6 min" },
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
    year: "2026",
    liveUrl: "https://feedwell-admin-kappa.vercel.app/",
    tech: ["React", "TypeScript", "Java","Spring","PostgreSQL"],
    image: Verdent,
    results: [
      { label: "Producers onboarded", value: "40" },
      { label: "Weekly subscriptions", value: "2,100" },
      { label: "Fulfilment errors", value: "-63%" },
    ],
  },
  {
    slug: "slim-fit",
    title: "Slim & Fit Nutrition",
    client: "Slim & Fit Nutrition",
    category: "E-commerce",
    summary: "Nutrition and diet-planning platform with personalized meal tracking.",
    description:
      "A nutrition coaching platform built as a pnpm monorepo with a shared Express API. We handled client onboarding, macro-based meal planning, and progress tracking in one cohesive flow, with a lean deployment pipeline that ships frontend and API together on Vercel.",
    year: "2026",
    liveUrl: "https://slim-fit-slimfit-nutrition-delta.vercel.app/",
    tech: ["React", "TypeScript", "Vite", "Express", "pnpm"],
    image: slimfit,
    results: [
      { label: "Load time", value: "0.9s" },
      { label: "Meal plans generated", value: "500+" },
      { label: "API response time", value: "80ms" },
    ],
},

{
  slug: "qawi-web",
  title: "Qawi",
  client: "Qawi Gym Management",
  category: "SaaS",
  summary: "Gym management platform for owners to handle members, classes, and billing.",
  description:
    "A full-featured gym management SaaS built on a Spring Boot backend with a React frontend. Owns member management, class scheduling, and billing in one dashboard, with Zustand-driven state sliced by domain and form validation enforced end-to-end for staff-facing workflows.",
  year: "2026",
  liveUrl: "https://your-qawi-web-url.vercel.app/",
  tech: ["React", "TypeScript", "Zustand", "Spring Boot", "PostgreSQL", "Docker"],
  image: QawiWeb,
  results: [
    { label: "Gyms onboarded", value: "TBD" },
    { label: "Load time", value: "TBD" },
    { label: "Active members tracked", value: "TBD" },
  ],
},
{
  slug: "qawi-mobile",
  title: "Qawi Mobile",
  client: "Qawi Gym Management",
  category: "Mobile",
  summary: "Cross-platform companion app for gym members to book classes and track progress.",
  description:
    "A React Native companion app sharing the same Spring Boot backend as the web dashboard. Members book classes, track attendance, and manage their membership on the go, with a Zustand store sliced by domain and FlatList rendering tuned for large class and member lists.",
  year: "2026",
  liveUrl: "",
  tech: ["React Native", "TypeScript", "Zustand", "Expo", "Spring Boot"],
  image: QawiMobile,
  results: [
    { label: "Cold start", value: "TBD" },
    { label: "App store rating", value: "TBD" },
    { label: "Class bookings/month", value: "TBD" },
  ],
},
];

export const projectCategories = ["All", "E-commerce", "Portfolio", "SaaS", "Mobile"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
