"use client";

import { motion } from "framer-motion";
import type { Technology } from "@/lib/types";
import { Code2, Container, Workflow } from "lucide-react";

import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiTypescript,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiJest,
} from "react-icons/si";

export default function TechnologiesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
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
    <section
      id="technologies"
      className="py-20 bg-gray-300 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technologies I Work With
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern tools and frameworks I use to build exceptional applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {technologies.map((tech: Technology, index: number) => {
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4 text-center hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-3"
                  >
                    {tech.icon}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                    {tech.name}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {tech.category}
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

export const technologies = [
  {
    name: "React / React Native",
    category: "Frontend",
    icon: <FaReact className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: <SiNextdotjs className="h-8 w-8 text-black dark:text-white" />,
  },
  {
    name: "TypeScript / JavaScript",
    category: "Language",
    icon: <SiTypescript className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "HTML5 / CSS3",
    category: "Language",
    icon: <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Node.js / Express.js",
    category: "Backend",
    icon: <FaNodeJs className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    name: "Postgres / MongoDB",
    category: "Database",
    icon: <SiPostgresql className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Supabase",
    category: "Database",
    icon: <SiSupabase className="h-8 w-8 text-green-600 dark:text-green-400" />,
  },
  {
    name: "Redis",
    category: "Database",
    icon: <SiRedis className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <Container className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },

  {
    name: "REST / GraphQL",
    category: "API",
    icon: <Workflow className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: (
      <SiTailwindcss className="h-8 w-8 text-blue-600 dark:text-blue-400" />
    ),
  },
  {
    name: "Bootstrap",
    category: "Styling",
    icon: (
      <FaBootstrap className="h-8 w-8 text-purple-600 dark:text-purple-400" />
    ),
  },
  {
    name: "Prisma / Drizzle",
    category: "ORM",
    icon: <SiPrisma className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  },
  {
    name: "Jest",
    category: "Testing",
    icon: <SiJest className="h-8 w-8 text-orange-800 dark:text-orange-600" />,
  },
];
