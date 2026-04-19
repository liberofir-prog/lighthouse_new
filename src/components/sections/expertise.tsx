"use client";

import { Heart, Users, HandHeart, Brain } from "lucide-react";
import { StaggerContainer, StaggerItem, FadeIn } from "@/lib/motion";

const areas = [
  {
    icon: Brain,
    title: "קשיים רגשיים או התנהגותיים ומשברי חיים",
    description:
      "טיפול רגשי לילדים המתמודדים עם קשיים רגשיים או התנהגותיים, ועם משברי חיים משמעותיים. בתהליך מותאם ואמפתי ניתן מקום לרגשות, מחזקים כוחות התמודדות ומסייעים לילד ולמשפחה למצוא יציבות וכיוון מחדש.",
    examples:
      "גירושין, שינויים משמעותיים בחיי המשפחה, תקופות של מתח ואי-ודאות (כמו: מלחמה), התפרצויות זעם, עצב, פחדים חרדות , קשיים חברתיים, הסתגרות ועוד.",
    accentColor: "bg-purple-400",
    iconBg: "bg-purple-50",
    iconColor: "text-purple-400",
  },
  {
    icon: Heart,
    title: "מחלה כרונית או קשה",
    description:
      "טיפול רגשי וליווי רוחני לילדים ולהוריהם המתמודדים עם מחלה כרונית או מחלה קשה. המרחב מאפשר עיבוד רגשות, התמודדות עם פחדים ואי-ודאות וחיזוק תחושת הביטחון והמשמעות בתוך המציאות המשתנה. העבודה כוללת גם הדרכת הורים וכלים לתמיכה בילד ובמשפחה לאורך הדרך.",
    examples:
      "אבחנה רפואית חדשה, מחלה קשה של הילד או ההורה, אשפוזים ממושכים או טיפולים רפואיים מורכבים, תמיכה רגשית לאחים לילד עם צרכים מיוחדים.",
    accentColor: "bg-rose-400",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-400",
  },
  {
    icon: HandHeart,
    title: "אובדן ושכול",
    description:
      "טיפול, ליווי ותמיכה מקצועית לילדים, להורים ולמשפחות המתמודדים עם אובדן. המרחב מאפשר לתת מקום לכאב, לעבד את חוויית האבל ולהתמודד עם השינויים שהאובדן מביא לחיים. בתהליך מותאם אישית נבנית בהדרגה אפשרות לחיבור למשמעות, לכוחות ולדרך קדימה.",
    examples:
      "לידה שקטה, אובדן של בן משפחה קרוב, סוף חיים וליווי בפרידה, תהליך אבל.",
    accentColor: "bg-blue-400",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-400",
  },
  {
    icon: Users,
    title: "הדרכת הורים במשבר",
    description:
      "ליווי והדרכה להורים המתמודדים עם משבר משפחתי או תקופה מורכבת בחיי הילד והמשפחה. בתהליך ההדרכה ניתנים כלים מעשיים לחיזוק ההורות, להבנת עולמו הרגשי של הילד ולשיפור התקשורת בתוך המשפחה. ההדרכה מסייעת להורים ליצור יציבות, ביטחון וחוסן משפחתי גם בתקופות מאתגרות.",
    examples: "",
    accentColor: "bg-emerald-500",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
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
              הקליניקה מתמחה בטיפול רגשי וליווי רוחני מקצועי ואמפתי
            </p>
          </FadeIn>
        </div>

        {/* Cards — 2×2 grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {areas.map((area) => (
            <StaggerItem key={area.title}>
              <div className="group relative h-full">
                {/* Hover glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber/8 to-primary/4 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-amber/20 shadow-warm hover:shadow-warm-lg transition-all duration-500 hover:-translate-y-0.5 overflow-hidden">
                  {/* RTL: right-side accent bar */}
                  <div className={`absolute top-0 right-0 w-1 h-full ${area.accentColor} rounded-r-2xl`} />

                  <div className="p-7 md:p-8 pr-8 md:pr-9">
                    {/* Header row: icon + title */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl ${area.iconBg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}
                      >
                        <area.icon size={22} className={area.iconColor} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {area.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/85 leading-[1.8] text-[0.925rem]">
                      {area.description}
                    </p>

                    {/* Examples — subtle tag-like treatment */}
                    {area.examples && (
                      <div className="mt-5 pt-4 border-t border-border/25">
                        <p className="text-[0.8rem] text-muted-foreground leading-relaxed">
                          <span className="inline-block font-semibold text-foreground/70 mb-1">
                            מצבים כגון:
                          </span>
                          <br />
                          {area.examples}
                        </p>
                      </div>
                    )}
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
