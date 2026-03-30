"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  ShieldCheck,
  Code2,
  Briefcase,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  {
    icon: ShieldCheck,
    label: "Readiness Center",
    href: "/dashboard/readiness",
  },
  { icon: Code2, label: "Development Hub", href: "/dashboard/dev-hub" },
  {
    icon: Briefcase,
    label: "Career Simulation",
    href: "/dashboard/simulation",
  },
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export const DashboardSidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      className="w-[280px] bg-white flex flex-col h-full shrink-0"
      style={{ borderRight: "0.8px solid #E8ECF0" }}
    >
      <div className="p-8 -mt-2">
        <Link href="/dashboard">
          <Image
            src="/assets/images/logo.png"
            alt="Wirapath Logo"
            width={140}
            height={36}
            className="object-contain"
          />
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3.5 rounded-[16px] transition-all duration-200 group",
                isActive
                  ? "bg-[#066EFF] text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:bg-slate-50 hover:text-slate-600",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive
                    ? "text-white"
                    : "text-slate-400 group-hover:text-slate-600",
                )}
              />
              <span className="text-[15px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        <button className="flex items-center gap-4 px-4 py-3.5 w-full rounded-[16px] text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 group cursor-pointer">
          <LogOut className="w-5 h-5" />
          <span className="text-[15px] font-semibold">Log Out</span>
        </button>
      </div>
    </aside>
  );
};
