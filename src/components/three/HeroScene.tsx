import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

const HeroCanvas = lazy(() => import("./HeroCanvas"));

/** Static SVG stand-in shown during SSR, while the canvas loads, or on low-end devices. */
function SceneFallback() {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full text-accent" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.5">
        <circle cx="200" cy="200" r="120" />
        <circle cx="200" cy="200" r="88" opacity="0.6" />
        <path d="M200 80 320 200 200 320 80 200Z" />
        <path d="M200 80 200 320M80 200 320 200" opacity="0.35" />
        <path d="m118 118 164 164M282 118 118 282" opacity="0.25" />
      </g>
      <circle cx="200" cy="200" r="42" fill="currentColor" opacity="0.12" />
    </svg>
  );
}

function isCapableDevice() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const hasWebGL = Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
    );
    return hasWebGL;
  } catch {
    return false;
  }
}

export default function HeroScene() {
  const reduced = useReducedMotion() ?? false;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setEnabled(isCapableDevice()))
      : window.setTimeout(() => setEnabled(isCapableDevice()), 200);
    return () => {
      if (window.cancelIdleCallback) window.cancelIdleCallback(id as number);
      else window.clearTimeout(id as number);
    };
  }, []);

  if (!enabled) return <SceneFallback />;

  return (
    <Suspense fallback={<SceneFallback />}>
      <HeroCanvas reduced={reduced} />
    </Suspense>
  );
}
