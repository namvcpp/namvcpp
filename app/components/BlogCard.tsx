'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
  readTime?: string;
  tags?: string[];
}

const BlogCard = ({ title, excerpt, date, image, slug, readTime = '5 min read', tags = [] }: BlogCardProps) => {
  return (
    <motion.div
      className="group relative rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ opacity: 1 }}
          />
          <Image 
            src={image} 
            alt={title}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {tags.length > 0 && (
            <div className="absolute bottom-2 left-2 z-20 flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag) => (
                <span 
                  key={tag} 
                  className="text-xs px-2 py-1 bg-blue-500/80 text-white rounded-full backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="text-xs px-2 py-1 bg-gray-700/80 text-white rounded-full backdrop-blur-sm">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
            <span>{date}</span>
            <span>{readTime}</span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
            {excerpt}
          </p>
          
          <div className="mt-4 flex justify-end">
            <motion.span 
              className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center group-hover:underline"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Read more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;