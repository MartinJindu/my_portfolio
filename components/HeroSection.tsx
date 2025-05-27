"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticlesBackground from "./Particle-Background";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-950"
    >
      <ParticlesBackground />
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-gray-900/10 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-gray-900/20"
        style={{ zIndex: 2 }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        {/* HERO TEXT */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-4xl py-2 sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent"
          >
            Hi, I'm Chijindu
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Writing maintainable code and crafting intuitive UIs is my thing. As
            a Full-Stack Developer, I focus on turning complex ideas into
            simple, reliable products.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 dark:border-gray-300 text-gray-900 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>

          {/* SOCIALS */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              {
                icon: FaGithub,
                href: "https://github.com/MartinJindu/",
                aria: "github",
              },
              {
                icon: FaLinkedinIn,
                href: "https://linkedin.com/in/chijindu-okpalanweze/",
                aria: "linkedinIn",
              },
              {
                icon: Mail,
                href: "mailto:martinchijindu@gmail.com",
                aria: "mail",
              },
            ].map((social, index) => (
              <Link
                key={index}
                aria-label={social.aria}
                href={social.href}
                target="_blank"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-6 w-6" />
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
