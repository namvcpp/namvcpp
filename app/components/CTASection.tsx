'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail } from 'react-icons/md';
import { HiOutlineDocumentText } from 'react-icons/hi';

const CTASection = () => {
  return (
    <motion.section 
      className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <div className="absolute top-0 right-0 bg-blue-500 rounded-full w-32 h-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 bg-purple-500 rounded-full w-32 h-32 blur-3xl"></div>
      </div>
      
      <div className="z-10">
        <motion.h2 
          className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p 
          className="text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Open to collaborations, projects, and discussions.
        </motion.p>
      </div>
      
      <div className="flex gap-4 z-10">
        <motion.a 
          href="mailto:namvc153@gmail.com" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-all hover:scale-105"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          <MdEmail />
          Contact Me
        </motion.a>
        <motion.a 
          href="/resume.pdf" 
          className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all"
          whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <HiOutlineDocumentText />
          Resume
        </motion.a>
      </div>
    </motion.section>
  );
};

export default CTASection;