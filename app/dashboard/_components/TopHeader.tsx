"use client";

import { useState } from "react";
import { Search, Bell, X } from "lucide-react";

export const TopHeader = ({
  name,
  role,
  initials,
}: {
  name: string;
  role: string;
  initials: string;
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className="h-[88px] bg-white px-10 flex items-center justify-between shrink-0 z-10 sticky top-0"
      style={{ borderBottom: "0.8px solid #E8ECF0" }}
    >
      <div className="relative w-full max-w-[400px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search features, skills, projects..."
          className="w-full bg-[#F5F7FA] rounded-2xl h-12 pl-12 pr-12 text-[14px] outline-none border border-transparent focus:border-blue-100 transition-all font-medium"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="flex items-center gap-1">
        <button className="relative w-11 h-11 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-all active:scale-[0.98]">
          <Bell className="w-6 h-6" />
          <span className="absolute top-[10px] right-[10px] w-2.5 h-2.5 bg-[#F97316] rounded-full border-2 border-white"></span>
        </button>

        <div
          className="h-10 w-px mx-6"
          style={{ backgroundColor: "#E8ECF0" }}
        />

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-[#066EFF] flex items-center justify-center text-white font-bold tracking-tighter text-[15px] active:scale-95 transition-transform cursor-pointer">
            {initials}
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-bold text-[#0D3E9B] leading-tight">
              {name}
            </span>
            <span className="text-[12px] font-medium text-slate-400">
              {role}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
