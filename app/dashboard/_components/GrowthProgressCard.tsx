"use client";

import { cn } from "@/lib/utils";

const growthProgress = [
  { label: "Skills Mapped", value: 12, total: 20, color: "primary" },
  { label: "Projects Done", value: 3, total: 8, color: "[#10B981]" },
  { label: "Simulations", value: 2, total: 5, color: "[#F59E0B]" },
];

export const GrowthProgressCard = () => {
  return (
    <div
      className="bg-white rounded-[24px] p-5 md:p-8 flex flex-col h-full gap-5 transition-all hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1"
      style={{ border: "1.2px solid #F1F5F9" }}
    >
      <p className="text-[15px] font-medium text-slate-700 tracking-tight">
        Growth Progress
      </p>
      <div className="flex-1 flex flex-col justify-around gap-4 md:gap-5">
        {growthProgress.map((item) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-end">
              <span className="text-[13px] md:text-[14px] font-medium text-slate-700 tracking-tight">
                {item.label}
              </span>
              <span className="text-[12px] md:text-[13px] font-medium text-[#0D3E9B]">
                {item.value}<span className="text-slate-300 mx-0.5">/</span>{item.total}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-1000 ease-out rounded-full",
                  item.label === "Skills Mapped" && "bg-blue-600",
                  item.label === "Projects Done" && "bg-emerald-600",
                  item.label === "Simulations" && "bg-orange-600",
                )}
                style={{ width: `${(item.value / item.total) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
