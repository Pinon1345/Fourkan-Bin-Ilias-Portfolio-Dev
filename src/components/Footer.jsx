"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Send } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { DiGithub } from "react-icons/di";

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
      // Free email endpoint using Formspree (Replace 'YOUR_FORMSPREE_ID' with your Formspree ID)
      const res = await fetch("https://formspree.io/f/xbldqyqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
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

  return (
    <footer
      id="contact"
      className="bg-slate-900 text-slate-200 pt-20 pb-10 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl font-extrabold text-white">
              Let&apos;s work together
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Have a web development project in mind or want to collaborate?
              Send me a message and I will get back to you as soon as possible!
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-800 text-emerald-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{personalInfo.email}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-800 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <DiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <LiaLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Interactive Email Form */}
          <div className="lg:col-span-7 bg-slate-800/60 p-8 rounded-2xl border border-slate-700/80">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {submitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Fourkan Bin Ilias. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
