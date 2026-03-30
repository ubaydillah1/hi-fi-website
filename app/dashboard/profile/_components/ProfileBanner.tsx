"use client";

import React from "react";
import { Mail, MapPin, GraduationCap } from "lucide-react";

export const ProfileBanner = () => {
  return (
    <div
      className="relative w-full rounded-[16px] overflow-hidden p-8 text-white flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg shadow-blue-500/10"
      style={{
        background:
          "linear-gradient(90deg, #066EFF 0%, #076AF8 7.14%, #0867F0 14.29%, #0963E9 21.43%, #0A60E2 28.57%, #0B5CDA 35.71%, #0C59D3 42.86%, #0C55CC 50%, #0C52C5 57.14%, #0D4FBE 64.29%, #0D4BB7 71.43%, #0D48B0 78.57%, #0D45A9 85.71%, #0D41A2 92.86%, #0D3E9B 100%)",
      }}
    >
      <div className="flex flex-col md:flex-row items-center gap-8 z-10">
        <div className="w-[120px] h-[120px] rounded-[32px] bg-white/20 backdrop-blur-md flex items-center justify-center text-[38px] font-bold border-[0.8px] border-white/30 shadow-2xl shadow-black/10">
          AR
        </div>
        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-1">
            <h2 className="text-[32px] font-bold font-poppins tracking-tight leading-tight">
              Alex Rahman
            </h2>
            <p className="text-white/70 text-[15px] font-medium font-poppins">
              IT Graduate
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 text-white/90 text-[14px] font-poppins">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border-[0.8px] border-white/10 backdrop-blur-sm">
              <Mail className="w-4 h-4" />
              <span>alex.rahman@email.com</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border-[0.8px] border-white/10 backdrop-blur-sm">
              <MapPin className="w-4 h-4" />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border-[0.8px] border-white/10 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Universitas Indonesia</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 z-10">
        <div className="bg-white/10 backdrop-blur-md border-[0.8px] border-white/20 rounded-[20px] px-8 py-5 flex flex-col items-center min-w-[120px] transition-all hover:bg-white/15 cursor-default group">
          <span className="text-[24px] font-bold font-poppins group-hover:scale-110 transition-transform">
            62%
          </span>
          <span className="text-[13px] text-white/60 font-medium font-poppins">
            Readiness
          </span>
        </div>
        <div className="bg-white/10 backdrop-blur-md border-[0.8px] border-white/20 rounded-[20px] px-8 py-5 flex flex-col items-center min-w-[120px] transition-all hover:bg-white/15 cursor-default group">
          <span className="text-[24px] font-bold font-poppins group-hover:scale-110 transition-transform">
            12
          </span>
          <span className="text-[13px] text-white/60 font-medium font-poppins">
            Skills
          </span>
        </div>
        <div className="bg-white/10 backdrop-blur-md border-[0.8px] border-white/20 rounded-[20px] px-8 py-5 flex flex-col items-center min-w-[120px] transition-all hover:bg-white/15 cursor-default group">
          <span className="text-[24px] font-bold font-poppins group-hover:scale-110 transition-transform">
            6
          </span>
          <span className="text-[13px] text-white/60 font-medium font-poppins">
            Badges
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-white/5 rounded-full blur-2xl transform -translate-y-1/2" />
        <div className="absolute -bottom-24 -right-12 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />

        <div className="absolute top-[10%] right-[15%] w-16 h-16 bg-white/10 rounded-full border-[0.8px] border-white/10" />
        <div className="absolute bottom-[20%] right-[5%] w-24 h-24 bg-white/5 rounded-full border-[0.8px] border-white/5" />
        <div className="absolute top-1/2 right-[25%] w-8 h-8 bg-white/10 rounded-full border-[0.8px] border-white/10" />
      </div>
    </div>
  );
};
