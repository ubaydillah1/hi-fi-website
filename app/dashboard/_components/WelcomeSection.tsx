"use client";

import React from "react";
import { Zap } from "lucide-react";

export const WelcomeSection = ({
  name,
  streak,
}: {
  name: string;
  streak: number;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-[34px] font-extrabold text-[#0D3E9B] mb-1">
          Welcome back, {name}! 👋
        </h1>
        <p className="text-[16px] text-slate-400">
          Here&apos;s your career readiness overview today.
        </p>
      </div>
      <div className="flex items-center gap-2.5 px-5 py-2.5 bg-orange-50 rounded-[20px] border border-orange-100 shadow-sm shadow-orange-100/50 transition-transform duration-300">
        <Zap className="w-4.5 h-4.5 text-orange-500 fill-orange-500" />
        <span className="text-[14px] font-medium text-[#92400E]">
          {streak} day streak!
        </span>
      </div>
    </div>
  );
};
