import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אוגוסט 2026",
  description: "גיליון אוגוסט 2026: רוחניות ילדים עם מחלה מגבילת חיים: ממצאי סקירה חדשה",
};

const findings = [
  {
    num: "01",
    tag: "סקירת ספרות",
    title: "רוחניות ילדים עם מחלה מגבילת חיים: ממצאי סקירה חדשה",
    body: "סקירת היקף שפורסמה ב-2025/2026 וכללה 48 מחקרים בחנה את רוחניות ילדים עם מחלות מורכבות ומסכנות חיים. הממצאים מצביעים על כך שהצרכים הרוחניים של ילדים קשורים לשלב ההתפתחותי, ליחסים בין-אישיים, לתחושת נורמליות, למשמעות ולמטרה. הטיפול הרוחני צריך לתמוך בילד בהבנת אמונותיו, ערכיו והתנהגויותיו, תוך כוונת יעדים בני-השגה שיתמכו בחיים משמעותיים.",
    source: "Pediatric Nursing / ScienceDirect",
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "מחקר מבוקר",
    title: "משחק ממוקד-משמעות משפר רגישות רוחנית אצל ילדים",
    body: "ניסוי אקראי ומבוקר שנערך על 120 ילדים בגיל 10–11 בחן תכנית משחק ממוקד-משמעות: 12 מפגשים של 45 דקות כל אחד, פעמיים בשבוע במשך שישה שבועות. ציוני הרגישות הרוחנית בקבוצת ההתערבות עלו באופן מובהק מ-65.0 ל-79.4 לעומת ביקורת ללא שינוי משמעותי. החוקרים ממליצים ליישם את הגישה בחדרי משחק בבתי ספר, מרכזי שמירת ילדים ובתי חולים.",
    source: "PMC / International Journal of Community Based Nursing and Midwifery",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8724725/",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "מגמות מחקר",
    title: "מפת הידע הגלובלית של טיפול במשחק: ניתוח ביבליומטרי 2026",
    body: "מאמר שפורסם במרץ 2026 בכתב העת Brain and Behavior מספק לראשונה מיפוי שיטתי של שדה המחקר הגלובלי בטיפול במשחק. נפח הפרסומים השנתי עלה מ-13 מאמרים בשנת 2000 ל-77 בשנת 2024, עם שיעור צמיחה של 126.5% מאז 2015. הניתוח מזהה את המגמות הקליניות הרלוונטיות ביותר ואת סדרי העדיפות לעתיד בתחום.",
    source: "PMC / Brain and Behavior",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12973151/",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "ניסוי קליני",
    title: "סיפור סיפורים וטיפול במשחק: מה מפחית חרדה יותר אצל ילדים מאושפזים?",
    body: "מחקר אקראי ומבוקר שפורסם בינואר 2025 ב-BMC Complementary Medicine and Therapies בדק 75 ילדים בגיל 3–10 בבית חולים. המחקר מצא שלסיפור סיפורים היה תפקיד מרכזי יותר בהפחתת חרדה בהשוואה לטיפול במשחק בלבד. שילוב שתי הגישות פתח אפשרויות חדשות לנוכחות רוחנית-רגשית בסביבות רפואיות עם ילדים.",
    source: "PMC / BMC Complementary Medicine and Therapies",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/",
  },
  {
    num: "05",
    tag: "גישה ייחודית",
    title: "Godly Play: פלטפורמת משחק לפיתוח רוחניות ילדים מאושפזים",
    body: "מחקר פיילוט בחן את שיטת Godly Play — גישה המשלבת סיפורים מקודשים עם משחק יצירתי בסגנון מונטסורי — בקרב ילדים מאושפזים. התוצאות הראו שיפור מובהק בסולמות חרדה, דיכאון ורוחניות לפני ואחרי ההתערבות. השיטה נמצאת בשימוש רחב ביחידות ילדים ברחבי העולם כדרך לתמוך ברווחה רוחנית-נפשית גם בתנאי מחלה.",
    source: "PubMed",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18947106/",
  }
];

export default function NewsletterPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0] font-sans">

      {/* ── Header ── */}
      <header className="bg-[#3d2b1a] text-center px-6 py-8">
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="מגדלור" width={64} height={64} className="object-contain" />
        </div>
        <h1 className="text-3xl font-bold text-[#e8d5b0] mb-1 tracking-wide">מגדלור</h1>
        <p className="text-[#c9a97a] text-sm">ניוזלטר חודשי | מגדלור למטפלים</p>
        <div className="flex justify-center gap-5 mt-4 text-xs text-[#c9a97a]/60 border-t border-[#c9a97a]/15 pt-4">
          <span>ליווי רוחני</span>
          <span>·</span>
          <span>Play Therapy</span>
          <span>·</span>
          <span>אוגוסט 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">שלום לכולם, גיליון אוגוסט 2026 של עלון מגדלור מתמקד בצומת שבין ליווי רוחני לבין טיפול במשחק — נושא שצובר תאוצה בספרות המחקרית הבינלאומית ומציע לנו, המטפלים, שפה חדשה לנוכחות רוחנית עם ילדים. כמה ממצאים חשובים מחכים לכם למטה.</p>
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
              <div className="border-t border-dashed border-[#e0d0b8] pt-3 mt-1">
                <p className="text-[#c9a97a] text-xs">{source}</p>
              </div>
            </div>
          </section>
        ))}

        {/* Grid: additional findings */}
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
                <div className="border-t border-dashed border-[#e0d0b8] pt-2">
                  <p className="text-[#c9a97a] text-[11px]">{source}</p>
                </div>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">12 מפגשי משחק ממוקד-משמעות</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">על פי הניסוי האקראי בנושא, 12 מפגשים של משחק ממוקד-משמעות בני 45 דקות כל אחד (פעמיים בשבוע למשך שישה שבועות) הראו שיפור מובהק ברגישות הרוחנית של ילדים. ניתן ליישם את הפורמט הזה בחדר טיפולים, בחדר המשחקים בבית הספר, או בסביבת אשפוז — המשחק הוא שפה רוחנית שכל ילד מבין.</p>
            </div>
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
            <a href="tel:0545524516"
              className="inline-block bg-[#c9a97a] hover:bg-[#e8d5b0] text-[#3d2b1a] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200">
              054-552-4516
            </a>
            <Link href="/metataplim"
              className="inline-block border border-[#c9a97a]/50 hover:border-[#c9a97a] text-[#c9a97a] hover:text-[#e8d5b0] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200">
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
          מגדלור — ניוזלטר חודשי למטפלים · להסרה — השיבי &quot;הסר&quot; לאחת ההודעות
        </p>
      </footer>
    </div>
  );
}
