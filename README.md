# Tec-Tech Showcase

Build a modern IT company portfolio website for "Tec-Technology" — a software development agency.

STACK:
- Vite + React + TypeScript
- Tailwind CSS
- shadcn/ui for components (buttons, cards, dialogs, forms, navigation)
- Framer Motion for scroll/entrance animations and page transitions
- Three.js (via @react-three/fiber + @react-three/drei) for a 3D hero element
- Inline SVGs for icons/illustrations where custom graphics are needed (not just icon packs)
- react-router-dom for routing

COLOR PALETTE (use as Tailwind theme extension in tailwind.config.js, define as CSS variables in index.css):
{{COLOR_PALETTE}}
(primary, secondary, accent, background, foreground, muted — match exact hex values, don't approximate)

SITE STRUCTURE (single-page with anchor sections + optional /projects and /project/:slug routes):

1. Navbar
   - Sticky, transparent-to-solid on scroll (Framer Motion)
   - Logo "Tec-Technology" + nav links (Vision, Services, Projects, Contact)
   - Mobile: shadcn Sheet/Drawer

2. Hero Section
   - Headline + subheadline (company tagline)
   - 3D interactive element via React Three Fiber (e.g. rotating abstract geometric shape / distorted sphere / floating cubes representing tech) — must be performant, lazy-loaded, with a fallback for low-end devices
   - CTA buttons (shadcn Button): "View Projects" / "Get in Touch"
   - Framer Motion entrance animation (staggered fade+slide)

3. Vision & Mission Section
   - Two-column or card-based layout (shadcn Card)
   - Vision statement, Mission statement
   - Scroll-triggered reveal animations (Framer Motion whileInView)

4. Services/Expertise Section
   - Grid of service cards: Web Development, E-Commerce Solutions, Portfolio Sites, Mobile Apps, UI/UX Design, Backend/API Development
   - Each card: custom SVG icon, title, short description
   - Hover animations (scale/lift via Framer Motion)

5. Projects/Portfolio Section
   - Filterable grid (categories: E-commerce, Portfolio, SaaS, Mobile) — filter state with simple React state, animated filter transitions (Framer Motion layout animations)
   - Project cards: image/thumbnail, title, category tag, tech stack badges (shadcn Badge)
   - Click → modal (shadcn Dialog) or dedicated route with project details, live link, tech used

6. Why Us / Stats Section
   - Animated counters (projects delivered, clients, years experience) — Framer Motion + useInView trigger

7. Testimonials (optional but recommended)
   - Carousel using shadcn Carousel component

8. Contact Section
   - Form (shadcn Form + react-hook-form + zod validation): name, email, message
   - Social/contact links
   - Subtle 3D or SVG background accent

9. Footer
   - Company info, quick links, socials, copyright

TECHNICAL REQUIREMENTS:
- Fully responsive (mobile-first)
- Dark mode support via shadcn theme provider (next-themes pattern adapted for Vite)
- Lazy-load the Three.js canvas (dynamic import) so it doesn't block initial paint
- Reduce-motion media query respected for Framer Motion animations (accessibility)
- SEO: proper meta tags, semantic HTML
- Component structure: /components/ui (shadcn primitives), /components/sections (page sections), /components/three (3D scene components), /data (projects.ts, services.ts as typed arrays for easy content updates)
- Use TypeScript interfaces for Project, Service, Testimonial data shapes

DESIGN DIRECTION:
- Modern, minimal, tech-forward — not generic/templated
- Consistent spacing scale (Tailwind's default 4px scale)
- Typography: one display font for headings, one clean sans for body (specify via Google Fonts or local font files)
- Avoid stock "gradient blob" clichés unless it matches the extracted color palette intentionally

Do not use placeholder Lorem Ipsum for Vision/Mission — write real, specific copy for an IT company named Tec-Technology focused on delivering e-commerce platforms, portfolio sites, and custom software solutions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b4dd0aa9-17f6-4abc-9034-78dd8e8ca5a8).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
