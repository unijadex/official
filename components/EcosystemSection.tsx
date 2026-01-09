"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function EcosystemSection() {
  const { t } = useLanguage();

  const categories = [
    {
      key: "create",
      gradient: "from-pink-500 to-rose-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      key: "optimize",
      gradient: "from-blue-500 to-cyan-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      key: "live",
      gradient: "from-purple-500 to-indigo-500",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
            {t.ecosystem.title}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.ecosystem.subtitle}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.ecosystem.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => {
            const item = t.ecosystem[category.key as "create" | "optimize" | "live"];
            return (
              <Link
                key={category.key}
                href={`/products?category=${category.key}`}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-white/50 to-transparent" />

                <div className="relative z-10">
                  <div
                    className={`inline-block mb-6 p-4 bg-gradient-to-br ${category.gradient} rounded-2xl text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-lg font-semibold text-blue-600 mb-3">
                    {item.category}
                  </p>

                  <p className="text-gray-600">{item.description}</p>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Explore</span>
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
