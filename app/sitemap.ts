import fs from 'fs';
import path from 'path';

function getBlogSlugsFromContent(dir: string) {
  try {
    if (!fs.existsSync(dir)) return [] as string[];
    return fs
      .readdirSync(dir)
      .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
      .map((file) => file.replace(/\.(md|mdx)$/i, ''));
  } catch {
    return [] as string[];
  }
}

export default async function sitemap() {
  const site = 'https://namvcpp.github.io';
  const contentDir = path.join(process.cwd(), 'content', 'blog');
  const slugs = getBlogSlugsFromContent(contentDir);

  const blogs = slugs.map((slug) => ({
    url: `${site}/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ['/', '/about', '/projects', '/contact', '/blog'].map((route) => ({
    url: `${site}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs];
}