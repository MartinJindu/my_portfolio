"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

import { Mail, Github, Linkedin, Download } from "lucide-react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function ContactSection() {
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
    <section id="contact" className="py-20 bg-gray-300 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work
            together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="space-y-8">
            {/* CONTAcT INFO */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
                Contact Information
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    text: "martinchijindu@gmail.com",
                    link: "mailto:martinchijindu@gmail.com",
                  },
                  {
                    icon: Github,
                    text: "github.com/MartinJindu",
                    link: "https://github.com/MartinJindu/",
                  },
                  {
                    icon: Linkedin,
                    text: "linkedin.com/in/chijindu-okpalanweze",
                    link: "https://linkedin.com/in/chijindu-okpalanweze/",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center"
                  >
                    <contact.icon className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-4" />
                    <Link href={contact.link} target="_blank">
                      <span className="text-gray-700 dark:text-gray-300">
                        {contact.text}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                Let's Connect
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you're a company looking to hire, or
                you're a fellow developer wanting to collaborate, I'd love to
                hear from you.
              </p>
              <div className="flex space-x-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={"mailto:martinchijindu@gmail.com"}
                    target="_blank"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Me
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    aria-label="download resume"
                    href={"/Chijindu okpalanweze Resume1.pdf"}
                    download={"Chijindu_Okpalanweze.pdf"}
                  >
                    <Button
                      variant="outline"
                      className="border-gray-700 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* FORM */}
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
