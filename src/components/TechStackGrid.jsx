"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Server, Database, Wrench, Shield, Layers } from "lucide-react";

const techCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database & Auth",
  "Tools & Workflow",
];

const technologies = [
  { name: "Next.js", category: "Frontend", level: "Advanced", icon: "⚡" },
  { name: "React.js", category: "Frontend", level: "Advanced", icon: "⚛️" },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: "Advanced",
    icon: "🟨",
  },
  { name: "Tailwind CSS", category: "Frontend", level: "Expert", icon: "🎨" },
  {
    name: "HeroUI / ShadCN",
    category: "Frontend",
    level: "Intermediate",
    icon: "🧩",
  },
  { name: "Node.js", category: "Backend", level: "Advanced", icon: "🟢" },
  { name: "Express.js", category: "Backend", level: "Advanced", icon: "🚀" },
  { name: "REST APIs", category: "Backend", level: "Advanced", icon: "🔗" },
  {
    name: "MongoDB & Mongoose",
    category: "Database & Auth",
    level: "Advanced",
    icon: "🍃",
  },
  {
    name: "Better Auth / Stripe",
    category: "Database & Auth",
    level: "Intermediate",
    icon: "🔐",
  },
  {
    name: "Git & GitHub",
    category: "Tools & Workflow",
    level: "Advanced",
    icon: "📦",
  },
  {
    name: "VS Code & Copilot",
    category: "Tools & Workflow",
    level: "Expert",
    icon: "💻",
  },
];

export default function TechStackGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            Tooling & Ecosystem
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Technologies I Work With
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={tech.name}
                className="p-4 rounded-xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:border-emerald-500/50 transition-colors"
              >
                <span className="text-2xl">{tech.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {tech.level}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
