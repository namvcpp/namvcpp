import { NextResponse } from 'next/server';

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://namvcpp.github.io';
  const body = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
