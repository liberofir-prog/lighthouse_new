export interface Newsletter {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  url: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "april-2025",
    date: "אפריל 2025",
    title: "מחקר חדש על Play Therapy, רגע מהקליניקה, וזווית הורית",
    excerpt:
      "מה אומר המחקר העדכני על יעילות Play Therapy? כשמשחק הופך לשפה — סיפור מהקליניקה. ואיך הורים יכולים לתמוך בתהליך בין הפגישות.",
    url: "/metataplim/gliyon/april-2025",
  },
];
