"use client";

import { useLanguage } from "@/lib/language-context";

export function TermsContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {t.terms.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">{t.terms.lastUpdated}</p>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        {t.terms.intro}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.terms.sections.acceptance.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.terms.sections.acceptance.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.terms.sections.serviceDescription.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.terms.sections.serviceDescription.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.terms.sections.userResponsibilities.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.terms.sections.userResponsibilities.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.terms.sections.intellectualProperty.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.terms.sections.intellectualProperty.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.terms.sections.termination.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.terms.sections.termination.content}
          </p>
        </section>
      </div>
    </div>
  );
}
