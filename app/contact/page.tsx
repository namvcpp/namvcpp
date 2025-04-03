'use client';

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen p-8 bg-blue-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-2xl shadow-xl">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-lg"
            placeholder="Your Message"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
