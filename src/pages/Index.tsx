import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { About } from "@/components/portfolio/About";
import { Footer } from "@/components/portfolio/Footer";

const Index = () => (
  <div id="top" className="min-h-screen bg-background text-foreground">
    <Nav />
    <main>
      <Hero />
      <Projects />
      <Skills />
      <About />
    </main>
    <Footer />
  </div>
);

export default Index;
