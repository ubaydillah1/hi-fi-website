"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  ShieldCheck,
  Code2,
  Briefcase,
  User,
  Settings,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

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

export const DashboardSidebar = ({ className, isMobile }: { className?: string; isMobile?: boolean }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Optional: Clear any local storage or session cookies here
    router.push("/");
  };

  return (
    <aside
      className={cn("w-[280px] bg-white flex flex-col h-full shrink-0", className)}
      style={!isMobile ? { borderRight: "0.8px solid #E8ECF0" } : undefined}
    >
      <div className="p-8 -mt-2 flex items-center justify-between">
        <Link href="/dashboard">
          <Image
            src="/assets/images/logo.png"
            alt="Wirapath Logo"
            width={140}
            height={36}
            className="object-contain"
          />
        </Link>
        
        {/* Custom Mobile Close Button */}
        {isMobile && (
          <SheetClose asChild>
            <button className="lg:hidden p-2 -mr-2 text-slate-400 hover:bg-slate-50 rounded-xl transition-all active:scale-95">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </SheetClose>
        )}
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const content = (
            <Link
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

          return isMobile ? (
            <SheetClose asChild key={item.label}>
              {content}
            </SheetClose>
          ) : (
            <React.Fragment key={item.label}>{content}</React.Fragment>
          );
        })}
      </nav>

      <div className="p-4 border-t border-gray-50">
        {isMobile ? (
          <SheetClose asChild>
            <button
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3.5 w-full rounded-[16px] text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 group cursor-pointer"
            >
              <LogOut className="w-5 h-5" />
              <span className="text-[15px] font-semibold">Log Out</span>
            </button>
          </SheetClose>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-4 px-4 py-3.5 w-full rounded-[16px] text-slate-400 hover:bg-red-50 hover:text-red-500 transition-all duration-200 group cursor-pointer"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-[15px] font-semibold">Log Out</span>
          </button>
        )}
      </div>
    </aside>
  );
};
