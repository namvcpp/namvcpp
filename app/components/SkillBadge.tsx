import React from 'react';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  const getLevelClass = () => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'advanced': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };
  
  return (
    <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium mr-2 mb-2 ${getLevelClass()}`}>
      {name}
      {level && (
        <span className="ml-2 w-2 h-2 rounded-full bg-current"></span>
      )}
    </div>
  );
}