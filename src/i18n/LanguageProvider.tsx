import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { dict, type Lang } from "./dictionary";

const STORAGE_KEY = "ftp-lang";

interface LanguageContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  isRtl: boolean;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function resolve(path: string, lang: Lang): string {
  const parts = path.split(".");
  let node: unknown = dict;
  for (const p of parts) {
    if (node && typeof node === "object" && p in (node as Record<string, unknown>)) {
      node = (node as Record<string, unknown>)[p];
    } else {
      return path;
    }
  }
  if (node && typeof node === "object" && lang in (node as Record<string, unknown>)) {
    return String((node as Record<string, string>)[lang]);
  }
  return path;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as Lang | null) ?? "en";
    setLangState(stored);
  }, []);

  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(() => setLangState((l) => (l === "en" ? "ar" : "en")), []);
  const t = useCallback((path: string) => resolve(path, lang), [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, dir: lang === "ar" ? "rtl" : "ltr", isRtl: lang === "ar", setLang, toggle, t }),
    [lang, setLang, toggle, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
