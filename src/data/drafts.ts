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
    title: "Play Therapy וליווי רוחני - מה חדש בשדה",
    emailSubject: "מגדלור | גיליון אפריל 2026",
    intro: "הבאנו לכם את החידושים האחרונים בתחום הליווי הרוחני ו-Play Therapy",
    teasers: [
      "מחקר-על חדש: Play Therapy מובנית מול חופשית - מה עובד יותר טוב ולמי",
      "כשהגוף מגיע לפגישה לפני הנפש - שילוב נשימה ב-Play Therapy",
      "הממד הרוחני בטיפול ילדים - מתי הוא עוזר ומתי הוא חוסם",
    ],
    findings: [
      {
        title: "מחקר-על חדש: Play Therapy מובנית מול חופשית - מה עובד יותר טוב ולמי",
        source: "Journal of Child Psychotherapy, 2025",
        sourceUrl: "https://doi.org/10.1080/0075417X.2025.2187234",
      },
      {
        title: "כשהגוף מגיע לפגישה לפני הנפש - שילוב נשימה ב-Play Therapy",
        source: "International Journal of Play Therapy, נובמבר 2025",
        sourceUrl: "https://www.tandfonline.com/journals/hipt20",
      },
      {
        title: "הממד הרוחני בטיפול ילדים - מתי הוא עוזר ומתי הוא חוסם",
        source: "r/therapists, פברואר 2026",
        sourceUrl: "https://www.reddit.com/r/therapists/",
      },
    ],
    newsletterUrl: "/metataplim/gliyon/april-2026",
    createdAt: "2026-04-23T00:00:00.000Z",
  },
];
