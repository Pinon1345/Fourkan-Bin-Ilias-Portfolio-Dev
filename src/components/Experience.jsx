"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Calendar,
  Palette,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "education",
    role: "Bachelor of Business Administration (BBA)",
    organization: "International Islamic University Chittagong (IIUC)",
    period: "2023 - 2027 (Ongoing)",
    description:
      "Pursuing higher education with a focus on business environment, management, and organizational dynamics alongside technical engineering.",
    skills: ["Business Law", "Management", "Organizational Strategy"],
    icon: GraduationCap,
    highlight: true,
  },
  {
    id: 2,
    type: "work",
    role: "Full Stack Web Developer",
    organization: "Independent / Freelance",
    period: "2025 - Present",
    description:
      "Architecting end-to-end full-stack web applications using Next.js, React, Node.js, Express, and MongoDB. Integrating secure payment gateways (Stripe) and modern authentication setups (Better Auth).",
    skills: ["Next.js", "React", "MongoDB", "Express", "Tailwind CSS"],
    icon: Briefcase,
    highlight: false,
  },
  {
    id: 3,
    type: "certification",
    role: "Web Engineering & Full Stack Bootcamp",
    organization: "Bootcamp / Self-Directed",
    period: "2025 - 2026",
    description:
      "Mastered full-stack web architecture, REST API design, MongoDB Atlas database administration, role-based access control (RBAC), and clean code practices.",
    skills: ["JavaScript", "REST APIs", "Node.js", "State Management"],
    icon: Code2,
    highlight: false,
  },
  {
    id: 4,
    type: "past-skills",
    role: "Graphic Design Certification (Past Foundation)",
    organization: "UY Lab",
    period: "2025",
    description:
      "Completed certification in graphic design and visual asset creation, providing a solid foundation for modern web UI aesthetics and frontend layout design.",
    skills: ["UI/UX Design", "Visual Assets", "Layout & Typography"],
    icon: Palette,
    highlight: false,
  },
];

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50/50 dark:bg-slate-950/50 relative overflow-hidden border-t border-slate-200/80 dark:border-slate-800/80 rounded-t-2xl"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="text-[11px] font-mono tracking-widest uppercase font-semibold text-emerald-600 dark:text-emerald-400">
              Career & Education
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            My Professional Journey
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            A chronological timeline of my academic background in business,
            full-stack web engineering, and foundational design expertise.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500 via-teal-500 to-slate-200 dark:to-slate-800 -translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className={`absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full text-white shadow-lg z-10 ${
                      exp.highlight
                        ? "bg-linear-to-r from-emerald-500 to-teal-500 shadow-emerald-500/40 ring-4 ring-emerald-500/20"
                        : "bg-slate-800 dark:bg-slate-700 shadow-slate-900/30 border border-slate-700"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <motion.div
                      whileHover={{ y: -5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                      className="p-6 sm:p-7 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-200/50 dark:shadow-none backdrop-blur-xl hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors cursor-default"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{exp.period}</span>
                        </div>

                        {exp.highlight && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                            Academic Degree
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 mb-3">
                        {exp.organization}
                      </p>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
