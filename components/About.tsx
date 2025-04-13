"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import myPic from "@/assets/my_img.png";

const containerVariants = {
  hidden: { opacity: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, delay: 0.2, ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.4, ease: "easeInOut" },
  },
};

const About = () => {
  return (
    <motion.section
      id="about"
      aria-label="about section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative bg-cover bg-center bg-[url(/about.avif)] min-h-screen pt-26 overflow-y-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row items-center justify-center h-full gap-6 p-4 text-white">
        {/* Image section */}
        <motion.div
          variants={containerVariants}
          className="flex justify-center md:w-1/2"
        >
          <div className="relative aspect-square w-52 sm:w-64 md:w-80 lg:w-96 bg-blue-900 rounded-full overflow-hidden backdrop-blur-md">
            <Image
              src={myPic}
              alt="My Picture"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text section */}
        <motion.div
          variants={textVariants}
          className="flex flex-col gap-6 md:w-1/2 text-center md:text-left"
        >
          <div className="p-[2px] bg-gradient-to-tr from-blue-500 to-amber-500 shadow-xl rounded-l-full">
            <div className="bg-black/80  py-4 px-6 rounded-l-full text-white ">
              <h1 className="text-4xl  font-bold">
                About <span className="text-amber-400">Me</span>
              </h1>
            </div>
          </div>

          <p className="text-xl leading-relaxed">
            Hi! I&apos;m Chijindu Okpalanweze. I&apos;m a developer passionate
            about creating modern, scalable, and high-performance applications.
            With a deep curiosity for technology and a love for clean code, I
            specialize in creating responsive, accessible, and user-focused
            solutions using modern JavaScript frameworks and libraries like{" "}
            <span className="text-amber-400">Next.js</span>,{" "}
            <span className="text-amber-400">React</span>.
            <br /> My design choices are influenced by both functionality and
            aesthetics, ensuring every user experience feels intuitive and
            refined. I’m also a firm believer in continuous learning and love
            experimenting with new technologies.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
