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
  author: string;
  authorIcon: string;
}

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

export default function BlogPage({ params: { slug } }: { params: { slug: string } }) {
  return (
    <div>Post slug: {slug}</div>
  );
}