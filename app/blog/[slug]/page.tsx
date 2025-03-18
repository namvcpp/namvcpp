import { getBlogPosts, BlogPost } from '../../lib/getBlogPosts';
import { notFound } from 'next/navigation';
import path from 'path';
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import { Metadata } from 'next';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [post.image],
    },
  };
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
  const post = await getPostBySlug(params.slug);
  const content = await getPostContent(params.slug);
  
  if (!post) {
    notFound();
  }
  
  // You'll need to render the markdown content with a library like react-markdown
  // For now, just displaying basic info
  return (
    <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
      <h1>{post.title}</h1>
      <div className="flex items-center text-gray-500 dark:text-gray-400 gap-4 mb-8">
        <time>{post.date}</time>
        <span>{post.readTime}</span>
      </div>
      
      {/* Render image */}
      <div className="relative w-full h-64 md:h-96 mb-8">
        <img 
          src={post.image} 
          alt={post.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      
      {/* We'll need to add markdown rendering here */}
      <div className="mt-8">
        {content ? (
          <pre className="whitespace-pre-wrap">{content}</pre>
        ) : (
          <p className="text-gray-500">No content available</p>
        )}
      </div>
    </article>
  );
}