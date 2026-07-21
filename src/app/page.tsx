import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Firm } from "@/components/sections/Firm";
import { Practice } from "@/components/sections/Practice";
import { Approach } from "@/components/sections/Approach";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";

import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Stats />
      <Firm />
      <Practice />
      <Approach />
      <Gallery />
      <Testimonials />

      <Contact />
      <Footer />
    </main>
  );
}
