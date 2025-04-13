"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="portfolio"
      ref={projectRef}
      aria-label="Portfolio Section"
      className="relative bg-cover bg-center bg-[url(/portfolio.avif)] text-white min-h-[100dvh] px-6 py-16 pt-26 overflow-hidden"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={projectInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span className="text-blue-500">My</span>{" "}
        <span className="text-amber-500">Portfolio</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-300 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={projectInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
      >
        A collection of my latest projects showcasing my skills and expertise.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12"
        initial="hidden"
        animate={projectInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
