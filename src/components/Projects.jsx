"use client";

import Image from "next/image";
import { projects } from "../data/portfolioData";
import { ExternalLink, HelpCircle, Users } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            Portfolio Showcase
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Featured Projects & Real World Solutions
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            A showcase of applications designed to solve real problems using
            modern web stacks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    width={800}
                    height={800}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-xs text-emerald-400 font-medium">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Problem Solved */}
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80">
                    <p className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        <strong>Problem Solved:</strong> {project.problemSolved}
                      </span>
                    </p>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Contributors */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span>Contributor: {project.contributors.join(", ")}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="GitHub Repository"
                >
                  <VscGithubInverted className="w-5 h-5 text-slate-700 dark:text-slate-200" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
