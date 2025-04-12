"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BackgroundBeams } from "./ui/background-beams";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { File } from "lucide-react";

const HeroSection = () => {
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-[url(/background.jpg)] bg-cover bg-center flex items-center justify-center overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.h3
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl text-yellow-400 font-medium mb-2"
        >
          Hello! I&apos;m
        </motion.h3>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-amber-400 leading-tight">
          {"Chijindu I. Okpalanweze".split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={
                heroInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}
              }
              transition={{
                duration: 0.4,
                delay: index * 0.2,
              }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl text-base mx-auto mt-6 md:text-lg text-white"
        >
          I&apos;m a Web Developer crafting immersive web experiences.
          Let&apos;s bring your ideas to life through clean code and beautiful
          UI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={heroInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#portfolio">
            <button className="w-52 rounded-full bg-yellow-600 hover:bg-yellow-600 text-white py-3 px-6 transition duration-300 shadow-md cursor-pointer">
              View Projects
            </button>
          </a>

          <a
            href="/Okpalanweze Chijindu Resume1.pdf"
            download="Chijindu_Okpalanweze.pdf"
          >
            <button className="flex gap-2 w-52 rounded-full border border-blue-400 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 transition duration-300 shadow-md cursor-pointer">
              View My Resume <File />
            </button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-8 flex space-x-6 justify-center"
        >
          <motion.a
            aria-label="github profile"
            title="Github Profile"
            href="https://github.com/MartinJindu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-100 hover:text-white transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            aria-label="linkedin profile"
            title="Linkedin Profile"
            href="https://www.linkedin.com/in/chijindu-okpalanweze/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-300 hover:text-white transition"
          >
            <FaLinkedin className="text-blue-500" />
          </motion.a>
          <motion.a
            aria-label="X profile"
            title="X Profile"
            href="https://x.com/MartinJindu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-3xl text-gray-100 hover:text-white transition"
          >
            <FaXTwitter />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] border-2 border-white rounded-full flex items-start justify-center p-1">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-2 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>

      {/* Shooting Stars */}
      <BackgroundBeams />
    </section>
  );
};

export default HeroSection;
