"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { ExternalLink, HelpCircle, Users, Sparkles } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50/50 dark:bg-[#0b1121] rounded-t-xl rounded-b-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-7">
            <Sparkles className="w-4 h-4" />
            <h2 className="text-xs font-bold uppercase tracking-widest">
              Portfolio Showcase
            </h2>
          </div>
          <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects & Solutions
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A showcase of applications designed to solve real problems using
            modern full-stack web technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group rounded-2xl flex flex-col overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md shadow-slate-200/50 dark:shadow-none hover:shadow-lg hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300"
            >
              {/* Project Image - Increased size and removed dark overlay */}
              <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <Image
                  width={1200}
                  height={800}
                  src={project.image}
                  alt={project.title}
                  // Using object-top ensures the header/top of web screenshots are always visible
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Subtle inner border to frame the image cleanly */}
                <div className="absolute inset-0 border-b border-slate-200/50 dark:border-slate-800/50 pointer-events-none" />
              </div>

              {/* Project Details */}
              <div className="flex flex-col grow p-6 sm:p-8 space-y-5">
                {/* Relocated Title & Subtitle for better light mode visibility */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1.5 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-emerald-600 dark:text-emerald-400">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem Solved Container */}
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                      <strong className="text-slate-900 dark:text-white font-semibold">
                        Problem Solved:{" "}
                      </strong>
                      {project.problemSolved}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] sm:text-xs font-semibold tracking-wide px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Contributors */}
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 pt-2">
                  <Users className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  <span>Contributor: <span className="font-bold">{project.contributors.join(", ")}</span></span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-8 pt-0 flex items-center gap-4 mt-auto">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors shadow-sm shadow-emerald-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors"
                  aria-label="View Source on GitHub"
                >
                  <VscGithubInverted className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
