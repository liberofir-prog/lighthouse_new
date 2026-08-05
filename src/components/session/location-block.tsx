import { MapPin, Home, Video } from "lucide-react";
import { FadeIn } from "@/lib/motion";
import { locationBlock, type SessionLocation } from "@/content/session-pages";

const icons = {
  "alfei-menashe": MapPin,
  home: Home,
  online: Video,
} as const;

export default function LocationBlock({
  locations,
  isSpecific,
}: {
  locations: SessionLocation[];
  isSpecific: boolean;
}) {
  return (
    <>
      <FadeIn>
        <p className="text-base leading-relaxed text-muted-foreground">
          {isSpecific ? locationBlock.singleIntro : locationBlock.intro}
        </p>
      </FadeIn>

      <div className="mt-5 space-y-3">
        {locations.map((location, index) => {
          const Icon = icons[location.key];
          return (
            <FadeIn key={location.key} delay={index * 0.05}>
              <div className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-warm">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber/15">
                  <Icon className="h-5 w-5 text-amber" />
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{location.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {location.address}
                  </p>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.1}>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground/80">
          {locationBlock.footnote}
        </p>
      </FadeIn>
    </>
  );
}
