import React, { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
    h1: (props: HeadingProps) => (
        <h1 
            className="text-4xl font-extrabold pt-12 pb-4 text-gray-800 dark:text-gray-100" 
            {...props} 
        />
    ),
    h2: (props: HeadingProps) => (
        <h2 
            className="text-3xl font-bold mt-10 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100" 
            {...props} 
        />
    ),
    h3: (props: HeadingProps) => (
        <h3 
            className="text-2xl font-semibold mt-6 mb-3 text-gray-700 dark:text-gray-200" 
            {...props} 
        />
    ),
    h4: (props: HeadingProps) => (
        <h4 
            className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-300" 
            {...props} 
        />
    ),
    h5: (props: HeadingProps) => (
        <h5 
            className="text-lg font-semibold mt-3 mb-2 text-gray-700 dark:text-gray-300" 
            {...props} 
        />
    ),
    h6: (props: HeadingProps) => (
        <h6 
            className="text-base font-semibold mt-2 mb-1 text-gray-700 dark:text-gray-300" 
            {...props} 
        />
    ),
    p: (props: ParagraphProps) => (
        <p 
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4 font-light" 
            {...props} 
        />
    ),
    ol: (props: ListProps) => (
        <ol 
            className="list-decimal pl-6 my-4 space-y-2 text-gray-600 dark:text-gray-300 marker:text-blue-500 dark:marker:text-blue-400" 
            {...props} 
        />
    ),
    ul: (props: ListProps) => (
        <ul 
            className="pl-6 my-4 space-y-2 text-gray-600 dark:text-gray-300 list-none" 
            {...props} 
        />
    ),
    li: (props: ListItemProps) => (
        <li 
            className="relative pl-2 before:content-['•'] before:absolute before:left-[-1rem] before:text-blue-500 dark:before:text-blue-400 before:font-bold"
            {...props} 
        />
    ),
    em: (props: ComponentPropsWithoutRef<'em'>) => (
        <em 
            className="italic text-gray-700 dark:text-gray-200" 
            {...props} 
        />
    ),
    strong: (props: ComponentPropsWithoutRef<'strong'>) => (
        <strong 
            className="font-bold text-gray-800 dark:text-gray-100" 
            {...props} 
        />
    ),
    a: ({ href, children, ...props }: AnchorProps) => {
        const className =
            'relative font-medium text-blue-600 dark:text-blue-400 no-underline after:content-[""] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-blue-600 dark:after:bg-blue-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left';
        
        if (href?.startsWith('/')) {
            return (
                <Link href={href} className={className} {...props}>
                    {children}
                </Link>
            );
        }
        if (href?.startsWith('#')) {
            return (
                <a href={href} className={className} {...props}>
                    {children}
                </a>
            );
        }
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
            </a>
        );
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
        const codeHTML = highlight(children as string);
        return (
            <code 
                className="px-1.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-mono text-sm shadow-sm" 
                dangerouslySetInnerHTML={{ __html: codeHTML }} 
                {...props} 
            />
        );
    },
    pre: (props: ComponentPropsWithoutRef<'pre'>) => (
        <pre 
            className="p-4 rounded-lg bg-gray-100 dark:bg-gray-800 overflow-x-auto my-4 border border-gray-200 dark:border-gray-700 shadow-md relative group" 
            {...props} 
        >
            {props.children}
            <button 
                className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity text-sm"
                onClick={() => {
                    const code = props.children?.toString() || '';
                    navigator.clipboard.writeText(code);
                }}
            >
                Copy
            </button>
        </pre>
    ),
    table: (props: ComponentPropsWithoutRef<'table'>) => (
        <div className="overflow-x-auto my-4 rounded-lg shadow-md">
            <table 
                className="min-w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden" 
                {...props} 
            />
        </div>
    ),
    th: (props: ComponentPropsWithoutRef<'th'>) => (
        <th 
            className="py-3 px-6 text-left text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800" 
            {...props} 
        />
    ),
    td: (props: ComponentPropsWithoutRef<'td'>) => (
        <td 
            className="py-4 px-6 text-sm text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700" 
            {...props} 
        />
    ),
    tr: (props: ComponentPropsWithoutRef<'tr'>) => (
        <tr 
            className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors" 
            {...props} 
        />
    ),
    blockquote: (props: BlockquoteProps) => (
        <blockquote 
            className="pl-6 py-3 my-4 border-l-4 border-blue-500 dark:border-blue-400 bg-gray-50 dark:bg-gray-800 rounded-r-lg text-gray-600 dark:text-gray-300 italic shadow-sm" 
            {...props} 
        />
    ),
    hr: () => (
        <hr className="my-4 border-t-2 border-gray-200 dark:border-gray-700" />
    ),
    
    // Blog-specific components
    Callout: ({ children, type = 'info' }: { children: React.ReactNode; type?: 'info' | 'warning' | 'error' | 'success' }) => {
        const styles = {
            info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400',
            warning: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-500 dark:border-yellow-400',
            error: 'bg-red-50 dark:bg-red-900/30 border-red-500 dark:border-red-400',
            success: 'bg-green-50 dark:bg-green-900/30 border-green-500 dark:border-green-400'
        };
        
        return (
            <div className={`border-l-4 p-4 my-4 rounded-r-lg shadow-sm ${styles[type]}`}>
                {children}
            </div>
        );
    },
    
    TOC: ({ items }: { items: { title: string; href: string; level: number }[] }) => (
        <div className="bg-gray-50 dark:bg-gray-800 p-3 my-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <h4 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">Table of Contents</h4>
            <ul className="space-y-1">
                {items.map((item, index) => (
                    <li 
                        key={index} 
                        className="pl-2" 
                        style={{ paddingLeft: `${(item.level - 1) * 1}rem` }}
                    >
                        <a 
                            href={item.href} 
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
};

declare global {
    type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
    return components;
}