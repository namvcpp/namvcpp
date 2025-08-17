"use client";

import React from 'react';

export default function ElderlyHealthCarePage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="ui-card p-6 md:p-8 ui-card--glow">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Elderly HealthCare — Fall Detection System</h1>
          <p className="text-zinc-600 dark:text-zinc-300 mt-2">2025 • Computer Vision • IoT</p>
        </header>

        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            Designed an IoT + computer vision system to detect human falls and alert caregivers in real time.
            Trained and optimized models (YOLO/MediaPipe/DeepFace) for robust recognition; implemented alerting via a mobile interface.
          </p>

          <h3>Responsibilities</h3>
          <ul>
            <li>Model selection, training, and optimization for real-world scenarios</li>
            <li>Edge device integration with ESP32/Arduino and camera modules</li>
            <li>Real-time alert flow and monitoring UI</li>
          </ul>

          <h3>Tech Stack</h3>
          <ul>
            <li>Python, OpenCV, TensorFlow, YOLO, MediaPipe, DeepFace</li>
            <li>ESP32, Arduino</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
