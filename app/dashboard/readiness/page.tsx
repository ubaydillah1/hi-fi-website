"use client";

import React, { useState } from "react";
import { ReadinessHeader } from "./_components/ReadinessHeader";
import { ReadinessTabs } from "./_components/ReadinessTabs";
import { StatsCards } from "./_components/StatsCards";
import { AnalysisCards } from "./_components/AnalysisCards";
import { SkillMap } from "./_components/SkillMap";
import { SkillGap } from "./_components/SkillGap";
import { MarketDemand } from "./_components/MarketDemand";

export default function ReadinessCenterPage() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F8FAFC]">
      <div className="p-10 space-y-6">
        <ReadinessHeader />

        <ReadinessTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "overview" && (
          <div className="space-y-6">
            <StatsCards />

            <AnalysisCards />
          </div>
        )}

        {activeTab === "skill-map" && <SkillMap />}

        {activeTab === "skill-gap" && <SkillGap />}

        {activeTab === "market-demand" && <MarketDemand />}
      </div>
    </div>
  );
}
