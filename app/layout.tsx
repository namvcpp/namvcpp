import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="antialiased tracking-tight">
        <Navbar />
        <div className="min-h-screen flex flex-col justify-between pt-16 p-8 dark:bg-zinc-800 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-6xl mx-auto w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}