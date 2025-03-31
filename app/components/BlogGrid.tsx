'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '../lib/getBlogPosts';

type BlogGridProps = {
  initialPosts: BlogPost[];
};

export default function BlogGrid({ initialPosts }: BlogGridProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Listen for filter events
  useEffect(() => {
    const handleFilter = (e: Event) => {
      const { tag } = (e as CustomEvent).detail;
      setActiveTag(tag);
      
      if (!tag) {
        setFilteredPosts(posts);
      } else {
        setFilteredPosts(posts.filter(post => post.tags.includes(tag)));
      }
    };

    window.addEventListener('filter-blogs' as any, handleFilter);
    return () => window.removeEventListener('filter-blogs' as any, handleFilter);
  }, [posts]);

  // Animation variants for staggered grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No posts found. Try selecting a different filter.
          </p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post) => (
            <motion.div 
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 group"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map(tag => (
                      <span 
                        key={`${post.slug}-${tag}`}
                        className={`px-2 py-1 text-xs rounded-md ${
                          tag === activeTag
                            ? 'bg-blue-500 text-white'
                            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{post.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}