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
    name: "Dana Whitfield",
    role: "Head of Digital",
    company: "Atlas Home Goods",
    initials: "DW",
  },
  {
    id: "cadence",
    quote:
      "Our dispatchers are on the platform ten hours a day. Since launch we have had one unplanned outage, lasting four minutes. That is the whole review.",
    name: "Marek Oswald",
    role: "COO",
    company: "Cadence Logistics",
    initials: "MO",
  },
  {
    id: "meridian",
    quote:
      "We came with photography and no idea how to structure it. Tec-Technology built something restrained enough that clients talk about the buildings, not the website.",
    name: "Ines Ferreira",
    role: "Founding Partner",
    company: "Meridian Architects",
    initials: "IF",
  },
  {
    id: "northline",
    quote:
      "The app passed external penetration testing first time. In our sector that almost never happens on a first release.",
    name: "Grant Ellery",
    role: "Director of Technology",
    company: "Northline Bank",
    initials: "GE",
  },
];
