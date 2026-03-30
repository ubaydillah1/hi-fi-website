"use client";

import React from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export const IntegrationsCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden flex flex-col"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10">
        <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
          Integrations
        </h3>
      </div>
      <div className="p-5 space-y-4">
        <div className="p-4 bg-slate-50/50 rounded-[12px] flex items-center justify-between border-[0.8px] border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center border-[0.8px] border-slate-100 shadow-sm shadow-slate-200/50">
              <GithubIcon className="w-5 h-5 text-slate-700" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-slate-900 font-poppins">
                GitHub
              </p>
              <p className="text-[13px] text-emerald-500 font-medium font-poppins">
                Connected
              </p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="p-4 bg-slate-50/50 rounded-[12px] flex items-center justify-between border-[0.8px] border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center border-[0.8px] border-slate-100 shadow-sm shadow-slate-200/50">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 7.5L16.5 12.5L12.5 17.5"
                  stroke="#4285F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 12.5H16.5"
                  stroke="#4285F4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-slate-900 font-poppins">
                Google Drive
              </p>
              <p className="text-[13px] text-emerald-500 font-medium font-poppins">
                Connected
              </p>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};
