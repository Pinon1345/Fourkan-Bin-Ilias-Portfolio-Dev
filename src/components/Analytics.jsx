"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import {
  Code2,
  GitCommit,
  Layers,
  Users,
  TrendingUp,
  Activity,
  CheckCircle2,
} from "lucide-react";

// Real-world analytics & development activity data
const activityData = [
  { month: "Jan", commits: 45, linesOfCode: 2400 },
  { month: "Feb", commits: 52, linesOfCode: 3100 },
  { month: "Mar", commits: 78, linesOfCode: 4800 },
  { month: "Apr", commits: 64, linesOfCode: 3900 },
  { month: "May", commits: 95, linesOfCode: 6200 },
  { month: "Jun", commits: 110, linesOfCode: 7500 },
  { month: "Jul", commits: 125, linesOfCode: 8900 },
  { month: "Aug", commits: 140, linesOfCode: 9800 },
];

const projectDistribution = [
  { name: "LegalEase", value: 35, color: "#22c55e" },
  { name: "Hireloop", value: 25, color: "#06b6d4" },
  { name: "StudyNook", value: 22, color: "#3b82f6" },
  { name: "BookBorrow", value: 20, color: "#9333ea" },
];

const metricStats = [
  {
    id: 1,
    title: "Total Code Commits",
    value: 710,
    suffix: "+",
    icon: GitCommit,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 2,
    title: "Lines of Code Written",
    value: 46600,
    suffix: "+",
    icon: Code2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    id: 3,
    title: "Full-Stack Projects Built",
    value: 12,
    suffix: "",
    icon: Layers,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    id: 4,
    title: "User Access & Portal Roles",
    value: 100,
    suffix: "%",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
];

// Framer Motion Animation Variants

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function Analytics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">

      {/* Background Glow Overlay */}

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-125 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-7 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <Activity className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-500 uppercase tracking-widest">
              Live Performance & Metrics
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering Metrics & Code Output
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Quantitative evaluation of code commits, full-stack architectural
            growth, and development milestones.
          </p>
        </motion.div>

        {/* Counter Stats Grid */}
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metricStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="p-6 rounded-2xl bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-colors duration-300 group cursor-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${stat.bgColor} ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-500" /> Live
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        separator=","
                      />
                    ) : (
                      "0"
                    )}
                    <span className="text-emerald-500">{stat.suffix}</span>
                  </h3>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Area Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-emerald-500/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <GitCommit className="w-5 h-5 text-emerald-500" /> Development
                  Trajectory
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Monthly commit frequency and lines of code shipped
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Commits
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block" />
                  <span className="text-slate-600 dark:text-slate-300">
                    Lines of Code
                  </span>
                </div>
              </div>
            </div>

            <div className="h-72 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={activityData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorCommits"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorCode" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#334155"
                    opacity={0.2}
                  />
                  <XAxis
                    dataKey="month"
                    stroke="#94a3b8"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderColor: "#334155",
                      borderRadius: "12px",
                      color: "#fff",
                      fontSize: "12px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="commits"
                    stroke="#22c55e"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorCommits)"
                  />
                  <Area
                    type="monotone"
                    dataKey="linesOfCode"
                    stroke="#06b6d4"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorCode)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.45 }}
            whileHover={{ y: -4 }}
            className="p-6 sm:p-8 rounded-2xl bg-white/80 dark:bg-[#0f172a]/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all duration-300 hover:border-cyan-500/40 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-5 h-5 text-cyan-500" /> Architecture
                Share
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Percentage focus across main projects
              </p>

              <div className="h-52 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={projectDistribution}
                    layout="vertical"
                    margin={{ top: 0, right: 10, left: 10, bottom: 0 }}
                  >
                    <XAxis type="number" hide />
                    <YAxis
                      dataKey="name"
                      type="category"
                      stroke="#94a3b8"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      width={80}
                    />
                    <Tooltip
                      cursor={{ fill: "transparent" }}
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        borderColor: "#334155",
                        borderRadius: "12px",
                        color: "#fff",
                        fontSize: "12px",
                      }}
                    />
                    <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={20}>
                      {projectDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Stack: Next.js, Node.js, Express, MongoDB</span>
              <span className="font-semibold text-emerald-500">
                100% Production Ready
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
