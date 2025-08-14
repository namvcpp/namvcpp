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
  /** Optional accent (no longer affects visuals to keep type-uniform styling). */
  accent?: 'sky' | 'emerald' | 'violet';
}

const AnimatedCard = ({ title, description, tags, link, featured = false, delay = 0 }: AnimatedCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={link} className="block h-full">
      <motion.div 
        className={`ui-card ui-card--accent h-full p-6 transition-all duration-300 relative overflow-hidden group`}
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
            className="text-xl font-semibold mb-3 text-zinc-900 dark:text-zinc-50 transition-colors"
          >
            {title}
          </motion.h3>
          
          <motion.p className="text-zinc-600 dark:text-zinc-300 mb-4">
            {description}
          </motion.p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className="ui-badge"
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