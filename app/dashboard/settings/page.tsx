"use client";

import React, { useState } from "react";
import { SettingsSidebar } from "./_components/SettingsSidebar";
import { AccountSettings } from "./_components/AccountSettings";
import { PasswordSecuritySettings } from "./_components/PasswordSecuritySettings";
import { NotificationSettings } from "./_components/NotificationSettings";
import { AppearanceSettings } from "./_components/AppearanceSettings";
import { IntegrationSettings } from "./_components/IntegrationSettings";
import { SupportSettings } from "./_components/SupportSettings";
import { SettingsEmptyState } from "./_components/SettingsEmptyState";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  const getTabLabel = (id: string) => {
    const labels: Record<string, string> = {
      account: "Account",
      security: "Password & Security",
      notifications: "Notifications",
      appearance: "Language & Appearance",
      integrations: "Integrations",
      support: "Help & Support",
    };
    return labels[id] || id;
  };

  return (
    <div className="h-full overflow-y-auto bg-[#F8FAFC]">
      <div className="px-10 pt-10 pb-6">
        <h1 className="text-[28px] font-semibold text-slate-900 font-poppins">
          Settings
        </h1>
      </div>

      <div className="px-10 pb-12 flex gap-8 items-start">
        <SettingsSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div
          className="flex-1 bg-white rounded-[16px] min-w-0"
          style={{ border: "0.8px solid #E8ECF0" }}
        >
          {activeTab === "account" ? (
            <AccountSettings />
          ) : activeTab === "security" ? (
            <PasswordSecuritySettings />
          ) : activeTab === "notifications" ? (
            <NotificationSettings />
          ) : activeTab === "appearance" ? (
            <AppearanceSettings />
          ) : activeTab === "integrations" ? (
            <IntegrationSettings />
          ) : activeTab === "support" ? (
            <SupportSettings />
          ) : (
            <SettingsEmptyState title={getTabLabel(activeTab)} />
          )}
        </div>
      </div>
    </div>
  );
}
