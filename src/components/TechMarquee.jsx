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
    invertOnDark: true,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    tag: "Language",
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
    invertOnDark: true,
  },
  {
    name: "REST API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    tag: "Architecture",
  },
  {
    name: "DOM API",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    tag: "Web API",
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
    name: "Cursor AI",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
    tag: "AI Editor",
  },
  {
    name: "Lovable",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    tag: "AI Engineer",
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
    invertOnDark: true,
  },
  {
    name: "Vercel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    tag: "Deployment",
    invertOnDark: true,
  },
  {
    name: "Netlify",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    tag: "Deployment",
  },
];

// Duplicate items to ensure a seamless infinite loop

const doubleTechItems = [...techItems, ...techItems];

export default function TechMarquee() {
  return (
    <section className="mx-2 py-12 relative overflow-hidden bg-slate-50/80 dark:bg-slate-950/80 border-y border-slate-200 dark:border-slate-800/80 rounded-xl shadow-lg shadow-gray-300 dark:shadow-gray-900 mb-8 mt-6">

      {/* Background Decorative Ambient Glows */}

      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}

      <div className="text-center mb-8 relative z-10">
        <span className="text-[11px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 inline-flex items-center gap-2 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Live Tech Stack Stream
        </span>
      </div>

      {/* Ticker Container with Smooth Fade Masking */}

      <div className="relative w-full overflow-hidden">

        {/* Soft Left Side Fade */}

        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Soft Right Side Fade */}
        
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-linear-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        {/* Moving Track 1: Left to Right */}

        <motion.div
          className="flex items-center gap-6 w-max py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {doubleTechItems.map((tech, idx) => (
            <motion.div
              key={`tech-1-${idx}`}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex items-center gap-4 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 shadow-sm hover:shadow-emerald-500/10 backdrop-blur-xl transition-all cursor-pointer"
            >
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  width={32}
                  height={32}
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-full h-full object-contain ${
                    tech.invertOnDark ? "dark:invert dark:brightness-200" : ""
                  }`}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
                  {tech.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Moving Track 2: Right to Left */}

        <motion.div
          className="flex items-center gap-6 w-max py-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
          }}
        >
          {doubleTechItems.map((tech, idx) => (
            <motion.div
              key={`tech-2-${idx}`}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex items-center gap-4 px-5 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 shadow-sm hover:shadow-cyan-500/10 backdrop-blur-xl transition-all cursor-pointer"
            >
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  width={32}
                  height={32}
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-full h-full object-contain ${
                    tech.invertOnDark ? "dark:invert dark:brightness-200" : ""
                  }`}
                />
              </div>

              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors whitespace-nowrap">
                  {tech.name}
                </span>
                <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 whitespace-nowrap">
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
