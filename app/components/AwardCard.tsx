import React from 'react';

interface AwardCardProps {
  title: string;
  period: string;
  items: string[];
}

export default function AwardCard({ title, period, items }: AwardCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 mb-6 border-l-4 border-blue-500 dark:border-blue-400 hover:shadow-lg transition-shadow">
      <div className="flex flex-col md:flex-row md:justify-between mb-3">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{period}</span>
      </div>
      <ul className="list-disc pl-5 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
        ))}
      </ul>
    </div>
  );
}