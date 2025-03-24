'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your core components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedCard from './components/AnimatedCard';
import AwardItem from './components/AwardItem';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <>
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 space-y-4">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Hey, I'm Nam Van 👋
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              A high school student passionate about software development, IoT, and AI.
              Currently focusing on innovative solutions using machine learning and web technologies.
            </motion.p>
            
            <motion.div 
              className="flex gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a 
                href="https://github.com/namvcpp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub size={24} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/namvcpp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn size={24} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div 
            className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full ring-4 ring-blue-500 dark:ring-blue-400 flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 animate-gradient-slow"></div>
          </motion.div>
        </section>
        
        {/* Featured Projects Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Featured Projects</h2>
            <Link href="/projects" className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              View all 
              <FaArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatedCard
              title="Landslide Detection System"
              description="Early warning system combining IoT sensors with real-time alerting for potential landslides."
              tags={["IoT", "ESP32", "React", "Firebase"]}
              link="/projects/landslide-detection"
              featured
            />
            
            <AnimatedCard
              title="Elderly HealthCare"
              description="Fall detection system using computer vision to detect falls and alert caregivers in real-time."
              tags={["Python", "OpenCV", "TensorFlow", "ML"]}
              link="/projects/elderly-healthcare"
            />
          </div>
        </section>
        
        {/* Awards & Recognition */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Awards</h2>
            <Link href="/awards" className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              View all 
              <FaArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="space-y-4">
            <AwardItem 
              award="1st Prize - U-Invent Vietnam Season 7"
              year="2024"
              description="National innovation competition for students"
            />
            
            <AwardItem 
              award="2nd Prize - Google Developer Student Club Hackathon"
              year="2024"
              description="Nationwide hackathon organized by GDSC"
            />
            
            <AwardItem 
              award="1st Prize - Youth On! Hackathon"
              year="2023"
              description="Regional hackathon for innovative solutions"
            />
          </div>
        </section>
        
        {/* About Section */}
        <section>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">About</h2>
            <Link href="/about" className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline">
              More about me 
              <FaArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              I'm currently a student at Le Quy Don High School for the Gifted in Da Nang, Vietnam, specializing in Information Technology. 
              My passion lies in creating technology that solves real-world problems, particularly in healthcare and environmental monitoring.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, participating in hackathons, or contributing to community projects.
            </p>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
}