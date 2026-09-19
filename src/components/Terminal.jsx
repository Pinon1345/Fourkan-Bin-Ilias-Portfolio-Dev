"use client";

import { useState } from "react";
import {
  Terminal as TerminalIcon,
  CornerDownLeft,
  Sparkles,
} from "lucide-react";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [logs, setLogs] = useState([
    {
      type: "output",
      text: "Welcome to Fourkan OS v2.0 (Full Stack Developer CLI)",
    },
    { type: "output", text: 'Type "help" to see available terminal commands.' },
  ]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...logs, { type: "input", text: `$ ${input}` }];

    switch (cmd) {
      case "help":
        newLogs.push({
          type: "output",
          text: "Available Commands: bio, skills, projects, contact, clear, sudo",
        });
        break;
      case "bio":
        newLogs.push({
          type: "output",
          text: "Fourkan Bin Ilias: Full Stack Web Developer specializing in Next.js, React, Node.js, Express, and MongoDB.",
        });
        break;
      case "skills":
        newLogs.push({
          type: "output",
          text: "Frontend: React, Next.js, Tailwind CSS, HeroUI | Backend: Node.js, Express, MongoDB, REST APIs, Better Auth",
        });
        break;
      case "projects":
        newLogs.push({
          type: "output",
          text: "1. LegalEase (Lawyer Platform) | 2. StudyNook (Resource Hub) | 3. Wanderlust (Travel) | 4. Hireloop (Job Portal)",
        });
        break;
      case "contact":
        newLogs.push({
          type: "output",
          text: "Email: pinonfurkan1@gmail.com | GitHub: github.com/Pinon1345",
        });
        break;
      case "sudo":
        newLogs.push({
          type: "output",
          text: "Access Granted: You are now running with Superuser privileges. Welcome aboard!",
        });
        break;
      case "clear":
        setLogs([]);
        setInput("");
        return;
      default:
        newLogs.push({
          type: "error",
          text: `Command not found: "${cmd}". Type "help" for valid commands.`,
        });
        break;
    }

    setLogs(newLogs);
    setInput("");
  };

  return (
    <section className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header Bar */}
        <div className="rounded-t-2xl bg-slate-800 p-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
              <TerminalIcon className="w-3.5 h-3.5" />{" "}
              developer@fourkan-portfolio:~
            </span>
          </div>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Interactive CLI
          </span>
        </div>

        {/* Terminal Console Output */}
        <div className="p-6 bg-slate-950 rounded-b-2xl font-mono text-sm space-y-3 min-h-[300px] border border-t-0 border-slate-800 shadow-2xl overflow-y-auto max-h-[450px]">
          {logs.map((log, index) => (
            <div key={index} className="leading-relaxed">
              {log.type === "input" && (
                <p className="text-emerald-400 font-semibold">{log.text}</p>
              )}
              {log.type === "output" && (
                <p className="text-slate-300 pl-2">{log.text}</p>
              )}
              {log.type === "error" && (
                <p className="text-rose-400 pl-2">{log.text}</p>
              )}
            </div>
          ))}

          {/* Command Prompt Input */}
          <form
            onSubmit={handleCommand}
            className="flex items-center gap-2 pt-2"
          >
            <span className="text-emerald-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help'..."
              className="flex-1 bg-transparent text-white focus:outline-none font-mono"
            />
            <button
              type="submit"
              className="text-slate-500 hover:text-emerald-400"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
