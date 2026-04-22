"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn } from "@/lib/motion";
import { subscribeToNewsletter } from "@/app/metataplim/actions";
import { BookOpen, Lightbulb, CalendarDays, CheckCircle2, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const bulletPoints = [
  {
    icon: BookOpen,
    text: "עדכונים ומחקרים בתחום play therapy וליווי רוחני",
  },
  {
    icon: Lightbulb,
    text: "רפלקציות מקצועיות ותובנות מהשדה",
  },
  {
    icon: CalendarDays,
    text: "ימי עיון, הכשרות ואירועים מקצועיים",
  },
];

export default function NewsletterSignup() {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    null
  );

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      <div className="relative mx-auto max-w-5xl px-5">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">

          {/* Right — description (RTL first) */}
          <div>
            <FadeIn>
              <span className="text-sm font-medium text-amber tracking-wide">
                הניוזלטר החודשי
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-[2.4rem] font-bold text-primary mt-3 mb-5 tracking-tight leading-tight">
                הישארי מחוברת לשדה
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-foreground/80 text-[1rem] leading-relaxed mb-7">
                פעם בחודש, ניוזלטר שמביא ישר למייל שלך את מה שחשוב —
                מהשדה הקליני, מהמחקר ומהלב.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <ul className="space-y-4">
                {bulletPoints.map(({ icon: Icon, text }, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.35 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-start gap-3.5"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Icon size={17} className="text-amber" />
                    </div>
                    <p className="text-foreground/85 text-sm leading-relaxed pt-1.5">
                      {text}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* Left — form */}
          <FadeIn delay={0.25}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/30 shadow-warm-lg">
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-border/25">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center">
                  <Mail size={18} className="text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">הצטרפות לניוזלטר</p>
                  <p className="text-xs text-muted-foreground">ניתן לבטל בכל עת</p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {state?.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-14 h-14 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                      <CheckCircle2 size={28} className="text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1.5">
                      נרשמת בהצלחה!
                    </h3>
                    <p className="text-sm text-muted-foreground max-w-[220px] mx-auto">
                      {state.message}
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={formAction}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label
                        htmlFor="nl-name"
                        className="block text-sm font-medium text-foreground/85 mb-1.5"
                      >
                        שם מלא
                      </label>
                      <Input
                        id="nl-name"
                        name="name"
                        placeholder="הזיני את שמך"
                        required
                        className="h-11 text-sm rounded-xl bg-background/50 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="nl-email"
                        className="block text-sm font-medium text-foreground/85 mb-1.5"
                      >
                        כתובת אימייל <span className="text-amber">*</span>
                      </label>
                      <Input
                        id="nl-email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        dir="ltr"
                        className="h-11 text-sm rounded-xl bg-background/50 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors text-right"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="gap-2 text-sm mt-1 rounded-full h-11 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Mail size={15} />
                      {isPending ? "שולחת..." : "הצטרפות לניוזלטר"}
                    </Button>

                    {state?.success === false && (
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-red-600 bg-red-50 rounded-xl py-2.5 px-4 text-sm"
                      >
                        {state.message}
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
