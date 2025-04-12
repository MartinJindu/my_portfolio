"use client";

import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import { useInView } from "react-intersection-observer";
import { BackgroundGradient } from "./ui/background-gradient";

const Technologies = () => {
  const { ref: techRef, inView: techInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      ref={techRef}
      id="technologies"
      className="relative bg-cover bg-center bg-[url(/tech.jpg)] h-auto w-full md:h-screen overflow-hidden pt-26"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-20 text-center text-white">
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={techInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="text-amber-500">Technologies</span> I Work With
        </motion.h2>

        <motion.div className="flex justify-center gap-6 flex-wrap px-4 py-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={techInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <BackgroundGradient className="p-1 rounded-xl">
                <motion.div
                  className="p-4 bg-gray-800 rounded-xl shadow-md flex flex-col items-center"
                  whileHover={{ scale: 1.1 }}
                >
                  {tech.icon}
                  <p className="mt-2 text-gray-300 text-lg">{tech.name}</p>
                </motion.div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;

// Technologies data
const technologies = [
  { name: "React.js", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white text-6xl" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-6xl" />,
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-blue-500 text-6xl" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 text-6xl" />,
  },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  {
    name: "Prisma ORM",
    icon: <SiPrisma className="text-blue-600 text-6xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-6xl" />,
  },
];
