export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "atlas",
    quote:
      "They rewrote our storefront in eleven weeks and hit every date. What stood out was that they pushed back on two features we asked for — and they were right both times.",
    name: "Tareq Alkharouf",
    role: "Head of Alkharouf",
    company: "Alkharouf suits",
    initials: "TQ",
  },
  {
    id: "cadence",
    quote:
      "Our dispatchers are on the platform ten hours a day. Since launch we have had one unplanned outage, lasting four minutes. That is the whole review.",
    name: "Waleed Shaheen",
    role: "CTO",
    company: "Al-ameer Paper & Boards",
    initials: "WS",
  },
  
];
