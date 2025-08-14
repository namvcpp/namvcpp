import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  authorIcon: string;
  excerpt: string;
  rawDate: string; // ISO for sorting
  formattedDate: string; // localized display
  image: string;
  imageAlt?: string;
  readTime: string;
  tags: string[];
  content?: string;
}

const wordsPerMinute = 200;
// Posts now live in content/blog to avoid mixing with route files
const postsDirectory = path.join(process.cwd(), 'content/blog');

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
        
          const rawDate: string = data.date || new Date().toISOString();
          const formattedDate = new Date(rawDate).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short', day: 'numeric'
          });
          return {
            slug,
            title: data.title || 'Untitled Post',
            author: data.author || 'Unknown Author',
            authorIcon: data.authorIcon || '/images/authors/default.jpg',
            excerpt: data.excerpt || content.substring(0, 150) + '...',
            rawDate,
            formattedDate,
            image: data.image || '/images/blog/default.jpg',
            imageAlt: data.imageAlt || data.title || 'Blog image',
            readTime: `${readTime} min read`,
            tags: data.tags || [],
            content,
          };
        })
    );
    
    // Sort by date (newest first)
  return blogPosts.sort((a, b) => new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime());
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