"use client";

import { useLanguage } from "@/lib/language-context";

export function ProductsHero() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {t.products.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {t.products.description}
        </p>
      </div>
    </div>
  );
}
