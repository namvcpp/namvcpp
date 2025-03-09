'use client';

import React from 'react';

const BackgroundPattern = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
      <div className="animated-pattern absolute inset-0"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundPattern;