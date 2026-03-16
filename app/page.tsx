import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/philosophy/Philosophy";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <Projects/>
      <About/>
      <Philosophy/>
      <Contact/>
      <Footer/>
    </main>
  );
}
