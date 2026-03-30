"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, DollarSign, FileSearch } from "lucide-react";

interface SimulationTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const tabs = [
  { id: "recruiter", label: "Recruiter Simulation", icon: MessageSquare },
  { id: "salary", label: "Salary Negotiation", icon: DollarSign },
  { id: "jobdesk", label: "Jobdesk Analyzer", icon: FileSearch },
];

export const SimulationTabs = ({
  activeTab,
  setActiveTab,
}: SimulationTabsProps) => {
  return (
    <div className="flex gap-10 border-b-[0.8px] border-[#E8ECF0] pb-0 w-full overflow-x-auto no-scrollbar">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2.5 px-4 pb-5 text-[15px] font-medium transition-all relative shrink-0 cursor-pointer",
              isActive
                ? "text-[#066EFF]"
                : "text-slate-400 hover:text-slate-500",
            )}
          >
            <Icon className="w-4 h-4" />
            <span className="font-poppins">{tab.label}</span>
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
