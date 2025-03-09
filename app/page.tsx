'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import your components
import ParticleBackground from './components/ParticleBackground';
import AnimatedGradientText from './components/AnimatedGradientText';
import ScrollReveal from './components/ScrollReveal';
import ProjectCard from './components/ProjectCard';
import AwardItem from './components/AwardItem';
import SkillBlock from './components/SkillBlock';
import CTASection from './components/CTASection';
import BackgroundPattern from './components/BackgroundPattern';

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
      <ParticleBackground />
      <BackgroundPattern />
      
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
          <div className="flex-1 space-y-4">
            <AnimatedGradientText text="Hey, I'm Nam Van 👋" />
            
            <ScrollReveal delay={0.3}>
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                A high school student passionate about software development, IoT, and AI.
                Currently focusing on innovative solutions using machine learning and web technologies.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.6}>
              <div className="flex gap-4 pt-4">
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
                {/* Keep other social icons */}
              </div>
            </ScrollReveal>
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
        <ScrollReveal>
          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Featured Projects</h2>
              <Link href="/projects" className="group flex items-center text-blue-600 dark:text-blue-400 hover:underline">
                View all 
                <FaArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Landslide Detection System"
                description="Early warning system combining IoT sensors with real-time alerting for potential landslides."
                tags={["IoT", "ESP32", "React", "Firebase"]}
                link="/projects/landslide-detection"
                featured
              />
              
              <ProjectCard
                title="Elderly HealthCare"
                description="Fall detection system using computer vision to detect falls and alert caregivers in real-time."
                tags={["Python", "OpenCV", "TensorFlow", "ML"]}
                link="/projects/elderly-healthcare"
              />
            </div>
          </section>
        </ScrollReveal>
        
        {/* Awards & Recognition */}
        <ScrollReveal>
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
        </ScrollReveal>
        
        {/* About Section with Timeline */}
        <ScrollReveal>
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
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillBlock 
                title="Languages" 
                skills={["C++", "Python", "TypeScript", "JavaScript"]} 
              />
              <SkillBlock 
                title="Frameworks" 
                skills={["React", "Next.js", "Firebase", "TensorFlow"]} 
              />
              <SkillBlock 
                title="Tools" 
                skills={["Git", "Arduino", "ESP32", "Godot"]} 
              />
            </div>
          </section>
        </ScrollReveal>
        
        {/* Contact CTA */}
        <ScrollReveal>
          <CTASection />
        </ScrollReveal>
      </div>
    </>
  );
}