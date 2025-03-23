"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaHeart, FaBook, FaTools, FaUserAlt, FaBlog, FaHome, FaEnvelope, FaAward, FaLaptopCode } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  // Mouse position tracking for 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smoothing for mouse movement
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Track mouse position for the whole footer
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };
  
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, url: 'https://x.com/namvcpp' },
    { name: 'YouTube', icon: <FaYoutube className="w-5 h-5" />, url: 'https://www.youtube.com/@namvcpp' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/namvcpp' },
    { name: 'GitHub', icon: <FaGithub className="w-5 h-5" />, url: 'https://github.com/namvcpp' }
  ];

  const allRoutes = {
    main: [
      { name: 'Home', url: '/', icon: <FaHome className="mr-2" /> },
      { name: 'Projects', url: '/projects', icon: <FaLaptopCode className="mr-2" /> },
      { name: 'Blog', url: '/blog', icon: <FaBlog className="mr-2" /> },
      { name: 'Contact', url: '/contact', icon: <FaEnvelope className="mr-2" /> }
    ],
    other: [
      { name: 'About', url: '/about', icon: <FaUserAlt className="mr-2" /> },
      { name: 'Resume', url: '/resume', icon: <FaBook className="mr-2" /> },
      { name: 'Skills', url: '/skills', icon: <FaTools className="mr-2" /> },
      { name: 'Achievements', url: '/achievements', icon: <FaAward className="mr-2" /> }
    ]
  };

  return (
    <footer 
      className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About section */}
          <Card 
            index={0} 
            hoveredCard={hoveredCard} 
            setHoveredCard={setHoveredCard}
            springX={springX}
            springY={springY}
            glowColor="blue"
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              About Me
            </motion.h3>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Student at Le Quy Don High School for the Gifted, passionate about technology and innovative solutions.
            </motion.p>
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link 
                href="/about"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
              >
                Learn More
              </Link>
            </motion.div>
          </Card>
          
          {/* Main Links */}
          <Card 
            index={1} 
            hoveredCard={hoveredCard} 
            setHoveredCard={setHoveredCard}
            springX={springX}
            springY={springY}
            glowColor="green"
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Main Navigation
            </motion.h3>
            <ul className="space-y-3 mb-3">
              {allRoutes.main.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                  delay: 0.4 + index * 0.1,
                  type: "spring", 
                  stiffness: 100, 
                  damping: 10 
                  }}
                  whileHover={{ 
                  x: 5,
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 15 
                  }
                  }}
                  className="transform-gpu"
                >
                  <Link 
                  href={link.url}
                  className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
                  >
                  {link.icon}
                  {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <motion.h3 
              className="text-lg font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Explore More
            </motion.h3>
            <ul className="space-y-3">
              {allRoutes.other.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="transform-gpu"
                >
                  <Link 
                    href={link.url}
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </Card>
          
          {/* Connect */}
          <Card 
            index={2} 
            hoveredCard={hoveredCard} 
            setHoveredCard={setHoveredCard}
            springX={springX}
            springY={springY}
            glowColor="purple"
          >
            <motion.h3 
              className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Connect
            </motion.h3>
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-all p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 border border-transparent hover:border-purple-200 dark:hover:border-purple-800"
                  aria-label={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -3,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                >
                  <span className="mr-2">{link.icon}</span>
                  <span className="text-sm font-medium">{link.name}</span>
                </motion.a>
              ))}
            </motion.div>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <Link 
                href="/contact"
                className="w-full inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:from-purple-600 hover:to-indigo-700 transition-all duration-200 text-sm font-medium"
              >
                <FaEnvelope className="mr-2" />
                Get in Touch
              </Link>
            </motion.div>
          </Card>
        </div>
        
        {/* Copyright */}
        <motion.div 
          className="relative text-center py-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl mt-4 backdrop-blur-sm overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ boxShadow: "0 0 30px rgba(147, 51, 234, 0.15)" }}
        >
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"
            animate={{ 
              x: ['0%', '100%', '0%'],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8,
              ease: "linear"
            }}
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">© {currentYear} Van Cong Nam. All rights reserved.</p>
          <motion.p 
            className="mt-2 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
          >
            Made with 
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              <FaHeart className="mx-1 text-red-500" />
            </motion.span> 
            in Da Nang, Vietnam
          </motion.p>
        </motion.div>
      </div>
    </footer>
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
}

const Card = ({ children, index, hoveredCard, setHoveredCard, springX, springY, glowColor }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // We'll calculate the card's position relative to the mouse
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  
  // Transform values for the rotation
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]);
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]);

  // Update card position values based on mouse position
  useEffect(() => {
    const updateCardPosition = () => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      // Calculate distance from mouse to card center
      const mouseX = springX.get();
      const mouseY = springY.get();
      
      cardX.set(mouseX - cardCenterX);
      cardY.set(mouseY - cardCenterY);
    };
    
    const unsubscribeX = springX.onChange(updateCardPosition);
    const unsubscribeY = springY.onChange(updateCardPosition);
    
    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [springX, springY, cardX, cardY]);

  // Get the glow color based on prop
  const getGlowColor = () => {
    switch (glowColor) {
      case "blue": return "dark:hover:shadow-blue-500/[0.2]";
      case "green": return "dark:hover:shadow-green-500/[0.2]";
      case "purple": return "dark:hover:shadow-purple-500/[0.2]";
      default: return "dark:hover:shadow-blue-500/[0.1]";
    }
  };
  
  return (
    <motion.div 
      ref={cardRef}
      className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-black/[0.1] dark:border-white/[0.2] shadow-sm hover:shadow-xl ${getGlowColor()} transition-all duration-300 [transform-style:preserve-3d]`}
      style={{
        rotateX: hoveredCard === index ? rotateX : 0,
        rotateY: hoveredCard === index ? rotateY : 0,
        z: hoveredCard === index ? 10 : 0
      }}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        delay: index * 0.1 + 0.2 
      }}
    >
      {/* Glow effect */}
      <motion.div 
        className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${cardX.get()}px ${cardY.get()}px, rgba(255,255,255,0.1) 0%, transparent 70%)`
        }}
      />
      
      {/* Content */}
      <motion.div className="relative z-10">
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Footer;