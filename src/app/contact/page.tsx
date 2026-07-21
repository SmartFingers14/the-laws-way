import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact — The Laws Way",
  description:
    "Request a confidential consultation with The Laws Way. Every enquiry is received in confidence and reviewed personally by a partner.",
};

export default function ContactPage() {
  return (
    <main className="relative">
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Faq />
      <Footer />
    </main>
  );
}
