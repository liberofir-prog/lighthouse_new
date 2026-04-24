import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — אפריל 2026",
  description: "גיליון אפריל 2026: ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית",
};

const findings = [
  {
    num: "01",
    tag: "מחקר מקיף",
    title: "ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית",
    body: "סקירה שיטתית שפורסמה ב-2025 בכתב העת Arts in Psychotherapy ניתחה 40 שנות מחקר בטיפול בחול (sandplay), ומצאה 16 ניסויים מבוקרים אקראיים ו-17 מחקרי יעילות עם שיפורים מובהקים ב-effect size מתון-גבוה. ממצא בולט הקשור לליווי רוחני: הגישה מפעילה את מה שדורה קאלף כינתה 'אנרגיות מחדשות' — תנועה פנימית של ריפוי שחובקת את הממד הרוחני של הילד גם כשאינו מילולי. הסקירה כוללת גם סקירת אפליקציות דיגיטליות מתפתחות של הטיפול.",
    source: "Arts in Psychotherapy / ScienceDirect, 2025",
    sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0197455625000644",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "מחקר 2026",
    title: "ארבעה ממדים לתמיכה בילדים אונקולוגיים: המשחק כמסגרת אינטגרטיבית",
    body: "מאמר שפורסם ב-Frontiers in Psychology בתחילת 2026 מציע מסגרת אינטגרטיבית לתמיכה בילדים עם סרטן דרך ארבעה ממדים, ובמרכזם הגישה מבוססת-המשחק. המחברים טוענים שמשחק מאפשר לילד החולה לעבד פחדים קיומיים ושאלות רוחניות על חיים ומוות בשפה שאינה מאיימת. עבור מטפלים, זוהי הזמנה לראות ב-Play Therapy לא רק כלי פסיכולוגי אלא גם ליווי קיומי.",
    source: "Frontiers in Psychology, 2026",
    sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1730525/abstract",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "ניסוי מבוקר",
    title: "טיפול במשחק וסיפור מפחיתים חרדה בילדים מאושפזים — ניסוי אקראי מבוקר",
    body: "מחקר שפורסם ב-BMC Pediatrics ב-2025 בחן 75 ילדים בגילאי 3–10 שאושפזו בבית חולים באיראן, והשווה בין קבוצת טיפול במשחק, קבוצת סיפור סיפורים, וקבוצת ביקורת. שתי ההתערבויות הפחיתו חרדה מובהקת לעומת הביקורת, ושילוב שניהם הניב את התוצאות הטובות ביותר. עבור מטפלים העובדים עם ילדים בסביבות רפואיות — ובמיוחד עם ממד רוחני של מחלה — הממצא מחזק את שילוב הנרטיב עם המשחק כגשר אל עולמו הפנימי של הילד.",
    source: "BMC Pediatrics / PubMed Central, 2025",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "סקירה קלינית",
    title: "טיפול בחול בגיל הילדות: כשהשפה הלא-מילולית מדברת אל הנשמה",
    body: "סקירה נרטיבית שפורסמה ב-Frontiers in Pediatrics בחנה טיפול בחול מסורתי ודיגיטלי בילדים, ומדגישה כי ילדים חסרים לעיתים את היכולות הקוגניטיביות והמילוליות הנדרשות לפסיכותרפיה שיחתית. טיפול בחול דורש מינימום שפה ומאפשר לילד להביע עצמו באופן לא-מילולי — ממד שמדויק במיוחד לביטוי רוחני וקיומי. הסקירה כוללת גם יישומי AR ו-VR מתפתחים לטיפול מרחוק.",
    source: "Frontiers in Pediatrics / PubMed Central",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12929380/",
  },
  {
    num: "05",
    tag: "סקירה שיטתית",
    title: "משחק חופשי (לא-טיפולי) משפר אינטליגנציה רגשית בגיל הרך",
    body: "סקירה שיטתית שפורסמה ב-Frontiers in Psychology בדקה מחקרים על השפעת משחק ספונטני (לא-טיפולי) על רגשות וכישורים רגשיים בילדים בגיל 3–7. הממצאים מראים שמשחק חופשי — ללא הנחיה טיפולית — מפחית תסמינים רגשיים שליליים ומחזק אינטליגנציה רגשית. לגישת הליווי הרוחני: כשילד משחק ביחד עם מטפל שנוכח בנפש ובגוף, המשחק עצמו הוא ה-intervention.",
    source: "Frontiers in Psychology, 2025",
    sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1475387/full",
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
          <span>אפריל 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">בגיליון אפריל נתמקד במפגש בין Play Therapy לליווי רוחני: מה מחקרי 2025–2026 מגלים על הממד הקיומי בטיפול דרך משחק, ואיך ניתן להחזיק בחדר גם את הנפש וגם את הנשמה של הילד.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">מרחב החול כמרחב קדוש — נוכחות שקטה לצד הבריאה</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">כשילד בונה בחול, אל תמהרו לשאול \'מה זה?\' — שהו בנוכחות. הגישה הרוחנית של דורה קאלף בטיפול בחול מלמדת שהמטפל הוא \'עֵד מקודש\' לבריאה, לא מפרש. נוכחות שקטה ומכוונת, עיניים שרואות ואינן ממהרות לסמן — זה עצמו מעביר לילד: \'מה שיוצא ממך הוא בעל ערך ואין צורך להסביר אותו.\' לאחר שהילד סיים, אפשר לשאול: \'ספר לי על המקום שבנית\' — ולא \'מה זה אומר לך.\'</p>
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
