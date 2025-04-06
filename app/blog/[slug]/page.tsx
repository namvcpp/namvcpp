import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '../../lib/getBlogPosts';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';

// Define the BlogPost interface
interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

// Removed the Props interface completely

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = (await getBlogPosts()).find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found'
    };
  }
  
  return {
    title: `${post.title} | Your Name`,
    description: post.excerpt
  };
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Fetch a single blog post by slug
async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find((post) => post.slug === slug) || null;
}

// Get blog post content
async function getPostContent(slug: string): Promise<string> {
  const blogsDirectory = path.join(process.cwd(), 'app', 'blog');
  const filePath = path.join(blogsDirectory, slug, 'page.mdx');
  
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { content } = matter(fileContents);
    return content;
  } catch (error) {
    try {
      // Try .md extension if .mdx fails
      const mdFilePath = path.join(blogsDirectory, slug, 'page.md');
      const fileContents = await fs.readFile(mdFilePath, 'utf8');
      const { content } = matter(fileContents);
      return content;
    } catch (error) {
      return '';
    }
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const posts = await getBlogPosts();
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to all posts
        </Link>
        
        <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 text-sm mb-8">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* This would be replaced with your actual blog content rendering */}
        <article className="prose dark:prose-invert max-w-none">
          {/* Your blog content will be rendered here */}
          <p>Your blog post content would appear here. You'll need to implement the MDX or markdown rendering.</p>
        </article>
      </div>
    </main>
  );
}