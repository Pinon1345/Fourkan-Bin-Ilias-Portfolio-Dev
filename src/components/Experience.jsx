"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2, Calendar } from "lucide-react";

const experiences = [
  {
    id: 1,
    type: "work",
    role: "Full Stack Web Developer",
    organization: "Independent / Freelance",
    period: "2025 - Present",
    description:
      "Architecting end-to-end full-stack web applications using Next.js, React, Node.js, Express, and MongoDB. Integrating secure payment systems (Stripe) and modern authentication setups (Better Auth).",
    skills: ["Next.js", "React", "MongoDB", "Express", "Tailwind CSS"],
    icon: Briefcase,
  },
  {
    id: 2,
    type: "certification",
    role: "Web Engineering & Full Stack Bootcamp",
    organization: "Bootcamp / Self-Directed",
    period: "2025 - 2026",
    description:
      "Mastered full-stack web architecture, REST API design, MongoDB Atlas database administration, role-based access control (RBAC), and clean code practices.",
    skills: ["JavaScript", "REST APIs", "Node.js", "State Management"],
    icon: Code2,
  },
  {
    id: 3,
    type: "education",
    role: "Professional Certification & Graphics Design",
    organization: "UY Lab",
    period: "2025",
    description:
      "Completed certification focusing on UI/UX principles, visual layout design, digital brand asset creation, and frontend aesthetics.",
    skills: ["UI/UX Design", "Visual Assets", "Layout & Typography"],
    icon: GraduationCap,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            Career & Education
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            My Professional Journey
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A chronological timeline of my practical web development experience,
            technical training, and design certifications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Badge/Node */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8 w-full">
                    <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-500 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">
                        {exp.organization}
                      </p>

                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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
