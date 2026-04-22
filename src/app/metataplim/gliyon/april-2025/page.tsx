import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אפריל 2025 | Play Therapy וליווי רוחני",
  description:
    "גיליון אפריל 2025: מחקר חדש על Play Therapy, רגע מהקליניקה, וכלים מעשיים להורים.",
};

export default function NewsletterApril2025() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0] font-sans">

      {/* ── Header ── */}
      <header className="bg-[#3d2b1a] text-center px-6 py-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="מגדלור"
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <h1 className="text-3xl font-bold text-[#e8d5b0] mb-1 tracking-wide">מגדלור</h1>
        <p className="text-[#c9a97a] text-sm">ניוזלטר חודשי | Play Therapy עם ענבל ליבר</p>
        <div className="flex justify-center gap-5 mt-4 text-xs text-[#c9a97a]/60 border-t border-[#c9a97a]/15 pt-4">
          <span>ניוזלטר</span>
          <span>·</span>
          <span>Play Therapy</span>
          <span>·</span>
          <span>ליווי רוחני</span>
          <span>·</span>
          <span>אפריל 2025</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[580px] mx-auto px-5 py-10 space-y-8">

        {/* Greeting */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#3d2b1a] font-semibold mb-3">שלום לכן,</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">
            שמחה לשלוח לכן את הגיליון הראשון של הניוזלטר החודשי של מגדלור — מרחב שנוצר
            במיוחד בשבילכן, המטפלות. פעם בחודש תמצאו כאן עדכונים מהשדה, תובנות מהקליניקה
            וכלים מעשיים שאפשר לקחת ישר לעבודה.
          </p>
          <p className="text-[#5a4a38] text-sm leading-relaxed mt-3">
            Play Therapy היא שפה — ואני מאמינה שהיא שפה שצריך לטפח ולהעמיק בה כל הזמן.
            בדיוק בגלל זה הניוזלטר הזה קיים.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#c9a97a] rounded-full" />
            <span className="text-xs font-bold text-[#c9a97a] uppercase tracking-widest">מהעולם המקצועי</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3 leading-snug">
              מחקר חדש — Play Therapy ומה שניתן ללמוד
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              מחקר עדכני שפורסם בכתב-עת מקצועי מצביע על כך שטיפול באמצעות משחק יעיל במיוחד
              בטיפול בחרדה וקשיים רגשיים אצל ילדים בגילאי 4–10. הממצאים מראים שיפור ניכר
              ביכולת הוויסות הרגשי ובתפקוד החברתי לאחר 12–16 מפגשים.
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              מה שמדהים במחקר הזה הוא ההדגשה על כך שהשפה הלא-מילולית — בדיוק מה שאנחנו
              עושות — היא הנתיב הישיר ביותר לעולמו הפנימי של הילד. המשחק לא "רק" כיף; הוא
              עבודה טיפולית עמוקה.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#8faa8b] rounded-full" />
            <span className="text-xs font-bold text-[#5a7a55] uppercase tracking-widest">מהניסיון האישי</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3 leading-snug">
              כשמשחק הופך לשפה — רגע מהקליניקה
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              ילד בן שש הגיע אלי אחרי אובדן של בן משפחה קרוב. שבועות ראשונים לא דיבר על
              האובדן — בנה מגדלים מלגו ושבר אותם שוב ושוב בשקט. פעם אחת, כשמגדל גדוש
              במיוחד קרס, הוא הגביה אליי עיניים ואמר: "המגדל נפל כי מישהו הוציא לבנה
              מהאמצע בלי שאף אחד שם לב."
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              לא הייתי צריכה יותר מזה. הוא מצא את השפה שלו. רגעים כאלה מזכירים לי כל פעם
              מחדש — הדרך הכי ישרה ללב הילד עוברת דרך הידיים שלו.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#b08a9a] rounded-full" />
            <span className="text-xs font-bold text-[#7a5060] uppercase tracking-widest">אמצעים וכלים</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3 leading-snug">
              כיצד להשתמש ב-Play Therapy כהורה בבית
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-4">
              שאלה שחוזרת בפגישות הורים: "מה אנחנו יכולים לעשות בין הפגישות?" שלושה כלים
              פשוטים שעושים הבדל אמיתי:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "זמן משחק חופשי יומי",
                  body: "20 דקות שבהן הילד מוביל לחלוטין — ללא הוראות, ללא הנחיות, ללא מסכים. אתם עוקבים ומשקפים.",
                },
                {
                  num: "02",
                  title: "שיקוף רגשות ולא פתרון",
                  body: "כשהילד מתסכל — תנו שם לרגש לפני שמציעים פתרון. \"אני רואה שאתה כועס.\" זה לבד מייצר ביטחון.",
                },
                {
                  num: "03",
                  title: "אמינות בכל משחק",
                  body: "גם אם הילד משחק בצורה מוזרה לכאורה — זו שפה. אל תכוונו. האמינו בתהליך ובמטפל.",
                },
              ].map(({ num, title, body }) => (
                <div key={num} className="flex gap-4">
                  <span className="text-2xl font-black text-[#e0d0b8] leading-none shrink-0 mt-0.5">
                    {num}
                  </span>
                  <div>
                    <p className="font-bold text-[#3d2b1a] text-sm mb-1">{title}</p>
                    <p className="text-[#5a4a38] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3d2b1a] rounded-2xl p-7 text-center">
          <p className="text-[#c9a97a] text-xs tracking-widest uppercase mb-2">הצטרפי לקהילה</p>
          <p className="text-[#e8d5b0] font-bold text-base mb-1">
            ניוזלטר חודשי של קליניקת מגדלור
          </p>
          <p className="text-[#c9a97a]/70 text-xs mb-5 leading-relaxed">
            Play Therapy · ליווי רוחני · טיפול רגשי לילדים ♥
          </p>
          <Link
            href="/metataplim"
            className="inline-block bg-[#c9a97a] hover:bg-[#e8d5b0] text-[#3d2b1a] font-bold text-sm px-7 py-3 rounded-full transition-colors duration-200"
          >
            הצטרפי לניוזלטר בחינם
          </Link>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#3d2b1a] text-center px-6 py-8 mt-4">
        <div className="flex justify-center mb-3">
          <Image src="/logo.png" alt="מגדלור" width={40} height={40} className="object-contain opacity-80" />
        </div>
        <p className="text-[#e8d5b0] font-bold text-sm mb-1">ענבל ליבר | קליניקת מגדלור</p>
        <div className="flex justify-center gap-3 text-xs text-[#c9a97a]/60 mt-2">
          <a href="mailto:inbal@liber.co.il" className="hover:text-[#c9a97a] transition-colors">inbal@liber.co.il</a>
          <span>·</span>
          <a href="https://migdalor.me" className="hover:text-[#c9a97a] transition-colors">migdalor.me</a>
        </div>
        <p className="text-[#c9a97a]/30 text-xs mt-4">© 2025 קליניקת מגדלור · כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}
