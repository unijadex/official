export type Language = "en" | "zh" | "ja" | "fr" | "es" | "ru";

export const languages: Record<Language, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  fr: "Français",
  es: "Español",
  ru: "Русский",
};

export const defaultLanguage: Language = "en";

export function getBrowserLanguage(): Language {
  if (typeof window === "undefined") return defaultLanguage;

  const browserLang = navigator.language.split("-")[0] as Language;

  // Check if browser language is supported
  if (Object.keys(languages).includes(browserLang)) {
    return browserLang;
  }

  return defaultLanguage;
}

export function setLanguage(lang: Language) {
  if (typeof window !== "undefined") {
    localStorage.setItem("unjade-language", lang);
    document.documentElement.lang = lang;
  }
}

export function getStoredLanguage(): Language | null {
  if (typeof window === "undefined") return null;

  const stored = localStorage.getItem("unjade-language");
  if (stored && Object.keys(languages).includes(stored)) {
    return stored as Language;
  }

  return null;
}
