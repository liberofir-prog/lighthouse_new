import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/motion";
import { newsletters } from "@/data/newsletters";
import { ArrowLeft, Calendar, BookOpen } from "lucide-react";

export default function NewsletterArchive() {
  if (newsletters.length === 0) return null;

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="relative mx-auto max-w-5xl px-5">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-sm font-medium text-amber tracking-wide">
              ארכיון
            </span>
            <h2 className="text-3xl md:text-[2.4rem] font-bold text-primary mt-3 tracking-tight">
              גיליונות קודמים
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-[1rem] leading-relaxed">
              כל הגיליונות הקודמים פתוחים לקריאה חופשית
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-5">
          {newsletters.map((nl) => (
            <StaggerItem key={nl.id}>
              <Link
                href={nl.url}
                className="group flex flex-col gap-4 p-6 bg-card/80 rounded-2xl border border-border/25 shadow-sm hover:shadow-warm hover:border-amber/20 transition-all duration-300 h-full"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/6 group-hover:bg-amber/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <BookOpen size={18} className="text-primary group-hover:text-amber transition-colors duration-300" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary/60 px-2.5 py-1 rounded-full shrink-0">
                    <Calendar size={11} />
                    {nl.date}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                    {nl.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {nl.excerpt}
                  </p>
                </div>

                {/* Footer */}
                <div className="flex items-center gap-1.5 text-sm font-medium text-primary/70 group-hover:text-amber transition-colors duration-300 mt-1">
                  <ArrowLeft size={13} className="rotate-180" />
                  לקריאה
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
