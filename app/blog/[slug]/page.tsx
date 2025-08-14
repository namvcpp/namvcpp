import { getBlogPostBySlug, getBlogPosts } from "../../lib/getBlogPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { compileMDX } from 'next-mdx-remote/rsc';
import { useMDXComponents } from "mdx-components";

interface Params { slug: string }
interface BlogPostPageProps { params: Promise<Params> }

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found | Nam Van' };
  return {
    title: `${post.title} | Blog | Nam Van`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      images: post.image ? [{ url: post.image, alt: post.imageAlt || post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    }
  };
}

export default async function BlogPostPage(props: BlogPostPageProps) {
  const { slug } = await props.params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  const components = useMDXComponents();
  const { content } = await compileMDX({
    source: post.content || '',
    options: { parseFrontmatter: false },
    components: components as any,
  });

  return (
    <article className="mx-auto max-w-3xl py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-50">{post.title}</h1>
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span>{post.formattedDate}</span>
          <span>•</span>
          <span>{post.readTime}</span>
          {post.tags.map(t => (
            <span key={t} className="px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">{t}</span>
          ))}
        </div>
        {post.image && (
          <div className="mt-6">
            {/* Using next/image for optimization; width/height are placeholders for static layout */}
            <Image src={post.image} alt={post.imageAlt || post.title} width={1200} height={630} className="w-full h-auto rounded-lg" />
          </div>
        )}
      </header>
  <div className="prose dark:prose-invert max-w-none">{content}</div>
    </article>
  );
}
