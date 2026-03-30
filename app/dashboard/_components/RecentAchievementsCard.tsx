"use client";

import React from "react";
import { Award, Trophy, Star, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

const achievements = [
  {
    icon: Trophy,
    title: "First Project Completed",
    sub: "Built a REST API",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    icon: Star,
    title: "Code Reviewed",
    sub: "Got AI feedback on 3 files",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FileText,
    title: "CV Uploaded",
    sub: "Skills extracted from CV",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

export const RecentAchievementsCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] p-8 h-full flex flex-col gap-4"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="flex items-center gap-4">
        <Award className="size-4 text-indigo-500" />
        <h3 className="text-[14px] font-bold font-poppins text-slate-700 tracking-tight">
          Recent Achievements
        </h3>
      </div>
      <div className="space-y-3">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-2 p-3 rounded-[24px] border border-transparent hover:border-slate-50 bg-[#F5F7FA]"
          >
            <div
              className={cn(
                "w-14 h-14 rounded-[18px] flex items-center justify-center transition-transform",
              )}
            >
              <item.icon className={cn("w-7 h-7", item.color)} />
            </div>
            <div>
              <h4 className="text-[13px] font-poppins font-medium text-slate-700 mb-1 transition-colors">
                {item.title}
              </h4>
              <p className="text-[13px] text-slate-400">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
