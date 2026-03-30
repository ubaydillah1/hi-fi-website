"use client";

import React, { useState } from "react";
import { Bot, User, Send } from "lucide-react";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
}

const interviewSuggestions = [
  "Tell me about yourself",
  "Why should we hire you?",
  "What's your expected salary?",
  "Describe a challenging project",
];

const BotMessage = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 max-w-[85%]">
    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 shrink-0 border-[0.8px] border-slate-200/50">
      <Bot className="w-4 h-4" />
    </div>
    <div className="bg-slate-50 p-5 rounded-[24px] rounded-tl-none border-[0.8px] border-slate-100 shadow-sm shadow-slate-200/20">
      <p className="text-[15px] text-slate-700 leading-relaxed font-normal">
        {text}
      </p>
    </div>
  </div>
);

const UserMessage = ({ text }: { text: string }) => (
  <div className="flex items-start gap-3 max-w-[85%] ml-auto justify-end">
    <div className="bg-[#066EFF] p-5 rounded-[24px] rounded-tr-none text-white shadow-lg shadow-blue-500/10">
      <p className="text-[15px] leading-relaxed font-normal">{text}</p>
    </div>
    <div className="w-8 h-8 rounded-full bg-[#066EFF]/10 flex items-center justify-center text-[#066EFF] shrink-0 border-[0.8px] border-blue-500/10">
      <User className="w-4 h-4" />
    </div>
  </div>
);

export const ChatSimulation = ({
  companyName,
  type = "recruiter",
  showSuggestions = true,
}: {
  companyName: string;
  type?: "recruiter" | "salary";
  showSuggestions?: boolean;
}) => {
  const [inputText, setInputText] = useState("");

  const initialMessages: Message[] =
    type === "recruiter"
      ? [
          {
            id: "1",
            sender: "bot",
            text: `Welcome to your interview simulation at ${companyName} for the Software Engineer role. I'll be acting as your technical recruiter today. Let's begin!`,
          },
          {
            id: "2",
            sender: "bot",
            text: "First question: Can you tell me about yourself and why you're interested in this position?",
          },
        ]
      : [
          {
            id: "1",
            sender: "bot",
            text: `Let's practice salary negotiation. You've received an offer of Rp 8,000,000/month for a Junior Software Engineer position. The market average is Rp 9,500,000-12,000,000. How would you respond?`,
          },
        ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputText,
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputText("");

    // Optional: Simulate bot response after a delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text:
            type === "recruiter"
              ? "That's a great answer. Can you elaborate further on how your experience aligns with our company values?"
              : "Good approach! You've anchored higher. The recruiter says: 'That's above our initial budget, but we really like your profile. Could you meet us in the middle at Rp 9,000,000?'",
        },
      ]);
    }, 1000);
  };

  return (
    <div
      className="bg-white flex flex-col h-full rounded-[16px] overflow-hidden"
      style={{ border: "0.8px solid #E8ECF0" }}
    >
      <div className="px-5 py-4 border-b-[0.8px] border-[#E8ECF0] flex items-center justify-between bg-slate-50/10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#066EFF] border-[0.8px] border-blue-100 font-bold">
            <Bot className="w-6 h-6" />
          </div>
          <div className="space-y-0.5">
            <h3 className="text-[17px] font-semibold text-slate-900 font-poppins">
              {type === "recruiter"
                ? `Interview at ${companyName}`
                : "Salary Negotiation Coach"}
            </h3>
            <div className="flex items-center gap-1.5 text-emerald-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[13px] font-medium font-poppins">
                Active simulation
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex-1 px-5 py-6 space-y-6 overflow-y-auto no-scrollbar scroll-smooth bg-slate-50/10"
      >
        {messages.map((msg) =>
          msg.sender === "bot" ? (
            <BotMessage key={msg.id} text={msg.text} />
          ) : (
            <UserMessage key={msg.id} text={msg.text} />
          ),
        )}
      </div>

      <div className="px-5 py-6 space-y-6 bg-white border-t-[0.8px] border-[#E8ECF0] shrink-0">
        {showSuggestions && type === "recruiter" && (
          <div className="flex flex-wrap gap-2.5">
            {interviewSuggestions.map((s) => (
              <button
                key={s}
                onClick={() => setInputText(s)}
                className="px-5 py-2.5 rounded-[16px] bg-blue-50/50 border-[0.8px] border-blue-100 text-[#066EFF] text-[13px] font-medium transition-all hover:bg-blue-100/50 font-poppins"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4">
          <div className="flex-1 bg-slate-50 border-[0.8px] border-slate-100 rounded-[16px] px-8 py-4 focus-within:bg-white focus-within:border-blue-200 transition-all">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your response..."
              className="bg-transparent border-none outline-none w-full text-[15px] text-slate-700 placeholder:text-slate-400 font-medium"
            />
          </div>
          <button
            onClick={handleSend}
            className="w-14 h-14 rounded-[16px] bg-[#066EFF] flex items-center justify-center text-white hover:bg-blue-600 transition-all shrink-0 active:scale-95 group shadow-none"
          >
            <Send className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
