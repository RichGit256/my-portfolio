import Navbar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import Personal from "@/components/Personal";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Now from "@/components/Now";

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <div id="about">
        <Experience />
      </div>
      <div id="education">
        <Education />
      </div>
      <Certifications />
      <div id="now">
        <Now />
      </div>
      <Personal />
      <div id="work">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
