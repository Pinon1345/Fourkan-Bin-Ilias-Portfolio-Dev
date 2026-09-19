"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import Image from "next/image";
import { ArrowRight, Sparkles, FileText, Download } from "lucide-react";
import { IoLogoGithub } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import myImage from "../../public/assets/Professional image.jpeg";

export default function Hero() {
  const [resumeHovered, setResumeHovered] = useState(false);
  const resumeLink =
    "https://drive.google.com/file/d/1h4sgj88qRhSZ56VwzGNoXuyYGhHhGpnc/view";

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-28 overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Dynamic Background Tech Grid Graphics */}

      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

      {/* Animated Glow Orbs & Light Beams */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-125 h-125 bg-emerald-500/20 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-5 -z-10 w-100 h-100 bg-teal-500/20 dark:bg-teal-500/15 rounded-full blur-[100px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Hero Left Content Column */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Pill Badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-emerald-500 animate-spin-slow" />
              <span>Full Stack Web Developer</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Crafting High-Performance <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500">
                Web Experiences
              </span>
            </h1>

            {/* Tagline Paragraph */}

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I&apos;m{" "}
              <span className="font-bold text-slate-900 dark:text-white underline decoration-emerald-500/40 underline-offset-4">
                {personalInfo.name}
              </span>
              . {personalInfo.tagline}
            </p>

            {/* Action Call-To-Action Buttons */}

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3">

              {/* View Projects CTA */}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.a>

              {/* Dynamic Hover Resume Button */}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={resumeLink}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setResumeHovered(true)}
                onMouseLeave={() => setResumeHovered(false)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 border border-slate-300/80 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-md hover:border-emerald-500 dark:hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300"
              >
                {resumeHovered ? (
                  <>
                    <Download className="w-4 h-4 text-emerald-500 animate-bounce" />
                    <span>Download Resume</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>My Resume</span>
                  </>
                )}
              </motion.a>

              {/* Contact Link */}

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white text-sm font-semibold hover:bg-slate-100/60 dark:hover:bg-slate-800/40 transition-all duration-300"
              >
                Contact Me

              </motion.a>
            </div>

            {/* Social Icons Bar */}

            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 transition-all"
                aria-label="GitHub Profile"
              >
                <IoLogoGithub className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 transition-all"
                aria-label="LinkedIn Profile"
              >
                <BsLinkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 transition-all"
                aria-label="Send Email"
              >
                <FaMailBulk className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Hero Right Avatar Frame & Reflection */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative mt-4 lg:mt-0"
          >
            {/* Larger Image Wrapper with Floating Animation */}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-80 h-80 sm:w-96 sm:h-96 xl:w-[410px] xl:h-[410px]"
            >

              {/* Radial Glowing Backdrop Ring */}

              <div className="absolute -inset-2 rounded-[2.5rem] bg-linear-to-tr from-emerald-500 via-teal-500 to-cyan-500 opacity-40 dark:opacity-30 blur-2xl animate-pulse" />

              {/* Glassmorphic Frame Box */}

              <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden border-2 border-emerald-500/40 bg-slate-900/90 p-2.5 shadow-2xl backdrop-blur-md">
                <Image
                  width={900}
                  height={900}
                  src={myImage}
                  alt={personalInfo.name}
                  priority
                  className="w-full h-full object-cover rounded-[1.8rem] filter brightness-105 contrast-105"
                />
              </div>

              {/* Floating Tech Badge 1 (Top Left) */}

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -left-4 sm:-left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 px-4 py-2 rounded-2xl shadow-xl text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                Full Stack Developer
              </motion.div>

              {/* Floating Tech Badge 2 (Bottom Right) */}

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-700/80 px-4 py-2 rounded-2xl shadow-xl text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2"
              >
                <span className="p-1 rounded-full bg-emerald-500/20 text-emerald-400">
                  ⚡
                </span>
                Next.js & MERN Specialist
              </motion.div>
            </motion.div>

            {/* Mirror Floor Reflection Effect */}

            <div className="relative w-80 sm:w-96 xl:w-[410px] h-20 -mt-2 overflow-hidden pointer-events-none select-none opacity-40 dark:opacity-25 hidden sm:block">
              <div className="w-full h-full rounded-[2.2rem] overflow-hidden transform scale-y-[-1] blur-[2px]">
                <Image
                  width={900}
                  height={900}
                  src={myImage}
                  alt="Reflection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Fade out reflection gradient mask */}

              <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/80 dark:via-[#090d16]/80 to-white dark:to-[#090d16]" />
            </div>
          </motion.div>
        </div>

        {/* Live Counter Stats Bar */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl"
        >
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="text-center space-y-1">
              <h3 className="text-3xl sm:text-4xl xl:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-500">
                {stat.value}
                {stat.suffix}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
