"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon, UploadIcon } from "lucide-react";

export default function Step4({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto">
      <div className="w-full mb-10">
        <h2 className="text-[32px] font-extrabold text-[#0D3E9B] mb-2 tracking-tight">
          Upload Your CV
        </h2>
        <p className="text-[15px] font-medium text-slate-400 leading-relaxed opacity-80">
          We&apos;ll analyze your CV to understand your current skills and
          experience.
        </p>
      </div>

      <div className="w-full h-[250px] rounded-[32px] border-[1.6px] border-dashed border-[#066EFF4D] bg-[#F0F4FF80] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#F0F4FF] transition-all group">
        <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm shadow-blue-100 group-hover:scale-105 transition-transform">
          <UploadIcon className="w-8 h-8 text-[#066EFF]" />
        </div>
        <div className="text-center">
          <p className="text-[18px] font-medium text-[#475569] mb-2">
            Drop your CV here or click to browse
          </p>
          <p className="text-[13px] font-medium text-slate-400">
            Supports PDF, DOC, DOCX (Max 10MB)
          </p>
        </div>
      </div>

      <div className="w-full text-left mt-8">
        <button className="text-[14px] font-medium text-slate-400 hover:text-gray-900 transition-colors hover:underline cursor-pointer">
          I&apos;ll do this later
        </button>
      </div>

      <div className="flex items-center gap-12 mt-12 w-full">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[15px] font-medium text-slate-400 hover:text-gray-900 transition-colors"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Back
        </button>
        <div className="grow" />
        <Button
          onClick={onNext}
          className="h-14 px-10 bg-[#066EFF] hover:bg-[#0556cc] rounded-[20px] text-[15px] font-bold text-white shadow-xl shadow-blue-500/30 gap-3 group"
        >
          Continue
          <ChevronRightIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}
