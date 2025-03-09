'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface AwardItemProps {
  award: string;
  year: string;
  description: string;
}

const AwardItem = ({ award, year, description }: AwardItemProps) => {
  return (
    <motion.div 
      className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg relative overflow-hidden group"
      whileHover={{ 
        y: -2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div 
        className="absolute top-0 left-0 h-full w-1 bg-blue-500 dark:bg-blue-600"
        initial={{ height: 0 }}
        animate={{ height: '100%' }}
        transition={{ duration: 0.5 }}
      />

      <div className="pl-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {award}
          </h3>
          <span className="ml-2 flex-shrink-0 text-sm py-1 px-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
            {year}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
        
        <motion.div 
          className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mt-3 opacity-0 group-hover:opacity-100"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default AwardItem;