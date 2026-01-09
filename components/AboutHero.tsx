"use client";

import { useLanguage } from "@/lib/language-context";

export function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {t.about.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.about.subtitle}
        </p>
      </div>
    </section>
  );
}
