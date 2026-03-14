"use client";

import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "ענבל ליוותה אותנו בתקופה הכי קשה שחווינו כמשפחה. החום, המקצועיות והרגישות שלה עשו את כל ההבדל. הרגשנו שאנחנו לא לבד.",
    author: "ר. מ.",
    detail: "אמא לשלושה",
  },
  {
    text: "הרגשתי שסוף סוף מישהו באמת מבין את מה שאני עובר. ענבל נתנה לי כלים שעוזרים לי עד היום. היא מצאה את הדרך אליי כשהייתי במקום הכי חשוך.",
    author: "א. כ.",
    detail: "אב לשניים",
  },
  {
    text: "ההדרכת הורים שקיבלנו מענבל שינתה את הדינמיקה המשפחתית שלנו לחלוטין. אנחנו אסירי תודה על הדרך שעברנו יחד.",
    author: "ש. ל.",
    detail: "הורה",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-amber text-amber" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-clip">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-warm to-background" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      {/* Decorative quote mark */}
      <div className="absolute top-16 right-[10%] text-[14rem] font-serif text-amber/[0.04] leading-none select-none pointer-events-none">
        ״
      </div>

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <span className="text-sm font-medium text-amber tracking-wide">
              הלקוחות מספרים
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-primary mt-3 mb-5 tracking-tight">
              מה אומרים עלינו
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg">
              מילים מלקוחות שליווינו בדרך
            </p>
          </FadeIn>
        </div>

        {/* Testimonials grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl p-7 md:p-8 border border-border/30 hover:border-amber/20 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1 flex flex-col">
                  {/* Stars */}
                  <Stars />

                  {/* Quote */}
                  <p className="text-foreground/75 leading-[1.85] mt-5 mb-6 flex-1 text-[0.95rem]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-border/30">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber/15 to-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary/60">
                        {t.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">
                        {t.author}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.detail}</p>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
