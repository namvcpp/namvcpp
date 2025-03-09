'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SkillBadge from './SkillBadge';

interface SkillBlockProps {
  title: string;
  skills: string[];
}

const SkillBlock = ({ title, skills }: SkillBlockProps) => {
  return (
    <motion.div 
      className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
      }}
    >
      <motion.h3 
        className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
      
      <div className="flex flex-wrap">
        {skills.map((skill, index) => (
          <SkillBadge 
            key={index} 
            name={skill} 
            // You can optionally add levels if you have them
            // level={getSkillLevel(skill)} 
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SkillBlock;