"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleAnchorClick } from "@/lib/smooth-scroll";

const navLinks = [
  { label: "תחומי מומחיות", href: "/#expertise"    },
  { label: "אודות",          href: "/#about"        },
  { label: "המלצות",         href: "/#testimonials" },
];

export default function Header() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const anchorProps = (href: string) =>
    isHome
      ? { href: href.replace("/", ""), onClick: handleAnchorClick }
      : { href };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl shadow-warm border-b border-border/40"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl flex items-center justify-between px-5 py-2.5 md:py-3">

        {/* ── Logo ── */}
        <Link href="/">
          <Logo scale={1} />
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <a
              key={link.href}
              {...anchorProps(link.href)}
              className="relative text-[0.95rem] font-semibold text-foreground/95 hover:text-primary transition-colors duration-300
                         drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]
                         after:absolute after:bottom-[-4px] after:right-0
                         after:w-0 after:h-[2px] after:bg-amber
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          {/* מיגדלור למטפלים — לפני צרו קשר, עם highlight */}
          <Link
            href="/metataplim"
            className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-primary
                       bg-amber/10 hover:bg-amber/18 border border-amber/25 hover:border-amber/40
                       px-4 py-1.5 rounded-full transition-all duration-300"
          >
            מיגדלור <strong>למטפלים</strong>
          </Link>

          <
            {...anchorProps("/#contact")}
            className={cn(
              buttonVariants({ size: "sm" }),
              "px-5 rounded-full shadow-warm hover:shadow-warm-lg transition-shadow duration-300"
            )}
          >
            צרו קשר
          </a>
        </nav>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2.5 text-foreground/90 hover:text-primary transition-colors rounded-xl hover:bg-primary/5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="תפריט"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{   opacity: 0, height: 0 }}
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
                  transition={{ delay: (i + 1) * 0.08, duration: 0.3 }}
                  className="text-base font-semibold py-3 px-3 rounded-xl text-foreground
                             hover:text-primary hover:bg-primary/5 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* מיגדלור למטפלים — לפני צרו קשר */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
              >
                <Link
                  href="/metataplim"
                  className="flex items-center gap-2 text-base font-semibold py-3 px-3 rounded-xl
                             text-primary bg-amber/8 border border-amber/20
                             hover:bg-amber/15 transition-all duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  מיגדלור <strong>למטפלים</strong>
                </Link>
              </motion.div>

              <motion.a
                href={isHome ? "#contact" : "/#contact"}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.08, duration: 0.3 }}
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
