'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ScrollReveal = ({ 
  children, 
  width = "100%", 
  delay = 0, 
  direction = 'up' 
}: ScrollRevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getInitialDirection = () => {
    switch(direction) {
      case 'down': return { y: -30, opacity: 0 };
      case 'left': return { x: 30, opacity: 0 };
      case 'right': return { x: -30, opacity: 0 };
      case 'up':
      default: return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitialDirection()}
      animate={inView ? { y: 0, x: 0, opacity: 1 } : getInitialDirection()}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;