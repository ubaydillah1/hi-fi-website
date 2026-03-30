"use client";

import React from "react";
import {
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  {
    icon: ShieldCheck,
    value: "62%",
    label: "Overall Readiness",
    color: "bg-[#F0F7FF] text-[#066EFF]",
  },
  {
    icon: BarChart3,
    value: "12",
    label: "Skills Mapped",
    color: "bg-[#F0FFF9] text-[#10B981]",
  },
  {
    icon: AlertTriangle,
    value: "4",
    label: "Critical Gaps",
    color: "bg-[#FFF1F1] text-[#EF4444]",
  },
  {
    icon: CheckCircle2,
    value: "5",
    label: "Strengths",
    color: "bg-[#F0FFF9] text-[#10B981]",
  },
];

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-[32px] border border-[#E8ECF0] transition-all duration-300"
        >
          <div
            className={cn(
              "w-14 h-14 rounded-2xl flex items-center justify-center mb-6",
              stat.color,
            )}
          >
            <stat.icon className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <div className="text-[36px] font-medium text-slate-900 leading-none tracking-tight">
              {stat.value}
            </div>
            <div className="text-[15px] text-slate-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
