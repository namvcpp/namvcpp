'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientTextProps {
  text: string;
  className?: string;
}

const AnimatedGradientText = ({ text, className = '' }: AnimatedGradientTextProps) => {
  const words = text.split(' ');
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 animate-gradient ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          className="inline-block mr-2"
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedGradientText;