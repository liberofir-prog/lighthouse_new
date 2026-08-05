import type { Metadata } from "next";
import type { SessionPageContent } from "@/content/session-pages";

/**
 * Session pages are sent to families as a personal link, so they stay out of
 * search results - but the OG tags still matter, because the link is almost
 * always opened from a WhatsApp preview card.
 */
export function sessionMetadata(content: SessionPageContent): Metadata {
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    robots: { index: false, follow: false },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      siteName: "קליניקת מגדלור",
      locale: "he_IL",
      type: "article",
      images: [
        {
          url: "https://migdalor.me/logo.png",
          width: 512,
          height: 512,
          alt: "לוגו קליניקת מגדלור",
        },
      ],
    },
  };
}
