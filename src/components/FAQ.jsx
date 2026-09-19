"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What primary web tech stack do you build applications with?",
    answer:
      "I specialize in full-stack JavaScript architectures using Next.js (App Router), React, Tailwind CSS, Node.js, Express.js, and MongoDB.",
  },
  {
    question: "Can you work on remote contract or full-time roles?",
    answer:
      "Yes! I am available for full-time full-stack engineering roles, part-time project contracts, and freelance projects globally.",
  },
  {
    question: "How do you handle backend security and payments?",
    answer:
      "I implement secure authentication setups using Better Auth or NextAuth, role-based access control (RBAC), and online payments via Stripe APIs.",
  },
  {
    question:
      "Are all your web applications responsive and search-engine optimized?",
    answer:
      "Yes, every project is built mobile-first using responsive CSS and configured with metadata headers and OpenGraph tags for search engine SEO.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/40 rounded-t-xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            Questions & Answers
          </h2>
          <p className="text-3xl font-bold text-slate-900 dark:text-white">
            Frequently Asked Questions
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-180" : ""}`}
                />
              </button>

              {openIdx === idx && (
                <div className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-300 border-t border-slate-100 dark:border-slate-800/60 pt-4 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
