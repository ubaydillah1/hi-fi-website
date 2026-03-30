"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

const skillsNeedAttention = [
  { name: "System Design", progress: 28, color: "bg-red-500" },
  { name: "Testing & QA", progress: 35, color: "bg-orange-500" },
  { name: "Database Design", progress: 42, color: "bg-amber-500" },
  { name: "API Development", progress: 55, color: "bg-blue-500" },
];

export const SkillsNeedAttentionCard = () => {
  return (
    <div 
      className="bg-white rounded-[32px] p-8 h-full flex flex-col gap-4"
      style={{ border: '0.8px solid #E8ECF0' }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <AlertTriangle className="size-4 text-orange-500" />
          <h3 className="text-[14px] font-poppins font-medium text-slate-700 tracking-tight">
            Skills Need Attention
          </h3>
        </div>
        <button className="text-[14px] font-medium cursor-pointer text-blue-500 hover:underline transition-colors tracking-tight">
          View All
        </button>
      </div>
      <div className="space-y-3">
        {skillsNeedAttention.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3">
            <span className="w-36 text-[13px] text-slate-500 truncate tracking-tight font-normal">
              {skill.name}
            </span>
            <div className="flex-1 h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-1000 ease-in-out",
                  skill.color,
                )}
                style={{ width: `${skill.progress}%` }}
              />
            </div>
            <span className="w-12 text-[14px] font-medium text-slate-700 text-right">
              {skill.progress}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
