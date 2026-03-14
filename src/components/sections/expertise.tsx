"use client";

import { Heart, Users, HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/lib/motion";

const areas = [
  {
    icon: Heart,
    title: "מחלה קשה",
    description:
      "ליווי רגשי ורוחני לילדים ומשפחות המתמודדים עם אבחנה של מחלה קשה. יצירת מרחב בטוח לעיבוד רגשות, פחדים ושאלות קיומיות.",
  },
  {
    icon: HandHeart,
    title: "אובדן ושכול",
    description:
      "תמיכה מקצועית בתהליכי אבל ושכול. סיוע בהתמודדות עם כאב האובדן, בניית משמעות מחדש וליווי בדרך להחלמה רגשית.",
  },
  {
    icon: Users,
    title: "הדרכת הורים במשבר",
    description:
      "הדרכה וכלים מעשיים להורים המתמודדים עם משברים משפחתיים. חיזוק יכולות הורות, שיפור תקשורת ובניית חוסן משפחתי.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            תחומי מומחיות
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            הקליניקה מתמחה בליווי רגשי ורוחני בשלושה תחומים מרכזיים
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {areas.map((area) => (
            <StaggerItem key={area.title}>
              <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="pt-8 pb-8 px-6 flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <area.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
