import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/namvcpp' },
    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, url: 'https://www.youtube.com/@namvcpp' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/namvcpp' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/namvcpp' }
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' }
  ];

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">About Me</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Student at Le Quy Don High School for the Gifted, passionate about technology and innovative solutions.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.url}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center py-4 text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} Van Cong Nam. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center">
            Made with <FaHeart className="mx-1 text-red-500" /> in Da Nang, Vietnam
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;