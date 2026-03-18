import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/philosophy/Philosophy";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Projects/>
      <About/>
      <Philosophy/>
      <Contact/>
    </main>
  );
}
