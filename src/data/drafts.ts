export interface NewsletterFinding {
  title: string;
  source: string;
  sourceUrl: string;
}

export interface NewsletterDraft {
  id: string;
  date: string;
  title: string;
  emailSubject: string;
  intro: string;
  teasers: string[];
  newsletterUrl: string;
  createdAt: string;
  findings?: NewsletterFinding[];
}

export const drafts: NewsletterDraft[] = [
  {
    id: "september-2026",
    date: "ספטמבר 2026",
    title: "ממד הרוחניות בילדים עם מחלות מגבילות חיים — סקירת היקף 2025",
    emailSubject: "מגדלור ספטמבר | ליווי רוחני ו-Play Therapy — מה חדש בשדה",
    intro: "שלום לכולן, גיליון ספטמבר 2026 מתמקד בצומת שבין ליווי רוחני לטיפול במשחק — נושא שמחקרים עדכניים ממשיכים לחזק ולהעמיק. בגיליון זה תמצאו ממצאים ממחקרים מבוקרים, סקירות שיטתיות ועדויות קליניות עם כלים מעשיים לנוכחות רוחנית בחדר הטיפול.",
    teasers: [
      "ממד הרוחניות בילדים עם מחלות מגבילות חיים — סקירת היקף 2025",
      "משחק ממוקד-משמעות מחזק רגישות רוחנית בילדים — ניסוי אקראי מבוקר",
      "טיפול במשחק וסיפור סיפורים מפחיתים חרדה בילדים מאושפזים — RCT"
    ],
    findings: [
      { title: "ממד הרוחניות בילדים עם מחלות מגבילות חיים — סקירת היקף 2025", source: "ScienceDirect / Palliative Medicine (2025)", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X" },
      { title: "משחק ממוקד-משמעות מחזק רגישות רוחנית בילדים — ניסוי אקראי מבוקר", source: "PubMed Central / NCBI", sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8724725/" },
      { title: "טיפול במשחק וסיפור סיפורים מפחיתים חרדה בילדים מאושפזים — RCT", source: "PubMed Central / NCBI (2025)", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/" },
      { title: "ניתוח ביבליומטרי 2026: מבנה הידע והמגמות בספרות Play Therapy", source: "PubMed Central (PMC)", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12973151/" },
      { title: "25 התערבויות CCPT לטראומה — ירידה של 60–75% בסימפטומים", source: "CoreWell CE / Play Therapy CE", sourceUrl: "https://corewellceu.com/blog/25-child-centered-play-therapy-interventions-for-trauma" }
    ],
    newsletterUrl: "/metataplim/gliyon/september-2026",
    createdAt: "2026-09-01T05:16:05.977Z",
  },
  {
    id: "august-2026",
    date: "אוגוסט 2026",
    title: "רוחניות ילדים עם מחלה מגבילת חיים: ממצאי סקירה חדשה",
    emailSubject: "ליווי רוחני דרך משחק: מה אומר המחקר לאוגוסט 2026",
    intro: "שלום לכולם, גיליון אוגוסט 2026 של עלון מגדלור מתמקד בצומת שבין ליווי רוחני לבין טיפול במשחק — נושא שצובר תאוצה בספרות המחקרית הבינלאומית ומציע לנו, המטפלים, שפה חדשה לנוכחות רוחנית עם ילדים. כמה ממצאים חשובים מחכים לכם למטה.",
    teasers: [
      "רוחניות ילדים עם מחלה מגבילת חיים: ממצאי סקירה חדשה",
      "משחק ממוקד-משמעות משפר רגישות רוחנית אצל ילדים",
      "סיפור סיפורים וטיפול במשחק: מה מפחית חרדה יותר?"
    ],
    findings: [
      { title: "רוחניות ילדים עם מחלה מגבילת חיים: ממצאי סקירה חדשה", source: "Pediatric Nursing / ScienceDirect", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X" },
      { title: "משחק ממוקד-משמעות משפר רגישות רוחנית אצל ילדים", source: "PMC / International Journal of Community Based Nursing and Midwifery", sourceUrl: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8724725/" },
      { title: "מפת הידע הגלובלית של טיפול במשחק: ניתוח ביבליומטרי 2026", source: "PMC / Brain and Behavior", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12973151/" },
      { title: "סיפור סיפורים וטיפול במשחק: מה מפחית חרדה יותר אצל ילדים מאושפזים?", source: "PMC / BMC Complementary Medicine and Therapies", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/" },
      { title: "Godly Play: פלטפורמת משחק לפיתוח רוחניות ילדים מאושפזים", source: "PubMed", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18947106/" }
    ],
    newsletterUrl: "/metataplim/gliyon/august-2026",
    createdAt: "2026-08-01T05:13:51.356Z",
  },
  {
    id: "july-2026",
    date: "יולי 2026",
    title: "רוחניות ילדים עם מחלות מסכנות חיים — מה אומרת הספרות?",
    emailSubject: "מגדלור | יולי 2026 — ליווי רוחני ו-Play Therapy: מה חדש בשדה",
    intro: "גיליון יולי 2026 מביא ממצאים עדכניים על הצומת שבין ליווי רוחני לטיפול במשחק — מ-Godly Play בחדר האשפוז, דרך טיפול בחול מסורתי ודיגיטלי, ועד להורה כסוכן שינוי רוחני. הגיליון מיועד לעמיתות מטפלות שרוצות להעמיק את הממד הרוחני בעבודה הקלינית.",
    teasers: [
      "רוחניות ילדים עם מחלות מסכנות חיים — מה אומרת הספרות?",
      "Godly Play מפחית חרדה ודיכאון בילדים מאושפזים",
      "טיפול פיליאלי: ההורה כסוכן שינוי — האפקטיביות הגבוהה ביותר"
    ],
    findings: [
      { title: "רוחניות ילדים עם מחלות מסכנות חיים — מה אומרת הספרות?", source: "ScienceDirect — Palliative & Supportive Care, 2025", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S088259632500418X" },
      { title: "טיפול בחול בשיקום ילדים — סקירה מקיפה של העדויות", source: "Frontiers in Pediatrics — יוני 2026", sourceUrl: "https://www.frontiersin.org/journals/pediatrics/articles/10.3389/fped.2026.1790000/full" },
      { title: "Godly Play מפחית חרדה ודיכאון בילדים מאושפזים", source: "PubMed — Journal of Pastoral Care & Counseling, 2008", sourceUrl: "https://pubmed.ncbi.nlm.nih.gov/18947106/" },
      { title: "טיפול בחול דיגיטלי לצד המסורתי — נרטיב ראייתי 2026", source: "Frontiers in Psychology — 2026", sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1692537/full" },
      { title: "טיפול פיליאלי: ההורה כסוכן שינוי — האפקטיביות הגבוהה ביותר בטיפול במשחק", source: "PlayStrong Institute — Filial Therapy Outcome Studies", sourceUrl: "https://playstronginstitute.com/play-therapy/complete-guide/research/outcome-studies/filial-therapy-studies" }
    ],
    newsletterUrl: "/metataplim/gliyon/july-2026",
    createdAt: "2026-07-01T05:12:48.734Z",
  },
  {
    id: "june-2026",
    date: "יוני 2026",
    title: "משחק ממוקד-משמעות מגביר רגישות רוחנית בילדים",
    emailSubject: "מגדלור יוני 2026 | כשהמשחק הופך ללוויה רוחנית",
    intro: "ביוני 2026, מחקרים חדשים מכל רחבי העולם מחזקים את הקשר שבין משחק לצמיחה רוחנית אצל ילדים — מסביבות אונקולוגיות ועד גן הילדים. הגיליון הזה מביא ממצאים עדכניים שיכולים להעשיר את עבודתכם הקלינית בנושא ליווי רוחני ו-play therapy.",
    teasers: [
      "משחק ממוקד-משמעות מגביר רגישות רוחנית בילדים",
      "מיינדפולנס מבוסס-משחק לגיל הרך — עדויות חיוביות חדשות",
      "CCPT לילדים עם סרטן — שיפור בחמלה עצמית ובויסות רגשי"
    ],
    findings: [
      { title: "משחק ממוקד-משמעות מגביר רגישות רוחנית בילדים", source: "NCBI PubMed Central", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8724725/" },
      { title: "מיינדפולנס מבוסס-משחק לגיל הרך — עדויות חיוביות חדשות", source: "NCBI PubMed Central — ינואר 2026", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12840435/" },
      { title: "RFP-C: פסיכותרפיה ממוקדת-ויסות לילדים — פרוטוקול פסיכודינמי קצר-טווח", source: "NCBI PubMed Central — Korean Academy of Child and Adolescent Psychiatry, 2026", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12782995/" },
      { title: "CCPT לילדים עם סרטן — שיפור בחמלה עצמית ובויסות רגשי", source: "ResearchGate — International Journal of Modern Education Studies, 2025", sourceUrl: "https://www.researchgate.net/publication/393271404_The_Effect_of_Child-Centered_Play_Therapy_on_Self-Compassion_and_Emotion_Regulation_Skills_in_Children_with_Cancer" },
      { title: "ארבע פרספקטיבות לתמיכה בילדים אונקולוגיים — המשחק כמסגרת אינטגרטיבית", source: "Frontiers in Psychology — מרץ 2026", sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1730525/full" }
    ],
    newsletterUrl: "/metataplim/gliyon/june-2026",
    createdAt: "2026-06-01T05:14:24.224Z",
  },
  {
    id: "may-2026",
    date: "מאי 2026",
    title: "טיפול CCPT בסביבה חיצונית — שיפור מובהק בקשב ובמיומנויות חברתיות-רגשיות",
    emailSubject: "מגדלור מאי | טבע, רוח ומשחק — כלים חדשים לחדר הטיפול",
    intro: "בגיליון מאי נצלול לצומת שבין Play Therapy, ליווי רוחני וסביבת הטבע: מה מלמדים אותנו מחקרי 2024–2025 על כוחו של המשחק החיצוני, הממד הרוחני בטיפול הקבוצתי, ואיך ניתן לשלב שאלות קיומיות בצורה בטוחה ומגוננת בתוך מרחב הטיפול.",
    teasers: [
      "טיפול CCPT בסביבה חיצונית — שיפור מובהק בקשב ובמיומנויות חברתיות-רגשיות",
      "רוחניות, ביטחון, חמלה ומשחק — ארבעה ציוני דרך בפסיכותרפיה קבוצתית",
      "טיפול במשחק לילדים עם סרטן: מטה-אנליזה 2025 מוכיחה הפחתת חרדה ודיכאון"
    ],
    findings: [
      { title: "טיפול CCPT בסביבה חיצונית — שיפור מובהק בקשב ובמיומנויות חברתיות-רגשיות", source: "International Journal of Play Therapy / PsycNet, 2024", sourceUrl: "https://psycnet.apa.org/record/2024-37955-005" },
      { title: "רוחניות, ביטחון, חמלה ומשחק — ארבעה ציוני דרך בפסיכותרפיה קבוצתית", source: "International Journal of Group Psychotherapy, Taylor & Francis, 2024", sourceUrl: "https://www.tandfonline.com/doi/full/10.1080/00207284.2024.2333680" },
      { title: "טיפול במשחק לילדים עם סרטן: מטה-אנליזה 2025 מוכיחה הפחתת חרדה ודיכאון", source: "Heliyon / ScienceDirect, 2025", sourceUrl: "https://www.sciencedirect.com/science/article/pii/S2405844025020043" },
      { title: "ליווי רוחני דרך משחק לילדים שחוו הזנחה — מחקר ייחודי", source: "International Journal of Research / HRMARS", sourceUrl: "https://hrmars.com/papers_submitted/6975/Play_Therapy-based_Counseling_Intervention_on_the_Spiritual_Wellness_of_Neglected_Children_An_Exploratory_Study.pdf" },
      { title: "\"משיב הרוח\" — 42 מלווים רוחניים בהכשרה בישראל תשפ\"ו", source: "קשובות — המרכז לליווי רוחני, ישראל", sourceUrl: "https://www.kashouvot.org/meshiv-haruach/" }
    ],
    newsletterUrl: "/metataplim/gliyon/may-2026",
    createdAt: "2026-05-01T05:12:09.112Z",
  },
  {
    id: "april-2026",
    date: "אפריל 2026",
    title: "ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית",
    emailSubject: "מגדלור אפריל | משחק, נשמה וחול — מה המחקר אומר השנה",
    intro: "בגיליון אפריל נתמקד במפגש בין Play Therapy לליווי רוחני: מה מחקרי 2025–2026 מגלים על הממד הקיומי בטיפול דרך משחק, ואיך ניתן להחזיק בחדר גם את הנפש וגם את הנשמה של הילד.",
    teasers: [
      "ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית",
      "ארבעה ממדים לתמיכה בילדים אונקולוגיים: המשחק כמסגרת אינטגרטיבית",
      "טיפול במשחק וסיפור מפחיתים חרדה בילדים מאושפזים — ניסוי אקראי מבוקר"
    ],
    findings: [
      { title: "ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית", source: "Arts in Psychotherapy / ScienceDirect, 2025", sourceUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0197455625000644" },
      { title: "ארבעה ממדים לתמיכה בילדים אונקולוגיים: המשחק כמסגרת אינטגרטיבית", source: "Frontiers in Psychology, 2026", sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1730525/abstract" },
      { title: "טיפול במשחק וסיפור מפחיתים חרדה בילדים מאושפזים — ניסוי אקראי מבוקר", source: "BMC Pediatrics / PubMed Central, 2025", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11761729/" },
      { title: "טיפול בחול בגיל הילדות: כשהשפה הלא-מילולית מדברת אל הנשמה", source: "Frontiers in Pediatrics / PubMed Central", sourceUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12929380/" },
      { title: "משחק חופשי (לא-טיפולי) משפר אינטליגנציה רגשית בגיל הרך", source: "Frontiers in Psychology, 2025", sourceUrl: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2025.1475387/full" }
    ],
    newsletterUrl: "/metataplim/gliyon/april-2026",
    createdAt: "2026-04-24T13:02:06.934Z",
  },
];
