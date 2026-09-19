"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

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

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TechStackGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? technologies
      : technologies.filter((t) => t.category === activeCategory);

  return (
    <section className="py-20 relative overflow-hidden bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/80 dark:border-slate-800/80 rounded-t-2xl">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-emerald-600 dark:text-emerald-400">
              Tooling & Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        {/* Animated Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {techCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "text-white dark:text-slate-950 font-semibold"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-emerald-500 dark:bg-emerald-400 rounded-xl shadow-md shadow-emerald-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid Cards */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -15 }}
                whileHover={{ scale: 1.04, y: -3 }}
                transition={{
                  layout: { type: "spring", stiffness: 350, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.2 },
                }}
                key={tech.name}
                className="group p-4 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 backdrop-blur-xl flex items-center gap-3.5 transition-colors cursor-pointer"
              >
                <div className="text-2xl p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
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
