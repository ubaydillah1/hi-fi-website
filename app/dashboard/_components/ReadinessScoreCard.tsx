"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

interface ReadinessScoreCardProps {
  score: number;
  trend: string;
}

export const ReadinessScoreCard = ({ score, trend }: ReadinessScoreCardProps) => {
  return (
    <div
      className="bg-white p-5 md:p-8 rounded-[24px] h-full flex flex-col justify-between transition-all duration-300 group hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <div className="space-y-4 md:space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-[15px] font-medium text-slate-700 tracking-tight">
            Readiness Score
          </p>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 rounded-full">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-[12px] font-medium text-emerald-600">{trend}</span>
          </div>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-[40px] md:text-[48px] font-bold text-[#0D3E9B] leading-none tracking-tighter">
            {score}
          </span>
          <span className="text-[18px] md:text-[20px] font-bold text-slate-300">%</span>
        </div>

        <div className="space-y-3">
          <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#066EFF] rounded-full transition-all duration-1000"
              style={{ width: `${score}%` }}
            />
          </div>
          <p className="text-[12px] md:text-[13px] text-slate-400 font-medium leading-relaxed">
            You&apos;re doing great! Keep up the good work to reach 80% mark.
          </p>
        </div>
      </div>
    </div>
  );
};
