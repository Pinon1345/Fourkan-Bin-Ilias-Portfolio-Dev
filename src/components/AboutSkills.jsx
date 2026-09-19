"use client";

import { motion } from "framer-motion";
import { personalInfo, skills } from "../data/portfolioData";
import {
  CheckCircle2,
  Code,
  Database,
  Layout,
  Server,
  ShieldCheck,
} from "lucide-react";

export default function AboutSkills() {
  return (
    <section
      id="about"
      className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            About & Expertise
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Architecting modern web experiences
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            {personalInfo.bio}
          </p>
        </div>

        {/* Technical Competencies Progress Cards */}
        <div id="skills" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend & Backend Breakdown */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layout className="w-5 h-5 text-emerald-500" /> Core Tech Stack
              Progress
            </h3>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-1">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-slate-800 dark:text-slate-200">
                      {skill.name}
                    </span>
                    <span className="text-emerald-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Developer Highlights */}
          <div className="p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-500" /> Why Work With
              Me
            </h3>

            <ul className="space-y-4">
              {[
                "Clean, scalable JavaScript architecture (Next.js & React)",
                "Full-stack proficiency with REST APIs & Express middleware",
                "MongoDB data modeling and authentication integrations (Better Auth)",
                "Fully responsive user interfaces designed with Tailwind CSS & HeroUI",
                "Optimized search engine exposure (SEO) and web security practices",
              ].map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
