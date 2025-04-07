import React from 'react';
import { Metadata } from 'next';
import BlogCard from '../components/BlogCard';
import { getBlogPosts } from '../lib/getBlogPosts';

export const metadata: Metadata = {
    title: 'Blogs | My Website',
    description: 'Explore our collection of insightful blogs on various topics.',
};

async function BlogsPage() {
    const posts = await getBlogPosts();

    return (
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Latest Blog Posts</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map(post => (
                    <BlogCard
                        key={post.slug}
                        title={post.title}
                        description={post.excerpt}
                        link={`/blog/${post.slug}`}
                        tags={post.tags}
                        image={post.image}
                        date={post.date}
                        author={post.author}
                    />
                ))}
            </div>
        </main>
    );
}

export default BlogsPage;
