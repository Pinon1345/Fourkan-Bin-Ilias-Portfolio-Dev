"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Bell,
  Code2,
  User,
  Cpu,
  FolderGit2,
  Mail,
  Home,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [hasNotification, setHasNotification] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  // Toggle Dark Mode Class on <html>

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Track Header Background Blur on Scroll

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fixed IntersectionObserver for reliably tracking active sections (including short/bottom sections)

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // rootMargin allows detection when sections are near the middle of the screen

        rootMargin: "-20% 0px -35% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    // Handle scroll to the very bottom of the page (activates Contact if stuck)
    
    const handleBottomScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50
      ) {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleBottomScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleBottomScroll);
    };
  }, []);

  const handleNotificationClick = () => {
    setHasNotification(false);
    toast("🚀 Currently available for full-time & freelance projects!", {
      icon: "🔔",
      style: {
        borderRadius: "12px",
        background: "#0f172a",
        color: "#fff",
        border: "1px solid rgba(34, 197, 94, 0.3)",
      },
    });
  };

  const navLinks = [
    { name: "About", href: "#about", id: "about", icon: User },
    { name: "Skills", href: "#skills", id: "skills", icon: Cpu },
    { name: "Projects", href: "#projects", id: "projects", icon: FolderGit2 },
    { name: "Contact", href: "#contact", id: "contact", icon: Mail },
  ];

  return (
    <>
      {/* ================= DESKTOP & TABLET TOP NAVBAR ================= */}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg shadow-slate-950/5 rounded-b-3xl"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="lg:mx-6 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="p-2 rounded-xl bg-linear-to-tr from-emerald-600 via-teal-600 to-cyan-600 text-slate-50 shadow-lg shadow-emerald-500/20"
            >
              <Code2 className="w-5 h-5" />
            </motion.div>
            <span className="md:text-2xl text-xl font-black tracking-tight text-slate-900 dark:text-white">
              FOURKAN<span className="text-emerald-500">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links (Floating Pill Layout) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative px-5 py-2 text-xs font-semibold rounded-full transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500 to-teal-600 shadow-md shadow-emerald-500/30 z-0"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Actions (Notifications, Theme Toggle, Hire Me CTA) */}

          <div className="hidden md:flex items-center gap-3">
            {/* Notification Button */}

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleNotificationClick}
              className="relative p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-700/60 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              {hasNotification && (
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
              )}
            </motion.button>

            {/* Dark / Light Mode Switcher */}

            <motion.button
              whileTap={{ scale: 0.9, rotate: 180 }}
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 transition-colors"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <Sun className="w-4 h-4 text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <Moon className="w-4 h-4 text-indigo-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Hire Me CTA Button */}

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className="px-5 py-2.5 text-xs font-bold rounded-xl text-white/90 bg-linear-to-r from-emerald-600 via-teal-600 to-cyan-700 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" /> Hire Me
            </motion.a>
          </div>

          {/* Mobile Top Controls (Logo + Theme Toggle + Bell Only) */}

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={handleNotificationClick}
              className="relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            >
              <Bell className="w-4 h-4" />
              {hasNotification && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-emerald-500 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              {darkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-600" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE APP-STYLE BOTTOM DOCK NAVBAR ================= */}

      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <nav className="flex items-center justify-around py-2.5 px-3 rounded-2xl bg-slate-900/90 dark:bg-[#0f172a]/95 backdrop-blur-xl border border-slate-800 shadow-2xl shadow-black/50">
          {/* Home / Top Icon */}
          <a
            href="#"
            onClick={() => setActiveSection("hero")}
            className={`flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-all ${
              activeSection === "hero"
                ? "text-emerald-400 scale-110"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </a>

          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveSection(link.id)}
                className={`relative flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium transition-all ${
                  isActive
                    ? "text-emerald-400 scale-110"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{link.name}</span>

                {/* Mobile Active Indicator Dot */}

                {isActive && (
                  <motion.span
                    layoutId="mobileActiveDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#22c55e]"
                  />
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
