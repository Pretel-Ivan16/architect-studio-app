import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Philosophy from "@/components/philosophy";
import Projects from "@/components/projects";
import { Contact } from "lucide-react";

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
