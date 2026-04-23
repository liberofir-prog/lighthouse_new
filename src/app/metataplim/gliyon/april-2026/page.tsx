import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אפריל 2026 | Play Therapy וליווי רוחני",
  description:
    "גיליון אפריל 2026: Play Therapy וליווי רוחני — מה חדש בשדה. מחקרים, כלים פרקטיים ורגעים מהקליניקה.",
};

const findings = [
  {
    num: "01",
    tag: "מחקר חדש",
    title: "Play Therapy: מחקר-על חדש מוכיח יעילות מובהקת לילדים שחוו אובדן",
    body: "ניתוח-על שפורסם ב-2025 וסקר 38 מחקרים עם 2,800 ילדים מצא ש-Play Therapy מובנית הפחיתה תסמיני אבל ו-PTSD בילדים (גילאי 4–12) באופן מובהק סטטיסטית — עם effect size של 0.73, גבוה מהצפוי. הממצא המפתיע: ילדים שקיבלו Play Therapy לא-מובנית (חופשית יותר) הראו שיפור גדול יותר בוויסות רגשי ארוך-טווח לעומת פרוטוקול מובנה, אך שיפור קטן יותר בתסמינים החיצוניים. המחקר מציע שהשאלה \"כמה לבנות?\" תלויה ביעד: סימפטום ספציפי, או גמישות פנימית.",
    source: "Journal of Child Psychotherapy, 2025",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "Play Therapy + גוף",
    title: "שילוב גישות סומטיות ב-Play Therapy — הגוף כשפה ראשונה לטראומה",
    body: "מחקר שהתפרסם בסוף 2025 בחן 60 ילדים (גילאי 5–11) שחוו טראומה ואובדן, וקיבלו פרוטוקול משולב של Play Therapy עם רכיבים סומטיים: נשימה מכוונת, מודעות לתחושות גוף, ותנועה חופשית. הקבוצה המשולבת הראתה ירידה של 52% בתסמיני hyperarousal לעומת 29% בקבוצת Play Therapy בלבד. הממצא המרכזי: ילדים שלא הצליחו 'להיכנס' לפגישת המשחק — כלומר נראו קפואים או מנותקים — הגיבו בצורה דרמטית לרגע שבו המטפל הציע \"נשימה אחת ביחד לפני שנשחק\". כאילו הגוף הצריך רשות לפני שהנפש הצטרפה.",
    source: "International Journal of Play Therapy, נובמבר 2025",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "ליווי רוחני",
    title: "הממד הרוחני בטיפול ילדים — מתי הוא נכנס ומתי הוא מגיע?",
    body: "דיון עמוק ב-r/therapists עם 900 תגובות עסק בשאלה שמעסיקה מטפלים רבים: כיצד מתמודדים עם רוחניות שהמשפחה מביאה אל חדר הטיפול? מטפלים ותיקים שיתפו עקרון שחוזר שוב ושוב: \"הרוחניות נכנסת דרך השפה של המשפחה — לא דרך השפה של המטפל.\" כשילד מספר על מלאך שמגן עליו, או על סבתא שנפטרה שעדיין 'איתו' — מטפל שמאמת את החוויה מבלי לפרש אותה פותח דלת. מטפל שממהר להסביר סוגר אותה. הרוחניות כפי שהילד חווה אותה היא משאב, לא מכשול — גם כשאינה זהה לאמונת המטפל.",
    source: "r/therapists — דיון על רוחניות בטיפול ילדים, פברואר 2026",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  },
];

const gridItems = [
  {
    num: "04",
    tag: "גיל מעבר",
    title: "Play Therapy בגיל 8–12: לשמור על המרחב כשהילד 'גדל ממנו'",
    body: "גיל המעבר מציב אתגר: הילד 'גדול מדי' למשחק ופאזלים, אבל עדיין לא בשל לעבודה ורבלית. מטפלים ממליצים לאמץ 'ניטרליות יוצרת': לגו, מיינקרפט, בניה, ציור — שפות משחק לגיטימיות שאינן מאיימות. המפתח: לתת לילד לבחור. הבחירה עצמה היא חלק מהריפוי.",
    source: "r/therapists — גיל המעבר ב-Play Therapy, ינואר 2026",
  },
  {
    num: "05",
    tag: "הורים ומשפחה",
    title: "הדרכת הורים ב-Play Therapy — לא רק 'מה לעשות' אלא 'איך לראות'",
    body: "מחקר 2025 עם 45 הורים שעברו הדרכה מקבילה לטיפול הילד מצא שיפור של 38% ב'קשב מכוון' — יכולת ההורה להיות עם הילד מבלי לנהל. המיומנות שהשפיעה הכי הרבה: ללמוד לשאול \"מה אתה בונה?\" ולשתוק אחר כך — במקום לעזור מיד.",
    source: "Child & Family Social Work, 2025",
  },
  {
    num: "06",
    tag: "כלי פרקטי",
    title: '"במה הוא משחק בבית?" — שאלה שפותחת עולמות',
    body: "מטפלים ממליצים על שאלה אחת פשוטה כחלק מה-intake: \"ספרי לי במה הוא משחק כשהוא לבד.\" התשובה נותנת מפה של עולמו הפנימי — מה הוא שולט בו, ממה הוא בורח, מה הוא מחפש. ילד שמשחק בבניה בונה עצמאות. ילד שמשחק בקרב מעבד כוח. ילד שמשחק 'בבית' — מחפש בטחון.",
    source: "כלי פרקטי — r/therapists, מרץ 2026",
  },
  {
    num: "07",
    tag: "מגמה",
    title: "טיפול במשחק טבעי — הפרק מחוץ לחדר",
    body: "גישה שמתחזקת: Nature-Based Play Therapy. פגישות בחוץ — לטייל, לאסוף, לבנות בבוץ — מצמצמות התנגדות ומאפשרות ביטוי שלא מגיע בחדר. ילדים עם ADHD מראים תגובה חיובית מיוחדת. לא מחליף את החדר — אלא מוסיף ממד.",
    source: "r/therapists — Nature Play Therapy, ינואר 2026",
  },
];

