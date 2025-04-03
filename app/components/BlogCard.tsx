import React from 'react';

// filepath: c:/Users/Thinkpad/Documents/Code/Dev/CV prepare/my website/namvcpp/app/components/BlogCard.tsx

interface BlogCardProps {
    title: string;
    description: string;
    link: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({ title, description, link }) => {
    return (
        <div className="blog-card group relative overflow-hidden rounded-lg shadow-lg">
            <div className="blog-card-image-container relative">
            <img
                src="https://via.placeholder.com/300"
                alt={title}
                className="blog-card-image w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="blog-card-overlay absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <span className="text-white text-sm">Hover to see more</span>
            </div>
            </div>
            <div className="blog-card-content p-4">
            <h2 className="blog-card-title text-lg font-bold mb-2">{title}</h2>
            <p className="blog-card-date text-sm text-gray-500 mb-2">Written on: Jan 1, 2023</p>
            <p className="blog-card-description text-gray-700 mb-4">{description}</p>
            <div className="blog-card-icons flex items-center space-x-2 mb-4">
                <img
                src="https://via.placeholder.com/24"
                alt="Author Icon"
                className="w-6 h-6 rounded-full"
                />
                <span className="text-sm text-gray-600">Author Name</span>
            </div>
            <a
                href={link}
                className="blog-card-link inline-block text-blue-500 hover:underline font-medium"
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
        container: "bg-white text-gray-900 border border-gray-200",
        title: "text-blue-600",
        description: "text-gray-700",
        link: "text-blue-500 hover:underline",
    },
    dark: {
        container: "bg-gray-800 text-gray-100 border border-gray-700",
        title: "text-blue-400",
        description: "text-gray-300",
        link: "text-blue-300 hover:underline",
    },
};