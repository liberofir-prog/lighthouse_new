"use client";

import { Heart, Users, HandHeart } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";

const areas = [
  {
    icon: Heart,
    title: "מחלה קשה",
    description:
      "ליווי רגשי ורוחני לילדים ומשפחות המתמודדים עם אבחנה של מחלה קשה. יצירת מרחב בטוח לעיבוד רגשות, פחדים ושאלות קיומיות.",
    gradient: "from-rose-50 to-amber/5",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-400",
  },
  {
    icon: HandHeart,
    title: "אובדן ושכול",
    description:
      "תמיכה מקצועית בתהליכי אבל ושכול. סיוע בהתמודדות עם כאב האובדן, בניית משמעות מחדש וליווי בדרך להחלמה רגשית.",
    gradient: "from-blue-50/60 to-amber/5",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "הדרכת הורים במשבר",
    description:
      "הדרכה וכלים מעשיים להורים המתמודדים עם משברים משפחתיים. חיזוק יכולות הורות, שיפור תקשורת ובניית חוסן משפחתי.",
    gradient: "from-emerald-50/60 to-amber/5",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32 overflow-clip">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <span className="text-sm font-medium text-amber tracking-wide">
              השירותים שלנו
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-primary mt-3 mb-5 tracking-tight">
              תחומי מומחיות
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
              הקליניקה מתמחה בליווי רגשי ורוחני מקצועי ואמפתי
              בשלושה תחומים מרכזיים
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area) => (
            <StaggerItem key={area.title}>
              <div className="group relative h-full">
                {/* Hover glow */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-amber/10 to-primary/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div
                  className={`relative h-full bg-gradient-to-br ${area.gradient} rounded-2xl p-8 md:p-9 border border-border/30 hover:border-amber/20 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-1`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl ${area.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <area.icon size={26} className={area.iconColor} strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                    {area.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="mt-6 pt-5 border-t border-border/30">
                    <span className="text-sm font-medium text-primary/70 group-hover:text-amber transition-colors duration-300">
                      למידע נוסף ←
                    </span>
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
