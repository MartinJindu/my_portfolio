import dynamic from "next/dynamic";

const Technologies = dynamic(() => import("@/components/Technologies"));
const Skills = dynamic(() => import("@/components/Skills"));
const Portfolio = dynamic(() => import("@/components/Portfolio"));
const HeroSection = dynamic(() => import("@/components/HeroSection"));
const About = dynamic(() => import("@/components/About"));
const Contact = dynamic(() => import("@/components/Contact"));

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
