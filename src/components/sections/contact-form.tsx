"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeIn } from "@/lib/motion";
import { submitContactForm } from "@/app/actions";
import { Phone, Mail, Send } from "lucide-react";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                צרו קשר
              </h2>
              <p className="text-muted-foreground text-lg">
                השאירו פרטים ונחזור אליכם בהקדם
              </p>
            </div>

            <form action={formAction} className="flex flex-col gap-4">
              <Input
                name="name"
                placeholder="שם מלא"
                required
                className="h-12 text-base"
              />
              <Input
                name="phone"
                type="tel"
                placeholder="טלפון"
                required
                className="h-12 text-base"
                dir="ltr"
              />
              <Textarea
                name="subject"
                placeholder="נושא הפנייה (אופציונלי)"
                rows={4}
                className="text-base resize-none"
              />

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="gap-2 text-base mt-2"
              >
                <Send size={18} />
                {isPending ? "שולח..." : "שליחה"}
              </Button>

              {state?.success && (
                <p className="text-center text-green-700 bg-green-50 rounded-lg py-3 px-4 mt-2">
                  {state.message}
                </p>
              )}
              {state?.success === false && (
                <p className="text-center text-red-700 bg-red-50 rounded-lg py-3 px-4 mt-2">
                  {state.message}
                </p>
              )}
            </form>

            {/* Direct contact info */}
            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                או פנו אלינו ישירות:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-foreground/80">
                <a
                  href="tel:+972501234567"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                  dir="ltr"
                >
                  <Phone size={18} />
                  050-123-4567
                </a>
                <a
                  href="mailto:inbal@migdalor.co.il"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  inbal@migdalor.co.il
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
