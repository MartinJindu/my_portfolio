"use client";
import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section
      id="contact"
      ref={contactRef}
      aria-label="Contact Section"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-24 pb-4"
    >
      {/* Header */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={contactInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Get in <span className="text-amber-500">Touch</span>
      </motion.h1>
      <p className="mt-4 text-gray-300 text-center">
        Have a project or just want to say hi? Feel free to reach out.
      </p>

      <ContactForm />
    </section>
  );
};

export default Contact;
