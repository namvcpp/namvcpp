import React from 'react';

interface OverviewCardProps {
    title: string;
    imageUrl?: string;
    author?: string;
    date?: string;
    tags?: Array<{text: string; color: string}>;
    description?: string;
    icon?: React.ReactNode;
    count?: number;
    className?: string;
    onClick?: () => void;
}

const OverviewCard = (props: OverviewCardProps) => {
    return (
        <div className="mx-auto max-w-md overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 shadow-lg transform transition-transform hover:scale-105">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    className="aspect-video w-full object-cover rounded-t-lg" 
                    alt="" 
                /> q
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-sm">Hover to see more</span>
                </div>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-b-lg">
                <p className="mb-1 text-sm text-gray-600 dark:text-gray-400">Andrea Felsted • <time>18 Nov 2022</time></p>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Migrating to Sailboat UI</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                <div className="mt-4 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-1 text-xs font-semibold text-blue-600 dark:text-blue-400"> Design </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 px-2 py-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 transition-colors hover:bg-indigo-200 dark:hover:bg-indigo-900/40"> Product </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 dark:bg-orange-900/30 px-2 py-1 text-xs font-semibold text-orange-600 dark:text-orange-400"> Develop </span>
                </div>
            </div>
        </div>
    );
};

export default OverviewCard;