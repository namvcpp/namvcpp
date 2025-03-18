import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogsDirectory = path.join(process.cwd(), 'app', 'blog');
  
  try {
    const entries = await fs.readdir(blogsDirectory, {
      recursive: true,
      withFileTypes: true,
    });
    
    const blogFiles = entries
      .filter(entry => entry.isFile() && (entry.name === 'page.mdx' || entry.name === 'page.md'))
      .map(entry => {
        return path.join(entry.path, entry.name);
      });
    
    const blogPosts = await Promise.all(
      blogFiles.map(async (filePath) => {
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Extract slug from file path
        const relativePath = path.relative(blogsDirectory, filePath);
        const slug = path.dirname(relativePath).replace(/\\/g, '/');
        
        // Calculate read time (approx 200 words per minute)
        const wordsPerMinute = 200;
        const wordCount = content.split(/\s+/g).length;
        const readTime = Math.ceil(wordCount / wordsPerMinute);
        
        return {
          slug,
          title: data.title || 'Untitled Post',
          excerpt: data.excerpt || content.substring(0, 150) + '...',
          date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }) : 'No date',
          image: data.image || '/images/blog/default.jpg',
          readTime: `${readTime} min read`,
          tags: data.tags || [],
        };
      })
    );
    
    // Sort by date (newest first)
    return blogPosts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}