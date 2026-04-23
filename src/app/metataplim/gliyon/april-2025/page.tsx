import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אפריל 2025 | ליווי רוחני",
  description:
    "גיליון אפריל 2025: על ליווי רוחני בעבודה הטיפולית — תובנות, כלים ורגעים מהשדה.",
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
        <p className="text-[#c9a97a] text-sm">ניוזלטר חודשי | ליווי רוחני עם ענבל ליבר</p>
        <div className="flex justify-center gap-5 mt-4 text-xs text-[#c9a97a]/60 border-t border-[#c9a97a]/15 pt-4">
          <span>ניוזלטר</span>
          <span>·</span>
          <span>ליווי רוחני</span>
          <span>·</span>
          <span>Play Therapy</span>
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
            שמחה לשלוח לכן את הגיליון הראשון של הניוזלטר החודשי של מגדלור. הגיליון הזה
            מוקדש לנושא שקרוב מאוד ללבי — ליווי רוחני בעבודה הטיפולית. איך אנחנו מביאות
            משמעות, נוכחות ועומק רוחני לתוך החדר הטיפולי, ומה זה אומר בפרקטיקה.
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
              ליווי רוחני בטיפול — מה אומר המחקר?
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              מחקרים עדכניים בפסיכולוגיה חיובית ובפסיכולוגיה של הדת מצביעים על כך שאנשים
              המעורבים בחיים רוחניים — בין אם דתיים ובין אם לא — מדווחים על חוסן גבוה יותר
              בהתמודדות עם אובדן, מחלה ומשבר. הרוחניות אינה "תוספת" לטיפול; היא לרוב
              המסגרת שדרכה המטופל מעניק משמעות לחוויה שלו.
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              בתור מטפלות, שאלת האיך — כיצד אנחנו נוכחות לממד הרוחני מבלי להכתיב, מבלי
              לכפות ומבלי להתעלם — היא אחת השאלות המקצועיות החשובות שנוכל לשאול את עצמנו.
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
              כשהרוח נכנסת לחדר — רגע מהקליניקה
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              ילדה בת שמונה, בטיפול בעקבות מות סבתה, שאלה אותי פעם: "סבתא עכשיו כוכב?"
              יכולתי לענות "אני לא יודעת" ולסגור את הדלת. במקום זה ישבתי איתה בשאלה.
              "מה את מרגישה כשאת חושבת על זה?" היא עצמה את עיניה ואמרה: "חמים."
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              ליווי רוחני לא אומר שיש לנו תשובות. זה אומר שאנחנו מוכנות לשבת בשאלות הגדולות
              ביחד עם המטופל, בלי לברוח ובלי לפתור. הנוכחות הזו היא לפעמים הדבר הטיפולי
              ביותר שנוכל להציע.
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
              שלושה עקרונות לליווי רוחני בחדר הטיפולי
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-4">
              לא כל מטפלת מגיעה מרקע רוחני מובהק — וזה בסדר גמור. אלה עקרונות שניתן ליישם
              ללא קשר לאמונה האישית:
            </p>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "לשאול לפני שמניחים",
                  body: "כשמטופל מביא נושא רוחני — אל תניחי מה הוא מאמין. שאלי. \"מה זה אומר לך?\" פותחת עוד יותר מ-\"אני מבינה.\"",
                },
                {
                  num: "02",
                  title: "הרוח כמשאב, לא כבעיה",
                  body: "אמונה, טקסים, תפילה — אלה לא סימפטומים לטיפול אלא לעיתים קרובות המשאב החזק ביותר של המטופל. הכירי בהם ככאלה.",
                },
                {
                  num: "03",
                  title: "נוכחות על פני תשובות",
                  body: "השאלות הגדולות — מוות, משמעות, סבל — לא מחכות לפתרון. הן מחכות לנוכחות אמיתית. אנחנו לא צריכות לדעת; אנחנו צריכות להיות שם.",
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
            ליווי רוחני · Play Therapy · טיפול רגשי לילדים ♥
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
