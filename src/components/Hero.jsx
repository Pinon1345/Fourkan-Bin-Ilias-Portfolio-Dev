"use client";

import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import myImage from "../../public/assets/Professional image.jpeg";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Dynamic Background Tech Grid Graphics */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]" />

      {/* Animated Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 -z-10 w-80 h-80 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Full Stack Web Developer</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Building modern <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">
                scalable applications
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I&apos;m{" "}
              <span className="font-semibold text-slate-900 dark:text-slate-200">
                {personalInfo.name}
              </span>
              . {personalInfo.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-emerald-500 text-white font-medium hover:bg-slate-800 dark:hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500 transition-all"
              >
                <IoLogoGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500 transition-all"
              >
                <BsLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-emerald-500 hover:border-emerald-500 transition-all"
              >
                <FaMailBulk className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Hero Right Avatar Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 animate-float">
              {/* Outer Animated Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 blur-xl opacity-60 animate-pulse" />

              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-emerald-500/40 bg-slate-900 p-2 shadow-2xl">
                <Image
                  width={800}
                  height={800}
                  src={myImage}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover rounded-2xl filter brightness-105 contrast-105"
                />
              </div>

              {/* Floating Tech Badge 1 */}
              <div className="absolute -top-4 -left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Next.js & React
              </div>

              {/* Floating Tech Badge 2 */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-3 py-1.5 rounded-xl shadow-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                Full Stack Specialist
              </div>
            </div>
          </motion.div>
        </div>

        {/* Live Counter Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-slate-800">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-emerald-500">
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
