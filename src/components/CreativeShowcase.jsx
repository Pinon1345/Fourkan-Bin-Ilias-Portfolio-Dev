"use client";

import { Image as ImageIcon, Sparkles, ExternalLink } from "lucide-react";
import Image from "next/image";

const creativeWorks = [
  {
    title: "Hireloop Dashboard UI",
    category: "UI/UX Layout",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "LegalEase Brand Identity",
    category: "Graphic Design",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Vector Asset Collection",
    category: "Digital Illustration",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CreativeShowcase() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            Visual Aesthetics
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Graphic Design & Creative Works
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Combining full-stack software development with strong visual design
            principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeWorks.map((work) => (
            <div
              key={work.title}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md bg-slate-900 h-64"
            >
              <Image
                width={800}
                height={800}
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  {work.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
