"use client";

import React from "react";
import { TrendingUp } from "lucide-react";

export const ReadinessScoreCard = ({
  score,
  trend,
}: {
  score: number;
  trend: string;
}) => {
  const gradientStyle = {
    background:
      "linear-gradient(90deg, #066EFF 0%, #076AF8 7%, #0867F0 14%, #0963E9 21%, #0A60E2 28%, #0B5CDA 35%, #0C59D3 42%, #0C55CC 50%, #0C52C5 57%, #0D4FBE 64%, #0D4BB7 71%, #0D48B0 78%, #0D45A9 85%, #0D41A2 92%, #0D3E9B 100%)",
  };

  return (
    <div
      style={gradientStyle}
      className="rounded-[32px] p-8 text-white relative overflow-hidden flex flex-col h-full"
    >
      <div className="relative flex flex-col gap-4">
        <p className="text-[15px] font-medium opacity-80">Readiness Score</p>

        <div className="flex gap-2">
          <span className="text-[48px] font-extrabold leading-none tracking-tighter">
            {score}
          </span>
          <span className="text-[32px] font-bold opacity-60">%</span>
        </div>

        <div className="w-full h-2 bg-white/20 rounded-full relative overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-white rounded-full transition-all duration-1000"
            style={{ width: `${score}%` }}
          />
        </div>

        <div className="flex items-center gap-2 text-[14px] text-[#FFFFFF99]">
          <span className="flex items-center justify-center w-6 h-6 bg-white/20 rounded-lg">
            <TrendingUp className="w-3.5 h-3.5" />
          </span>
          {trend} from last week
        </div>
      </div>

      <div className="absolute -right-20 -top-20 size-[200px] bg-[#FFFFFF0D]  rounded-full" />
      <div className="absolute -right-15 -bottom-15 size-[150px] bg-[#FFFFFF0D] rounded-full opacity-40" />
    </div>
  );
};
