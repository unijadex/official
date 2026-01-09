"use client";

import { useLanguage } from "@/lib/language-context";

export function PrivacyPolicyContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {t.privacy.title}
      </h1>

      <p className="text-sm text-gray-500 mb-8">{t.privacy.lastUpdated}</p>

      <p className="text-lg text-gray-700 mb-12 leading-relaxed">
        {t.privacy.intro}
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.privacy.sections.informationCollection.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.privacy.sections.informationCollection.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.privacy.sections.useOfInformation.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.privacy.sections.useOfInformation.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.privacy.sections.dataSecurity.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.privacy.sections.dataSecurity.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.privacy.sections.userRights.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.privacy.sections.userRights.content}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t.privacy.sections.contactUs.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {t.privacy.sections.contactUs.content}
          </p>
        </section>
      </div>
    </div>
  );
}
