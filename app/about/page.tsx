"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGraduationCap, FaCode, FaBrain, FaServer, FaMobileAlt, FaRobot, FaAward, FaBookOpen, FaLaptopCode, FaMedal, FaClipboardList } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const AboutPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smoothing for mouse movement
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Track mouse position for the whole page
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const skills = [
    { name: 'Web Development', icon: <FaLaptopCode className="w-6 h-6" />, level: 90 },
    { name: 'Backend Systems', icon: <FaServer className="w-6 h-6" />, level: 85 },
    { name: 'Mobile Apps', icon: <FaMobileAlt className="w-6 h-6" />, level: 75 },
    { name: 'Machine Learning', icon: <FaBrain className="w-6 h-6" />, level: 80 },
  ];

  const achievements = [
    {
      year: '2023',
      title: 'First Place - Regional Hackathon',
      description: 'Led a team to develop an innovative EdTech solution that won first place.'
    },
    {
      year: '2022',
      title: 'Published Research Paper',
      description: 'Co-authored research on AI applications in educational environments.'
    },
    {
      year: '2022',
      title: 'Open Source Contributor',
      description: 'Active contributor to several open-source projects with over 50 merged PRs.'
    }
  ];
  
  const education = [
    {
      year: '2020 - Present',
      institution: 'Le Quy Don High School for the Gifted',
      details: 'Specialized in Informatics & Mathematics'
    }
  ];

  return (
    <div 
      className="min-h-screen py-20 px-4"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Student developer passionate about building technology that makes a difference
          </motion.p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Profile Image */}
          <Card 
            index={0}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            springX={springX}
            springY={springY}
            glowColor="blue"
          >
            <div className="relative w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-80" />
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-white text-9xl font-bold"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                N
              </motion.div>
              {/* Add your actual image when available */}
              {/* <Image 
                src="/images/profile.jpg" 
                fill
                className="object-cover"
                alt="Nam Van Cong" 
              /> */}
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Van Cong Nam</h2>
              <p className="text-gray-600 dark:text-gray-400">Student Developer</p>
              
              <div className="flex justify-center space-x-4 mt-4">
                <motion.a 
                  href="https://github.com/namvcpp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  whileHover={{ y: -3, scale: 1.2 }}
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/namvcpp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400"
                  whileHover={{ y: -3, scale: 1.2 }}
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </motion.a>
              </div>
            </div>
          </Card>
          
          {/* Bio */}
          <Card 
            index={1}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
            springX={springX}
            springY={springY}
            glowColor="green"
            className="md:col-span-2"
          >
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-lg mr-4">
                <FaBookOpen className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Biography</h3>
            </div>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Hello! I'm Van Cong Nam, a high school student at Le Quy Don High School for the Gifted in Da Nang, Vietnam. 
                I'm passionate about software development, artificial intelligence, and using technology to solve real-world problems.
              </p>
              
              <p>
                My journey in programming began when I was 15 years old. Since then, I've been developing my skills in various technologies, 
                from web development to machine learning. I enjoy the process of creating elegant solutions to complex problems and am always eager to learn new things.
              </p>
              
              <p>
                When I'm not coding, you can find me reading about the latest tech trends, participating in hackathons, or contributing to open-source projects. 
                I believe in the power of collaboration and community-driven development.
              </p>
            </div>
            
            <div className="mt-6 flex items-center">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-lg mr-3">
                <FaGraduationCap className="text-white w-4 h-4" />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Student at Le Quy Don High School for the Gifted</p>
            </div>
          </Card>
        </div>
        
        {/* Skills Section */}
        <motion.h2 
          className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-gray-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              index={index + 2}
              hoveredCard={hoveredCard}
              setHoveredCard={setHoveredCard}
              springX={springX}
              springY={springY}
              glowColor="blue"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 1, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {skill.level}% Proficiency
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FaGraduationCap className="mr-3 text-blue-500" /> Education
            </motion.h2>
            
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card 
                  key={item.institution}
                  index={index + 6}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  springX={springX}
                  springY={springY}
                  glowColor="purple"
                >
                  <div>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.institution}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.details}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Achievements */}
          <div>
            <motion.h2 
              className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FaAward className="mr-3 text-purple-500" /> Achievements
            </motion.h2>
            
            <div className="space-y-6">
              {achievements.map((item, index) => (
                <Card 
                  key={item.title}
                  index={index + 7}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  springX={springX}
                  springY={springY}
                  glowColor="green"
                >
                  <div>
                    <div className="text-sm font-medium text-green-600 dark:text-green-400 mb-1">
                      {item.year}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <Card 
          index={10}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          springX={springX}
          springY={springY}
          glowColor="purple"
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Interested in working together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 font-medium"
              >
                Get in Touch
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 rounded-lg hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-all duration-200 font-medium"
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

interface CardProps {
  children: React.ReactNode;
  index: number;
  hoveredCard: number | null;
  setHoveredCard: (index: number | null) => void;
  springX: any;
  springY: any;
  glowColor: "blue" | "green" | "purple";
  className?: string;
}

const Card = ({ children, index, hoveredCard, setHoveredCard, springX, springY, glowColor, className = "" }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // We'll calculate the card's position relative to the mouse
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  
  // More dramatic rotation for enhanced 3D effect
  const rotateX = useTransform(cardY, [-300, 300], [15, -15]);
  const rotateY = useTransform(cardX, [-300, 300], [-15, 15]);
  
  // Add z-translation for depth effect
  const z = useTransform(
    cardX, 
    [-300, 0, 300], 
    [10, 0, 10]
  );

  // Dynamic shadow and border lighting effects
  const isHovered = hoveredCard === index;
  const shadowOpacity = useMotionValue(0);
  const borderGlow = useMotionValue(0);
  
  useEffect(() => {
    shadowOpacity.set(isHovered ? 0.7 : 0);
    borderGlow.set(isHovered ? 1 : 0);
  }, [isHovered, shadowOpacity, borderGlow]);

  // Update card position values based on mouse position with improved precision
  useEffect(() => {
    const updateCardPosition = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to card center with sensitivity adjustment
      const mouseX = springX.get();
      const mouseY = springY.get();
      
      // Adjust sensitivity for more natural motion
      const sensitivity = 1.25;
      cardX.set((mouseX - cardCenterX) * sensitivity);
      cardY.set((mouseY - cardCenterY) * sensitivity);
    };
    
    const unsubscribeX = springX.onChange(updateCardPosition);
    const unsubscribeY = springY.onChange(updateCardPosition);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY, cardX, cardY]);

  // Get the glow color based on prop with enhanced opacity and spread
  const getGlowColor = () => {
    switch (glowColor) {
      case "blue": return "dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]";
      case "green": return "dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]";
      case "purple": return "dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]";
      default: return "dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]";
    }
  };
  
  // Get border glow color
  const getBorderGlowColor = () => {
    switch (glowColor) {
      case "blue": return "rgba(59, 130, 246, 0.6)";
      case "green": return "rgba(16, 185, 129, 0.6)";
      case "purple": return "rgba(139, 92, 246, 0.6)";
      default: return "rgba(59, 130, 246, 0.4)";
    }
  };

  return (
    <motion.div 
      ref={cardRef}
      className={`relative group perspective-1000 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        delay: index * 0.1 + 0.2 
      }}
    >
      {/* Card shadow for depth */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-black/10 dark:bg-black/30 blur-xl"
        style={{
          scale: isHovered ? 0.96 : 0.9,
          opacity: shadowOpacity,
          translateY: 15
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      
      {/* Primary card */}
      <motion.div 
        className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.1] shadow-sm backdrop-blur-sm ${getGlowColor()} transition-shadow duration-300 [transform-style:preserve-3d] w-full overflow-hidden`}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          z: isHovered ? z : 0,
          translateZ: 0,
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : '0 0 0 rgba(0, 0, 0, 0)'
        }}
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        whileHover={{ scale: 1.02 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25 
        }}
      >
        {/* Background gradient that moves with the card tilt */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${cardX.get()}px ${cardY.get()}px, 
              rgba(255, 255, 255, 0.2) 0%, 
              transparent 50%)`,
            zIndex: 0
          }}
        />
        
        {/* Animated border glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-xl pointer-events-none"
          style={{
            boxShadow: `inset 0 0 0 1px ${getBorderGlowColor()}`,
            opacity: borderGlow
          }}
          transition={{ type: "spring", stiffness: 500 }}
        />
        
        {/* Dynamic shine effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background: `linear-gradient(105deg, 
              transparent 20%, 
              rgba(255, 255, 255, 0.1) 30%, 
              rgba(255, 255, 255, 0.1) 32%, 
              transparent 40%)`,
            backgroundSize: "200% 200%",
            backgroundPosition: isHovered ? "right" : "left",
          }}
          transition={{ 
            duration: 1,
            ease: "easeInOut"
          }}
        />
        
        {/* Content with lifted z-index */}
        <motion.div className="relative z-10">
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;