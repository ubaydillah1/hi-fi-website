"use client";

import React from "react";

const skills = [
  { name: "JavaScript", proficiency: 78, color: "bg-emerald-500" },
  { name: "React", proficiency: 65, color: "bg-amber-500" },
  { name: "Node.js", proficiency: 60, color: "bg-amber-500" },
  { name: "Git", proficiency: 82, color: "bg-emerald-500" },
  { name: "SQL", proficiency: 70, color: "bg-emerald-500" },
  { name: "REST API", proficiency: 72, color: "bg-emerald-500" },
  { name: "CSS/Tailwind", proficiency: 68, color: "bg-amber-500" },
  { name: "Python", proficiency: 52, color: "bg-amber-500" },
];

export const SkillDetails = () => {
  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden flex flex-col h-full"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10 shrink-0">
        <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
          Skill Details
        </h3>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2 group">
            <div className="flex justify-between items-center px-1">
              <span className="text-[15px] font-semibold text-slate-700 font-poppins group-hover:text-slate-900 transition-colors">
                {skill.name}
              </span>
              <span className="text-[13px] font-bold text-slate-400 font-poppins tabular-nums">
                {skill.proficiency}%
              </span>
            </div>
            <div className="h-[10px] w-full bg-slate-50 rounded-full overflow-hidden border-[0.8px] border-slate-100">
              <div
                className={`h-full ${skill.color} transition-all duration-1000 ease-out relative`}
                style={{ width: `${skill.proficiency}%` }}
              >
                <div className="absolute top-0 right-0 h-full w-[20px] bg-white/20 skew-x-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
