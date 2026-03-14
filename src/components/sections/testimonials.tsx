"use client";

import { Card, CardContent } from "@/components/ui/card";
import { StaggerContainer, StaggerItem } from "@/lib/motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "ענבל ליוותה אותנו בתקופה הכי קשה שחווינו כמשפחה. החום, המקצועיות והרגישות שלה עשו את כל ההבדל.",
    author: "ר. מ.",
    detail: "אמא לשלושה",
  },
  {
    text: "הרגשתי שסוף סוף מישהו באמת מבין את מה שאני עובר. ענבל נתנה לי כלים שעוזרים לי עד היום.",
    author: "א. כ.",
    detail: "אב לשניים",
  },
  {
    text: "ההדרכת הורים שקיבלנו מענבל שינתה את הדינמיקה המשפחתית שלנו לחלוטין. אנחנו אסירי תודה.",
    author: "ש. ל.",
    detail: "הורה",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            מה אומרים עלינו
          </h2>
          <p className="text-muted-foreground text-lg">
            מילים מלקוחות שליווינו בדרך
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <Card className="h-full bg-card border-border/50">
                <CardContent className="pt-8 pb-6 px-6 flex flex-col gap-4">
                  <Quote size={32} className="text-primary/20" />
                  <p className="text-foreground/80 leading-relaxed italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-border/50">
                    <p className="font-semibold text-foreground">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.detail}</p>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
