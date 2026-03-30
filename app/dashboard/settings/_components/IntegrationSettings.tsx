"use client";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { Link2 } from "lucide-react";

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
    <div className="p-10 space-y-4 w-full">
      <div className="space-y-1.5">
        <h2 className="text-[22px] font-semibold text-slate-900 font-poppins">
          Integrations
        </h2>
        <p className="text-[15px] text-slate-400 font-normal font-poppins">
          Manage connected services
        </p>
      </div>

      <div className="space-y-4 w-full pt-4">
        {integrations.map((item) => {
          const Icon = item.icon;
          const isConnected = item.status === "connected";

          return (
            <div
              key={item.id}
              className="p-6 bg-slate-50/50 rounded-[16px] border-[0.8px] border-slate-100 flex items-center justify-between group hover:border-blue-100 transition-all"
            >
              <div className="flex items-center gap-5">
                <div className="flex items-center justify-center">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-semibold text-slate-900 font-poppins group-hover:text-[#066EFF] transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[14px] text-slate-400 font-normal font-poppins">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {item.id === "github" ? (
                  <span className="text-[14px] font-semibold text-[#10B981] font-poppins">
                    Connected
                  </span>
                ) : item.id === "gdrive" ? (
                  <button className="text-[14px] font-semibold text-red-500 transition-colors font-poppins">
                    Disconnect
                  </button>
                ) : isConnected ? (
                  <>
                    <span className="text-[14px] font-semibold text-[#10B981] font-poppins">
                      Connected
                    </span>
                    <button className="text-[14px] font-semibold text-red-500 transition-colors cursor-pointer font-poppins">
                      Disconnect
                    </button>
                  </>
                ) : (
                  <button className="px-8 py-2.5 bg-[#066EFF] text-white rounded-[12px] font-semibold font-poppins hover:bg-blue-600 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/10 cursor-pointer">
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
