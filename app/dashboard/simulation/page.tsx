"use client";

import React, { useState } from "react";
import { SimulationHeader } from "./_components/SimulationHeader";
import { SimulationTabs } from "./_components/SimulationTabs";
import { CompanyList } from "./_components/CompanyList";
import { ChatSimulation } from "./_components/ChatSimulation";
import { ScenarioCard } from "./_components/ScenarioCard";
import { JobdeskAnalyzer } from "./_components/JobdeskAnalyzer";

export default function CareerSimulationPage() {
  const [activeTab, setActiveTab] = useState("recruiter");
  const [activeCompanyId, setActiveCompanyId] = useState("gojek");

  const getCompanyName = (id: string) => {
    const map: Record<string, string> = {
      gojek: "Gojek",
      tokopedia: "Tokopedia",
      bca: "Bank BCA",
      telkom: "Telkom Indonesia",
      shopee: "Shopee",
      bukalapak: "Bukalapak",
      traveloka: "Traveloka",
    };
    return map[id] || "Company";
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto bg-[#F8FAFC]">
      <div className="px-10 pt-10 pb-4 space-y-6 shrink-0">
        <SimulationHeader />

        <div className="flex justify-start">
          <SimulationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>

      <div className="flex-1 px-10 py-4 min-h-0 flex flex-col">
        {activeTab === "recruiter" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-[600px] pb-[32px]">
            <div className="lg:col-span-4 h-full min-h-0">
              <CompanyList
                activeId={activeCompanyId}
                setActiveId={setActiveCompanyId}
              />
            </div>

            <div className="lg:col-span-8 h-full min-h-0">
              <ChatSimulation companyName={getCompanyName(activeCompanyId)} />
            </div>
          </div>
        ) : activeTab === "salary" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1 min-h-[600px] pb-[32px]">
            <div className="lg:col-span-4 h-full min-h-0">
              <ScenarioCard />
            </div>

            <div className="lg:col-span-8 h-full min-h-0">
              <ChatSimulation
                type="salary"
                showSuggestions={false}
                companyName=""
              />
            </div>
          </div>
        ) : activeTab === "jobdesk" ? (
          <JobdeskAnalyzer />
        ) : (
          <div className="flex flex-col items-center justify-center py-24 p-10 bg-white rounded-[16px] border border-[#E8ECF0]/80">
            <div className="w-20 h-20 bg-slate-50 rounded-[16px] flex items-center justify-center text-slate-300 mb-6 border-[0.8px] border-slate-100">
              <span className="text-[32px]">⏳</span>
            </div>
            <h2 className="text-[20px] font-semibold text-slate-900 font-poppins mb-2 text-center">
              Simulation Module Coming Soon
            </h2>
            <p className="text-slate-400 text-center max-w-md font-normal">
              We&apos;re currently training our AI simulation engine for{" "}
              {activeTab === "salary"
                ? "salary negotiation"
                : "jobdesk analysis"}
              . Stay tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
