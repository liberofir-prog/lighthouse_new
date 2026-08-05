import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/lib/motion";
import { personalGreeting } from "@/content/session-pages";

export default function SessionHero({
  pageTitle,
  greeting,
  paragraphs,
  patientName,
}: {
  pageTitle: string;
  greeting: string;
  paragraphs: string[];
  patientName: string | null;
}) {
  return (
    <header className="relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background">
      {/* The lighthouse beam that runs across the marketing hero, kept faint so
          it reads as warmth rather than decoration on a page about a meeting. */}
      <div
        aria-hidden="true"
        className="light-beam pointer-events-none absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-amber/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16">
        <Link href="/" className="mx-auto block w-fit sm:mx-0">
          <Image
            src="/logo.png"
            alt="מגדלור - ענבל ליבר"
            width={180}
            height={80}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <FadeIn className="mt-8">
          <h1 className="text-center text-3xl font-bold leading-tight text-primary sm:text-right sm:text-4xl md:text-5xl">
            {pageTitle}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-8">
          <div className="rounded-3xl border border-border bg-card/80 p-6 shadow-warm-lg backdrop-blur-sm sm:p-8">
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full ring-2 ring-amber/30 sm:h-32 sm:w-32">
                <Image
                  src="/inbal-profile.jpg"
                  alt="ענבל ליבר"
                  fill
                  sizes="(max-width: 640px) 7rem, 8rem"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="text-center sm:text-right">
                {patientName && (
                  <p className="mb-1 text-base text-muted-foreground/80">
                    {`${personalGreeting} ${patientName},`}
                  </p>
                )}
                <p className="text-xl font-bold text-primary sm:text-2xl">
                  {greeting}
                </p>
                {paragraphs.map((text) => (
                  <p
                    key={text}
                    className="mt-3 text-base leading-relaxed text-muted-foreground"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </header>
  );
}
