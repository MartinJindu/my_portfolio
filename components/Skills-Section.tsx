"use client";

import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { Smartphone, Users, Palette, Workflow } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiRedux,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skills.map((skill: Skill, index: number) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-blue-600/20 p-2 rounded-lg mr-4"
                  >
                    {skill.icon}
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {skill.name}
                      </h3>
                      <span className="text-blue-400 dark:text-blue-400 font-medium">
                        {skill.percentage}%
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <Progress value={skill.percentage} className="h-2" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export const skills = [
  {
    name: "JavaScript / TypeScript",
    percentage: 90,
    icon: <SiTypescript className="text-blue-600 dark:text-blue-400 h-5 w-5" />,
  },
  {
    name: "React / React Native",
    percentage: 85,
    icon: <FaReact className="text-blue-600 dark:text-blue-400 h-5 w-5" />,
  },
  {
    name: "Next.js",
    percentage: 85,
    icon: <SiNextdotjs className="text-black dark:text-white h-5 w-5" />,
  },
  {
    name: "Tailwind CSS",
    percentage: 75,
    icon: (
      <SiTailwindcss className="text-blue-600 dark:text-blue-400 h-5 w-5" />
    ),
  },
  {
    name: "Node.js / Express.js",
    percentage: 80,
    icon: <FaNodeJs className="text-green-600 dark:text-green-400 h-5 w-5" />,
  },
  {
    name: "Supabase",
    percentage: 80,
    icon: <SiSupabase className="text-green-600 dark:text-green-400 h-5 w-5" />,
  },
  {
    name: "Redux / Zustand",
    percentage: 80,
    icon: <SiRedux className="text-purple-600 dark:text-purple-400 h-5 w-5" />,
  },
  {
    name: "Postgres / MongoDB",
    percentage: 70,
    icon: <SiPostgresql className="text-blue-600 dark:text-blue-400 h-5 w-5" />,
  },
  {
    name: "Mobile Development",
    percentage: 75,
    icon: <Smartphone className="text-green-600 dark:text-green-400 h-5 w-5" />,
  },
  {
    name: "REST / Graphql",
    percentage: 70,
    icon: <Workflow className="text-green-600 dark:text-green-400 h-5 w-5" />,
  },
  {
    name: "Responsive Design",
    percentage: 80,
    icon: <Palette className="text-amber-600 dark:text-amber-400 h-5 w-5" />,
  },
  {
    name: "Communication",
    percentage: 78,
    icon: <Users className="text-amber-600 dark:text-amber-400 h-5 w-5" />,
  },
];
