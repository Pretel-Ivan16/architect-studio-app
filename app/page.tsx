import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Philosophy from "@/components/philosophy";
import Projects from "@/components/projects";

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
