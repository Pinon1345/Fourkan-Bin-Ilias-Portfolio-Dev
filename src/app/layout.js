import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FOURKAN BIN ILIAS | Full Stack Web Developer Portfolio",
  description:
    "Portfolio of Fourkan Bin Ilias, a passionate Full Stack Web Developer specializing in React, Rest API, DOM, Next.js, Node.js, Express.js, Tailwind CSS, HeroUI, ShadCN, Stripe Payment System, RBAC and MongoDB.",
  keywords: [
    "Fourkan Bin Ilias",
    "Full Stack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Web Developer Bangladesh",
  ],
  openGraph: {
    title: "FOURKAN BIN ILIAS | Full Stack Web Developer",
    description:
      "Building high-performance, scalable, and modern web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 dark:bg-[#090d16] dark:text-slate-100 transition-colors duration-300 min-h-screen antialiased`}
      >
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
