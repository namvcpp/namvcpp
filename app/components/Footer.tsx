"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/namvcpp' },
    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, url: 'https://www.youtube.com/@namvcpp' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/namvcpp' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/namvcpp' }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 overflow-hidden perspective-1000">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] shadow-sm hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] transition-all duration-300 [transform-style:preserve-3d]"
            whileHover={{ 
              scale: 1.02,
              rotateY: 5, 
              rotateX: 5 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
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
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] shadow-sm hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-green-500/[0.1] transition-all duration-300 [transform-style:preserve-3d]"
            whileHover={{ 
              scale: 1.02,
              rotateY: -5, 
              rotateX: 5 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={link.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Connect */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] shadow-sm hover:shadow-md dark:hover:shadow-2xl dark:hover:shadow-purple-500/[0.1] transition-all duration-300 [transform-style:preserve-3d]"
            whileHover={{ 
              scale: 1.02,
              rotateY: 5, 
              rotateX: -5 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Connect
            </motion.h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    y: -5
                  }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl mt-4 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} Van Cong Nam. All rights reserved.</p>
          <motion.p 
            className="mt-2 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="mx-1 text-red-500" />
            </motion.span> 
            in Da Nang, Vietnam
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;