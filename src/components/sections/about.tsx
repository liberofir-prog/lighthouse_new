"use client";

import { CheckCircle } from "lucide-react";
import { FadeIn, ScaleIn } from "@/lib/motion";
import { motion } from "framer-motion";

const credentials = [
  "תואר שני בעבודה סוציאלית קלינית",
  "הסמכה בטיפול רגשי בילדים ובני נוער",
  "התמחות בליווי רוחני בתהליכי מחלה ואובדן",
  "ניסיון של למעלה מ-15 שנה בתחום",
  "הדרכת צוותים רפואיים וחינוכיים",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-amber/3" />

      {/* Decorative blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full bg-amber/4 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid md:grid-cols-[0.8fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Profile image — right side in RTL (displays first) */}
          <ScaleIn>
            <div className="relative mx-auto max-w-sm">
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-[2rem] border-2 border-dashed border-amber/15 rotate-3" />

              {/* Main image container */}
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-gradient-to-br from-secondary via-muted to-warm shadow-warm-lg ring-1 ring-border/20">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-24 h-24 rounded-full bg-amber/8 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-amber/40">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground/30 text-sm">תמונת פרופיל</p>
                </div>
                {/* Warm overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 left-4 bg-card/95 backdrop-blur-sm rounded-xl shadow-warm-lg px-5 py-3 border border-border/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                    <span className="text-amber text-lg font-bold">15+</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">שנות ניסיון</p>
                    <p className="text-xs text-muted-foreground">בליווי משפחות</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScaleIn>

          {/* Text — left side in RTL */}
          <div>
            <FadeIn>
              <span className="text-sm font-medium text-amber tracking-wide">
                הכירו את המטפלת
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-primary mt-3 mb-2 tracking-tight">
                ענבל ליבר
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-lg text-amber/80 font-medium mb-7">
                מטפלת רגשית ומלווה רוחנית
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-foreground/75 leading-[1.85] text-[1.05rem] mb-8">
                ענבל ליבר מלווה ילדים, בני נוער ומשפחות בתהליכים רגשיים מורכבים
                כבר למעלה מ-15 שנה. הגישה הטיפולית שלה משלבת עבודה רגשית-קלינית
                עם ליווי רוחני, תוך יצירת מרחב בטוח, מכיל ואמפתי.
                <span className="block mt-3 text-primary/80 font-medium italic">
                  &ldquo;אני מאמינה שגם ברגעים הקשים ביותר, אפשר למצוא אור,
                  משמעות וחיבור.&rdquo;
                </span>
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="space-y-3.5">
                {credentials.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.08,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-amber/10 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
                      <CheckCircle
                        size={14}
                        className="text-amber"
                      />
                    </div>
                    <span className="text-foreground/75 text-[0.95rem]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
