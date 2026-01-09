import { Metadata } from "next";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { TermsContent } from "@/components/TermsOfService";

export const metadata: Metadata = {
  title: "Terms of Service - UniJade Tech",
  description: "Read the Terms of Service for UniJade Tech.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TermsContent />
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
