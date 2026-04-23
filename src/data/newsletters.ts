export interface Newsletter {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "april-2026",
    date: "אפריל 2026",
    title: "Play Therapy וליווי רוחני — מה חדש בשדה",
    excerpt:
      "מחקר-על חדש מוכיח יעילות מובהקת של Play Therapy לילדים שחוו אובדן, שילוב גישות סומטיות, הממד הרוחני בטיפול ילדים, וכלים מהשדה.",
    url: "/metataplim/gliyon/april-2026",
  },
];
