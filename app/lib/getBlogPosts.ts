import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
  content?: string; // Add content field for full blog post
}

const wordsPerMinute = 200;
const postsDirectory = path.join(process.cwd(), 'app/blog');

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn(`Blog posts directory not found: ${postsDirectory}`);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    
    const blogPosts = await Promise.all(
      fileNames
        .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
        .map(async fileName => {
          const slug = fileName.replace(/\.mdx?$/, '');
          const fullPath = path.join(postsDirectory, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          
          const { data, content } = matter(fileContents);
          
          const wordCount = content.split(/\s+/g).length;
          const readTime = Math.ceil(wordCount / wordsPerMinute);
        
          return {
            slug,
            title: data.title || 'Untitled Post',
            author: data.author || 'Unknown Author',
            excerpt: data.excerpt || content.substring(0, 150) + '...',
            date: data.date ? new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }) : 'No date',
            image: data.image || '/images/blog/default.jpg',
            readTime: `${readTime} min read`,
            tags: data.tags || [],
            content: content, // Include full content
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

// Add a function to get a single post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}