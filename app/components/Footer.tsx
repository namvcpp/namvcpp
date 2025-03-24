'use client';

import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaHeart, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 overflow-hidden perspective-1000">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              About Me
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Student at Le Quy Don High School for the Gifted, passionate about technology and innovative solutions.
            </motion.p>
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/about"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Connect
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                href="https://twitter.com/namvcpp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                aria-label="Twitter"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@namvcpp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                aria-label="YouTube"
              >
                <FaYoutube className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Quick Links
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </motion.ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 pb-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Nam Vu. All rights reserved. Built with <FaHeart className="inline text-red-500 mx-1" /> using Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;