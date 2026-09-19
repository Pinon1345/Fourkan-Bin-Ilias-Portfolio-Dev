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
  { name: "Portfolio UI", value: 20, color: "#9333ea" },
  { name: "StudyNook", value: 20, color: "#3b82f6" },
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

export default function Analytics() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="analytics" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-xs font-semibold text-emerald-500 uppercase tracking-widest flex items-center justify-center gap-2">
            <Activity className="w-4 h-4 animate-pulse" /> Live Performance &
            Metrics
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Engineering Metrics & Code Output
          </p>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Quantitative evaluation of code commits, full-stack architectural
            growth, and development milestones.
          </p>
        </div>

        {/* Counter Stats Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {metricStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl ${stat.bgColor} ${stat.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center gap-1">
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
        </div>

        {/* Recharts Graphical Visualizations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Area Chart: Code Commits & Lines of Code over time */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm"
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

          {/* Bar Chart: Project Effort Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
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
