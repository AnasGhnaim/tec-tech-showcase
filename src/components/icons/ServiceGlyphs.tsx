import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 48 48",
  fill: "none",
  strokeWidth: 1.25,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function BrowserGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="8" width="40" height="32" rx="2" />
      <path d="M4 16h40" />
      <circle cx="9" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="12" r="1" fill="currentColor" stroke="none" />
      <path d="m18 22-5 6 5 6" className="text-accent" stroke="currentColor" />
      <path d="m30 22 5 6-5 6" />
      <path d="m26 21-4 14" />
    </svg>
  );
}

export function CartGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 7h5l4.5 20h20l4-14H12" />
      <circle cx="18" cy="37" r="2.5" />
      <circle cx="33" cy="37" r="2.5" />
      <path d="M22 17h10M27 12v10" />
    </svg>
  );
}

export function LayersGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m24 6 18 9-18 9-18-9 18-9Z" />
      <path d="m6 24 18 9 18-9" />
      <path d="m6 33 18 9 18-9" />
    </svg>
  );
}

export function PhoneGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="14" y="4" width="20" height="40" rx="3" />
      <path d="M21 9h6" />
      <path d="M14 36h20" />
      <path d="M20 18h8M20 24h8M20 30h4" />
    </svg>
  );
}

export function PenGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 40h8L40 16a4 4 0 0 0-6-6L10 34l-2 6Z" />
      <path d="m31 13 4 4" />
      <path d="M6 10h6M9 7v6" />
      <circle cx="39" cy="34" r="3" />
    </svg>
  );
}

export function ServerGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="8" width="36" height="12" rx="2" />
      <rect x="6" y="28" width="36" height="12" rx="2" />
      <path d="M12 14h2M12 34h2" />
      <circle cx="36" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="36" cy="34" r="1.5" fill="currentColor" stroke="none" />
      <path d="M24 20v8" />
    </svg>
  );
}
