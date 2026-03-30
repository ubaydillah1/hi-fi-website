"use client";

import React from "react";
import { Plus } from "lucide-react";

export const DevHubHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="space-y-1.5">
        <h1 className="text-[28px] font-semibold text-slate-900 font-poppins leading-tight">
          Development Hub
        </h1>
        <p className="text-[16px] text-slate-400 font-normal">
          Build real projects and get AI-powered code feedback
        </p>
      </div>

      <button className="flex items-center gap-2 bg-[#066EFF] text-white px-6 py-3.5 rounded-[18px] text-[15px] font-medium shadow-lg shadow-blue-500/25">
        <Plus className="w-5 h-5" />
        <span>New Project</span>
      </button>
    </div>
  );
};
