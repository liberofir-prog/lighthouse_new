"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/motion";
import { subscribeToNewsletter } from "@/app/metataplim/actions";
import { CheckCircle2, Mail, BookOpen, Users, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Mail,
    title: "ניוזלטר חודשי",
    desc: "מחקרים, תובנות ועדכונים מהשדה — ישר למייל שלך",
  },
  {
    icon: BookOpen,
    title: "ארכיון גיליונות",
    desc: "כל הגיליונות הקודמים פתוחים לקריאה חופשית",
  },
  {
    icon: Users,
    title: "ייעוץ והפניות",
    desc: "ייעוץ קולגיאלי והפניות מקצועיות בין מטפלות",
  },
];

export default function NewsletterSignup() {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    null
  );
  return (
    <section
      id="newsletter"
      className="relative min-h-[100dvh] flex items-center pt-16 pb-12 grain overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-bl from-amber/8 via-background to-secondary/40" />
      <div
        className="absolute top-[-15%] left-[-5%] w-[60%] h-[130%] pointer-events-none"
        style={{
          background:
            "conic-gradient(from 200deg, transparent 0deg, oklch(0.78 0.115 75 / 0.05) 18deg, transparent 36deg)",
        }}
      />
      <div className="absolute top-1/3 right-[10%] w-64 h-64 rounded-full bg-amber/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 w-full">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">

          {/* ── Right — intro + feature cards ── */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="none">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 bg-primary/6 px-4 py-2 rounded-full w-fit border border-primary/12 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber" />
                מרחב מקצועי למטפלים
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-[2.4rem] md:text-5xl font-bold leading-[1.15] tracking-tight text-primary">
                מיגדלור{" "}
                <span className="relative inline-block">
                  למטפלים
                  <svg
                    className="absolute -bottom-1.5 right-0 w-full h-3 text-amber/50"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 8 Q50 2 100 7 Q150 12 198 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                מרחב מקצועי לחיבור והשראה. הצטרפי לניוזלטר החודשי של ענבל
                ליבר — תוכן שנוצר במיוחד למטפלות שבוחרות להמשיך ולצמוח.
              </p>
            </FadeIn>

            <StaggerContainer className="flex flex-col gap-3">
              {features.map(({ icon: Icon, title, desc }) => (
                <StaggerItem key={title}>
                  <div className="flex items-start gap-4 p-4 bg-card/70 border border-border/25 rounded-2xl shadow-sm hover:shadow-warm hover:border-amber/20 transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-xl bg-amber/10 group-hover:bg-amber/15 flex items-center justify-center shrink-0 transition-colors">
                      <Icon size={18} className="text-amber" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm mb-0.5">{title}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* ── Left — form card ── */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-card rounded-3xl shadow-warm-lg border border-border/30 overflow-hidden">

              {/* Header bar */}
              <div className="bg-primary px-7 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center shrink-0">
                    <CalendarDays size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-foreground text-base leading-tight">
                      הצטרפי לניוזלטר החודשי
                    </p>
                    <p className="text-primary-foreground/55 text-xs mt-0.5">
                      חינם · פעם בחודש · ניתן לבטל בכל עת
                    </p>
                  </div>
                </div>
              </div>

              {/* Form body */}
              <div className="px-7 py-7">
                <AnimatePresence mode="wait">
                  {state?.success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-5">
                        <CheckCircle2 size={30} className="text-emerald-500" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">ברוכים הבאים!</h3>
                      <p className="text-muted-foreground text-sm max-w-[230px] mx-auto leading-relaxed">
                        {state.message}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" action={formAction} className="flex flex-col gap-4">

                      {/* Row: שם פרטי + שם משפחה */}
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label htmlFor="nl-firstName" className="block text-sm font-semibold text-foreground mb-1.5">
                            שם פרטי
                          </label>
                          <Input
                            id="nl-firstName"
                            name="firstName"
                            placeholder="שם פרטי"
                            required
                            className="h-11 text-sm rounded-xl bg-background border-border/50 focus:border-amber/50 focus:ring-amber/15"
                          />
                        </div>
                        <div>
                          <label htmlFor="nl-lastName" className="block text-sm font-semibold text-foreground mb-1.5">
                            שם משפחה
                          </label>
                          <Input
                            id="nl-lastName"
                            name="lastName"
                            placeholder="שם משפחה"
                            required
                            className="h-11 text-sm rounded-xl bg-background border-border/50 focus:border-amber/50 focus:ring-amber/15"
                          />
                        </div>
                      </div>

                      {/* אימייל */}
                      <div>
                        <label htmlFor="nl-email" className="block text-sm font-semibold text-foreground mb-1.5">
                          אימייל <span className="text-amber">*</span>
                        </label>
                        <Input
                          id="nl-email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          dir="ltr"
                          className="h-11 text-sm rounded-xl bg-background border-border/50 focus:border-amber/50 focus:ring-amber/15 text-right"
                        />
                      </div>

                      {/* טלפון */}
                      <div>
                        <label htmlFor="nl-phone" className="block text-sm font-semibold text-foreground mb-1.5">
                          טלפון{" "}
                          <span className="text-muted-foreground font-normal text-xs">(אופציונלי)</span>
                        </label>
                        <Input
                          id="nl-phone"
                          name="phone"
                          type="tel"
                          placeholder="050-000-0000"
                          className="h-11 text-sm rounded-xl bg-background border-border/50 focus:border-amber/50 focus:ring-amber/15"
                        />
                      </div>

                      <div className="border-t border-border/30 pt-1" />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="h-12 rounded-xl text-base font-bold shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
                      >
                        <Mail size={17} />
                        {isPending ? "שולחת..." : "הצטרפי לניוזלטר"}
                      </Button>

                      <p className="text-center text-xs text-muted-foreground/60">
                        לא נשתף את הפרטים שלך עם אף גורם
                      </p>

                      {state?.success === false && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-red-600 bg-red-50 rounded-xl py-2.5 px-4 text-sm border border-red-100"
                        >
                          {state.message}
                        </motion.p>
                      )}
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
