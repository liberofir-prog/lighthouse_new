"use client";

import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FadeIn, ScaleIn } from "@/lib/motion";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { handleAnchorClick } from "@/lib/smooth-scroll";

const WHATSAPP_URL =
  "https://wa.me/972545524516?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A7%D7%91%D7%9C%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%A0%D7%95%D7%A1%D7%A4%D7%99%D7%9D";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-14 pb-16 grain">
      {/* ─── Ambient background layers ─── */}

      {/* Base warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-amber/8 via-background to-secondary/30" />

      {/* Lighthouse light beam — radial from top-right */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[80%] h-[120%] light-beam"
        style={{
          background:
            "conic-gradient(from 200deg, transparent 0deg, oklch(0.78 0.115 75 / 0.06) 15deg, transparent 30deg)",
        }}
      />

      {/* Soft organic blob shapes */}
      <div className="absolute top-[15%] left-[5%] w-72 h-72 rounded-full bg-amber/5 blur-3xl float-gentle" />
      <div
        className="absolute bottom-[10%] right-[15%] w-96 h-96 rounded-full bg-primary/3 blur-3xl"
        style={{ animationDelay: "3s", animationName: "float-gentle", animationDuration: "8s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
      />

      {/* Mobile background image — visible only below md */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/inbal.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 w-full">
        <div className="grid md:grid-cols-[1fr_0.85fr] gap-12 lg:gap-20 items-start">
          {/* Text content — right side in RTL */}
          <div className="flex flex-col gap-5 md:pt-14">
            {/* Decorative label */}
            <FadeIn delay={0.1} direction="none">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary/80 bg-primary/6 px-4 py-2 rounded-full w-fit border border-primary/12 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber" />
                קליניקת מגדלור — ענבל ליבר
              </span>
            </FadeIn>

            {/* Headline */}
            <FadeIn delay={0.2}>
              <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] tracking-tight">
                <span className="text-primary">תמיכה וליווי לילדים</span>
                <br />
                <span className="text-foreground">במצבי משבר, אובדן</span>
                <br />
                <span className="relative inline-block text-foreground">
                  וטראומה
                  <svg
                    className="absolute -bottom-2 right-0 w-full h-3 text-amber/40"
                    viewBox="0 0 200 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 8 Q50 2 100 7 Q150 12 198 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>
            </FadeIn>

            {/* Subtext */}
            <FadeIn delay={0.35}>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-[520px]">
                תמיכה רגשית וליווי רוחני לילדים והדרכת הורים במצבים של משבר
                בריאותי, שינויים מהותיים בחיים, קשיים התנהגותיים או רגשיים
                ובהתמודדות עם מחלות קשות ואובדן.
                <span className="block mt-2 text-primary/90 font-medium text-base">
                  מגדלור — תמיכה בילדים והכוונה למשפחות ברגעים הקשים עד להגעה לחוף מבטחים.
                </span>
              </p>
            </FadeIn>

            {/* CTA Buttons + Trust indicators */}
            <FadeIn delay={0.5}>
              <div className="flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-whatsapp hover:bg-whatsapp/85 text-white gap-2.5 text-base rounded-full px-7 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  )}
                >
                  <WhatsAppIcon />
                  שלחו הודעה בוואטסאפ
                </a>

                <a
                  href="#contact"
                  onClick={handleAnchorClick}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "gap-2.5 text-base rounded-full px-7 h-12 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                  )}
                >
                  <ArrowDown size={16} className="animate-bounce" />
                  השאירו פרטים
                </a>
              </div>

              <div className="flex items-center gap-6 mt-5">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+8</p>
                  <p className="text-xs text-muted-foreground">שנות ניסיון</p>
                </div>
                <div className="w-px h-8 bg-border/60" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">+250</p>
                  <p className="text-xs text-muted-foreground">משפחות שלוו</p>
                </div>
                <div className="w-px h-8 bg-border/60" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-xs text-muted-foreground">דיסקרטיות</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Atmosphere image — left side in RTL */}
          <ScaleIn delay={0.3} className="hidden md:block mt-10">
            <div className="relative">
              {/* Decorative amber glow behind image */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber/10 via-transparent to-primary/5 blur-2xl" />

              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-warm-lg ring-1 ring-border/30">
                <Image
                  src="/inbal.png"
                  alt="ענבל ליבר – מטפלת רגשית ומלווה רוחנית"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                {/* Subtle warm overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
              </div>

              {/* Floating decorative badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-4 -right-4 bg-card rounded-2xl shadow-warm-lg px-5 py-3 border border-border/40"
              >
                <p className="text-xs text-muted-foreground">ליווי מקצועי</p>
                <p className="text-sm font-semibold text-primary">בכל שלב בדרך</p>
              </motion.div>
            </div>
          </ScaleIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-primary/20 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
