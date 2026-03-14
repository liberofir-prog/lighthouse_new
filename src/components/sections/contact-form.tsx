"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/lib/motion";
import { submitContactForm } from "@/app/actions";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    null
  );

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-clip">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background" />

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 divider-warm" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber/3 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-lg mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <FadeIn>
              <span className="text-sm font-medium text-amber tracking-wide">
                נשמח לשמוע מכם
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-primary mt-3 mb-5 tracking-tight">
                צרו קשר
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                השאירו פרטים ונחזור אליכם בהקדם
                <br />
                <span className="text-sm">השיחה הראשונה ללא התחייבות</span>
              </p>
            </FadeIn>
          </div>

          {/* Form card */}
          <FadeIn delay={0.25}>
            <div className="bg-card/70 backdrop-blur-sm rounded-2xl p-7 md:p-9 border border-border/30 shadow-warm-lg">
              <AnimatePresence mode="wait">
                {state?.success ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      הפרטים נשלחו בהצלחה!
                    </h3>
                    <p className="text-muted-foreground">
                      נחזור אליך בהקדם האפשרי
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    action={formAction}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground/70 mb-2"
                      >
                        שם מלא
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="הזינו את שמכם"
                        required
                        className="h-12 text-base rounded-xl bg-background/60 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground/70 mb-2"
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
                        className="h-12 text-base rounded-xl bg-background/60 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors text-left"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground/70 mb-2"
                      >
                        נושא הפנייה{" "}
                        <span className="text-muted-foreground font-normal">
                          (אופציונלי)
                        </span>
                      </label>
                      <Textarea
                        id="subject"
                        name="subject"
                        placeholder="ספרו לנו בקצרה במה נוכל לסייע..."
                        rows={4}
                        className="text-base rounded-xl bg-background/60 border-border/40 focus:border-amber/40 focus:ring-amber/15 transition-colors resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isPending}
                      className="gap-2.5 text-base mt-2 rounded-full h-12 shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Send size={16} />
                      {isPending ? "שולח..." : "שליחה"}
                    </Button>

                    {state?.success === false && (
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center text-red-600 bg-red-50 rounded-xl py-3 px-4 text-sm"
                      >
                        {state.message}
                      </motion.p>
                    )}
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>

          {/* Direct contact */}
          <FadeIn delay={0.4}>
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-5">
                או פנו אלינו ישירות:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <a
                  href="tel:+972501234567"
                  className="group flex items-center gap-2.5 text-foreground/70 hover:text-primary transition-colors duration-300"
                  dir="ltr"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Phone size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">050-123-4567</span>
                </a>
                <a
                  href="mailto:inbal@migdalor.co.il"
                  className="group flex items-center gap-2.5 text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/5 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">inbal@migdalor.co.il</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
