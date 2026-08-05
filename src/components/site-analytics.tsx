"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";
import { UNTRACKED_ROUTES } from "@/lib/routes";

/**
 * Analytics is for the marketing site only.
 *
 * The session pages are reached through a personal link whose query string can
 * carry a first name, and Inbal's own tools are nobody's business either. There
 * is no marketing signal to gain from either, so neither is measured - those
 * URLs never leave the server.
 */
export default function SiteAnalytics({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  if (UNTRACKED_ROUTES.some((prefix) => pathname.startsWith(prefix))) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
      <Analytics />
    </>
  );
}
