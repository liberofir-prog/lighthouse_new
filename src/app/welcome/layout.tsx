import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "יוצאים לדרך יחד | קליניקת מגדלור",
  description: "מדריך הכנה אישי להורים לקראת המפגש הראשון בקליניקת מגדלור — ענבל ליבר",
  openGraph: {
    title: "יוצאים לדרך יחד | קליניקת מגדלור",
    description: "מדריך הכנה אישי להורים לקראת המפגש הראשון בקליניקת מגדלור — ענבל ליבר",
    url: "https://migdalor.me/welcome",
    siteName: "קליניקת מגדלור",
    images: [
      {
        url: "https://migdalor.me/welcome-cover.png",
        width: 2848,
        height: 1504,
        alt: "יוצאים לדרך יחד — קליניקת מגדלור",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
};

export default function WelcomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
