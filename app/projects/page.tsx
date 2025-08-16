'use client';
import React from 'react';

const Projects = () => {
  const projects = [
    { title: 'Landslide Detection System', description: 'IoT early warning system with real-time sensor fusion and alerting.', stack: ['IoT', 'ESP32', 'Firebase', 'React'] },
    { title: 'Elderly HealthCare', description: 'Computer vision fall detection to notify caregivers instantly.', stack: ['Python', 'OpenCV', 'TensorFlow'] }
  ];

  const tagStyles: Record<string, string> = {
    React: 'text-sky-700 dark:text-sky-300 border-sky-300/40',
    Firebase: 'text-amber-800 dark:text-amber-300 border-amber-300/40',
    IoT: 'text-emerald-700 dark:text-emerald-300 border-emerald-300/40',
    ESP32: 'text-zinc-700 dark:text-zinc-300 border-zinc-400/40',
    Python: 'text-yellow-800 dark:text-yellow-300 border-yellow-300/40',
    OpenCV: 'text-indigo-700 dark:text-indigo-300 border-indigo-300/40',
    TensorFlow: 'text-orange-800 dark:text-orange-300 border-orange-300/40',
  };

  const getTagClass = (t: string) =>
    `ui-badge ${tagStyles[t] ?? 'text-zinc-700 dark:text-zinc-300 border-zinc-400/40'}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
  <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-zinc-900 dark:text-zinc-50">Projects</h1>

  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch auto-rows-fr">
    {projects.map((p) => (
      <li key={p.title} className="group relative">
    <div className={`ui-card ui-card--glow h-full p-6 md:p-7`}>
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-lg md:text-xl font-semibold mb-1 text-zinc-900 dark:text-zinc-50">
                    {p.title}
                  </h2>
      <span className="h-2 w-2 rounded-full bg-sky-400/60 group-hover:bg-sky-400 mt-1" aria-hidden />
                </div>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className={getTagClass(s)}>
                      {s}
                    </span>
                  ))}
                </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Projects;
