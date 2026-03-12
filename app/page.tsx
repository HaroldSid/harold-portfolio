import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Sticky navigation */}
      <Header />

      <main>
        {/* Each section has an id that matches the nav links in constants.ts */}
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
