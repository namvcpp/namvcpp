import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://namvcpp.github.io';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Nam Van — Student Developer',
    template: '%s — Nam Van',
  },
  description:
    'Portfolio of Van Cong Nam: student developer building projects across Web, IoT, and AI.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Nam Van — Student Developer',
    description:
      'Projects and writing on Web development, IoT, and AI by Van Cong Nam.',
    siteName: 'Nam Van',
    images: [
      {
        url: '/vercel.svg',
        width: 1200,
        height: 630,
        alt: 'Nam Van Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nam Van — Student Developer',
    description:
      'Projects and writing on Web development, IoT, and AI by Van Cong Nam.',
    creator: '@namvcpp',
    images: ['/vercel.svg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#18181b' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(()=>{try{const k='theme-preference';const e=localStorage.getItem(k);const d=window.matchMedia('(prefers-color-scheme: dark)').matches;const t=e||(d?'dark':'light');if(t==='dark')document.documentElement.classList.add('dark');}catch(_){}})();` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Van Cong Nam',
              url: siteUrl,
              sameAs: [
                'https://github.com/namvcpp',
                'https://www.linkedin.com/in/namvcpp/',
              ],
              jobTitle: 'Student Developer',
              knowsAbout: ['Web Development', 'IoT', 'AI', 'Machine Learning'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Nam Van',
              url: siteUrl,
              potentialAction: {
                '@type': 'SearchAction',
                target: `${siteUrl}/blog?query={search_term_string}`,
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased tracking-tight">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-between pt-16 p-8 dark:bg-zinc-800 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-6xl mx-auto w-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}