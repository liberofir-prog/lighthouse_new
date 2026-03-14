"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "תחומי מומחיות", href: "#expertise" },
  { label: "אודות", href: "#about" },
  { label: "המלצות", href: "#testimonials" },
];

function LighthouseIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      className="text-amber"
    >
      {/* Light beam rays */}
      <path
        d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M4.93 19.07l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
      {/* Lighthouse body */}
      <path
        d="M9 22h6M10 22V12h4v10M8 12h8l-1-4H9L8 12z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="oklch(0.78 0.115 75 / 0.15)"
      />
      {/* Light dome */}
      <circle cx="12" cy="6" r="2" fill="currentColor" opacity="0.8" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-warm border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-3.5 md:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <LighthouseIcon />
          <span className="text-2xl font-bold tracking-tight text-primary group-hover:text-amber transition-colors duration-300">
            מגדלור
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/60 hover:text-primary transition-colors duration-300 after:absolute after:bottom-[-4px] after:right-0 after:w-0 after:h-[2px] after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={cn(
              buttonVariants({ size: "sm" }),
              "px-5 rounded-full shadow-warm-lg hover:shadow-warm transition-shadow duration-300"
            )}
          >
            צרו קשר
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2.5 text-foreground/70 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border/40 overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="text-base font-medium py-3 px-3 rounded-xl text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "mt-3 w-full rounded-full justify-center"
                )}
              >
                צרו קשר
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
