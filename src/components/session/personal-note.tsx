import { FadeIn } from "@/lib/motion";

export default function PersonalNote({
  title,
  paragraphs,
  signOff,
  signature,
  credentials,
}: {
  title: string;
  paragraphs: string[];
  signOff: string;
  signature: string;
  credentials: string;
}) {
  return (
    <FadeIn>
      <div className="rounded-3xl bg-gradient-to-b from-secondary/50 to-warm p-7 shadow-warm-lg sm:p-9">
        <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
        <div className="mt-5 space-y-3">
          {paragraphs.map((text) => (
            <p
              key={text}
              className="text-base leading-relaxed text-muted-foreground"
            >
              {text}
            </p>
          ))}
        </div>
        {/* The credentials sit on their own line rather than running on after
            the name: at this size a single "name - title - clinic" string
            wraps mid-title on a phone. */}
        <p className="mt-6 text-base text-muted-foreground">{signOff}</p>
        <p className="text-xl font-bold text-primary">{signature}</p>
        <p className="mt-0.5 text-sm text-muted-foreground/75">{credentials}</p>
      </div>
    </FadeIn>
  );
}
