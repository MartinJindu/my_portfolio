"use client";

import { motion } from "framer-motion";
import { experiences, education } from "@/lib/data";
import type { ExperienceItem } from "@/lib/types";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceSection() {
  const allItems: ExperienceItem[] = [...experiences, ...education].sort(
    (a, b) => {
      // Sort by start year (most recent first)
      const yearA = Number.parseInt(a.period.split(" - ")[0] || a.period);
      const yearB = Number.parseInt(b.period.split(" - ")[0] || b.period);
      return yearB - yearA;
    }
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gray-200 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background that shaped my
            expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-700 h-full">
            <motion.div
              variants={timelineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-blue-600 to-purple-600 origin-top"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {allItems.map((item: ExperienceItem, index: number) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:flex-row`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.3 }}
                    className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 ${
                      isLeft ? "md:translate-x-[-50%]" : "md:translate-x-[-50%]"
                    } w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-950 z-10`}
                  />

                  {/* Content Card */}
                  <ExperienceCard
                    item={item}
                    isLeft={isLeft}
                    IconComponent={IconComponent}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Summary Stats */}
        <SummaryStats />
      </div>
    </section>
  );
}

//---------------------------------------------------------------------------------------------

// Summary Stat
const SummaryStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-16 grid grid-cols-2 gap-6"
    >
      {[
        { label: "Years Experience", value: "2+" },

        { label: "Clients", value: "10+" },
      ].map((stat, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm"
        >
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
