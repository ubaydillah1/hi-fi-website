"use client";

import React from "react";
import { FileText, Files, Download } from "lucide-react";

export const DocumentsCard = () => {
  return (
    <div
      className="bg-white rounded-[16px] overflow-hidden flex flex-col"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] bg-slate-50/10">
        <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
          Documents
        </h3>
      </div>
      <div className="p-5 space-y-4">
        <div className="p-4 bg-slate-50/50 rounded-[12px] flex items-center justify-between border-[0.8px] border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center border-[0.8px] border-slate-100 shadow-sm shadow-slate-200/50">
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-slate-900 font-poppins">
                CV
              </p>
              <p className="text-[13px] text-slate-400 font-medium font-poppins">
                alex_rahman_cv.pdf
              </p>
            </div>
          </div>
          <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>

        <div className="p-4 bg-slate-50/50 rounded-[12px] flex items-center justify-between border-[0.8px] border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[10px] bg-white flex items-center justify-center border-[0.8px] border-slate-100 shadow-sm shadow-slate-200/50">
              <Files className="w-5 h-5 text-amber-500" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-slate-900 font-poppins">
                Transcript
              </p>
              <p className="text-[13px] text-slate-400 font-medium font-poppins">
                academic_transcript.pdf
              </p>
            </div>
          </div>
          <Download className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>
      </div>
    </div>
  );
};
