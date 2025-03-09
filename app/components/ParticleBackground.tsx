'use client';

import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      z: number;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(59, 130, 246, ${Math.random() * 0.3 + 0.1})`;
        this.z = Math.random() * 3;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (canvas) {
          if (this.x > canvas.width) this.x = 0;
          else if (this.x < 0) this.x = canvas.width;
          
          if (this.y > canvas.height) this.y = 0;
          else if (this.y < 0) this.y = canvas.height;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.globalAlpha = 0.6 / this.z;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1 + this.z * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Create particles
    const particles: Particle[] = [];
    const particleCount = Math.min(window.innerWidth / 10, 80); // Responsive count
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance/120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
};

export default ParticleBackground;