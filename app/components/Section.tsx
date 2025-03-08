import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-14">
      <h2 className="text-3xl font-bold mb-6 pb-2 border-b-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}