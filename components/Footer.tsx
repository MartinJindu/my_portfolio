"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 space-y-10 text-gray-300 py-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Chijindu I. Okpalanweze
      </p>
      <nav className="flex justify-center space-x-4 mt-2">
        <motion.a
          aria-label="github profile"
          href="https://github.com/MartinJindu/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          aria-label="linkedin profile"
          href="https://www.linkedin.com/in/chijindu-okpalanweze/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          aria-label="X profile"
          href="https://x.com/MartinJindu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaXTwitter />
        </motion.a>
        <motion.a
          aria-label="email"
          href="mailto:martinchijindu@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          className="text-xl text-gray-400 hover:text-white transition"
        >
          <FaEnvelope />
        </motion.a>
      </nav>
    </footer>
  );
};

export default Footer;
