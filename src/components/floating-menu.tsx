"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "תחומי מומחיות", href: "/#expertise"    },
  { label: "אודות",          href: "/#about"        },
  { label: "המלצות",         href: "/#testimonials" },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2.5 rounded-xl text-white bg-black/25 backdrop-blur-sm hover:bg-black/40 shadow-sm transition-all duration-300"
        onClick={() => setOpen(!open)}
        aria-label="תפריט"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background/98 backdrop-blur-xl shadow-warm-lg border-r border-border/40 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-start p-4 border-b border-border/30">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-xl hover:bg-primary/5 text-foreground/70 hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 px-4 py-5 flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="text-base font-semibold py-3 px-3 rounded-xl text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07, duration: 0.3 }}
                >
                  <Link
                    href="/metataplim"
                    className="flex items-center gap-2 text-base font-semibold py-3 px-3 rounded-xl text-primary bg-amber/8 border border-amber/20 hover:bg-amber/15 transition-all duration-200"
                    onClick={() => setOpen(false)}
                  >
                    מיגדלור <strong>למטפלים</strong>
                  </Link>
                </motion.div>

                <motion.a
                  href="/#contact"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.07, duration: 0.3 }}
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "mt-3 w-full rounded-full justify-center"
                  )}
                >
                  צרו קשר
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
