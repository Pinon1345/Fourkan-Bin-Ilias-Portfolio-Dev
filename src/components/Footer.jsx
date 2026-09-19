"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Send, ArrowUpRight, Heart } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "7fcc0e37-4db8-49af-b8ff-f5e55da1575e",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully! I will reply soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (err) {
      toast.error("Something went wrong. Please try emailing directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Terminal CLI", href: "#terminal" },
    { name: "Contact", href: "#contact" },
  ];

  const featuredProjects = [
    { name: "LegalEase Platform", href: "#projects" },
    { name: "Hireloop Job Portal", href: "#projects" },
    { name: "StudyNook Resource Hub", href: "#projects" },
  ];

  return (
    <footer
      id="contact"
      className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-200 dark:border-slate-800">
          {/* Left Column: Bio & Important Navigation Links */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Let&apos;s work together
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
                Have a web development project in mind or looking for a
                full-stack engineer? Send me a message and I&apos;ll get back to
                you promptly.
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-medium w-fit"
              >
                <div className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm font-medium">
                <div className="p-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Important Links & Nav Sections */}
            <div className="grid grid-cols-2 gap-6 pt-2">
              {/* Quick Links */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects Links */}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                  Featured Works
                </h3>
                <ul className="space-y-2">
                  {featuredProjects.map((project) => (
                    <li key={project.name}>
                      <a
                        href={project.href}
                        className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                      >
                        {project.name}
                        <ArrowUpRight className="w-3 h-3 opacity-60" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Connect
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white text-slate-700 dark:text-slate-200 transition-all duration-300"
                >
                  <PiGithubLogoBold className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-emerald-500 dark:hover:bg-emerald-500 hover:text-white text-slate-700 dark:text-slate-200 transition-all duration-300"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Send a Direct Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project or inquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-md shadow-emerald-500/20 cursor-pointer"
              >
                {submitting ? (
                  "Sending Message..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Fourkan Bin Ilias. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs">
            Built with React, Next.js, Tailwind CSS & Others
          </p>
        </div>
      </div>
    </footer>
  );
}
