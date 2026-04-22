"use client";

import { FadeIn } from "@/lib/motion";
import { motion } from "framer-motion";

export default function TherapistsHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 grain overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />

      {/* Lighthouse beam */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[70%] h-[100%] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 200deg, transparent 0deg, oklch(0.78 0.115 75 / 0.05) 18deg, transparent 36deg)",
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-amber/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 text-center">
        <FadeIn delay={0.1} direction="none">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 bg-primary/6 px-4 py-2 rounded-full w-fit border border-primary/12 shadow-sm mx-auto">
            <span className="w-2 h-2 rounded-full bg-amber" />
            מרחב מקצועי למטפלים
          </span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-[2.2rem] md:text-5xl font-bold leading-[1.2] tracking-tight mt-5 text-primary">
            מיגדלור{" "}
            <span className="relative inline-block">
              למטפלים
              <svg
                className="absolute -bottom-1.5 right-0 w-full h-3 text-amber/50"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8 Q50 2 100 7 Q150 12 198 4"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.35}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-5 max-w-2xl mx-auto">
            מרחב מקצועי לחיבור, השראה ועדכונים בתחום ליווי רוחני ו-play
            therapy. הצטרפו לקהילת המטפלים שבוחרים להמשיך ולצמוח.
          </p>
        </FadeIn>

        <FadeIn delay={0.5}>
          <motion.div
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { label: "ניוזלטר חודשי", desc: "עדכונים מהשדה" },
              { label: "ארכיון גיליונות", desc: "תוכן מקצועי" },
              { label: "ייעוץ קולגיאלי", desc: "הפניות ושיתוף" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-card/70 border border-border/25 rounded-2xl px-5 py-3 shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-amber shrink-0" />
                <div className="text-right">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
