"use client";

import React from "react";

type Align = "left" | "center" | "right";
type Size = "md" | "lg" | "xl";

interface ProfileHeadingProps {
  name: string;
  subtitle: string;
  align?: Align;
  size?: Size;
  badges?: string[];
}

const sizeMap: Record<Size, string> = {
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

export default function ProfileHeading({
  name,
  subtitle,
  align = "center",
  size = "lg",
  badges = [],
}: ProfileHeadingProps) {
  const alignCls = align === "center" ? "text-center" : align === "right" ? "text-right" : "text-left";

  return (
    <div className={`space-y-2 ${alignCls}`}>
      <h2
        className={`${sizeMap[size]} font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-fuchsia-600 dark:from-sky-400 dark:to-fuchsia-400`}
      >
        {name}
      </h2>
      <p className="text-zinc-600 dark:text-zinc-300">{subtitle}</p>
      {badges.length > 0 && (
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          {badges.map((b) => (
            <span
              key={b}
              className={`ui-badge ${
                b.toLowerCase().includes("web")
                  ? "text-sky-700 dark:text-sky-300"
                  : b.toLowerCase().includes("iot")
                  ? "text-emerald-700 dark:text-emerald-300"
                  : b.toLowerCase().includes("ai")
                  ? "text-fuchsia-700 dark:text-fuchsia-300"
                  : ""
              }`}
            >
              {b}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
