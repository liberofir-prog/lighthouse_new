import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — יולי 2026",
  description: "גיליון יולי 2026: רוחניות ילדים עם מחלות מסכנות חיים — מה אומרת הספרות?",
};

const findings = [
  {
    num: "01",
    tag: "סקירה שיטתית",
    title: "רוחניות ילדים עם מחלות מסכנות חיים — מה אומרת הספרות?",
    body: "סקירת היקף שפורסמה ב-2025 ב-ScienceDirect בחנה שיטות לתמיכה רוחנית בילדים עם מחלות כרוניות מורכבות ומסכנות חיים. הממצאים מדגישים כי ליווי רוחני — לרבות Godly Play, מוזיקה טיפולית וסיפור בעל משמעות — מסייע לילדים לעבד חוויות קיצוניות ולשמר תחושת שלמות עצמית. הסקירה קוראת לשלב ליווי רוחני שיטתי בצוותי הריפוי הרב-מקצועי.",
    source: "ScienceDirect — Palliative & Supportive Care, 2025",
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "מחקר חדש 2026",
    title: "טיפול בחול בשיקום ילדים — סקירה מקיפה של העדויות",
    body: "מחקר שפורסם ביוני 2026 ב-Frontiers in Pediatrics סקר את כלל העדויות על טיפול בחול (Sandplay Therapy) בשיקום ילדים. הממצאים מצביעים על יעילות קלינית בהפחתת טראומה נפשית, שיפור ויסות רגשי והתנהגותי, קידום כישורים חברתיים ופיתוח קוגניטיבי. המחקר מדגיש כי הכלי חוצה גישות ומשלב בצורה טבעית ממדים רוחניים ורגשיים ללא הדרכה מילולית ישירה.",
    source: "Frontiers in Pediatrics — יוני 2026",
    sourceUrl: "https://www.frontiersin.org/journals/pediatrics/articles/10.3389/fped.2026.1790000/full",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "מחקר ניסויי",
    title: "Godly Play מפחית חרדה ודיכאון בילדים מאושפזים",
    body: "מחקר ניסויי שבדק 40 ילדים עם מחלות כרוניות במסגרת אשפוז הראה כי שלושה מפגשי Godly Play הביאו לשיפור מובהק סטטיסטית בשלושה מדדים: חרדה (p=.049), דיכאון (p=.011) ומדד הרוחניות של McBride (p=.033). Godly Play מערב סיפור סביב נושא רוחני ולאחריו משחק חופשי יצירתי — גישה המאפשרת לילד לעבד חוויות רוחניות ואקזיסטנציאליות בתוך מרחב פסיכולוגי בטוח.",
    source: "PubMed — Journal of Pastoral Care & Counseling, 2008",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18947106/",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "חידוש טכנולוגי",
    title: "טיפול בחול דיגיטלי לצד המסורתי — נרטיב ראייתי 2026",
    body: "סקירה נרטיבית שפורסמה ב-2026 ב-Frontiers in Psychology עשתה השוואה בין טיפול בחול מסורתי (Sandplay) לטיפול בחול דיגיטלי בפדיאטריה. בעוד שבגישה המסורתית המטפל נמצא ברקע ללא הכוונה פעילה, הגישה הדיגיטלית מאפשרת גמישות רבה יותר בסביבות טיפול שאינן מאפשרות עבודה בחול ממשי. שתי הגישות הוכחו כיעילות בעיבוד מצוקה רגשית ובחיזוק הבעת ה\"עצמי\" של הילד.",
    source: "Frontiers in Psychology — 2026",
    sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1692537/full",
  },
  {
    num: "05",
    tag: "דיון מקצועי",
    title: "טיפול פיליאלי: ההורה כסוכן שינוי — האפקטיביות הגבוהה ביותר בטיפול במשחק",
    body: "מחקרי תוצאות על Filial Therapy — גישה שבה ההורה מקבל הכשרה מובנית של 10 מפגשים ומשמש כ\"מטפל\" לילדו — מצביעים על effect size של 1.15, הגבוה ביותר מכל גישות ה-Play Therapy. בתוך 10–12 שבועות נרשמת ירידה ממוצעת של 37% בבעיות התנהגות, ושיפור של 68% בהתחברות רגשית הורה-ילד. הגישה הפיליאלית מחזקת גם את ממד הנוכחות הרוחנית של ההורה — כיוון שהיא מלמדת אותו להיות עד, לא מנחה.",
    source: "PlayStrong Institute — Filial Therapy Outcome Studies",
    sourceUrl: "https://playstronginstitute.com/play-therapy/complete-guide/research/outcome-studies/filial-therapy-studies",
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
          <span>יולי 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">גיליון יולי 2026 מביא ממצאים עדכניים על הצומת שבין ליווי רוחני לטיפול במשחק — מ-Godly Play בחדר האשפוז, דרך טיפול בחול מסורתי ודיגיטלי, ועד להורה כסוכן שינוי רוחני. הגיליון מיועד לעמיתות מטפלות שרוצות להעמיק את הממד הרוחני בעבודה הקלינית.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">"חדר גודלי פליי" מיני — 10 דקות במרחב הממתין</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">בתחילת כל מפגש, הניחו לילד לבחור אחד מ-3 פריטים: בד, אבן קטנה, ופיגורת אדם קטנה. בקשו ממנו להניח אותם על השולחן בלי מילים — ורק לאחר מכן שאלו: \'מה קרה כאן?\' הכלי מגיע מ-Godly Play ומאפשר לילד לפתוח ממד פנימי-רוחני לפני שהשיחה הטיפולית מתחילה, ומחקרים הראו שהוא מפחית חרדה כבר בפגישה הראשונה.</p>
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
