import { Metadata } from "next";
import { AboutHero } from "@/components/AboutHero";
import { CTASection } from "@/components/CTASection";
import { LandingFooter } from "@/components/LandingFooter";
import { MissionSection } from "@/components/MissionSection";
import { Navbar } from "@/components/Navbar";
import { WhyUsSection } from "@/components/WhyUsSection";

export const metadata: Metadata = {
  title: "About Us - UniJade Tech",
  description: "Learn about our mission to democratize AI and empower human potential.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <MissionSection />
        <WhyUsSection />
        <CTASection />
      </main>
      <LandingFooter />
    </>
  );
}
