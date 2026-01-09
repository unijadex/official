"use client";

import { useLanguage } from "@/lib/language-context";

export function MissionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2">
                {t.mission.title}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.mission.subtitle}
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {t.mission.description}
            </p>

            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700">
              <p className="text-lg leading-relaxed">{t.mission.philosophy}</p>
            </blockquote>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center p-8">
                <div className="grid grid-cols-2 gap-4 w-full">
                  {/* Abstract Visual Elements */}
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </div>
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center">
                    <svg className="w-12 h-12 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
