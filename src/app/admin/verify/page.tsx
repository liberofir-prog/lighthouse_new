"use client";

import { useActionState } from "react";
import { verifyOTPAction } from "../actions";

export default function AdminVerifyPage() {
  const [error, action, isPending] = useActionState(verifyOTPAction, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-card rounded-3xl shadow-warm-lg border border-border w-full max-w-sm p-8">
        <div className="text-center mb-7">
          <h1 className="text-xl font-bold text-primary">אימות דו-שלבי</h1>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
            קוד בן 6 ספרות נשלח לאימייל שלך.
            <br />
            הקוד תקף ל-10 דקות.
          </p>
        </div>

        <form action={action} className="flex flex-col gap-4" dir="rtl">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              קוד אימות
            </label>
            <input
              name="otp"
              type="text"
              inputMode="numeric"
              pattern="[0-9]{6}"
              maxLength={6}
              autoFocus
              required
              className="w-full h-14 px-4 rounded-xl border border-border bg-secondary/40
                         text-foreground text-2xl font-bold text-center tracking-[0.4em]
                         focus:outline-none focus:border-amber focus:ring-2 focus:ring-amber/20
                         transition-colors"
              placeholder="000000"
            />
          </div>

          {error && (
            <p className="text-destructive bg-destructive/8 border border-destructive/20
                          rounded-xl px-4 py-2.5 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="h-11 bg-primary hover:bg-primary/85 text-primary-foreground font-bold
                       text-sm rounded-xl transition-colors disabled:opacity-60 shadow-warm"
          >
            {isPending ? "מאמת..." : "כניסה"}
          </button>

          <a
            href="/admin/login"
            className="text-center text-xs text-amber hover:text-amber/70 transition-colors"
          >
            חזרה להזנת סיסמה
          </a>
        </form>
      </div>
    </div>
  );
}
