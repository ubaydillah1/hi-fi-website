"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronRightIcon } from "lucide-react";

export default function Step1({ onNext }: { onNext: () => void }) {
  const cards = [
    {
      title: "Skill Analysis",
      description: "Map your real competencies",
      color: "#066EFF",
      bgColor: "bg-blue-50/50",
    },
    {
      title: "Real Projects",
      description: "Build & get AI feedback",
      color: "#10B981",
      bgColor: "bg-emerald-50/50",
    },
    {
      title: "Career Prep",
      description: "Simulate real interviews",
      color: "#F59E0B",
      bgColor: "bg-amber-50/50",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full animate-in fade-in duration-500">
      <div className="w-[80px] h-[80px] bg-blue-50 rounded-[32px] flex items-center justify-center mb-6 shadow-sm shadow-blue-100">
        <CheckCircle2 className="size-10 text-primary" />
      </div>


      <div className="text-center max-w-[580px] mb-12">
        <h2 className="text-[32px] font-extrabold text-[#0D3E9B] mb-5 tracking-tight">
          Know Exactly Where You Stand
        </h2>
        <p className="text-[15px] max-w-[480px] text-slate-400 leading-[1.8] px-4 opacity-80">
          Most IT grads apply blindly and wonder why they get rejected. Wirapath
          shows you the gap in minutes through skill analysis, real projects,
          and career simulation.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-[800px] w-full mb-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center text-center p-6 bg-[#F9FAFB] rounded-[24px] border border-gray-50/50 hover:shadow-sm transition-shadow"
          >
            <div
              className="w-3 h-3 rounded-full mb-4"
              style={{ backgroundColor: card.color }}
            />
            <h4 className="text-[14px] font-poppins font-bold text-gray-900 mb-2">
              {card.title}
            </h4>
            <p className="text-[12px] font-medium text-[#94A3B8] leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>


      <div className="flex items-center justify-end mt-auto w-full max-w-[800px] px-8">
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
