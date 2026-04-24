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
