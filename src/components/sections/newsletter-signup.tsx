"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/motion";
import { subscribeToNewsletter } from "@/app/metataplim/actions";
import { CheckCircle2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const perks = [
  "מחקרים ועדכונים בתחום play therapy",
  "רפלקציות מקצועיות מהשדה",
  "ימי עיון ואירועים מקצועיים",
  "תובנות מהקליניקה של ענבל",
];

export default function NewsletterSignup() {
  const [state, formAction, isPending] = useActionState(
    subscribeToNewsletter,
    null
  );

  return (
    <section id="newsletter" className="relative py-20 md:py-28 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0 bg-[oklch(0.30_0.065_50)]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, oklch(0.78 0.115 75 / 0.4) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, oklch(0.78 0.115 75 / 0.15) 0%, transparent 50%)",
        }}
      />
      {/* Grain texture */}
      <div className="absolute inset-0 grain opacity-40" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Right — invitation text */}
          <div>
            <FadeIn direction="right">
              <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/25 rounded-full px-4 py-1.5 mb-6">
                <Sparkles size={13} className="text-amber" />
                <span className="text-amber text-xs font-semibold tracking-wide">
                  הניוזלטר החודשי של מגדלור
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1} direction="right">
              <h2 className="text-3xl md:text-[2.4rem] font-bold leading-tight tracking-tight text-white mb-5">
                הישארי מחוברת
                <br />
                <span className="text-amber">לשדה המקצועי</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <p className="text-white/70 text-[1rem] leading-relaxed mb-8">
                פעם בחודש — ישר למייל שלך. תוכן שנוצר במיוחד למטפלות
                שרוצות להמשיך ולצמוח.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-3">
              {perks.map((perk) => (
                <StaggerItem key={perk}>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                    </div>
                    <span className="text-white/80 text-sm">{perk}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Left — form card */}
          <FadeIn delay={0.2} direction="left">
            <div className="bg-white/8 backdrop-blur-md rounded-3xl p-7 md:p-9 border border-white/15 shadow-2xl">
              <AnimatePresence mode="wait">
                {state?.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-400/15 border border-emerald-400/30 flex items-center justify-center mb-5">
                      <CheckCircle2 size={30} className="text-emerald-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      ברוכה הבאה!
                    </h3>
                    <p className="text-white/60 text-sm max-w-[220px] mx-auto leading-relaxed">
                      {state.message}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div key="form">
                    <h3 className="text-white font-bold text-lg mb-1">
                      הצטרפות לניוזלטר
                    </h3>
                    <p className="text-white/50 text-xs mb-6">
                      חינם · ניתן לבטל בכל עת
                    </p>

                    <form action={formAction} className="flex flex-col gap-4">
                      <div>
                        <label
                          htmlFor="nl-name"
                          className="block text-white/70 text-xs font-medium mb-1.5"
                        >
                          שם מלא
                        </label>
                        <Input
                          id="nl-name"
                          name="name"
                          placeholder="הזיני את שמך"
                          required
                          className="h-11 text-sm rounded-xl bg-white/10 border-white/15 text-white placeholder:text-white/30 focus:border-amber/50 focus:ring-amber/20"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="nl-email"
                          className="block text-white/70 text-xs font-medium mb-1.5"
                        >
                          כתובת אימייל
                        </label>
                        <Input
                          id="nl-email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          dir="ltr"
                          className="h-11 text-sm rounded-xl bg-white/10 border-white/15 text-white placeholder:text-white/30 focus:border-amber/50 focus:ring-amber/20 text-right"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isPending}
                        className="mt-1 h-12 rounded-xl bg-amber hover:bg-amber/85 text-primary font-bold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-lg"
                      >
                        {isPending ? "שולחת..." : "הצטרפי עכשיו →"}
                      </Button>

                      {state?.success === false && (
                        <motion.p
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-red-300 bg-red-500/10 rounded-xl py-2.5 px-4 text-sm border border-red-400/20"
                        >
                          {state.message}
                        </motion.p>
                      )}
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
