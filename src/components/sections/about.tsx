"use client";

import Image from "next/image";
import { CheckCircle, GraduationCap, Briefcase, Sparkles, Play, ExternalLink, Newspaper } from "lucide-react";
import { FadeIn, ScaleIn } from "@/lib/motion";
import { motion } from "framer-motion";

const education = [
  "עו\u05F4ד בעלת תואר שני במשפטים (אוניברסיטת חיפה) בתחום רפואה ומשפט וזכויות ילדים עם מוגבלויות",
  "לימודי ליווי רוחני במסגרת מכללת רמב\u05F4ם-ידע",
  "הסמכה בליווי רוחני מטעם העמותה לליווי רוחני בישראל",
  "לימודי ליווי רוחני בילדים ובני משפחותיהם מטעם מכללת רמב\u05F4ם-ידע",
  "מדריכת הורים מטעם אוניברסיטת בר־אילן (היחידה ללימודי תעודה) ובית הספר לפסיכותרפיה במשחק",
  "סטאז\u05F3רית (שנה שנייה) בפסיכותרפיה במשחק מטעם אוניברסיטת בר־אילן (היחידה ללימודי תעודה) ובית הספר לפסיכותרפיה במשחק",
];

const experience = [
  "בית חולים לילדים רות רפפורט - ליווי רוחני לילדים ובני משפחותיהם",
  "מרכז אלה - ליווי בתהליכי אובדן ושכול טראומטיים",
  "קליניקה פרטית \"מגדלור\" (ביישוב אלפי מנשה) - ליווי רגשי, רוחני והדרכת הורים",
];

const lectures = [
  {
    title: "ביקור בארץ לעולם-לא - ליווי רוחני",
    url: "https://www.youtube.com/watch?v=K2QHA5qWR6c",
    thumbnail: "https://i.ytimg.com/vi/K2QHA5qWR6c/hqdefault.jpg",
    channel: "Rambam Pro",
  },
  {
    title: "ליווי רוחני לילדים ובני משפחותיהם",
    url: "https://www.youtube.com/watch?v=y4ZGHgc1F-8",
    thumbnail: "https://i.ytimg.com/vi/y4ZGHgc1F-8/hqdefault.jpg",
    channel: "Rambam Pro",
  },
];

const pressArticles = [
  {
    title: "ילדים יודעים כשהם לקראת סוף החיים. היכולות הפילוסופיות שלהם מדהימות",
    url: "https://www.haaretz.co.il/health/personnel/2023-06-11/ty-article/00000188-a676-d466-af9b-e6fe30b40001",
    source: "הארץ",
  },
  {
    title: "המלווים הרוחניים שנמצאים שם עבור החולים היותר קשים",
    url: "https://www.ynet.co.il/health/article/B1oXsUiov",
    source: "ynet",
  },
  {
    title: "נולד לכם פג? חשוב שתדעו שמגיע לכם ליווי",
    url: "https://www.mako.co.il/ninemonth-birth/Article-47aab6edae82e71026.htm",
    source: "mako",
  },
];

