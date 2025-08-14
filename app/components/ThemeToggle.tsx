"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from "lucide-react";

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
      className="ui-icon-button relative"
    >
      {theme === 'dark' ? (
        <Moon strokeWidth={1.75} size={18} />
      ) : (
        <Sun strokeWidth={1.75} size={18} />
      )}
    </button>
  );
}
