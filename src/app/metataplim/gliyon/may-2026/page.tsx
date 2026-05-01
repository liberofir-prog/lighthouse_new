import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — מאי 2026",
  description: "גיליון מאי 2026: טיפול CCPT בסביבה חיצונית — שיפור מובהק בקשב ובמיומנויות חברתיות-רגשיות",
};

const findings = [
  {
    num: "01",
    tag: "מחקר פיילוט",
    title: "טיפול CCPT בסביבה חיצונית — שיפור מובהק בקשב ובמיומנויות חברתיות-רגשיות",
    body: "מחקר פיילוט בחן 13 ילדים בגילאי 5–10 שקיבלו טיפול ממוקד ילד (CCPT) בחדר משחק חיצוני, עם חומרי טבע לצד צעצועים קלאסיים, פעמיים בשבוע במשך 8 שבועות. הממצאים הראו שיפור מובהק סטטיסטית בתפקוד הקשב (סולם Brown) ובמיומנויות חברתיות-רגשיות (SEARS-Parent). הסביבה הפתוחה הוסיפה ממד של חיבור לטבע שמחזק את המרחב הטיפולי ומאפשר ביטוי רגשי-רוחני עמוק יותר.",
    source: "International Journal of Play Therapy / PsycNet, 2024",
    sourceUrl: "https://psycnet.apa.org/record/2024-37955-005",
    accent: "#c9a97a",
    tagBg: "#FDF3E0",
    tagColor: "#9B7020",
  },
  {
    num: "02",
    tag: "דיון תיאורטי",
    title: "רוחניות, ביטחון, חמלה ומשחק — ארבעה ציוני דרך בפסיכותרפיה קבוצתית",
    body: "מאמר שפורסם ב-2024 ב-International Journal of Group Psychotherapy מציג ארבעה גורמים משלימים — רוחניות, ביטחון, חמלה ומשחק — כדרכים חדשניות שבהן הטיפול הקבוצתי מגיב לסבל האנושי. המחברים מראים כיצד כל אחד מהגורמים הללו מרחיב את ארגז הכלים הטיפולי ומאפשר מענה לממדים קיומיים שאינם נגישים בטיפול הדיבור הקלאסי. הרלוונטיות למטפלים המשלבים ליווי רוחני בעבודתם עם ילדים — ישירה ומיידית.",
    source: "International Journal of Group Psychotherapy, Taylor & Francis, 2024",
    sourceUrl: "https://www.tandfonline.com/doi/full/10.1080/00207284.2024.2333680",
    accent: "#8faa8b",
    tagBg: "#EFF6EE",
    tagColor: "#4a7a45",
  },
  {
    num: "03",
    tag: "סקירה שיטתית",
    title: "טיפול במשחק לילדים עם סרטן: מטה-אנליזה 2025 מוכיחה הפחתת חרדה ודיכאון",
    body: "סקירה שיטתית ומטה-אנליזה שפורסמה ב-Heliyon (2025) ניתחה את כלל המחקרים על השפעת התערבויות מבוססות משחק בילדים הסובלים ממחלת הסרטן. הממצאים מראים הפחתה מובהקת של תסמיני דיכאון, לחץ וחרדה, ואפשרות לילדים לבטא חוויות מחלה שאינן נגישות בשיח מילולי. ממצאי המחקר מחזקים את מקומו של המשחק כשפה טיפולית ראשית בסיטואציות קיומיות בעלות עצימות גבוהה.",
    source: "Heliyon / ScienceDirect, 2025",
    sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2405844025020043",
    accent: "#b08a9a",
    tagBg: "#F9EEF4",
    tagColor: "#7a4060",
  }
];

const gridItems = [
  {
    num: "04",
    tag: "מחקר אקספלורטורי",
    title: "ליווי רוחני דרך משחק לילדים שחוו הזנחה — מחקר ייחודי",
    body: "מחקר אקספלורטורי בחן התערבות ייעוץ מבוססת Play Therapy שנועדה לחזק את הרווחה הרוחנית של ילדים שחוו הזנחה. הממצאים מצביעים על כך שמרחב המשחק מאפשר לילדים לבטא חוויות קיומיות שאינן נגישות בשיח מילולי ישיר. הנרטיב הרוחני שנרקם דרך המשחק תרם לחיזוק תחושת הזהות, המשמעות והחוסן אצל הילדים.",
    source: "International Journal of Research / HRMARS",
    sourceUrl: "https://hrmars.com/papers_submitted/6975/Play_Therapy-based_Counseling_Intervention_on_the_Spiritual_Wellness_of_Neglected_Children_An_Exploratory_Study.pdf",
  },
  {
    num: "05",
    tag: "עדכון מישראל",
    title: "\"משיב הרוח\" — 42 מלווים רוחניים בהכשרה בישראל תשפ\"ו",
    body: "תוכנית ה-CPE (Clinical Pastoral Education) של מרכז קשובות מכשירה בשנת תשפ\"ו 42 מלווים רוחניים בתוכנית דו-שנתית. המרכז מתכנן להרחיב את מודל מעגלי הריפוי מעבר לכותלי בתי החולים לקהילה הרחבה ב-2026, כולל מסגרות שיכללו ילדים ומשפחות. עבור מטפלים המבקשים לשלב ממד רוחני בעבודה הקלינית — כדאי להכיר את מסגרת הכשרה ייחודית זו.",
    source: "קשובות — המרכז לליווי רוחני, ישראל",
    sourceUrl: "https://www.kashouvot.org/meshiv-haruach/",
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
          <span>מאי 2026</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">בגיליון מאי נצלול לצומת שבין Play Therapy, ליווי רוחני וסביבת הטבע: מה מלמדים אותנו מחקרי 2024–2025 על כוחו של המשחק החיצוני, הממד הרוחני בטיפול הקבוצתי, ואיך ניתן לשלב שאלות קיומיות בצורה בטוחה ומגוננת בתוך מרחב הטיפול.</p>
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
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">שלושת חפצי הטבע — כניסה לממד הרוחני דרך המשחק</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">בתחילת פגישה בחוץ (גינה, חצר, פינת טבע), הזמיני את הילד לבחור שלושה חפצים מהסביבה — אבן, עלה, ענף, קונוס. בקשי ממנו לתאר כל חפץ כ\'מישהו\' שהוא מכיר, או לתת לכל חפץ שם. לעתים קרובות הילד ישליך על החפצים רגשות, דמויות ושאלות שקשה לו לבטא ישירות. השיטה משלבת עקרונות CCPT עם סמלים טבעיים ומאפשרת כניסה עדינה לתכנים קיומיים ורוחניים.</p>
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
