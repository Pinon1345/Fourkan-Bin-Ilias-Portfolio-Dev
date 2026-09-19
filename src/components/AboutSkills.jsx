"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "../data/portfolioData";
import {
  CheckCircle2,
  Code2,
  Cpu,
  Layout,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function AboutSkills() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden rounded-t-xl bg-slate-50/50 dark:bg-slate-950/50 border-t border-slate-200/80 dark:border-slate-800/80"
    >
      {/* Background Glow Accents */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-emerald-600 dark:text-emerald-400">
              About & Expertise
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Architecting modern{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
              web experiences
            </span>
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>
        </motion.div>

        {/* Technical Competencies Grid */}
        <div
          id="skills"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        >
          {/* Core Tech Stack Progress Box (7 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/80 pb-5"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Core Tech Stack
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Proficiency & Hands-on Mastery
                </p>
              </div>
            </motion.div>

            <div className="space-y-5">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={fadeInUp}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center text-sm font-semibold">
                    <span className="text-slate-800 dark:text-slate-200 tracking-wide flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {skill.name}
                    </span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/20">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="w-full bg-slate-200/80 dark:bg-slate-800/80 h-3 rounded-full overflow-hidden p-0.5 border border-slate-300/40 dark:border-slate-700/40">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                      className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 h-full rounded-full relative shadow-[0_0_12px_rgba(16,185,129,0.5)]"
                    >
                      <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/60 rounded-full blur-[1px]" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Developer Highlights Box (5 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-xl shadow-slate-200/50 dark:shadow-none backdrop-blur-xl space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800/80 pb-5">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Why Work With Me
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Production Standards & Engineering Practices
                </p>
              </div>
            </div>

            <ul className="space-y-3.5">
              {[
                "Clean, scalable JavaScript architecture (Next.js & React)",
                "Full-stack proficiency with REST APIs & Express middleware",
                "MongoDB data modeling and authentication integrations (Better Auth)",
                "Fully responsive user interfaces designed with Tailwind CSS & HeroUI",
                "Optimized search engine exposure (SEO) and web security practices",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="group flex items-start gap-3.5 p-3 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 border border-slate-200/50 dark:border-slate-800/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 hover:bg-white dark:hover:bg-slate-800/80 transition-all cursor-default"
                >
                  <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-snug group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
