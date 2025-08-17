import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interests — Reading & Games',
  description: "What I'm reading now, favorite books, games I'm playing, and genres I enjoy.",
};

const InterestsPage = () => {
  const readingNow = [
    { title: 'The Name of the Wind', author: 'Patrick Rothfuss', genres: ['Fantasy', 'Adventure'] },
    { title: 'Project Hail Mary', author: 'Andy Weir', genres: ['Sci‑Fi'] },
  ];

  const favoriteBooks = [
    { title: '1984', author: 'George Orwell', genres: ['Dystopia'] },
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genres: ['Fantasy'] },
    { title: 'Atomic Habits', author: 'James Clear', genres: ['Non‑fiction'] },
  ];

  const games = [
    { title: 'Hades', platform: 'PC', status: 'Playing', genres: ['Roguelike', 'Action'] },
    { title: 'Stardew Valley', platform: 'PC', status: 'Chill', genres: ['Farming', 'Simulation'] },
    { title: 'Celeste', platform: 'PC', status: 'Completed', genres: ['Platformer'] },
  ];

  const genres = {
    books: ['Fantasy', 'Sci‑Fi', 'Non‑fiction', 'Thriller'],
    games: ['Indie', 'Action', 'Roguelike', 'Puzzle'],
  };

  const badge = (text: string) => (
    <span key={text} className="ui-badge text-zinc-700 dark:text-zinc-300 border-zinc-400/40">{text}</span>
  );

  return (
    <div className="py-16 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Interests</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-300">Current reading, favorite books, games I enjoy, and genres.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <section className="ui-card ui-card--glow p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Currently Reading</h2>
          <ul className="space-y-4">
            {readingNow.map((b) => (
              <li key={b.title} className="flex flex-col gap-1">
                <div className="flex items-start justify-between">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{b.title}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">by {b.author}</span>
                </div>
                <div className="flex flex-wrap gap-2">{b.genres.map(badge)}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="ui-card ui-card--glow p-6">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Favorite Books</h2>
          <ul className="space-y-4">
            {favoriteBooks.map((b) => (
              <li key={b.title} className="flex flex-col gap-1">
                <div className="flex items-start justify-between">
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{b.title}</span>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{b.author}</span>
                </div>
                <div className="flex flex-wrap gap-2">{b.genres.map(badge)}</div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="ui-card ui-card--glow p-6 mb-12">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Games</h2>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {games.map((g) => (
            <li key={g.title} className="ui-card p-4">
              <div className="flex items-start justify-between">
                <span className="font-medium text-zinc-900 dark:text-zinc-100">{g.title}</span>
                <span className="text-xs text-zinc-600 dark:text-zinc-400">{g.platform}</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="ui-badge border-emerald-300/40 text-emerald-700 dark:text-emerald-300">{g.status}</span>
                {g.genres.map(badge)}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ui-card ui-card--glow p-6">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Genres I Enjoy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Books</h3>
            <div className="flex flex-wrap gap-2">{genres.books.map(badge)}</div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Games</h3>
            <div className="flex flex-wrap gap-2">{genres.games.map(badge)}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestsPage;
