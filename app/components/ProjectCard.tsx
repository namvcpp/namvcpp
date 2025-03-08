import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  period?: string;
}

export default function ProjectCard({ title, description, technologies, imageUrl, period }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg mb-8 transition-all hover:shadow-xl">
      {imageUrl && (
        <div className="h-48 overflow-hidden">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={600} 
            height={300} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex flex-col md:flex-row justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
          {period && <span className="text-gray-500 dark:text-gray-400 text-sm">{period}</span>}
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}