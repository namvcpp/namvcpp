"use client";
import { useEffect, useState } from 'react';

const KEY = 'theme-preference';

function getInitial(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(KEY) as 'light' | 'dark' | null;
  if (saved) return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
    localStorage.setItem(KEY, theme);
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-colors text-sm"
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
