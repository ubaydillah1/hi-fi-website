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
      className="bg-white p-8 rounded-[16px] h-full flex flex-col justify-between transition-all duration-300"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="space-y-4">
        <p className="text-[15px] font-medium text-slate-700 tracking-tight">
          Readiness Score
        </p>

        <div className="flex items-baseline gap-1">
          <span className="text-[48px] font-extrabold text-slate-900 leading-none tracking-tighter font-poppins">
            {score}
          </span>
          <span className="text-[20px] font-bold text-slate-400">%</span>
        </div>

        <div className="w-full h-2.5 bg-slate-100/50 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#066EFF] rounded-full transition-all duration-1000"
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="flex items-center gap-2 text-[14px] text-slate-400 font-medium font-poppins">
          <div className="w-6 h-6 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-500">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <span>{trend} from last week</span>
        </div>
      </div>
    </div>
  );
};
