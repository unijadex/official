import { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { EcosystemSection } from "@/components/EcosystemSection";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";
import { ProductsHero } from "@/components/ProductsHero";

export const metadata: Metadata = {
  title: "Products - UniJade Tech",
  description: "Explore our suite of intelligent tools for work, creativity, and lifestyle.",
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ProductsHero />
        <EcosystemSection />
        <CTASection />
      </main>
      <LandingFooter />
    </>
  );
}
