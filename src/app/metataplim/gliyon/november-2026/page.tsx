import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — נובמבר 2026",
  description: "גיליון נובמבר 2026: אפקט גדול-מאוד לטיפול במשחק בפיתוח רגשי ילדים",
};

const findings = [
  {
    num: "01",
    tag: "מטא-אנליזה 2026",
    title: "אפקט גדול-מאוד לטיפול במשחק בפיתוח רגשי ילדים",
    body: "מטא-אנליזה של 43 מחקרים עצמאיים הכוללת 2,614 ילדים זיהתה אפקט גלובלי גדול-מאוד (g = 1.12) בתחומי הקוגניציה, הרגש וההתפתחות. ממצאי הרגש בגיל הרך הציגו את ההשפעות הגבוהות ביותר מבין כל תת-הקבוצות. החוקרים מציינים שיעילות הטיפול רגישה להקשר ולשיטה, ומדגישים את חשיבות ההתאמה האישית.",
    source: "International Journal on Studies in Education, 2026",
    sourceUrl: "https://ijonse.net/index.php/ijonse/article/view/7429",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "טראומה ו-PTSD",
    title: "טיפול במשחק מפחית תסמיני PTSD ומחזק חוסן פסיכולוגי",
    body: "סקירת ספרות שפורסמה ב-Mediterranean Journal of Social Sciences מצאה שטיפול במשחק מפחית באופן עקבי תסמינים של היפר-עוררות, הימנעות וחוויה-מחדש אצל ילדים שעברו טראומה. הטיפול תורם גם לוויסות רגשי ולחוסן פסיכולוגי לטווח הארוך. הממצאים תומכים בשילוב play therapy בפרוטוקולי הטיפול בטראומה בגיל הצעיר.",
    source: "Mediterranean Journal of Social Sciences, 2026",
    sourceUrl: "https://www.richtmann.org/journal/index.php/mjss/article/view/14703",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "ליווי רוחני",
    title: "Godly Play כהתערבות רוחנית-טיפולית לילדים מאושפזים",
    body: "מרכז הרוחניות של Children's Health מציע Godly Play כגישה משולבת לסיוע רוחני וטיפולי לילדים אשפוזיים. השיטה, המבוססת על עקרונות מונטסורי ונרטיב תיאולוגי, מלווה ילדים בחיפוש אחר משמעות תוך חופש לחקור את עולמם הפנימי. הגישה מתאימה במיוחד לילדים בלחץ גופני, רגשי או רוחני.",
    source: "Children's Health — Center for the Spirituality of Children",
    sourceUrl: "https://www.childrens.com/patient-families/parent-resources/spiritual-care-and-education/center-for-the-spirituality-of-children",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "אונקולוגיה ילדים",
    title: "התערבויות משחק מפחיתות חרדה ודיכאון בילדים חולי סרטן",
    body: "מטא-אנליזה שפורסמה ב-Journal of Pediatric Nursing בשנת 2026 בחנה סוגי התערבות משחק שונים בקרב ילדים עם סרטן ומצאה הפחתה משמעותית בחרדה ובדיכאון. משחק רפואי פנים-אל-פנים מתאים במיוחד לילדים עם חרדה חמורה, ואילו משחק קבוצתי מקוון מתאים יותר לילדים הסובלים מדיכאון. הממצאים מדגישים את חשיבות התאמת סוג ההתערבות למצב הרגשי של הילד.",
    source: "PubMed — Journal of Pediatric Nursing, 2026",
    sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/42480167/",
  },
  {
    num: "05",
    tag: "מחקר היסטורי",
    title: "המקורות הקליניים של Godly Play: כוהנות, טיפול, ורוחניות ילדים",
    body: "פרסום חדש ב-2026 בכתב העת לרוחניות ילדים (childrenspirituality.org) שופך אור על מקורותיו הקליניים של Godly Play ועל ג'רום ברימן כמלווה רוחני בסביבה רפואית. המאמר מגלה כיצד פותחה השיטה במקור כהתערבות טיפולית לילדים בסביבת בית חולים, עוד לפני שהפכה לשיטת חינוך. הממצאים מחזקים את הבסיס הקליני לשימוש בשיטה כחלק מליווי רוחני-טיפולי.",
    source: "Journal of Childhood & Religion — childrenspirituality.org, 2026",
    sourceUrl: "https://www.childrenspirituality.org/publications/2026",
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
          <span>נובמבר 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">חודש נובמבר מביא אתו גיליון עשיר במיוחד — ממצאי מטא-אנליזה חדשה על יעילות ה-play therapy, עדויות על ליווי רוחני בסביבה רפואית, וכלי מעשי לחדר הטיפול. נשמח לשמוע מה מהדהד אצלכם.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">שאלות ה\'תהייה\' — Wonder Questions בחדר הטיפול</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">בהשראת Godly Play, שלבו שאלות פתוחות המתחילות ב\'אני תוהה...\' בתוך מרחב המשחק הטיפולי: למשל, \'אני תוהה מה הדמות הזו מרגישה\', \'אני תוהה מה הכי חשוב כאן\'. שאלות אלו מזמינות את הילד לחקור את עולמו הפנימי ואת המשמעות שהוא מייחס לחוויות, מבלי שהמטפל מפרש עבורו. ניתן להשתמש בהן הן כשפה רגשית והן כפתח לעומק רוחני, בהתאם לצרכי הילד.</p>
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
