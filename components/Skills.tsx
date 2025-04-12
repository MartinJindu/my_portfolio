"use client";

import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import SkillsProgress from "./SkillsProgress";
import { File } from "lucide-react";

const Skills = () => {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="relative bg-cover bg-center bg-[url(/skills.avif)] min-h-screen w-full flex items-center justify-center px-5 pt-26 overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col md:flex-row gap-12 items-start justify-between">
        {/* Left side */}
        <motion.div
          className="flex flex-col md:w-1/3 text-white items-center sm:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={skillsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-400 mb-4">
            My <span className="text-amber-500">Skills</span>
          </h2>

          <p className="text-lg text-gray-100">
            I have hands-on experience in modern frontend and backend
            technologies. Here is a breakdown of my proficiency across the
            stack.
          </p>
          <a
            href="/Okpalanweze Chijindu Resume1.pdf"
            download="Chijindu_Okpalanweze.pdf"
          >
            <button className="mt-5 flex gap-2 w-44 rounded-sm border border-blue-400 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 transition duration-300 shadow-md cursor-pointer">
              My Resume <File />
            </button>
          </a>
        </motion.div>

        {/* Right side - Skills bars */}
        <motion.div
          className="md:w-2/3 w-full space-y-6"
          initial={{ opacity: 0 }}
          animate={skillsInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          {skills.map((skill, index) => (
            <SkillsProgress
              key={skill.name}
              skill={skill}
              index={index}
              skillsInView={skillsInView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

// Skills Data
const skills = [
  {
    name: "React",
    level: 85,
    icon: <FaReact className="text-blue-400 text-3xl" />,
  },
  {
    name: "Next.js",
    level: 75,
    icon: <SiNextdotjs className="text-white text-3xl" />,
  },
  {
    name: "TypeScript",
    level: 70,
    icon: <SiTypescript className="text-blue-500 text-3xl" />,
  },
  {
    name: "Tailwind CSS",
    level: 75,
    icon: <SiTailwindcss className="text-blue-500 text-3xl" />,
  },
  {
    name: "JavaScript",
    level: 70,
    icon: <FaJs className="text-yellow-400 text-3xl" />,
  },
  {
    name: "Node.js",
    level: 60,
    icon: <FaNodeJs className="text-green-500 text-3xl" />,
  },
];
