import type { Metadata } from "next";
import Link from "next/link";
import SendForm from "./send-form";
import { logoutAction } from "../actions";
import { getSessionRole, requireSender } from "@/lib/admin-auth";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "שליחת דף הכנה | מגדלור",
  robots: { index: false, follow: false },
};

export default async function SendPage() {
  await requireSender();
  // Inbal signs in for this tool alone, so she is not offered a way back to an
  // admin area she cannot open.
  const isFullAdmin = (await getSessionRole()) === "admin";

  return (
    <div dir="rtl" className="min-h-screen bg-background px-5 py-10">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 flex items-start justify-between gap-4">
          <div>
            <p className="mb-1 text-sm font-semibold tracking-wide text-amber">
              כלי פנימי · מגדלור
            </p>
            <h1 className="text-3xl font-bold text-primary">שליחת דף הכנה</h1>
            <p className="mt-2 text-muted-foreground">
              בוחרים את פרטי המפגש, והכלי מרכיב לינק אישי והודעת וואטסאפ מוכנה
              לשליחה.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end gap-2">
            {isFullAdmin && (
              <Link
                href="/admin"
                className="text-xs text-muted-foreground underline hover:text-foreground"
              >
                חזרה לניהול
              </Link>
            )}
            <form action={logoutAction}>
              <button
                type="submit"
                className="text-xs text-muted-foreground underline hover:text-foreground"
              >
                יציאה
              </button>
            </form>
          </div>
        </header>

        <SendForm />

        <footer className="mt-10 rounded-xl bg-secondary/40 p-4 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">לא נשמר כאן דבר.</strong> כל
            הפרטים שנבחרים נכנסים ישירות לתוך הלינק וההודעה, ואינם נשמרים בשום
            מקום.
          </p>
        </footer>
      </div>
    </div>
  );
}
