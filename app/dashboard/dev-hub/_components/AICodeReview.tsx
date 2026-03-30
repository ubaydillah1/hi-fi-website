"use client";

import React, { useState } from "react";
import { FileCode, RotateCcw, Send, Code2, Terminal } from "lucide-react";

export const AICodeReview = () => {
  const [code, setCode] =
    useState(`// Paste your code here or provide a GitHub repository URL

const express = require('express');
const app = express();

app.get('/users', async (req, res) => {
  const query = \`SELECT * FROM users WHERE name = '\${req.query.name}'\`;
  const users = await db.query(query);
  res.json(users);
});`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
      <div
        className="bg-white rounded-[32px] flex flex-col overflow-hidden"
        style={{ border: "0.8px solid #E8ECF0" }}
      >
        <div className="px-8 py-5 bg-slate-50/50 border-b border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCode className="w-5 h-5 text-[#066EFF]" />
            <h3 className="text-[16px] font-semibold text-slate-800 font-poppins">
              Your Code
            </h3>
          </div>
          <button className="flex items-center gap-2 text-slate-400 hover:text-slate-600 text-[14px] font-medium transition-colors">
            <Code2 className="w-4 h-4" />
            <span>Import from GitHub</span>
          </button>
        </div>

        <div className="p-0 bg-white">
          <div className="bg-[#1E293B] p-8 min-h-[460px] relative">
            <textarea
              className="w-full h-[400px] bg-transparent text-slate-300 font-mono text-[14px] resize-none outline-none leading-relaxed focus:ring-0 border-none scrollbar-hide"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
              style={{ minHeight: "400px" }}
            />
          </div>
        </div>

        <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Terminal className="w-4 h-4" />
            <span className="text-[14px] font-medium font-poppins">
              JavaScript/Node.js detected
            </span>
          </div>
          <button className="flex items-center gap-2.5 bg-[#066EFF] text-white px-8 py-3.5 rounded-[18px] text-[15px] font-semibold shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-600 active:scale-95 group">
            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Review My Code</span>
          </button>
        </div>
      </div>

      <div
        className="bg-white rounded-[32px] flex flex-col overflow-hidden"
        style={{ border: "0.8px solid #E8ECF0" }}
      >
        <div className="px-8 py-5 bg-slate-50/50 border-b border-[#F1F5F9] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <RotateCcw className="w-5 h-5 text-[#066EFF]" />
            <h3 className="text-[16px] font-semibold text-slate-800 font-poppins">
              Review Results
            </h3>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-10 text-center space-y-4 min-h-[460px]">
          <div className="w-20 h-20 flex items-center justify-center text-[#94A3B8] mb-2">
            <Code2 className="w-15 h-15 text-[#E8ECF0]" />
          </div>
          <div className="space-y-2">
            <h4 className="text-[18px] font-semibold text-[#94A3B8] font-poppins">
              Paste your code and click &quot;Review My Code&quot;
            </h4>
            <p className="text-[#C8CDD3] text-[15px] leading-relaxed max-w-sm font-normal">
              Get instant AI-powered feedback on quality, security, and best
              practices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
