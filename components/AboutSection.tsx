"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import myPic from "@/assets/my_img.png";
import Link from "next/link";

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-gray-300 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-1"
            >
              <Image
                src={myPic}
                alt="Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              Hello, I'm Chijindu Okpalanweze
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              I&apos;m a full-stack developer passionate about creating modern,
              scalable, and high-performance applications. With a deep curiosity
              for technology and a love for clean code, I specialize in creating
              responsive, accessible, and user-focused solutions using modern
              JavaScript frameworks and libraries like{" "}
              <span className="text-amber-600 dark:text-amber-400">
                Next.js
              </span>
              ,{" "}
              <span className="text-amber-600 dark:text-amber-400">React</span>.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
            >
              I ensure clean code, performance optimization, and staying
              up-to-date with the latest technologies. When I'm not coding,
              you'll find me contributing to open-source projects, mentoring
              junior developers, or exploring new frameworks.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              {[
                { label: "Experience", value: "2+ Years" },
                { label: "Projects", value: "20+ Completed" },
                { label: "Clients", value: "10+ Happy" },
                // { label: "Coffee", value: "Unlimited", icon: Coffee },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center lg:text-left"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                    {stat.label}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 flex items-center justify-center lg:justify-start">
                    {stat.value}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                aria-label="download resume"
                href={"/Chijindu okpalanweze Resume1.pdf"}
                download={"Chijindu_Okpalanweze.pdf"}
              >
                <Button className="bg-blue-600 hover:bg-blue-700 mt-6 cursor-pointer">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
