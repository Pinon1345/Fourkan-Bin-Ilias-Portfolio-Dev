"use client";

import { ArrowRight, Mail } from "lucide-react";
import { VscGithubInverted } from "react-icons/vsc";

export default function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl">
          {/* Background Decorative Patterns */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-white/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Have a project idea? <br /> Let&apos;s build something awesome.
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg max-w-2xl">
              I am currently available for full-stack engineering roles,
              contracts, and web application collaborations. Reach out today and
              let&apos;s turn your vision into production code.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg"
              >
                <Mail className="w-4 h-4" /> Start a Conversation{" "}
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Pinon1345"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-medium transition-all"
              >
                <VscGithubInverted className="w-4 h-4" /> View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
