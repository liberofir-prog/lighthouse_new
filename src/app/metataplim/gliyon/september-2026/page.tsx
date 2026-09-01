import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — ספטמבר 2026",
  description: "גיליון ספטמבר 2026: ממד הרוחניות בילדים עם מחלות מגבילות חיים — סקירת היקף 2025",
};

const findings = [
  {
    num: "01",
    tag: "סקירת ספרות",
    title: "ממד הרוחניות בילדים עם מחלות מגבילות חיים — סקירת היקף 2025",
    body: "סקירת היקף שפורסמה ב-ScienceDirect ב-2025 מיפתה את הספרות על רוחניות ילדים עם מחלות מגבילות חיים ומורכבות. הממצאים מראים כי ילדים אלה מביעים צרכים רוחניים מובהקים — שאלות על משמעות, תקווה וחיבור — הנשארים לא פעם ללא מענה במסגרת הטיפול הרגיל. הסקירה ממליצה לשלב כלים מותאמי-גיל כמו משחק, אמנות וסיפור כגשרים לשיחה רוחנית עם ילדים בקבוצת אוכלוסייה רגישה זו.",
    source: "ScienceDirect / Palliative Medicine (2025)",
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "מחקר מבוקר",
    title: "משחק ממוקד-משמעות מחזק רגישות רוחנית בילדים — ניסוי אקראי מבוקר",
    body: "מחקר מבוקר אקראי שפורסם ב-PubMed Central בחן תוכנית התערבות של 12 מפגשים (45 דקות כל אחד) המשלבת משחק ממוקד-משמעות. הממצאים הראו שיפור מובהק ברגישות הרוחנית של ילדים — לרבות יכולתם לעבד שאלות קיומיות דרך המשחק, תחושת חיבור לגדול ממנהם, ויכולת הסתכלות פנימית. המחקר מחזק את הבסיס לשילוב ממד רוחני-קיומי בחדר הטיפול גם בגיל הרך.",
    source: "PubMed Central / NCBI",
    sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8724725/",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "ניסוי קליני",
    title: "טיפול במשחק וסיפור סיפורים מפחיתים חרדה בילדים מאושפזים — RCT",
    body: "ניסוי מבוקר אקראי שנערך בסביבה בית-חולים השווה את ההשפעה של טיפול במשחק ושל סיפור סיפורים על חרדת ילדים מאושפזים. שתי ההתערבויות הפחיתו חרדה בצורה מובהקת, כאשר שילובן יחד הניב את התוצאות הטובות ביותר. הממצאים מדגישים את עוצמתם של ממדים נרטיביים ומשחקיים — הנסמכים גם על עקרונות ליווי רוחני — בסביבות רפואיות מאתגרות.",
    source: "PubMed Central / NCBI (2025)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "מגמות מחקר",
    title: "ניתוח ביבליומטרי 2026: מבנה הידע והמגמות בספרות Play Therapy",
    body: "ניתוח ביבליומטרי שפורסם ב-PMC ב-2026 מיפה את מבנה הידע והמגמות בספרות הטיפול במשחק בשנים האחרונות. המחקר הראה גידול עקבי בפרסומים, עם דגש הולך וגובר על ילדים עם ASD, שילוב קבוצות גיל מגוונות ואינטגרציה בין גישות. מטא-אנליזות בתחום מצאו אפקטים בינוניים עד גדולים, המאשרים את יעילות הגישה לטיפול רגשי-התנהגותי בילדים.",
    source: "PubMed Central (PMC)",
    sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12973151/",
  },
  {
    num: "05",
    tag: "עדות קלינית",
    title: "25 התערבויות CCPT לטראומה — ירידה של 60–75% בסימפטומים",
    body: "סקירה קלינית מקצועית שפורסמה ב-CoreWell CE מציגה 25 התערבויות ממוקדות-ילד (CCPT) לטיפול בטראומה. הנתונים מראים ירידה של 60–75% בסימפטומי מצוקה אצל ילדים שקיבלו טיפול במשחק, ואפקט גדול (0.91) בשיפור התנהגותי כאשר ההורים מלוּוים בגישת פילאל. הכלים המוצגים — מרחב בטוח, קשב רפלקטיבי ונוכחות לא-שיפוטית — חוצים ישירות גם את תחום הליווי הרוחני עם ילדים.",
    source: "CoreWell CE / Play Therapy CE",
    sourceUrl: "https://corewellceu.com/blog/25-child-centered-play-therapy-interventions-for-trauma",
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
          <span>ספטמבר 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">שלום לכולן, גיליון ספטמבר 2026 מתמקד בצומת שבין ליווי רוחני לטיפול במשחק — נושא שמחקרים עדכניים ממשיכים לחזק ולהעמיק. בגיליון זה תמצאו ממצאים ממחקרים מבוקרים, סקירות שיטתיות ועדויות קליניות עם כלים מעשיים לנוכחות רוחנית בחדר הטיפול.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">Godly Play בחדר הטיפול — שלושה צעדים פשוטים</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">הביאו לחדר הטיפול חפץ סמלי קטן — נר, אבן, צמח — ובקשו מהילד לספר לו סיפור. הניחו לסיפור לצמוח ללא כיוון מוקדם, ושימו לב למטפורות ולדימויים שהילד בוחר. סיימו עם שאלה פתוחה: \'מה הסיפור הזה מספר לך על עצמך?\' — מחקר Godly Play מראה כי צעד פשוט זה פותח עיבוד רוחני-קיומי עמוק גם בגיל הגן.</p>
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
