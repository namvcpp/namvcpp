'use client';

import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out to me through any of the following channels:
      </p>
      <ul className="space-y-2">
        <li>Email: <a href="mailto:namvan@example.com" className="text-blue-500 hover:underline">namvan@example.com</a></li>
        <li>Twitter: <a href="https://twitter.com/namvcpp" className="text-blue-500 hover:underline">@namvcpp</a></li>
        <li>GitHub: <a href="https://github.com/namvcpp" className="text-blue-500 hover:underline">github.com/namvcpp</a></li>
      </ul>
    </div>
  );
};

export default Contact;
