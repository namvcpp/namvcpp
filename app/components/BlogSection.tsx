'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './BlogCard';
import { BlogPost } from '../lib/getBlogPosts';

// Create a server component to fetch blog posts
import { getBlogPosts } from '../lib/getBlogPosts';

// This creates a server component to fetch the blog posts
export async function BlogPostsFetcher() {
  const posts = await getBlogPosts();
  return <BlogSection initialPosts={posts} />;
}

// Client component to render blog posts with animations
interface BlogSectionProps {
  initialPosts: BlogPost[];
}

const BlogSection = ({ initialPosts }: BlogSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-8">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 dark:text-gray-100"
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Latest Blog Posts
        </motion.h2>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/blog" className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            View all posts
            <FaArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialPosts.length > 0 ? (
          initialPosts.slice(0, 3).map((post) => (
            <BlogCard 
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              slug={post.slug}
              readTime={post.readTime}
              tags={post.tags}
            />
          ))
        ) : (
          <div className="col-span-3 text-center py-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-500 dark:text-gray-400"
            >
              No blog posts found. Create your first post to see it here!
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default BlogSection;