"use client";

import { useActionState } from "react";
import { loginWithPassword } from "../actions";

export default function AdminLoginPage() {
  const [error, action, isPending] = useActionState(loginWithPassword, null);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-card rounded-3xl shadow-warm-lg border border-border w-full max-w-sm p-8">
        <div className="text-center mb-7">
          <h1 className="text-xl font-bold text-primary">מגדלור</h1>
          <p className="text-amber text-sm mt-1 font-medium">ניהול גיליונות</p>
        </div>

        <form action={action} className="flex flex-col gap-4" dir="rtl">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1.5">
              סיסמה
            </label>
            <input
              name="password"
              type="password"
              autoFocus
              required
              className="w-full h-11 px-4 rounded-xl border border-border bg-secondary/40
                         text-foreground text-sm focus:outline-none focus:border-amber
                         focus:ring-2 focus:ring-amber/20 transition-colors"
              placeholder="הזן סיסמה"
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
            {isPending ? "שולח קוד..." : "המשך"}
          </button>
        </form>
      </div>
    </div>
  );
}
