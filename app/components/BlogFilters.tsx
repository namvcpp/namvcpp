'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type BlogFiltersProps = {
  tags: string[];
};

export default function BlogFilters({ tags }: BlogFiltersProps) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Filter change handler - communicates with parent via custom event
  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    
    // Dispatch custom event for the BlogGrid component to listen to
    window.dispatchEvent(
      new CustomEvent('filter-blogs', { detail: { tag } })
    );
  };

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">Filter by Topic</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleTagChange(null)}
          className={`px-3 py-1 rounded-full text-sm ${
            selectedTag === null
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          } transition-colors`}
        >
          All
        </button>
        
        {tags.map((tag) => (
          <motion.button
            key={tag}
            onClick={() => handleTagChange(tag)}
            className={`px-3 py-1 rounded-full text-sm ${
              selectedTag === tag
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            } transition-colors`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag}
          </motion.button>
        ))}
      </div>
    </div>
  );
}