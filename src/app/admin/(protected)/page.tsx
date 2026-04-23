import Link from "next/link";
import { drafts } from "@/data/drafts";
import { logoutAction } from "../actions";

export default function AdminDashboard() {
  return (
    <div dir="rtl" className="min-h-screen bg-background px-5 py-10">
      <div className="max-w-2xl mx-auto">

        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-primary">מגדלור</h1>
            <p className="text-muted-foreground text-sm mt-0.5">ניהול גיליונות ניוזלטר</p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-xs text-muted-foreground hover:text-foreground border border-border
                         hover:border-amber/40 px-4 py-2 rounded-full transition-colors"
            >
              יציאה
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-3">
          {drafts.length === 0 && (
            <div className="bg-card rounded-2xl p-8 text-center border border-border shadow-warm">
              <p className="text-muted-foreground text-sm">אין טיוטות כרגע</p>
            </div>
          )}

          {drafts.map((draft) => (
            <Link
              key={draft.id}
              href={`/admin/gliyon/${draft.id}`}
              className="flex items-center justify-between bg-card rounded-2xl p-5
                         border border-border hover:border-amber/40 hover:shadow-warm
                         transition-all duration-200 group shadow-warm"
            >
              <div>
                <p className="font-bold text-foreground text-base group-hover:text-primary transition-colors">
                  {draft.title}
                </p>
                <p className="text-muted-foreground text-sm mt-0.5">{draft.date}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs bg-amber/10 text-amber-foreground font-bold px-3 py-1 rounded-full">
                  ממתין לאישור
                </span>
                <svg
                  className="w-4 h-4 text-amber rotate-180"
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
