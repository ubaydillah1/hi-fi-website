"use client";

import { ReadinessScoreCard } from "./_components/ReadinessScoreCard";
import { GrowthProgressCard } from "./_components/GrowthProgressCard";
import { QuickActionsCard } from "./_components/QuickActionsCard";
import { SkillsNeedAttentionCard } from "./_components/SkillsNeedAttentionCard";
import { RecentAchievementsCard } from "./_components/RecentAchievementsCard";
import { WelcomeSection } from "./_components/WelcomeSection";

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F8FAFC]">
      <div className="p-10 space-y-5">
        <WelcomeSection name="Alex" streak={3} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-fr">
          <div className="lg:col-span-4 h-full min-h-[340px]">
            <ReadinessScoreCard score={62} trend="+8%" />
          </div>

          <div className="lg:col-span-4 h-full">
            <GrowthProgressCard />
          </div>

          <div className="lg:col-span-4 h-full bg-cover">
            <QuickActionsCard />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-4">
          <SkillsNeedAttentionCard />
          <RecentAchievementsCard />
        </div>
      </div>
    </div>
  );
}
