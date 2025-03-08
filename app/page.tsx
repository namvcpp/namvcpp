import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaArrowRight } from 'react-icons/fa';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Hey, I'm Nam Van 👋
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            A high school student passionate about software development, IoT, and AI.
            Currently focusing on innovative solutions using machine learning and web technologies.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/namvcpp" target="_blank" rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <FaGithub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/nam-van-b33752347/" target="_blank" rel="noopener noreferrer"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <FaLinkedinIn size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:namvc153@gmail.com"
              className="p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
              <MdEmail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
        
        <div className="w-32 h-32 md:w-40 md:h-40 relative overflow-hidden rounded-full ring-2 ring-blue-500 dark:ring-blue-400 flex-shrink-0">
          {/* Replace with your actual profile image */}
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600"></div>
          {/* If you have an image, use this instead:
          <Image
            src="/profile.jpg"
            alt="Nam Van"
            fill
            className="object-cover"
            priority
          />
          */}
        </div>
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
      
      {/* About Section with Timeline */}
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
      
      {/* Contact CTA */}
      <section className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 p-8 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Let's Work Together</h2>
          <p className="text-gray-700 dark:text-gray-300">Open to collaborations, projects, and discussions.</p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:namvc153@gmail.com" 
             className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center gap-2 transition-colors">
            <MdEmail />
            Contact Me
          </a>
          <a href="/resume.pdf" 
             className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-600 dark:border-blue-400 rounded-lg flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors">
            <HiOutlineDocumentText />
            Resume
          </a>
        </div>
      </section>
    </div>
  );
}

// Components
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

function ProjectCard({ title, description, tags, link, featured = false }: ProjectCardProps) {
  return (
    <Link href={link} className="block">
      <div className={`h-full p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors ${featured ? 'bg-blue-50 dark:bg-blue-900/20' : 'bg-white dark:bg-gray-800'}`}>
        <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

interface AwardItemProps {
  award: string;
  year: string;
  description: string;
}

function AwardItem({ award, year, description }: AwardItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-sm font-mono text-gray-500 dark:text-gray-400 min-w-16 pt-1">{year}</div>
      <div>
        <h3 className="font-bold text-gray-800 dark:text-white">{award}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </div>
    </div>
  );
}

interface SkillBlockProps {
  title: string;
  skills: string[];
}

function SkillBlock({ title, skills }: SkillBlockProps) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}