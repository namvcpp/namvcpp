'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Image from 'next/image';

const HeroSection = () => {
  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  return (
    <section className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 relative mb-24">
      {/* Decorative elements */}
      <div className="absolute -z-10 w-full h-full">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s', animationDuration: '5s' }}></div>
      </div>
      
      <motion.div 
        className="flex-1 space-y-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 animate-gradient"
          variants={itemVariants}
        >
          Hey, I'm Nam Van 👋
        </motion.h1>
        
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
          variants={itemVariants}
        >
          A high school student passionate about software development, IoT, and AI.
          Currently focusing on innovative solutions using machine learning and web technologies.
        </motion.p>
        
        <motion.div 
          className="flex gap-4 pt-4"
          variants={itemVariants}
        >
          {/* Social icons with hover effects */}
          <SocialLink href="https://github.com/namvcpp" icon={<FaGithub size={24} />} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/nam-van-b33752347/" icon={<FaLinkedinIn size={24} />} label="LinkedIn" />
          <SocialLink href="mailto:namvc153@gmail.com" icon={<MdEmail size={24} />} label="Email" />
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full ring-4 ring-blue-500/50 dark:ring-blue-400/50 flex-shrink-0 shadow-lg"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: "spring", damping: 15, stiffness: 100, duration: 1 }}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
          rotate: 5
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 animate-gradient-slow"></div>
        {/* If you have an image, use this instead:
        <Image
          src="/profile.jpg"
          alt="Nam Van"
          fill
          className="object-cover"
          priority
        />
        */}
      </motion.div>
    </section>
  );
};

// Sub-component for social links
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
    whileHover={{ scale: 1.2, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    {icon}
    <span className="sr-only">{label}</span>
  </motion.a>
);

export default HeroSection;