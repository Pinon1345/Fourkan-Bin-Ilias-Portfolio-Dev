"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techItems = [
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tag: "Frontend",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    tag: "Framework",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    tag: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    tag: "Styling",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    tag: "Runtime",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    tag: "Backend",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    tag: "Database",
  },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    tag: "IDE",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tag: "Version Control",
  },
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    tag: "Repository",
  },
];

// Duplicate items to ensure a seamless infinite loop
const doubleTechItems = [...techItems, ...techItems];

export default function TechMarquee() {
  return (
    <section className="py-16 relative overflow-hidden bg-slate-950/80 border-y border-slate-800/80">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="text-center mb-8 relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Tech Stack Stream
        </span>
      </div>

      {/* Ticker Container with Gradient Fade Edges */}
      <div className="relative w-full overflow-hidden">
        {/* Left Edge Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none" />

        {/* Right Edge Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none" />

        {/* Moving Track 1: Left to Right */}
        <motion.div
          className="flex items-center gap-6 w-max py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }}
        >
          {doubleTechItems.map((tech, idx) => (
            <motion.div
              key={`tech-1-${idx}`}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 shadow-lg hover:shadow-emerald-500/10 backdrop-blur-xl transition-colors cursor-pointer"
            >
              {/* Premium Inner Glow on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] transition-all">
                <Image
                  width={800}
                  height={800}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100 group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                  {tech.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving Track 2: Right to Left (Reverse Direction for Dynamic FX) */}
        <motion.div
          className="flex items-center gap-6 w-max py-4"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 45,
            repeat: Infinity,
          }}
        >
          {doubleTechItems.map((tech, idx) => (
            <motion.div
              key={`tech-2-${idx}`}
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex items-center gap-4 px-6 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 shadow-lg hover:shadow-cyan-500/10 backdrop-blur-xl transition-colors cursor-pointer"
            >
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 shrink-0 filter drop-shadow-md group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all">
                <Image
                  width={800}
                  height={800}
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-100 group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                  {tech.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
