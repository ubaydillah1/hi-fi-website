"use client";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

const integrations = [
  {
    id: "github",
    name: "GitHub",
    description: "Repository analysis & code review",
    icon: GithubIcon,
    status: "connected",
  },
  {
    id: "gdrive",
    name: "Google Drive",
    description: "Document storage & sync",
    icon: GoogleIcon,
    status: "disconnected",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    description: "Profile sync & job matching",
    icon: Link2,
    status: "disconnected",
  },
];

export const IntegrationSettings = () => {
  return (
    <div className="p-5 md:p-10 space-y-6 md:space-y-8 w-full">
      <div className="space-y-1 md:space-y-1.5 px-0.5">
        <h2 className="text-[20px] md:text-[22px] font-semibold text-slate-900 font-poppins">
          Integrations
        </h2>
        <p className="text-[14px] md:text-[15px] text-slate-400 font-normal font-poppins">
          Manage connected services
        </p>
      </div>

      <div className="space-y-3.5 md:space-y-4 w-full">
        {integrations.map((item) => {
          const Icon = item.icon;
          const isConnected = item.status === "connected";

          return (
            <div
              key={item.id}
              className="p-4 md:p-6 bg-slate-50/50 rounded-[16px] md:rounded-[20px] border-[0.8px] border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-blue-100 transition-all"
            >
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                  <Icon className="w-8 h-8 md:w-9 md:h-9" />
                </div>
                <div className="space-y-0.5 md:space-y-1">
                  <h4 className="text-[15px] md:text-[16px] font-semibold text-slate-900 font-poppins group-hover:text-[#066EFF] transition-colors leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-[13px] md:text-[14px] text-slate-400 font-normal font-poppins leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center self-end sm:self-auto gap-4 pt-1 sm:pt-0">
                {item.id === "github" ? (
                  <span className="text-[13px] md:text-[14px] font-semibold text-[#10B981] font-poppins">
                    Connected
                  </span>
                ) : item.id === "gdrive" ? (
                  <button className="text-[13px] md:text-[14px] font-semibold text-red-500 transition-colors font-poppins cursor-pointer">
                    Disconnect
                  </button>
                ) : isConnected ? (
                  <div className="flex items-center gap-4">
                    <span className="text-[13px] md:text-[14px] font-semibold text-[#10B981] font-poppins">
                      Connected
                    </span>
                    <button className="text-[13px] md:text-[14px] font-semibold text-red-500 transition-colors cursor-pointer font-poppins">
                      Disconnect
                    </button>
                  </div>
                ) : (
                  <button className="w-full sm:w-auto px-6 md:px-8 py-2 md:py-2.5 bg-[#066EFF] text-white rounded-[12px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/10 cursor-pointer text-[13px] md:text-[14px]">
                    Connect
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
