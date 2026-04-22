import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אפריל 2025 | Play Therapy וליווי רוחני",
  description:
    "גיליון אפריל 2025: מחקר חדש על Play Therapy, רגע מהקליניקה, וטיפים לתמיכה הורית.",
};

export default function NewsletterApril2025() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f5f0e8] font-sans">
      {/* Header */}
      <header className="bg-[#3d2b1a] text-white text-center px-6 py-10">
        <p className="text-xs tracking-widest text-[#c9a97a] uppercase mb-2">ניוזלטר חודשי</p>
        <h1 className="text-4xl font-bold text-[#e8d5b0] mb-1">מגדלור</h1>
        <p className="text-sm text-[#c9a97a]">Play Therapy &amp; ליווי רוחני | ענבל ליבר</p>
        <div className="flex justify-center gap-6 mt-5 text-xs text-[#c9a97a]/70">
          <span>ניוזלטר</span>
          <span>·</span>
          <span>Play Therapy</span>
          <span>·</span>
          <span>ליווי רוחני</span>
        </div>
      </header>

      {/* Date badge */}
      <div className="text-center py-4 bg-[#ede5d5] border-b border-[#d4c4a8]">
        <span className="text-xs text-[#8a6e4e] font-medium">אפריל 2025 · גיליון ראשון</span>
      </div>

      {/* Body */}
      <main className="max-w-xl mx-auto px-5 py-10 space-y-10">

        {/* Greeting */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#3d2b1a] font-semibold text-base mb-3">שלום לכן,</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">
            שמחה לשלוח לכן את הגיליון הראשון של הניוזלטר החודשי של מגדלור — מרחב שנוצר במיוחד
            בשבילכן, המטפלות. פעם בחודש אביא עדכונים מהשדה, תובנות מהקליניקה, וזווית הורית שיעזרו
            לנו להמשיך ולצמוח יחד בעבודה המרגשת והמשמעותית הזו.
          </p>
        </section>

        {/* Section 1 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#c9a97a] rounded-full" />
            <span className="text-xs font-bold text-[#c9a97a] uppercase tracking-wider">מהעולם המקצועי</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3">
              מחקר חדש על Play Therapy — השפעות בקרב ילדים
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              מחקר שפורסם לאחרונה מצביע על יעילות גבוהה של Play Therapy בטיפול בחרדה ובקשיים
              רגשיים אצל ילדים בגילאי 4–10. הממצאים מראים שילדים שעברו לפחות 12 מפגשי טיפול
              הראו שיפור משמעותי ביכולת הוויסות הרגשי ובתפקוד החברתי.
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              מה שמיוחד במחקר הזה הוא שהוא מדגיש את חשיבות השפה הלא-מילולית — בדיוק מה שאנחנו
              עושות בכל יום בקליניקה. המשחק הוא השפה הטבעית של הילד, וטיפול דרך משחק מאפשר
              עיבוד רגשי שמילים לבדן לא תמיד מצליחות להגיע אליו.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#3d2b1a] rounded-full" />
            <span className="text-xs font-bold text-[#3d2b1a] uppercase tracking-wider">מהניסיון האישי</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3">
              כשמשחק הופך לשפה — רגע מהקליניקה
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">
              ילד בן שש הגיע אלי אחרי אובדן של בן משפחה. שבועות ראשונים הוא לא דיבר על זה —
              בנה מגדלים מלגו ושבר אותם שוב ושוב. בשלב מסוים הוא אמר לי: "המגדל נפל כי מישהו
              הוציא לבנה מהאמצע."
            </p>
            <p className="text-[#5a4a38] text-sm leading-relaxed">
              לא צריך היה יותר מזה. הוא מצא את השפה שלו. הרגע הזה מזכיר לי כל פעם מחדש למה
              אנחנו עובדות דרך המשחק — כי לפעמים הדרך הכי ישירה לב הילד עוברת דרך הידיים שלו.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-[#8faa8b] rounded-full" />
            <span className="text-xs font-bold text-[#5a7a55] uppercase tracking-wider">זווית הורית</span>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
            <h2 className="text-[#3d2b1a] font-bold text-base mb-3">
              איך יכולים הורים לתמוך ב-Play Therapy בבית?
            </h2>
            <p className="text-[#5a4a38] text-sm leading-relaxed mb-4">
              שאלה שעולה הרבה בפגישות הורים: "מה אנחנו יכולים לעשות בין הפגישות?" הנה שלושה
              דברים פשוטים שעוזרים מאוד:
            </p>
            <ul className="space-y-3">
              {[
                { title: "זמן משחק חופשי יומי", text: "20 דקות של משחק שבו הילד מוביל ואתם עוקבים — ללא הוראות, ללא הערות, ללא מסכים." },
                { title: "שיקוף רגשות", text: "כשהילד מתסכל, במקום לפתור — תנו שם לרגש: \"אני רואה שאתה כועס.\" זה לבד מייצר ביטחון." },
                { title: "קבלת כל משחק", text: "גם אם הוא משחק בבובות \"בצורה מוזרה\" — זה שפה. אל תכוונו. האמינו בתהליך." },
              ].map(({ title, text }) => (
                <li key={title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#f0e8d5] border border-[#c9a97a] flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a97a]" />
                  </div>
                  <div>
                    <strong className="text-[#3d2b1a] text-sm">{title} — </strong>
                    <span className="text-[#5a4a38] text-sm">{text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3d2b1a] rounded-2xl p-6 text-center text-white">
          <p className="text-[#e8d5b0] text-sm font-semibold mb-1">רוצות להצטרף לניוזלטר?</p>
          <p className="text-[#c9a97a]/80 text-xs mb-4">גיליון חודשי ישר למייל שלכן</p>
          <Link
            href="/metataplim#newsletter"
            className="inline-block bg-[#c9a97a] text-[#3d2b1a] font-bold text-sm px-6 py-2.5 rounded-full hover:bg-[#e8d5b0] transition-colors"
          >
            הצטרפות לניוזלטר
          </Link>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#3d2b1a] text-center px-6 py-8 mt-6">
        <p className="text-[#e8d5b0] font-bold text-base mb-1">ענבל ליבר | קליניקת מגדלור</p>
        <p className="text-[#c9a97a]/70 text-xs mb-3">Play Therapy · ליווי רוחני · טיפול רגשי לילדים</p>
        <div className="flex justify-center gap-4 text-xs text-[#c9a97a]/60">
          <a href="mailto:inbal@liber.co.il" className="hover:text-[#c9a97a] transition-colors">
            inbal@liber.co.il
          </a>
          <span>·</span>
          <a href="https://migdalor.me" className="hover:text-[#c9a97a] transition-colors">
            migdalor.me
          </a>
        </div>
        <p className="text-[#c9a97a]/40 text-xs mt-4">
          © 2025 קליניקת מגדלור · כל הזכויות שמורות
        </p>
      </footer>
    </div>
  );
}
