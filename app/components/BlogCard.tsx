import React from 'react';
import Image from 'next/image';

// filepath: c:/Users/Thinkpad/Documents/Code/Dev/CV prepare/my website/namvcpp/app/components/BlogCard.tsx

interface BlogCardProps {
    title: string;
    description: string;
    link: string;
    tags: string[];
    image: string;
    imageAlt?: string;
    date: string;
    author: string;
    readTime: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, description, link, tags, image, imageAlt, date, author, readTime }) => {
    return (
    <div className="blog-card group relative overflow-hidden ui-card ui-card--glow h-full">
            <div className="blog-card-image-container relative">
            <img
                src={image}
                alt={imageAlt || title}
                className="blog-card-image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="blog-card-overlay absolute inset-0 bg-zinc-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white/90 text-xs">Hover to see more</span>
            </div>
            </div>
            <div className="blog-card-content p-5">
            <h2 className="blog-card-title text-lg font-semibold mb-1 text-zinc-900 dark:text-zinc-50">{title}</h2>
            <p className="blog-card-date text-xs text-zinc-500 dark:text-zinc-400 mb-2">{date} • {readTime}</p>
            <p className="blog-card-description text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">{description}</p>
            <div className="blog-card-icons flex items-center space-x-2 mb-4">
                <span className="text-sm text-zinc-600 dark:text-zinc-300">{author}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map(tag => (
                    <span 
                        key={tag}
                        className="ui-badge"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <a
                href={link}
                className="blog-card-link inline-block text-zinc-900 dark:text-zinc-100 hover:underline font-medium"
            >
                Read More
            </a>
            </div>
        </div>
    );
};

export default BlogCard;

// Add theme styles
export const blogCardThemes = {
    light: {
    container: "bg-white/80 text-zinc-900 border border-zinc-200",
    title: "text-zinc-900",
    description: "text-zinc-700",
    link: "text-zinc-900 hover:underline",
    },
    dark: {
    container: "bg-zinc-900/70 text-zinc-100 border border-zinc-800",
    title: "text-zinc-100",
    description: "text-zinc-300",
    link: "text-zinc-100 hover:underline",
    },
};