import { Metadata } from "next";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { PrivacyPolicyContent } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - UniJade Tech",
  description: "Learn about how UniJade Tech collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PrivacyPolicyContent />
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