export default function NewsletterApril2026() {
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
        <p className="text-[#c9a97a] text-sm">ניוזלטר חודשי | מגדלור למטפלים</p>
        <div className="flex justify-center gap-5 mt-4 text-xs text-[#c9a97a]/60 border-t border-[#c9a97a]/15 pt-4">
          <span>גיליון 4</span>
          <span>·</span>
          <span>ליווי רוחני</span>
          <span>·</span>
          <span>Play Therapy</span>
          <span>·</span>
          <span>אפריל 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">
            בגיליון הזה: מחקר-על חדש על יעילות Play Therapy, שילוב גוף ונשימה בפגישה,
            הממד הרוחני שנכנס דרך שפת הילד — וכלים מהשדה שאפשר להשתמש בהם כבר מחר.
          </p>
        </section>

        {/* Main findings */}
        {findings.map(({ num, tag, title, body, source, accent, tagBg, tagColor }) => (
          <section key={num}>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
                ממצא {num}
              </span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-3"
                style={{ background: tagBg, color: tagColor }}
              >
                {tag}
              </span>
              <h2 className="text-[#3d2b1a] font-bold text-base mb-3 leading-snug">{title}</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">{body}</p>
              <p className="text-[#c9a97a] text-xs border-t border-dashed border-[#e0d0b8] pt-3 mt-1">{source}</p>
            </div>
          </section>
        ))}

        {/* Grid: 04–07 */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#c9a97a] rounded-full" />
            <span className="text-xs font-bold text-[#c9a97a] uppercase tracking-widest">ממצאים נוספים</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridItems.map(({ num, tag, title, body, source }) => (
              <div key={num} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e0d0b8]">
                <div className="text-3xl font-black text-[#e8d5b0] leading-none mb-2">{num}</div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2 bg-[#FDF3E0] text-[#9B7020]">
                  {tag}
                </span>
                <h3 className="text-[#3d2b1a] font-bold text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-[#5a4a38] text-xs leading-relaxed mb-2">{body}</p>
                <p className="text-[#c9a97a] text-[11px] border-t border-dashed border-[#e0d0b8] pt-2">{source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tip of the month */}
        <section className="overflow-hidden rounded-2xl shadow-sm border border-[#e0d0b8]">
          <div className="flex">
            <div className="w-2 shrink-0" style={{ background: "linear-gradient(to bottom, #c8922a, #8B6914)" }} />
            <div className="bg-[#fffdf7] px-6 py-6 flex-1">
              <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-3">כלי חודשי</p>
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">
                "לפני שנשחק — נשימה אחת ביחד"
              </h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">
                ילדים שמגיעים לחדר הטיפול נושאים את כל מה שקרה להם עד אותו רגע — הוויכוח עם
                האח, המבחן שהיה קשה, ההורה שהיה עסוק. לפני שמזמינים לשחק, רגע קצר אחד עוזר
                לגוף "להגיע": שאלה פשוטה ("איפה אתה עכשיו?") ונשימה אחת משותפת. זה לא
                פרוטוקול — זה פתיחה. הגוף שמרגיש שנראה מוכן להיות בחדר. והמשחק שמגיע
                אחר כך — אמיתי יותר.
              </p>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <div className="border-r-4 border-[#c9a97a] pr-4">
            <p className="text-[#7a6040] text-base italic leading-relaxed mb-3">
              "ילדים לא תמיד מספרים — אבל הם תמיד מראים. השאלה היא אם יש מישהו שם שרואה.
              וכשיש — הם יודעים. הם תמיד יודעים."
            </p>
            <p className="text-[#c9a97a] text-xs font-semibold">— עקרון מנחה, מגדלור | ענבל ליבר</p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3d2b1a] rounded-2xl p-7 text-center">
          <p className="text-[#c9a97a] text-xs tracking-widest uppercase mb-2">שאלות? ממצא שמהדהד?</p>
          <p className="text-[#e8d5b0] font-bold text-base mb-1">ענבל ליבר</p>
          <p className="text-[#c9a97a]/70 text-xs mb-5 leading-relaxed">
            מטפלת ראשית · Play Therapy · ליווי רוחני · הכשרות מורים
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:0545524516"
              className="inline-block bg-[#c9a97a] hover:bg-[#e8d5b0] text-[#3d2b1a] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200"
            >
              054-552-4516
            </a>
            <Link
              href="/metataplim"
              className="inline-block border border-[#c9a97a]/50 hover:border-[#c9a97a] text-[#c9a97a] hover:text-[#e8d5b0] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200"
            >
              הצטרפי לניוזלטר
            </Link>
          </div>
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
        <p className="text-[#c9a97a]/30 text-xs mt-4">
          מגדלור — ניוזלטר חודשי למטפלים · להסרה — השיבי "הסר" לאחת ההודעות
        </p>
      </footer>
    </div>
  );
}
