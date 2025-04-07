'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <main className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-5">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            Hi, I'm Nam Van 👋
          </h1>
          <p className="text-xl text-gray-800 dark:text-gray-300">
            A high school student passionate about software development, IoT, and AI.
            Currently focusing on innovative solutions using machine learning and web technologies.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/namvcpp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/namvcpp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedinIn size={32} />
            </a>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/bocchi_no_no.gif" // Replace with your image
            alt="Nam Van" 
            className="w-full h-auto object-cover" 
          />
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Featured Projects
          </h2>
          <Link 
            href="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <section className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
            Awards & Recognition
          </h2>
          <Link 
            href="/awards" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="space-y-6">
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
      <section className="mt-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4 text-center">
          About Me
        </h2>
        <p className="text-lg text-gray-800 dark:text-gray-300 max-w-3xl mx-auto text-center">
          I'm a student developer passionate about building technology that makes a difference. 
          My focus lies in creating innovative solutions using cutting-edge technologies like IoT, AI, and web development.
        </p>
        <div className="text-center mt-6">
          <Link 
            href="/about" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all"
          >
            Learn More About Me
          </Link>
        </div>
      </section>
    </main>
  );
}