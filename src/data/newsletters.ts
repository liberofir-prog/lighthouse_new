export interface Newsletter {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "placeholder-1",
    date: "יש להזין תאריך",
    title: "יש להזין כותרת גיליון",
    excerpt: "יש להזין תיאור קצר של הגיליון...",
    url: "#",
  },
];
