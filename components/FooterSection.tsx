"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import icon from "@/assets/icon.png";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image
              src={icon}
              alt="icon"
              width={35}
              height={35}
              className="rounded-sm"
            />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              Chijindu Okpalanweze
            </span>
          </div>
          <div className="flex space-x-6">
            {[
              {
                icon: Github,
                href: "https://github.com/MartinJindu/",
                aria: "github",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/chijindu-okpalanweze/",
                aria: "linkedinIn",
              },
              {
                icon: Mail,
                href: "mailto:martinchijindu@gmail.com",
                aria: "mail",
              },
            ].map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={social.href}
                  aria-label={social.aria}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Chijindu Okpalanweze</p>
          <p>Built with Next.js</p>
        </motion.div>
      </div>
    </footer>
  );
}
