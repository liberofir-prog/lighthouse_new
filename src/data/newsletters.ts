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
    title: "ארבעים שנות טיפול בחול: הממד הרוחני כציר מרכזי לצמיחה פוסט-טראומטית",
    excerpt: "בגיליון אפריל נתמקד במפגש בין Play Therapy לליווי רוחני: מה מחקרי 2025–2026 מגלים על הממד הקיומי בטיפול דרך משחק, ואיך ניתן להחזיק בחדר גם את הנפש וגם את הנשמה של הילד.",
    url: "/metataplim/gliyon/april-2026",
  },
];
