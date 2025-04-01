'use client';

import React from 'react';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <ul className="space-y-4">
        <li>
          <h2 className="text-xl font-semibold">Project 1</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A brief description of your first project. Highlight its purpose and technologies used.
          </p>
        </li>
        <li>
          <h2 className="text-xl font-semibold">Project 2</h2>
          <p className="text-gray-700 dark:text-gray-300">
            A brief description of your second project. Highlight its purpose and technologies used.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
