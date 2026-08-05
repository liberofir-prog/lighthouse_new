import { FadeIn } from "@/lib/motion";
import WhatsAppIcon from "@/components/whatsapp-icon";
import { closing } from "@/content/session-pages";
import { whatsappUrl } from "@/lib/whatsapp";

/* No conversion tracking here on purpose: these pages are deliberately left
   out of analytics (see `site-analytics.tsx`), so gtag is never loaded on
   them. A family that already booked is not a lead to measure. */

export default function ClosingCta({ message }: { message: string }) {
  return (
    <FadeIn>
      <div className="rounded-2xl border border-border bg-card p-7 text-center shadow-warm sm:p-9">
        <h2 className="text-2xl font-bold text-primary">{closing.title}</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {closing.body}
        </p>
        <a
          href={whatsappUrl(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 font-medium text-white transition-transform duration-200 hover:scale-105"
        >
          <WhatsAppIcon size={20} />
          {closing.cta}
        </a>
      </div>
    </FadeIn>
  );
}
