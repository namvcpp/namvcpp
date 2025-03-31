'use client';

import { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function CreateBlogButton() {
  // This would be integrated with your authentication system
  const [isAdmin] = useState(true); // Replace with actual auth check
  
  if (!isAdmin) return null;
  
  return (
    <Link
      href="/blog/new"
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
    >
      <PlusCircle size={24} />
      <span className="ml-2 mr-1">New Post</span>
    </Link>
  );
}