"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

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

const Portfolio = () => {
  const { ref: projectRef, inView: projectInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      id="portfolio"
      ref={projectRef}
      className="bg-cover bg-center bg-[url(/portfolio.jpg)] text-white min-h-screen px-6 py-16 pt-26 overflow-hidden"
      initial="hidden"
      animate={projectInView ? "visible" : "hidden"}
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center"
        variants={cardVariants}
        transition={{ duration: 1 }}
      >
        <span className="text-blue-500">My</span>{" "}
        <span className="text-amber-500">Portfolio</span>
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-300 text-center"
        variants={cardVariants}
        transition={{ duration: 1, delay: 0.3 }}
      >
        A collection of my latest projects showcasing my skills and expertise.
      </motion.p>

      {/* Project Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3  gap-5 mt-12"
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 2 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
