"use client";

import { CheckCircle } from "lucide-react";
import { FadeIn } from "@/lib/motion";

const credentials = [
  "תואר שני בעבודה סוציאלית קלינית",
  "הסמכה בטיפול רגשי בילדים ובני נוער",
  "התמחות בליווי רוחני בתהליכי מחלה ואובדן",
  "ניסיון של למעלה מ-15 שנה בתחום",
  "הדרכת צוותים רפואיים וחינוכיים",
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Profile image placeholder */}
        <FadeIn>
          <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden bg-secondary/40 ring-4 ring-primary/10">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-sm">
              תמונת פרופיל
            </div>
            {/* Replace with next/image when real photo is available */}
          </div>
        </FadeIn>

        {/* Text */}
        <FadeIn delay={0.15}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            ענבל ליבר
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            מטפלת רגשית ומלווה רוחנית
          </p>

          <p className="text-foreground/80 leading-relaxed mb-8">
            {/* Placeholder — replace with real "About" paragraph */}
            ענבל ליבר מלווה ילדים, בני נוער ומשפחות בתהליכים רגשיים מורכבים כבר
            למעלה מ-15 שנה. הגישה הטיפולית שלה משלבת עבודה רגשית-קלינית עם ליווי
            רוחני, תוך יצירת מרחב בטוח, מכיל ואמפתי. ענבל מאמינה שגם ברגעים
            הקשים ביותר אפשר למצוא אור, משמעות וחיבור.
          </p>

          <ul className="space-y-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
