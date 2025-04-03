import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Blog | Your Name",
    description: "Articles and thoughts on programming, tech, and more.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8"> 
            <div className="prose prose-lg dark:prose-invert">{children}</div>
        </div>
    );
}