"use client";

import { motion } from "framer-motion";
import { Code, Server, Database, Smartphone, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Web Development",
    description:
      "Building responsive, fast, and interactive user interfaces using Next.js, React, Tailwind CSS, and HeroUI with smooth micro-animations.",
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    description:
      "Architecting scalable server-side REST APIs using Node.js and Express.js, complete with secure authentication pipelines and middleware.",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description:
      "Designing efficient MongoDB database schemas, modeling Mongoose data structures, and managing cloud clusters with MongoDB Atlas.",
  },
  {
    icon: Shield,
    title: "Auth & Payment Solutions",
    description:
      "Integrating secure user authentication systems (Better Auth / Auth.js) and online checkout integrations using Stripe Payment APIs.",
  },
  {
    icon: Smartphone,
    title: "Fully Responsive Layouts",
    description:
      "Ensuring seamless cross-device compatibility across desktop screens, tablets, and mobile smartphones with mobile-first CSS strategies.",
  },
  {
    icon: Zap,
    title: "SEO & Performance Optimization",
    description:
      "Optimizing application load times, web core vitals, dynamic metadata structures, and search engine visibility for Next.js web applications.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
            What I Offer
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Full-Stack Solutions & Services
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            High-quality software development services tailored to modern web
            standards and client needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
