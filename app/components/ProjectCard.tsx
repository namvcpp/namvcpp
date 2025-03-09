'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
  imageUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  link, 
  featured = false,
  imageUrl,
}: ProjectCardProps) => {
  return (
    <Link href={link} className="block h-full">
      <motion.div 
        className={`h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden group relative ${
          featured ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'
        }`}
        whileHover={{ 
          y: -5,
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        }}
        transition={{ duration: 0.3 }}
      >
        {imageUrl && (
          <motion.div 
            className="absolute inset-0 opacity-10 z-0 bg-center bg-cover"
            style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        )}

        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <motion.span 
                key={i} 
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.div 
            className="mt-4 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ scale: 1.1, rotate: 45 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600 dark:text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;