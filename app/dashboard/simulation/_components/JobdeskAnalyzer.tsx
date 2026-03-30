"use client";

import React, { useState } from "react";
import { Search, FileSearch } from "lucide-react";

export const JobdeskAnalyzer = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!jobDescription.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {}, 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-[600px] pb-[32px]">
      <div className="lg:col-span-5 h-full min-h-0">
        <div
          className="bg-white rounded-[16px] overflow-hidden flex flex-col h-full"
          style={{ border: "0.8px solid #E8ECF0" }}
        >
          <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10 shrink-0">
            <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
              Paste Job Description
            </h3>
          </div>
          <div className="flex-1 p-5 min-h-0 flex flex-col">
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste a job description here to analyze how it matches your profile..."
              className="flex-1 w-full bg-transparent border-none outline-none resize-none text-[15px] text-slate-700 placeholder:text-slate-400 font-normal leading-relaxed font-poppins"
            />
          </div>
          <div className="px-5 py-5 border-t-[0.8px] border-[#E8ECF0] bg-white shrink-0">
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !jobDescription.trim()}
              className="w-full h-14 rounded-[16px] bg-[#066EFF] text-white text-[15px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2.5"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing Match...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Analyze Job Description</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 h-full min-h-0">
        <div
          className="bg-white rounded-[16px] overflow-hidden flex flex-col h-full shadow-sm shadow-slate-200/20"
          style={{ border: "0.8px solid #E8ECF0" }}
        >
          <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10 shrink-0">
            <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
              Analysis Results
            </h3>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-[20px] flex items-center justify-center mb-6 border-[0.8px] border-slate-100">
              <FileSearch className="w-10 h-10 text-slate-300" />
            </div>
            <h4 className="text-[18px] font-semibold text-slate-900 font-poppins mb-2">
              Paste a job description to analyze
            </h4>
            <p className="text-slate-400 text-[15px] font-normal max-w-sm leading-relaxed font-poppins">
              We&apos;ll compare it against your skills and suggest improvements
              to your profile for this role.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
