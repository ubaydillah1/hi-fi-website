"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

export default function Step6({
  onFinish,
  onBack,
}: {
  onFinish: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto">

      <div className="w-[88px] h-[88px] bg-[#1A1A1D] rounded-full flex items-center justify-center mb-8 shadow-lg shadow-black/10">
        <GithubIcon className="w-10 h-10 text-white" />
      </div>


      <div className="text-center mb-10 max-w-[620px]">
        <h2 className="text-[32px] font-extrabold text-[#0D3E9B] mb-4 tracking-tight">
          Connect Your GitHub
        </h2>
        <p className="text-[15px] text-slate-400 leading-[1.8] opacity-80 px-4">
          Let&apos;s see what you&apos;ve built. Connecting GitHub helps us
          analyze your repositories, coding patterns, and suggest personalized
          development projects.
        </p>
      </div>


      <div className="w-full max-w-[400px] mb-6">
        <Button className="w-full h-16 bg-[#1A1A1D] hover:bg-[#2A2A2D] rounded-[20px] text-[16px] font-bold text-white shadow-xl shadow-black/10 transition-all active:scale-[0.98] flex items-center justify-center gap-4">
          <GithubIcon className="w-6 h-6" />
          Connect GitHub Account
        </Button>
      </div>


      <p className="text-[13px] text-[#94A3B8] mb-16 opacity-70">
        We only read public repository data. Your code stays yours.
      </p>


      <div className="flex items-center gap-12 mt-auto w-full px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[15px] font-medium text-slate-400 hover:text-gray-900 transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Back
        </button>
        <div className="grow" />
        <Button
          onClick={onFinish}
          className="h-14 px-10 bg-[#066EFF] hover:bg-[#0556cc] rounded-[20px] text-[15px] font-bold text-white shadow-xl shadow-blue-500/30 gap-3 group"
        >
          Finish Setup
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
