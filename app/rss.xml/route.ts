import { NextResponse } from 'next/server';
import { getBlogPosts } from '../lib/getBlogPosts';

function escape(str: string) {
  return str.replace(/[&<>"]+/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;',
  }[c] as string));
}

export async function GET() {
  const posts = await getBlogPosts();
  const items = posts.map(p => `
    <item>
      <title>${escape(p.title)}</title>
      <link>${process.env.NEXT_PUBLIC_SITE_URL || 'https://namvcpp.github.io'}/blog/${p.slug}</link>
      <guid>${process.env.NEXT_PUBLIC_SITE_URL || 'https://namvcpp.github.io'}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.rawDate).toUTCString()}</pubDate>
      <description>${escape(p.excerpt)}</description>
    </item>
  `).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>Nam Van — Blog</title>
      <link>${process.env.NEXT_PUBLIC_SITE_URL || 'https://namvcpp.github.io'}</link>
      <description>Posts by Van Cong Nam</description>
      ${items}
    </channel>
  </rss>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=300, stale-while-revalidate=600',
    },
  });
}
