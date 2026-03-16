"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/lib/motion";
import { submitContactForm } from "@/app/actions";
import { Phone, Mail, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  return (
    <section id="contact" className="relative py-20 md:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber/3 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        {/* Two-column layout: info left, form right (RTL) */}
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-start max-w-4xl mx-auto">

          {/* Right column (RTL first) — header + contact info */}
          <div className="md:sticky md:top-28">
            <FadeIn>
              <span className="text-sm font-medium text-amber tracking-wide">
                נשמח לשמוע מכם
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-[2.5rem] font-bold text-primary mt-3 mb-4 tracking-tight">
                צרו קשר
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-foreground/85 text-[1.02rem] leading-relaxed mb-6">
                השאירו פרטים ונחזור אליכם בהקדם.
              </p>
            </FadeIn>

            {/* Direct contact cards */}
            <FadeIn delay={0.3}>
              <div className="space-y-3">
                <a
                  href="tel:+972545524516"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/25 hover:border-amber/20 hover:shadow-warm transition-all duration-300"
                  dir="ltr"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/6 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div className="text-right flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">טלפון</p>
                    <p className="font-semibold text-foreground text-sm" dir="ltr">054-552-4516</p>
                  </div>
                </a>

                <a
                  href="mailto:inbal@liber.co.il"
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card/60 border border-border/25 hover:border-amber/20 hover:shadow-warm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/6 group-hover:bg-primary/10 flex items-center justify-center transition-colors shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground mb-0.5">אימייל</p>
                    <p className="font-semibold text-foreground text-sm">inbal@liber.co.il</p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Left column (RTL second) — form */}
          <FadeIn delay={0.25}>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/30 shadow-warm-lg">
              {/* Form header inside card */}
              <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-border/25">
                <div className="w-9 h-9 rounded-lg bg-amber/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">השאירו פרטים</p>
                  <p className="text-xs text-muted-foreground">ונחזור אליכם בהקדם</p>
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
                      הפרטים נשלחו בהצלחה!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      נחזור אליך בהקדם האפשרי
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={formAction}
                    className="flex flex-col gap-4"
                  >
                    {/* Name + Phone side by side */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-foreground/85 mb-1.5"
                        >
                          שם מלא
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="הזינו את שמכם"
                          required
                          className="h-11 text-sm rounded-xl bg-background/50 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-foreground/85 mb-1.5"
                        >
                          טלפון <span className="text-amber">*</span>
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="050-000-0000"
                          required
                          dir="ltr"
                          className="h-11 text-sm rounded-xl bg-background/50 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors text-left"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground/85 mb-1.5"
                      >
                        נושא הפנייה{" "}
                        <span className="text-muted-foreground font-normal text-xs">
                          (אופציונלי)
                        </span>
                      </label>
                      <Textarea
                        id="subject"
                        name="subject"
                        placeholder="ספרו לנו בקצרה במה נוכל לסייע..."
                        rows={4}
                        className="text-sm rounded-xl bg-background/50 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="gap-2 text-sm mt-1 rounded-full h-11 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Send size={15} />
                      {isPending ? "שולח..." : "שליחה"}
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
