"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface DevHubTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "mini-projects", label: "Mini Projects" },
  { id: "ai-code-review", label: "AI Code Review" },
];

export const DevHubTabs = ({ activeTab, setActiveTab }: DevHubTabsProps) => {
  return (
    <div className="flex gap-4 border-b border-slate-100 pb-0 w-full mb-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-4 pb-4 text-[15px] font-medium transition-all relative shrink-0 cursor-pointer",
              isActive ? "text-[#066EFF]" : "text-slate-400",
            )}
          >
            {tab.label}
            <div
              className={cn(
                "absolute bottom-0 left-0 right-0 h-[3px] bg-[#066EFF] rounded-full transition-all duration-300 ease-out transform",
                isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0",
              )}
            />
          </button>
        );
      })}
    </div>
  );
};
