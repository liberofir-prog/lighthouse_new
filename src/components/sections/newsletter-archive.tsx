"use client";

import Link from "next/link";
import { FadeIn } from "@/lib/motion";
import { newsletters } from "@/data/newsletters";
import { ArrowLeft, BookOpen } from "lucide-react";
import { useState } from "react";

const INITIAL_VISIBLE = 6;

export default function NewsletterArchive() {
  const [showAll, setShowAll] = useState(false);
  if (newsletters.length === 0) return null;

  const visible = showAll ? newsletters : newsletters.slice(0, INITIAL_VISIBLE);
  const hasMore = newsletters.length > INITIAL_VISIBLE;

  // Group by year
  const grouped = visible.reduce<Record<string, typeof newsletters>>((acc, nl) => {
    const year = nl.date.split(" ").at(-1) ?? "אחר";
    if (!acc[year]) acc[year] = [];
    acc[year].push(nl);
    return acc;
  }, {});

  const years = Object.keys(grouped).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="archive" className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative mx-auto max-w-4xl px-5">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-amber tracking-wide">ארכיון</span>
            <h2 className="text-3xl md:text-[2.4rem] font-bold text-primary mt-3 tracking-tight">
              גיליונות קודמים
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-[1rem] leading-relaxed">
              כל הגיליונות פתוחים לקריאה חופשית
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            {years.map((year) => (
              <div key={year}>
                {/* Year label */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-bold text-amber tracking-widest">{year}</span>
                  <div className="flex-1 h-px bg-border/40" />
                </div>

                {/* Issues list */}
                <div className="flex flex-col gap-2">
                  {grouped[year].map((nl) => (
                    <Link
                      key={nl.id}
                      href={nl.url}
                      className="group flex items-center gap-4 px-5 py-4 bg-card/70 rounded-2xl border border-border/20 hover:border-amber/25 hover:shadow-warm hover:bg-card transition-all duration-200"
                    >
                      {/* Icon */}
                      <div className="w-9 h-9 rounded-xl bg-primary/5 group-hover:bg-amber/10 flex items-center justify-center shrink-0 transition-colors duration-200">
                        <BookOpen size={15} className="text-primary/60 group-hover:text-amber transition-colors duration-200" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-foreground text-sm leading-snug truncate group-hover:text-primary transition-colors duration-200">
                          {nl.title}
                        </p>
                        <p className="text-muted-foreground text-xs mt-0.5 line-clamp-1">
                          {nl.excerpt}
                        </p>
                      </div>

                      {/* Date + arrow */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-xs text-muted-foreground/70 hidden sm:block">
                          {nl.date}
                        </span>
                        <ArrowLeft size={14} className="rotate-180 text-muted-foreground/40 group-hover:text-amber group-hover:translate-x-0.5 transition-all duration-200" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        {hasMore && (
          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary/70 hover:text-amber transition-colors duration-200 px-5 py-2.5 rounded-full border border-border/30 hover:border-amber/30 bg-card/50 hover:bg-card"
              >
                {showAll ? "הצג פחות" : `הצג את כל ${newsletters.length} הגיליונות`}
              </button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
