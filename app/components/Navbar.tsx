'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-800 shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
        <Link 
          href="/"
          className="text-xl font-bold text-gray-900 dark:text-zinc-200"
        >
          Nam Van
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;