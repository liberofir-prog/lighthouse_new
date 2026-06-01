import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — יוני 2026",
  description: "גיליון יוני 2026: משחק ממוקד-משמעות מגביר רגישות רוחנית בילדים",
};

const findings = [
  {
    num: "01",
    tag: "מחקר אקראי מבוקר",
    title: "משחק ממוקד-משמעות מגביר רגישות רוחנית בילדים",
    body: "ניסוי אקראי מבוקר על 120 ילדים בני 10–11 בחן התערבות של 12 מפגשי משחק ממוקד-משמעות — 45 דקות כל אחד, פעמיים בשבוע, למשך שישה שבועות. התוצאות הצביעו על שיפור מובהק ברגישות הרוחנית, ובפרט בתת-מדד \"חוש המסתורין\" — יכולת הילד לחוות ולהגיב למה שנמצא מעבר לנראה. ההתערבות עסקה בחיזוק הקשר של הילד עם עצמו, עם הטבע, עם אחרים ועם האלוהי.",
    source: "NCBI PubMed Central",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8724725/",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "מחקר 2026",
    title: "מיינדפולנס מבוסס-משחק לגיל הרך — עדויות חיוביות חדשות",
    body: "מחקר שפורסם בינואר 2026 בדק תכנית מיינדפולנס מבוססת-משחק שפותחה לילדים בגיל 5–6, עם 40 משתתפים בעיצוב ניסויי עם קבוצת ביקורת. ממצאים מוצקים הראו השפעות חיוביות על חוסן, ויסות רגשי ותפקודים ניהוליים. ממצאים אלה מחזקים את הבסיס העדותי לשילוב שיטות מיינדפולנס בתוך הטיפול במשחק בגיל הרך.",
    source: "NCBI PubMed Central — ינואר 2026",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12840435/",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "גישה קלינית חדשה",
    title: "RFP-C: פסיכותרפיה ממוקדת-ויסות לילדים — פרוטוקול פסיכודינמי קצר-טווח",
    body: "מאמר שפורסם בינואר 2026 מציג את פסיכותרפיה ממוקדת-ויסות לילדים (RFP-C): פרוטוקול ממוסד של 16 מפגשי משחק ו-4 מפגשי הורים לגילאי 5–12 עם דיסרגולציה רגשית. בניגוד לגישות שמטרתן לשלוט בהתנהגות, RFP-C מפרשת את ההגנות הלא-מודעות המסתירות רגשות מציפים — ובכך מגיעה אל שורש הקושי. גישה זו מאחדת עומק פסיכודינמי עם מסגרת ברורה הישימה בקליניקה יום-יומית.",
    source: "NCBI PubMed Central — Korean Academy of Child and Adolescent Psychiatry, 2026",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12782995/",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "מחקר קליני 2025",
    title: "CCPT לילדים עם סרטן — שיפור בחמלה עצמית ובויסות רגשי",
    body: "מחקר שפורסם ב-2025 בדק את השפעת טיפול ממוקד-ילד (CCPT) על 34 ילדים בגילאי 8–12 עם אבחנת סרטן — 17 בקבוצה ניסויית ו-17 בביקורת. לאחר 12 שבועות, קבוצת הטיפול הגיעה לציונים גבוהים באופן מובהק בחמלה עצמית ובויסות רגשי. הממצאים מדגישים את תפקידו של הטיפול במשחק כמשאב פנימי מהותי לצד הסבל הגופני של מחלה ממאירה.",
    source: "ResearchGate — International Journal of Modern Education Studies, 2025",
    sourceUrl: "https://www.researchgate.net/publication/393271404_The_Effect_of_Child-Centered_Play_Therapy_on_Self-Compassion_and_Emotion_Regulation_Skills_in_Children_with_Cancer",
  },
  {
    num: "05",
    tag: "סקירת ספרות 2026",
    title: "ארבע פרספקטיבות לתמיכה בילדים אונקולוגיים — המשחק כמסגרת אינטגרטיבית",
    body: "מאמר שפורסם במרץ 2026 ב-Frontiers in Psychology מציג מודל אינטגרטיבי לתמיכה בילדים אונקולוגיים הכולל ארבע פרספקטיבות: ילד-ממוקד, משפחתית, רב-מקצועית ומבוססת-משחק. המשחק מוצג כמסגרת מאחדת המאפשרת עיבוד, ביטוי ותמיכה פסיכוסוציאלית לאורך כל שלבי הטיפול. המאמר מדגיש שהתייחסות לממד הרוחני-קיומי של הילד, לצד הפסיכולוגי, היא חלק בלתי נפרד מהטיפול המשחקי האינטגרטיבי.",
    source: "Frontiers in Psychology — מרץ 2026",
    sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1730525/full",
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
          <span>יוני 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">ביוני 2026, מחקרים חדשים מכל רחבי העולם מחזקים את הקשר שבין משחק לצמיחה רוחנית אצל ילדים — מסביבות אונקולוגיות ועד גן הילדים. הגיליון הזה מביא ממצאים עדכניים שיכולים להעשיר את עבודתכם הקלינית בנושא ליווי רוחני ו-play therapy.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">פתיחת מרחב ל"חוש המסתורין" בתוך המשחק</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">בהשראת ממצאי מחקר המשחק ממוקד-המשמעות, שלבי במפגש שאלות פתוחות כגון "מה לדעתך גורם לדברים לקרות?" או "מה מרגיש לך חי ומלא?". הניחי לילד להוביל את עצמו אל המרחב שבו חוש המסתורין — יכולת ההתנסות הרוחנית הפנימית — מתעורר ללא כפייה. שאלות ללא תשובה אחת ברורה הן דלת, לא מחסום, בדרך לעיבוד רגשי ורוחני עמוק.</p>
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
