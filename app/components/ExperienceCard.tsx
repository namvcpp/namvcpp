import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
}

export default function ExperienceCard({ title, company, period, description, skills }: ExperienceCardProps) {
  return (
    <div className="relative pl-8 pb-8 mb-6">
      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{title}</h3>
        <div className="flex flex-col sm:flex-row sm:justify-between mb-4">
          <div className="text-blue-600 dark:text-blue-400 font-medium">{company}</div>
          <div className="text-gray-500 dark:text-gray-400 text-sm">{period}</div>
        </div>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-gray-600 dark:text-gray-300">{item}</li>
          ))}
        </ul>
        {skills && (
          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}