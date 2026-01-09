"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t.cta.title}
        </h2>

        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto">
          {t.cta.description}
        </p>

        <Link
          href="/products"
          className="inline-block px-10 py-5 bg-white text-gray-900 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
