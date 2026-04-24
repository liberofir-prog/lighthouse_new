"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/lib/motion";
import { unsubscribeFromNewsletter } from "@/app/metataplim/actions";
import { CheckCircle2, UserMinus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterUnsubscribe() {
  const [state, formAction, isPending] = useActionState(
    unsubscribeFromNewsletter,
    null
  );

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 w-full">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">

          {/* Right — explanation */}
          <div className="flex flex-col gap-6">
            <FadeIn direction="none">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 bg-primary/6 px-4 py-2 rounded-full w-fit border border-primary/12 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber" />
                ניהול הרשמה
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-[2.4rem] md:text-5xl font-bold leading-[1.15] tracking-tight text-primary">
                הסרה מרשימת{" "}
                <span className="relative inline-block">
                  התפוצה
                  <svg
                    className="absolute -bottom-1.5 right-0 w-full h-3 text-amber/50"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path d="M2 8 Q50 2 100 7 Q150 12 198 4" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                רוצה להפסיק לקבל את הניוזלטר? הזיני את כתובת האימייל שלך
                ונסיר אותך מרשימת התפוצה תוך יום עסקים.
              </p>
            </FadeIn>
          </div>

          {/* Left — card */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-card rounded-3xl shadow-warm-lg border border-border/30 overflow-hidden">

              {/* Header */}
              <div className="bg-primary px-7 py-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber/20 flex items-center justify-center shrink-0">
                    <UserMinus size={18} className="text-amber" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-foreground text-base leading-tight">
                      הסרה מרשימת תפוצה
                    </p>
                    <p className="text-primary-foreground/55 text-xs mt-0.5">
                      הכניסי את האימייל שבו נרשמת
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
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
                      <h3 className="text-xl font-bold text-foreground mb-2">הוסרת בהצלחה</h3>
                      <p className="text-muted-foreground text-sm max-w-[230px] mx-auto leading-relaxed">
                        {state.message}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form key="form" action={formAction} className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="unsub-email" className="block text-sm font-semibold text-foreground mb-1.5">
                          אימייל <span className="text-amber">*</span>
                        </label>
                        <Input
                          id="unsub-email"
                          name="unsubEmail"
                          type="email"
                          placeholder="your@email.com"
                          required
                          dir="ltr"
                          className="h-11 text-sm rounded-xl bg-background border-border/50 focus:border-amber/50 focus:ring-amber/15 text-right"
                        />
                      </div>

                      <div className="border-t border-border/30 pt-1" />

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="h-12 rounded-xl text-base font-bold shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5 gap-2"
                      >
                        <UserMinus size={17} />
                        {isPending ? "מסירה..." : "הסרה מרשימת התפוצה"}
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
