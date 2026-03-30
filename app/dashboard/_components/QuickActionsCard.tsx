"use client";

import React from "react";
import { ShieldCheck, Code2, Briefcase, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const quickActions = [
  {
    icon: ShieldCheck,
    label: "Readiness Center",
    color: "bg-blue-50 text-blue-500",
  },
  {
    icon: Code2,
    label: "Development Hub",
    color: "bg-emerald-50 text-emerald-500",
  },
  {
    icon: Briefcase,
    label: "Career Simulation",
    color: "bg-orange-50 text-orange-500",
  },
];

export const QuickActionsCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] p-8 flex flex-col gap-4 h-full"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <p className="text-[15px] font-medium text-slate-700 tracking-tight">
        Quick Actions
      </p>
      <div className="flex flex-col gap-1">
        {quickActions.map((action) => (
          <button
            key={action.label}
            className="group flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-12 h-12 rounded-2xl flex items-center justify-center transition-transform",
                  action.color,
                )}
              >
                <action.icon className="w-5 h-5" />
              </div>
              <span className="text-[14px] font-medium text-black group-hover:text-slate-900 transition-colors tracking-tight line-clamp-1">
                {action.label}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>
    </div>
  );
};
