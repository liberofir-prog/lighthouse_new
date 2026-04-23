import Link from "next/link";
import { drafts } from "@/data/drafts";
import { logoutAction } from "../actions";

export default function AdminDashboard() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0] px-5 py-10">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#3d2b1a]">מגדלור אדמין</h1>
            <p className="text-[#8a7060] text-sm mt-0.5">ניהול גיליונות ניוזלטר</p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-xs text-[#c9a97a] hover:text-[#3d2b1a] border border-[#e0d0b8]
                         hover:border-[#c9a97a] px-4 py-2 rounded-full transition-colors"
            >
              יציאה
            </button>
          </form>
        </div>

        {/* Drafts list */}
        <div className="flex flex-col gap-3">
          {drafts.length === 0 && (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#e0d0b8]">
              <p className="text-[#8a7060] text-sm">אין טיוטות כרגע</p>
            </div>
          )}

          {drafts.map((draft) => (
            <Link
              key={draft.id}
              href={`/admin/gliyon/${draft.id}`}
              className="flex items-center justify-between bg-white rounded-2xl p-5
                         border border-[#e0d0b8] hover:border-[#c9a97a] hover:shadow-sm
                         transition-all duration-200 group"
            >
              <div>
                <p className="font-bold text-[#3d2b1a] text-base group-hover:text-[#c9a97a] transition-colors">
                  {draft.title}
                </p>
                <p className="text-[#8a7060] text-sm mt-0.5">{draft.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-[#FDF3E0] text-[#9B7020] font-bold px-3 py-1 rounded-full">
                  ממתין לאישור
                </span>
                <svg
                  className="w-4 h-4 text-[#c9a97a] rotate-180"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
