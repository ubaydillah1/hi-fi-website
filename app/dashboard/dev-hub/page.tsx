"use client";

import React, { useState } from "react";
import { DevHubHeader } from "./_components/DevHubHeader";
import { DevHubTabs } from "./_components/DevHubTabs";
import { ProjectGrid } from "./_components/ProjectGrid";
import { AICodeReview } from "./_components/AICodeReview";

export default function DevHubPage() {
  const [activeTab, setActiveTab] = useState("mini-projects");

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F8FAFC]">
      <div className="p-10 space-y-10 max-w-[1400px] mx-auto w-full">
        <DevHubHeader />

        <div className="flex justify-start">
          <DevHubTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        <div className="-mt-8">
          {activeTab === "mini-projects" ? <ProjectGrid /> : <AICodeReview />}
        </div>
      </div>
    </div>
  );
}
