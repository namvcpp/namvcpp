"use client";

import React from "react";
import AwardItem from "../components/AwardItem";

export default function AwardsPage() {
  const awards = [
    { year: "2025", title: "2nd Prize — Google Developer Student Club Hackathon", description: "Nationwide hackathon organized by GDSC; recognized for engineering and impact." },
    { year: "2024", title: "1st Prize — U-Invent Vietnam Season 7", description: "National innovation competition for students." },
    { year: "2023", title: "1st Prize — Youth On! Hackathon", description: "Regional hackathon for innovative solutions." },
    { year: "2023", title: "Bebras High Distinction (Gold Medal)", description: "International computational thinking challenge; highest distinction." },
    { year: "2023", title: "Bronze Medal — American Math Olympiad", description: "International mathematics competition." },
    { year: "2023", title: "Bronze Medal — Olympic Tin học Miền Trung & Tây Nguyên mùa IV", description: "Regional CS/programming competition for Central & Highlands Vietnam." },
    { year: "2023", title: "1st Prize — Provincial Informatics Competition", description: "City-level programming competition, Da Nang." },
    { year: "2023", title: "2nd Prize — Provincial Mathematics Competition", description: "Da Nang provincial competition." },
  ];

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-zinc-900 dark:text-zinc-50">Awards & Recognition</h1>
      <div className="space-y-6">
        {awards.map((a) => (
          <AwardItem key={`${a.title}-${a.year}`} award={a.title} year={a.year} description={a.description} />
        ))}
      </div>
    </main>
  );
}
