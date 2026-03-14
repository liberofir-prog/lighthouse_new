import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "מגדלור | ענבל ליבר – ליווי רגשי ורוחני",
  description:
    "קליניקת מגדלור – טיפול רגשי, ליווי רוחני והדרכת הורים לילדים ומשפחות סביב משברי חיים, מחלות קשות ואובדן.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
