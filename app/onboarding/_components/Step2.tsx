"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function Step2({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500 max-w-[720px] mx-auto">
      <div className="w-full mb-10">
        <h2 className="text-[32px] font-extrabold text-[#0D3E9B] mb-2 tracking-tight">
          Tell us about yourself
        </h2>
        <p className="text-[15px] font-medium text-slate-400 leading-relaxed opacity-80">
          We&apos;ll personalize your experience based on this
        </p>
      </div>


      <div className="w-full space-y-6">
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-[14px] font-medium text-[#0A0A1F] ml-1">
              First Name
            </Label>
            <Input
              id="firstName"
              className="h-14 bg-[#F9FAFB] rounded-[14px] px-5 text-[14px] font-normal placeholder:text-[#94A3B8] focus-visible:ring-0 border border-[#E8ECF0] outline-none"
              placeholder="Alex"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-[14px] font-medium text-[#0A0A1F] ml-1">
              Last Name
            </Label>
            <Input
              id="lastName"
              className="h-14 bg-[#F9FAFB] rounded-[14px] px-5 text-[14px] font-normal placeholder:text-[#94A3B8] focus-visible:ring-0 border border-[#E8ECF0] outline-none"
              placeholder="Rahman"
            />
          </div>
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="university" className="text-[14px] font-medium text-[#0A0A1F] ml-1">
            University / Institution
          </Label>
          <Input
            id="university"
            className="h-14 bg-[#F9FAFB] rounded-[14px] px-5 text-[14px] font-normal placeholder:text-[#94A3B8] focus-visible:ring-0 border border-[#E8ECF0] outline-none"
            placeholder="e.g. Universitas Indonesia"
          />
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="fieldOfStudy" className="text-[14px] font-medium text-[#0A0A1F] ml-1">
            Field of Study
          </Label>
          <Input
            id="fieldOfStudy"
            className="h-14 bg-[#F9FAFB] rounded-[14px] px-5 text-[14px] font-normal placeholder:text-[#94A3B8] focus-visible:ring-0 border border-[#E8ECF0] outline-none"
            placeholder="e.g. Computer Science"
          />
        </div>

        <div className="space-y-2 w-full">
          <Label htmlFor="gradYear" className="text-[14px] font-medium text-[#0A0A1F] ml-1">
            Graduation Year
          </Label>
          <Input
            id="gradYear"
            className="h-14 bg-[#F9FAFB] rounded-[14px] px-5 text-[14px] font-normal placeholder:text-[#94A3B8] focus-visible:ring-0 border border-[#E8ECF0] outline-none"
            placeholder="2025"
          />
        </div>
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
