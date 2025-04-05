import React from 'react';

interface OverviewCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const OverviewCard: React.FC<OverviewCardProps> = ({ title, description, icon, onClick }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <div className="text-4xl text-blue-500 dark:text-blue-400 mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default OverviewCard;