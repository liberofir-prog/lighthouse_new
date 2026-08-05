import { FadeIn } from "@/lib/motion";

/**
 * Shared shell for every block on a session page: consistent width, spacing and
 * heading treatment, so the intake and parents pages inherit the same rhythm.
 */
export default function SessionSection({
  title,
  subtitle,
  className = "",
  children,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`py-8 sm:py-12 ${className}`}>
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        {title && (
          <FadeIn className="mb-5 sm:mb-6">
            <h2 className="text-[1.6rem] font-bold leading-[1.25] text-primary sm:text-[2rem]">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-1.5 text-[0.95rem] text-muted-foreground/70">
                {subtitle}
              </p>
            )}
            <div className="divider-warm mt-3.5 max-w-[7rem]" />
          </FadeIn>
        )}
        {children}
      </div>
    </section>
  );
}
