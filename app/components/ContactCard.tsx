import React from 'react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string;
}

export default function ContactCard({ icon, title, value, link }: ContactCardProps) {
  return (
    <div className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex-shrink-0 mr-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
          {icon}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        {link ? (
          <a 
            href={link} 
            className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            {value}
          </a>
        ) : (
          <p className="text-gray-800 dark:text-gray-200 font-medium">{value}</p>
        )}
      </div>
    </div>
  );
}