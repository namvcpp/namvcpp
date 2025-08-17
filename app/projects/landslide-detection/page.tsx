"use client";

import React from 'react';

export default function LandslideDetectionPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <article className="ui-card p-6 md:p-8 ui-card--glow">
        <header className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Landslide Detection & Early Warning System</h1>
          <p className="text-zinc-600 dark:text-zinc-300 mt-2">2024 • Sensor Fusion • IoT • Web</p>
        </header>

        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <h2>Overview</h2>
          <p>
            Developed a sensor fusion platform with ESP32 and environmental sensors to monitor terrain conditions.
            Built a web dashboard for real-time data visualization and automated warning notifications.
          </p>

          <h3>Responsibilities</h3>
          <ul>
            <li>Hardware integration with ESP32 and geotechnical sensors</li>
            <li>Data ingestion, processing, and rule-based alerts</li>
            <li>Dashboard for monitoring and visualization</li>
          </ul>

          <h3>Tech Stack</h3>
          <ul>
            <li>TypeScript, Next.js, React, Firebase</li>
            <li>Python, Arduino, ESP32</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
