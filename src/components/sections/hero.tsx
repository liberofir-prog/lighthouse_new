"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/lib/motion";
import { MessageCircle, ChevronDown } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/972501234567?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-bl from-secondary/60 via-background to-background" />

      <div className="relative mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Text content */}
        <FadeIn className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
            ליווי רגשי ורוחני
            <br />
            <span className="text-foreground">בזמנים הקשים ביותר</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
            קליניקת מגדלור מספקת טיפול רגשי, ליווי רוחני והדרכת הורים לילדים
            ומשפחות המתמודדים עם משברי חיים, מחלות קשות ואובדן.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-whatsapp hover:bg-whatsapp/90 text-white gap-2 text-base"
              )}
            >
              <MessageCircle size={20} />
              שלחו הודעה בוואטסאפ
            </a>

            <a
              href="#contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 text-base"
              )}
            >
              <ChevronDown size={18} />
              השאירו פרטים
            </a>
          </div>
        </FadeIn>

        {/* Atmosphere image placeholder */}
        <FadeIn delay={0.2} className="hidden md:block">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-secondary/40">
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 text-sm">
              תמונת אווירה
            </div>
            {/* Replace with next/image when real image is available */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
