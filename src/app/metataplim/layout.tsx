import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "מיגדלור למטפלים | ענבל ליבר",
  description:
    "מרחב מקצועי למטפלים — ניוזלטר חודשי בנושאי play therapy וליווי רוחני, ארכיון גיליונות, וייעוץ קולגיאלי.",
  openGraph: {
    title: "מיגדלור למטפלים | ענבל ליבר",
    description:
      "מרחב מקצועי למטפלים — ניוזלטר חודשי בנושאי play therapy וליווי רוחני.",
    url: "https://migdalor.me/metataplim",
    siteName: "קליניקת מגדלור",
    locale: "he_IL",
    type: "website",
  },
};

export default function TherapistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
