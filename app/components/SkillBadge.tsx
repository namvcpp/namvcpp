'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

const SkillBadge = ({ name, level }: SkillBadgeProps) => {
  const getLevelClass = () => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };
  
  return (
    <motion.div 
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 ${getLevelClass()}`}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {name}
      {level && (
        <span className="ml-2 w-2 h-2 rounded-full bg-current animate-pulse"></span>
      )}
    </motion.div>
  );
};

export default SkillBadge;