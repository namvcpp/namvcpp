'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaUser, FaLaptopCode, FaBlog, FaFileAlt, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/', icon: <FaHome className="mr-2" /> },
  { name: 'About', path: '/about', icon: <FaUser className="mr-2" /> },
  { name: 'Projects', path: '/projects', icon: <FaLaptopCode className="mr-2" /> },
  { name: 'Blog', path: '/blog', icon: <FaBlog className="mr-2" /> },
  { name: 'Resume', path: '/resume', icon: <FaFileAlt className="mr-2" /> },
  { name: 'Contact', path: '/contact', icon: <FaEnvelope className="mr-2" /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Check if user prefers dark mode
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      
      const handleScroll = () => {
        setScrolled(window.scrollY > 20);
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const navbarClass = scrolled 
    ? 'fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md transition-all duration-300 z-50' 
    : 'fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md transition-all duration-300 z-50';

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
          <Link 
            href="/about"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/projects"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/blog"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Blog
          </Link>
          <Link 
            href="/contact"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;