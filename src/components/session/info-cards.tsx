import { Check } from "lucide-react";
import { FadeIn } from "@/lib/motion";
import type { InfoCard } from "@/content/session-pages";

export default function InfoCards({ cards }: { cards: InfoCard[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((card, index) => (
        <FadeIn key={card.title} delay={index * 0.05} className="h-full">
          <div className="h-full rounded-2xl border border-border bg-card p-5 shadow-warm transition-all duration-300 hover:border-amber/40 hover:shadow-warm-lg">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber/15">
                <Check className="h-4 w-4 text-amber" />
              </span>
              <div>
                <h3 className="font-bold text-foreground">{card.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
