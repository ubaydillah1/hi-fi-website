"use client";

import { cn } from "@/lib/utils";
import {
  User,
  Lock,
  Bell,
  Languages,
  Share2,
  HelpCircle,
  LucideIcon,
} from "lucide-react";

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

const settingsTabs: Tab[] = [
  { id: "account", label: "Account", icon: User },
  { id: "security", label: "Password & Security", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "appearance", label: "Language & Appearance", icon: Languages },
  { id: "integrations", label: "Integrations", icon: Share2 },
  { id: "support", label: "Help & Support", icon: HelpCircle },
];

interface SettingsSidebarProps {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const SettingsSidebar = ({
  activeTab,
  setActiveTab,
}: SettingsSidebarProps) => {
  return (
    <div
      className="w-[280px] bg-white rounded-[16px] overflow-hidden flex flex-col self-start shrink-0 sticky top-0"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="p-3 space-y-1">
        {settingsTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-start gap-3.5 px-4 py-3.5 rounded-[12px] transition-all duration-200 group cursor-pointer text-left",
                isActive
                  ? "bg-blue-50 text-[#066EFF]"
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600",
              )}
            >
              <div className="pt-0.5">
                <Icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isActive
                      ? "text-[#066EFF]"
                      : "text-slate-400 group-hover:text-slate-600",
                  )}
                />
              </div>
              <span className="text-[15px] font-medium font-poppins leading-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
