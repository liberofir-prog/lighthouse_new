"use client";

import { useActionState } from "react";
import { verifyOTPAction } from "../actions";

export default function AdminVerifyPage() {
  const [error, action, isPending] = useActionState(verifyOTPAction, null);

  return (
    <div className="min-h-screen bg-[#f0ebe0] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-[#e0d0b8] w-full max-w-sm p-8">
        <div className="text-center mb-7">
          <h1 className="text-xl font-bold text-[#3d2b1a]">אימות דו-שלבי</h1>
          <p className="text-[#8a7060] text-sm mt-2 leading-relaxed">
            קוד בן 6 ספרות נשלח לאימייל שלך.
            <br />
            הקוד תקף ל-10 דקות.
          </p>
        </div>

        <form action={action} className="flex flex-col gap-4" dir="rtl">
          <div>
            <label className="block text-sm font-semibold text-[#3d2b1a] mb-1.5">
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
              className="w-full h-14 px-4 rounded-xl border border-[#e0d0b8] bg-[#fdf9f4]
                         text-[#3d2b1a] text-2xl font-bold text-center tracking-[0.4em]
                         focus:outline-none focus:border-[#c9a97a] focus:ring-2 focus:ring-[#c9a97a]/20"
              placeholder="000000"
            />
          </div>

          {error && (
            <p className="text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="h-11 bg-[#3d2b1a] hover:bg-[#5a3e1b] text-[#e8d5b0] font-bold
                       text-sm rounded-xl transition-colors disabled:opacity-60"
          >
            {isPending ? "מאמת..." : "כניסה"}
          </button>

          <a
            href="/admin/login"
            className="text-center text-xs text-[#c9a97a] hover:underline"
          >
            חזרה להזנת סיסמה
          </a>
        </form>
      </div>
    </div>
  );
}
