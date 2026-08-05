"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/content/session-pages";

export default function SessionFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border shadow-warm transition-colors duration-300 ${
              isOpen
                ? "border-amber/50 bg-amber/[0.06]"
                : "border-border bg-card hover:border-amber/30"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3 p-5 text-right"
            >
              <span className="flex-1 font-bold text-foreground">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="shrink-0"
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground/70" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { type: "spring", stiffness: 200, damping: 25 },
                    opacity: { duration: 0.2 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-base leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
