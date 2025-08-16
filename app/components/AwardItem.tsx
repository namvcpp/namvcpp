"use client";

import React from "react";
import { motion } from "framer-motion";

interface AwardItemProps {
  award: string;
  year: string;
  description: string;
}

const AwardItem = ({ award, year, description }: AwardItemProps) => {
  return (
    <motion.div
      className={`ui-card ui-card--glow p-5 relative overflow-hidden group`}
      whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2 }}
    >
  {/* subtle neutral side indicator removed for unified style */}

      <div className="pl-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 transition-colors">
            {award}
          </h3>
          <span className="ml-2 flex-shrink-0 text-sm py-1 px-2 rounded-full border border-zinc-300/40 bg-zinc-50/80 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300">
            {year}
          </span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400">{description}</p>

        <motion.div
          className="w-full h-0.5 bg-zinc-200 dark:bg-zinc-700 mt-3 opacity-0 group-hover:opacity-100"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  );
};

export default AwardItem;