function CredentialItem({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: 0.15 + index * 0.05,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex items-start gap-3 group"
    >
      <div className="mt-1 w-[18px] h-[18px] rounded-full bg-amber/12 flex items-center justify-center shrink-0 group-hover:bg-amber/20 transition-colors">
        <CheckCircle size={12} className="text-amber" />
      </div>
      <span className="text-foreground/90 text-[0.9rem] leading-relaxed">{children}</span>
    </motion.li>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-amber/3" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-amber/4 blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 space-y-16">

        {/* ═══════════════════════════════════════════
            ROW 1 — Intro: Image + Bio + Accent Card
            ═══════════════════════════════════════════ */}
        <div>
          {/* Section header — centered */}
          <div className="text-center mb-10 md:mb-14">
            <FadeIn>
              <span className="text-sm font-medium text-amber tracking-wide">
                נעים להכיר
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-primary mt-3 mb-2 tracking-tight">
                ענבל ליבר
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-base md:text-lg text-primary/70 font-medium max-w-2xl mx-auto">
                מדריכת הורים, מלווה רוחנית ופסיכותרפיסטית בהתמחות (שנה שנייה) בגישת Play Therapy
              </p>
            </FadeIn>
          </div>

          {/* Image + Bio side by side */}
          <div className="grid md:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
            {/* Profile image — compact, not sticky */}
            <ScaleIn>
              <div className="relative mx-auto w-64 md:w-72">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-[1.75rem] border-2 border-dashed border-amber/12 rotate-2" />

                {/* Main image */}
                <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-warm-lg ring-1 ring-border/20">
                  <Image
                    src="/inbal-profile.jpg"
                    alt="ענבל ליבר - מטפלת רגשית ומלווה רוחנית"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 70vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent" />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute -bottom-4 left-3 bg-card/95 backdrop-blur-sm rounded-xl shadow-warm-lg px-4 py-2.5 border border-border/30"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-amber/10 flex items-center justify-center">
                      <span className="text-amber text-base font-bold">+8</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground leading-tight">שנות ניסיון</p>
                      <p className="text-xs text-muted-foreground">בליווי משפחות</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScaleIn>

            {/* Bio + Accent card */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div>
                  <p className="text-foreground/90 leading-[1.85] text-[1.02rem] mb-4">
                    ענבל ליבר מלווה ילדים והוריהם המתמודדים עם מחלה, משבר או שינוי
                    משמעותי בחיים כבר למעלה מ־8 שנים.
                  </p>
                  <p className="text-foreground/90 leading-[1.85] text-[1.02rem]">
                    בעבודתה היא יוצרת מרחב בטוח, מכיל ואמפתי, שבו ילדים יכולים
                    לבטא רגשות, פחדים וחוויות בדרך שמתאימה להם - ובמקביל מקבלים
                    ההורים ליווי והדרכה לאורך הדרך.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-amber/12 shadow-warm">
                  <div className="flex items-center gap-2.5 mb-4">
                    <Sparkles size={18} className="text-amber" />
                    <h3 className="text-lg font-bold text-primary">
                      מה מייחד את הליווי במגדלור
                    </h3>
                  </div>
                  <div className="space-y-3 text-foreground/90 leading-[1.8] text-[0.95rem]">
                    <p>
                      גישת העבודה במגדלור משלבת ליווי רוחני עם הבעה, יצירה ומשחק.
                    </p>
                    <p>
                      טיפול במשחק (Play Therapy) מאפשר לילדים לבטא את עולמם הפנימי
                      דרך משחק, דמיון ויצירה - במיוחד כאשר קשה להם להסביר במילים
                      את מה שהם מרגישים.
                    </p>
                    <p>
                      הליווי הרוחני מסייע לילד ולמשפחתו למצוא משמעות, כוחות פנימיים
                      ותחושת יציבות בתוך מציאות מורכבת של מחלה, אובדן או משבר.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 2 — Credentials: Education | Experience
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FadeIn delay={0.15}>
            <div className="bg-card/40 rounded-xl p-5 md:p-6 border border-border/25 h-full">
              <div className="flex items-center gap-2 mb-5">
                <GraduationCap size={18} className="text-amber" />
                <h3 className="text-base font-bold text-primary">
                  השכלה והכשרה מקצועית
                </h3>
              </div>
              <ul className="space-y-3">
                {education.map((item: string, i: number) => (
                  <CredentialItem key={i} index={i}>{item}</CredentialItem>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-card/40 rounded-xl p-5 md:p-6 border border-border/25 h-full">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase size={18} className="text-amber" />
                <h3 className="text-base font-bold text-primary">
                  ניסיון מקצועי
                </h3>
              </div>
              <p className="text-foreground/85 leading-relaxed text-[0.9rem] mb-4">
                ענבל משלבת עבודה במערכת הציבורית לצד קליניקה פרטית:
              </p>
              <ul className="space-y-3">
                {experience.map((item: string, i: number) => (
                  <CredentialItem key={i} index={i}>{item}</CredentialItem>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* ═══════════════════════════════════════════
            ROW 3 — Media: Lectures | Press
            ═══════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* הרצאות */}
          <FadeIn delay={0.15}>
            <div className="bg-card/40 rounded-xl p-5 md:p-6 border border-border/25 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Play size={18} className="text-amber" />
                <h3 className="text-base font-bold text-primary">הרצאות</h3>
              </div>
              <div className="space-y-4">
                {lectures.map((lecture, i) => (
                  <motion.a
                    key={i}
                    href={lecture.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.08,
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group block rounded-xl overflow-hidden border border-border/30 bg-card/60 backdrop-blur-sm shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-500"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={lecture.thumbnail}
                        alt={lecture.title}
                        loading="lazy"
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Play size={20} className="text-primary fill-primary mr-[-2px]" />
                        </div>
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-sm font-semibold text-primary leading-snug">
                        {lecture.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {lecture.channel}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* כתבו עלינו */}
          <FadeIn delay={0.2}>
            <div className="bg-card/40 rounded-xl p-5 md:p-6 border border-border/25 h-full">
              <div className="flex items-center gap-2 mb-5">
                <Newspaper size={18} className="text-amber" />
                <h3 className="text-base font-bold text-primary">כתבו עלינו</h3>
              </div>
              <div className="space-y-3">
                {pressArticles.map((article, i) => (
                  <motion.a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-border/30 shadow-warm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-500"
                  >
                    <div className="shrink-0 w-14 h-14 rounded-xl bg-amber/8 flex items-center justify-center">
                      <span className="text-sm font-bold text-amber">{article.source}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.9rem] font-semibold text-primary leading-snug group-hover:text-amber transition-colors duration-300">
                        {article.title}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        <ExternalLink size={12} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">קראו את הכתבה</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
