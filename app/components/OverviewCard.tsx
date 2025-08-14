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
      className="ui-card p-5 h-full cursor-pointer"
      onClick={onClick}
    >
      <div className="text-3xl text-zinc-700 dark:text-zinc-300 mb-2">{icon}</div>
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{description}</p>
    </div>
  );
};

export default OverviewCard;