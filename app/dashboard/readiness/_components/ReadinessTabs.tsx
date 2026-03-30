"use client";

import React from "react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "skill-map", label: "Skill Map" },
  { id: "skill-gap", label: "Skill Gap" },
  { id: "market-demand", label: "Market Demand" },
];

interface ReadinessTabsProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const ReadinessTabs = ({
  activeTab,
  setActiveTab,
}: ReadinessTabsProps) => {
  return (
    <div className="flex gap-4 border-b border-slate-100 pb-0 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "px-4 pb-4 text-[15px] font-medium transition-all relative shrink-0 cursor-pointer",
            activeTab === tab.id
              ? "text-[#066EFF]"
              : "text-slate-400 hover:text-slate-600",
          )}
        >
          {tab.label}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[3px] bg-[#066EFF] rounded-full transition-all duration-300 ease-out transform",
              activeTab === tab.id
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0",
            )}
          />
        </button>
      ))}
    </div>
  );
};
