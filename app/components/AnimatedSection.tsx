'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

interface AnimatedSectionProps {
  title: string;
  children: ReactNode;
  viewAllLink?: string;
  viewAllText?: string;
  delay?: number;
}

const AnimatedSection = ({ 
  title, 
  children, 
  viewAllLink, 
  viewAllText = "View all", 
  delay = 0 
}: AnimatedSectionProps) => {
  return (
    <motion.section 
      className="mb-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
    >
      <div className="flex justify-between items-center mb-8 relative">
        {/* Title with animated underline */}
        <div className="relative">
          <motion.h2 
            className="text-3xl font-bold text-gray-800 dark:text-gray-100 pb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay * 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay * 0.2 + 0.3 }}
          />
        </div>
        
        {/* View all link */}
        {viewAllLink && (
          <Link href={viewAllLink}>
            <motion.div 
              className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {viewAllText} 
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'loop', 
                  duration: 1.5,
                  repeatDelay: 0.5
                }}
              >
                <FaArrowRight size={14} className="ml-1" />
              </motion.div>
            </motion.div>
          </Link>
        )}
      </div>
      
      {/* Section content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay * 0.2 + 0.2 }}
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection;