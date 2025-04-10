'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-zinc-800 shadow-md z-50">
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
        <Link href="/project" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
        Project
        </Link>
        <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
        Blog
        </Link>
        <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
        Contact
        </Link>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;