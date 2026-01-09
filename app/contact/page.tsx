import { Metadata } from "next";
import { ContactForm, ContactHero, ContactInfo } from "@/components/ContactPage";
import { LandingFooter } from "@/components/LandingFooter";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Contact Us - UniJade Tech",
  description: "Get in touch with our team. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactHero />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}
