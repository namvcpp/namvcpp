import React from 'react';
import { Metadata } from 'next';
import { getBlogPosts } from '../lib/getBlogPosts';
import BlogGrid from '../components/BlogGrid';
import BlogFilters from '../components/BlogFilters';
import CreateBlogButton from '../components/CreateBlogButton';

export const metadata: Metadata = {
  title: 'Blog | Your Name',
  description: 'Read my latest thoughts, tutorials, and insights on technology, development, and more.',
};

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  
  // Extract unique tags for filter options
  const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags)));
  
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          My thoughts, tutorials, and insights on technology and development.
        </p>
        
        {/* Pass tags for filtering options */}
        <BlogFilters tags={allTags} />
        
        {/* Pass all posts to be filtered on client-side */}
        <BlogGrid initialPosts={allPosts} />
        
        {/* Add admin button for creating new posts */}
        <CreateBlogButton />
      </div>
    </main>
  );
}