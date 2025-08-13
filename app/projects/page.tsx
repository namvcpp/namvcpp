'use client';
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Landslide Detection System', description: 'IoT early warning system with real-time sensor fusion and alerting.', stack: ['IoT', 'ESP32', 'Firebase', 'React'] },
    { title: 'Elderly HealthCare', description: 'Computer vision fall detection to notify caregivers instantly.', stack: ['Python', 'OpenCV', 'TensorFlow'] }
  ];
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ul className="space-y-8">
        {projects.map(p => (
          <li key={p.title} className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800">
            <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-50">{p.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-2">
              {p.stack.map(s => <span key={s} className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">{s}</span>)}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Projects;
