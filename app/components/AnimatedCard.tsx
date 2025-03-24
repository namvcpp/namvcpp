'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface AnimatedCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
  delay?: number;
}

const AnimatedCard = ({ title, description, tags, link, featured = false, delay = 0 }: AnimatedCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link} className="block h-full">
      <motion.div 
        className={`h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 relative overflow-hidden group ${
          featured ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'
        }`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5, delay: delay * 0.1 + 0.2 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        whileHover={{ 
          y: -5,
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
          >
            {title}
            <motion.span
              className="inline-block ml-1"
              animate={hovered ? { rotate: [0, 15, 0], transition: { repeat: 1, duration: 0.5 }} : {}}
            >
              {featured ? '✨' : ''}
            </motion.span>
          </motion.h3>
          
          <motion.p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </motion.p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay * 0.1 + 0.1 * i + 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default AnimatedCard;