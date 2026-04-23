"use client";

import { useActionState } from "react";
import { loginWithPassword } from "../actions";

export default function AdminLoginPage() {
  const [error, action, isPending] = useActionState(loginWithPassword, null);

  return (
    <div className="min-h-screen bg-[#f0ebe0] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-lg border border-[#e0d0b8] w-full max-w-sm p-8">
        <div className="text-center mb-7">
          <h1 className="text-xl font-bold text-[#3d2b1a]">מגדלור</h1>
          <p className="text-[#c9a97a] text-sm mt-1">אדמין</p>
        </div>

        <form action={action} className="flex flex-col gap-4" dir="rtl">
          <div>
            <label className="block text-sm font-semibold text-[#3d2b1a] mb-1.5">
              סיסמה
            </label>
            <input
              name="password"
              type="password"
              autoFocus
              required
              className="w-full h-11 px-4 rounded-xl border border-[#e0d0b8] bg-[#fdf9f4]
                         text-[#3d2b1a] text-sm focus:outline-none focus:border-[#c9a97a]
                         focus:ring-2 focus:ring-[#c9a97a]/20"
              placeholder="הזיני סיסמה"
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
            {isPending ? "שולחת קוד..." : "המשך"}
          </button>
        </form>
      </div>
    </div>
  );
}
