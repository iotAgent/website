import { Hero } from "@/components/hero/Hero";
import { Navbar } from "@/components/nav/Navbar";
import { Features } from "@/components/features/Features";
import { ProjectCarousel } from "@/components/projects/ProjectCarousel";
import { Contributing } from "@/components/contributing/Contributing";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProjectCarousel />
        <Contributing />
      </main>
      <Footer />
    </div>
  );
}
