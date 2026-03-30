"use client";

import React from "react";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CompanyItemProps {
  id: string;
  name: string;
  role: string;
  isActive: boolean;
  onClick: (id: string) => void;
}

const companies = [
  { id: "gojek", name: "Gojek", role: "Software Engineer" },
  { id: "tokopedia", name: "Tokopedia", role: "Frontend Developer" },
  { id: "bca", name: "Bank BCA", role: "IT Analyst" },
  { id: "telkom", name: "Telkom Indonesia", role: "Backend Developer" },
  { id: "shopee", name: "Shopee", role: "Full Stack Developer" },
  { id: "bukalapak", name: "Bukalapak", role: "Data Engineer" },
  { id: "traveloka", name: "Traveloka", role: "Mobile Developer" },
];

const CompanyItem = ({
  id,
  name,
  role,
  isActive,
  onClick,
}: CompanyItemProps) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={cn(
        "w-full flex items-center gap-5 p-6 rounded-[24px] text-left transition-all duration-300 border-[0.8px]",
        isActive
          ? "bg-blue-50 border-blue-100 shadow-sm shadow-blue-500/5 scale-[1.02]"
          : "bg-white border-transparent hover:bg-slate-50 hover:border-slate-100",
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border-[0.8px]",
          isActive
            ? "bg-white text-[#066EFF] border-blue-50 shadow-sm shadow-blue-500/5"
            : "bg-slate-50 text-slate-400 border-slate-100",
        )}
      >
        <Building2 className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <h4
          className={cn(
            "text-[16px] font-semibold font-poppins leading-tight truncate mb-0.5",
            isActive ? "text-[#066EFF]" : "text-slate-900",
          )}
        >
          {name}
        </h4>
        <p className="text-[14px] text-slate-400 font-normal truncate">
          {role}
        </p>
      </div>
    </button>
  );
};

export const CompanyList = ({
  activeId,
  setActiveId,
}: {
  activeId: string;
  setActiveId: (id: string) => void;
}) => {
  return (
    <div
      className="bg-white rounded-[16px] flex flex-col h-full overflow-hidden"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] text-left bg-slate-50/10">
        <h3 className="text-[17px] font-semibold text-slate-800 font-poppins">
          Select Company
        </h3>
      </div>

      <div className="p-4 space-y-3 flex-1 overflow-y-auto no-scrollbar pb-2">
        {companies.map((company) => (
          <CompanyItem
            key={company.id}
            {...company}
            isActive={activeId === company.id}
            onClick={setActiveId}
          />
        ))}
      </div>
    </div>
  );
};
