import { promises as fs } from 'fs';
import path from 'path';

async function getNoteSlugs(dir: string) {
  try {
    const entries = await fs.readdir(dir, {
      recursive: true,
      withFileTypes: true,
    });
    return entries
      .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
      .map((entry) => {
        const relativePath = path.relative(
          dir,
          path.join(entry.parentPath, entry.name)
        );
        return path.dirname(relativePath);
      })
      .map((slug) => slug.replace(/\\/g, '/'));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // Directory does not exist, return an empty array
      return [];
    }
    throw error;
  }
}

export default async function sitemap() {
  const blogsDirectory = path.join(process.cwd(), 'app', 'blog');
  const slugs = await getNoteSlugs(blogsDirectory);

  const blogs = slugs.map((slug) => ({
    url: `https://namvcpp.github.io/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['', '/work'].map((route) => ({
    url: `https://namvcpp.github.io${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs];
}