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
      className="bg-white rounded-[32px] p-8 flex flex-col h-full gap-4"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <p className="text-[15px] font-medium text-slate-700 tracking-tight">
        Growth Progress
      </p>
      <div className="space-y-1 flex flex-col justify-around gap-3">
        {growthProgress.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-[13px]">
              <span className="text-slate-400 tracking-tight">
                {item.label}
              </span>
              <span className={cn("font-bold", `text-${item.color}`)}>
                {item.value}/{item.total}
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-1000 ease-out",
                  `bg-${item.color}`,
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
