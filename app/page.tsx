import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MissionSection } from "@/components/MissionSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { CTASection } from "@/components/CTASection";
import { LandingFooter } from "@/components/LandingFooter";

export const metadata: Metadata = {
  title: "UniJade Tech - Crafting Intelligence for Everyday Life",
  description: "Bridging the gap between complex AI and human potential. Discover our ecosystem of intuitive applications.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyUsSection />
        <EcosystemSection />
        <CTASection />
      </main>
      <LandingFooter />
    </>
  );
}
