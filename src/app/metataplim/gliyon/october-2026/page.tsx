import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אוקטובר 2026",
  description: "גיליון אוקטובר 2026: טיפול במשחק כהתערבות מבוססת חוזקות בעבודה סוציאלית עם ילדים ומשפחות",
};

const findings = [
  {
    num: "01",
    tag: "גישה מבוססת חוזקות",
    title: "טיפול במשחק כהתערבות מבוססת חוזקות בעבודה סוציאלית עם ילדים ומשפחות",
    body: "פרק חדש שפורסם ביולי 2026 ב-Springer ממקם את הטיפול במשחק בתוך מסגרת של עבודה סוציאלית כהתערבות מבוססת חוזקות ומותאמת תרבותית. הפרק מצביע על כך שמשחק יוצר מרחב בטוח לילדים לבטא חוויות של אבל, פגיעה וקונפליקטים משפחתיים, ומביא ראיות לשיפור בוויסות רגשי, חוסן ותפקוד יחסי. ההמלצות הפרקטיות כוללות הרחבת הגישה לבתי ספר ולמערכות רווחת ילדים תוך שילוב עם עבודה משפחתית.",
    source: "Springer — Children and Family Social Work (יולי 2026)",
    sourceUrl: "https://link.springer.com/rwe/10.1007/978-981-95-3440-1_76-1",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "רוחניות בטיפול",
    title: "טיפוח הרוח דרך קשר, משמעות ותקווה: גישות יצירתיות ומגולמות בייעוץ ילדים",
    body: "פרק עדכני ב-Springer מציג גישות מגולמות ויצירתיות — כולל מיינדפולנס, אמנויות ביטוי, פרקטיקה אקו-רוחנית ובניית נרטיב משמעות — ככלים מעשיים המפעילים את יכולת הילד לחוות יראה, פליאה ומשמעות. הגישות מוצגות כדרכים לחזק את הנוכחות הרוחנית בחדר הטיפול ולהגיב לצרכים קיומיים של ילדים בגיל הרך ובגיל בית-הספר. הפרק הוא חלק ממהדורת עיון Living Reference Work שפורסמה ב-2026.",
    source: "Springer — Children and Family Social Work (2026)",
    sourceUrl: "https://link.springer.com/rwe/10.1007/978-981-95-3440-1_41-1",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "ניסוי קליני",
    title: "טכניקות play therapy מפחיתות חוסר אונים נלמד בקרב ילדים חסרי בית",
    body: "ניסוי אקראי מבוקר שנערך בבתי ילדים בטורקיה בדק את השפעת טכניקות play therapy על תחושת חוסר אונים נלמד ורמות השוואה חברתית בקרב 39 ילדים. ההתערבות כללה תוכנית מובנית של שישה שבועות, ונמצאה אפקטיבית בהפחתת דפוסי חשיבה שליליים ובחיזוק החוסן הנפשי. הממצאים מצביעים על ערכו של הטיפול במשחק עבור ילדים חסרי מסגרת משפחתית — אוכלוסייה שנזקיה הרגשיים-רוחניים נותרים לעיתים קרובות ללא מענה.",
    source: "ClinicalTrials.gov (NCT07137325)",
    sourceUrl: "https://clinicaltrials.gov/study/NCT07137325",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "אמנות וליווי רוחני",
    title: "בובת הנייר כמדיום של ליווי רוחני: אמנות, אתיקה וזהות עם ילדים מאושפזים",
    body: "מצגת שנערכה ב-2026 בבית חולים לילדים בקנזס סיטי (Children's Mercy) דנה בשילוב אמנות יצירתית — בובת הנייר — בליווי רוחני עם ילדים מאושפזים. העבודה מדגישה כיצד ביטוי אמנותי מאפשר לילד לספר את סיפורו, לעבד שאלות של זהות ומשמעות, ולתקשר רגשות שאינם ניתנים לביטוי מילולי. הגישה ממוקמת כסינתזה בין אמנות-טיפול, ליווי רוחני ועקרונות אתיים בטיפול בילדים.",
    source: "Children's Mercy Hospital Scholarly Exchange (2026)",
    sourceUrl: "https://scholarlyexchange.childrensmercy.org/cgi/viewcontent.cgi?article=1127&context=presentations",
  },
  {
    num: "05",
    tag: "מחקר חדש",
    title: "play therapy עם ביופידבק מגומיפיצ'ד לילדים עם אוטיזם — מחקר פעיל 2026",
    body: "ניסוי קליני שגייס משתתפים מפברואר 2026 חוקר שילוב של play therapy עם ביופידבק מגומיפיצ'ד (gamified biofeedback) בקרב ילדים עם הפרעת ספקטרום אוטיזם, עם תאריך סיום צפוי דצמבר 2026. המחקר מייצג מגמה גוברת של שילוב כלים טכנולוגיים בתוך מרחב הטיפול במשחק, תוך שמירה על ממדי הקשר האנושי והרגשי. הנושא רלוונטי לשדה שלנו בשל הדיון על כיצד להחזיק ממדים רוחניים-קיומיים גם בטיפול עם ילדים על הספקטרום.",
    source: "ClinicalTrials.gov (NCT07322640)",
    sourceUrl: "https://clinicaltrials.gov/study/NCT07322640",
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
          <span>אוקטובר 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">שלום לכולן, גיליון אוקטובר 2026 מרחיב את הצומת שבין ליווי רוחני לטיפול במשחק — הפעם דרך עדשות חדשות: גישות מבוססות חוזקות, ביטוי אמנותי כגשר רוחני, ומחקרים קליניים פעילים שמעצבים את עתיד השדה. הממצאים בגיליון זה מגיעים מ-Springer, מבתי חולים לילדים ומניסויים קליניים פעילים.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">פינת אקו-רוחניות בחדר הטיפול</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">בהשראת הגישות המוצגות בפרק Springer 2026 על טיפוח הרוח, כדאי ליצור בחדר הטיפול \'פינת טבע קטנה\' — קונכיות, עצים, חול, אבנים או ענפים — כפתח לשיחה על משמעות וחיבור. גישה אקו-רוחנית מפעילה תחושות חושיות ומאפשרת לילדים להיפגש עם ממדי פליאה ויראה, שהם לב-ליבו של הליווי הרוחני, גם מחוץ לשפה מילולית.</p>
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
