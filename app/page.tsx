import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import Technologies from "@/components/Technologies";

const Home = () => {
  return (
    <div className="flex flex-col scroll-smooth gap-[1px]">
      <HeroSection />
      <About />
      <Technologies />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
};
export default Home;
