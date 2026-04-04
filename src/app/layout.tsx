import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "מגדלור | ענבל ליבר - טיפול רגשי וליווי רוחני",
  description:
    "קליניקת מגדלור - טיפול רגשי, ליווי רוחני והדרכת הורים לילדים ומשפחות סביב משברי חיים, מחלות קשות ואובדן.",
  openGraph: {
    title: "מגדלור | ענבל ליבר - טיפול רגשי וליווי רוחני",
    description:
      "קליניקת מגדלור - טיפול רגשי, ליווי רוחני והדרכת הורים לילדים ומשפחות סביב משברי חיים, מחלות קשות ואובדן.",
    url: "https://migdalor.me",
    siteName: "קליניקת מגדלור",
    images: [
      {
        url: "https://migdalor.me/logo.png",
        width: 512,
        height: 512,
        alt: "לוגו קליניקת מגדלור",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://migdalor.me/#clinic",
      "name": "קליניקת מגדלור",
      "url": "https://migdalor.me",
      "telephone": "054-552-4516",
      "email": "inbal@liber.co.il",
      "description": "טיפול רגשי, ליווי רוחני והדרכת הורים לילדים ומשפחות סביב משברי חיים, מחלות קשות ואובדן.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "דן 30",
        "addressLocality": "אלפי מנשה",
        "addressCountry": "IL"
      },
      "employee": { "@id": "https://migdalor.me/#inbal" }
    },
    {
      "@type": "Person",
      "@id": "https://migdalor.me/#inbal",
      "name": "ענבל ליבר",
      "jobTitle": "מטפלת רגשית ומלווה רוחנית",
      "worksFor": { "@id": "https://migdalor.me/#clinic" },
      "url": "https://migdalor.me"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className={`${heebo.variable} antialiased`}>{children}</body>
    </html>
  );
}
