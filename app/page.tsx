import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Workshops } from "@/components/sections/Workshops";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FDFBF7]">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Workshops />
      </main>
      <Footer />
    </div>
  );
}
