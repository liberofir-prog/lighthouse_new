"use client";

import { useActionState, useState } from "react";
import { approveDraft } from "@/app/admin/actions";
import { drafts } from "@/data/drafts";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function AdminReviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const draft = drafts.find((d) => d.id === id);
  if (!draft) notFound();

  const [subject, setSubject] = useState(draft.emailSubject);
  const [intro, setIntro] = useState(draft.intro);
  const [teasers, setTeasers] = useState(draft.teasers.join("\n"));
  const [showEmail, setShowEmail] = useState(false);

  const [result, action, isPending] = useActionState(approveDraft, null);

  const teaserList = teasers.split("\n").map((t) => t.trim()).filter(Boolean);

  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0]">

      {/* Top bar */}
      <div className="bg-white border-b border-[#e0d0b8] px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-[#8a7060]">
          <Link href="/admin" className="hover:text-[#3d2b1a] transition-colors">
            אדמין
          </Link>
          <span>/</span>
          <span className="text-[#3d2b1a] font-semibold">{draft.date}</span>
        </div>
        <span className="text-xs bg-[#FDF3E0] text-[#9B7020] font-bold px-3 py-1 rounded-full">
          ממתין לאישור
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-8 space-y-6">

        <div>
          <h1 className="text-xl font-bold text-[#3d2b1a]">{draft.title}</h1>
          <p className="text-[#8a7060] text-sm mt-1">
            קרא את הגיליון בשלמותו, ודא שאין תוכן בעייתי, ואז אשר.
          </p>
        </div>

        {/* ── Newsletter iframe — main focus ── */}
        <div className="bg-white rounded-2xl border border-[#e0d0b8] overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#e0d0b8] bg-[#fdf9f4]">
            <p className="font-bold text-[#3d2b1a] text-sm">תוכן הגיליון</p>
            <a
              href={draft.newsletterUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-[#c9a97a] hover:underline"
            >
              פתח בחלון חדש
            </a>
          </div>
          <iframe
            src={draft.newsletterUrl}
            className="w-full border-0"
            style={{ height: "75vh" }}
            title="תצוגת הגיליון"
          />
        </div>

        {/* ── Email section — collapsible ── */}
        <div className="bg-white rounded-2xl border border-[#e0d0b8] overflow-hidden shadow-sm">
          <button
            type="button"
            onClick={() => setShowEmail(!showEmail)}
            className="w-full flex items-center justify-between px-5 py-4 text-right
                       hover:bg-[#fdf9f4] transition-colors"
          >
            <p className="font-bold text-[#3d2b1a] text-sm">מייל שייצא למנויים</p>
            <svg
              className={`w-4 h-4 text-[#c9a97a] transition-transform ${showEmail ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showEmail && (
            <div className="px-5 pb-6 space-y-5 border-t border-[#e0d0b8]">
              <div className="grid md:grid-cols-2 gap-5 pt-5">

                {/* Edit fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#5a4a38] mb-1.5">
                      נושא המייל
                    </label>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-[#e0d0b8] bg-[#fdf9f4]
                                 text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5a4a38] mb-1.5">
                      פתיח
                    </label>
                    <input
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-[#e0d0b8] bg-[#fdf9f4]
                                 text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5a4a38] mb-1.5">
                      טיזרים (שורה לכל טיזר)
                    </label>
                    <textarea
                      value={teasers}
                      onChange={(e) => setTeasers(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2.5 rounded-xl border border-[#e0d0b8] bg-[#fdf9f4]
                                 text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]
                                 resize-none leading-relaxed"
                    />
                  </div>
                </div>

                {/* Email preview */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-[#5a4a38]">תצוגה מקדימה</p>
                  <div className="bg-[#f8f3ea] rounded-xl p-4 text-sm border border-[#e0d0b8]" dir="rtl">
                    <div className="bg-[#3d2b1a] rounded-lg p-3 mb-3">
                      <p className="text-[#c9a97a] text-[10px] tracking-widest uppercase mb-1">מגדלור למטפלים</p>
                      <p className="text-[#e8d5b0] font-bold text-sm">{subject}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 space-y-2">
                      <p className="text-[#5a3e1b] text-xs leading-relaxed">{intro}</p>
                      <p className="font-bold text-[#3d2b1a] text-xs">והפעם:</p>
                      <ul className="space-y-1">
                        {teaserList.map((t, i) => (
                          <li key={i} className="text-[#4a3020] text-xs leading-relaxed">- {t}</li>
                        ))}
                      </ul>
                      <p className="text-[#5a4a38] text-xs">ועוד הרבה דברים אחרים בגיליון המלא</p>
                      <div className="text-center pt-1">
                        <span className="inline-block bg-[#c9a97a] text-[#3d2b1a] font-bold text-xs px-5 py-2 rounded-full">
                          לגיליון המלא
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Approve ── */}
        {result?.ok ? (
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
            <p className="text-emerald-700 font-bold text-base">{result.message}</p>
            <p className="text-emerald-600 text-sm mt-1">
              נשלחה הודעה לאופיר עם תוכן המייל המאושר.
            </p>
          </div>
        ) : (
          <form action={action} className="bg-white rounded-2xl p-6 border border-[#e0d0b8]">
            <input type="hidden" name="id" value={draft.id} />
            <input type="hidden" name="emailSubject" value={subject} />
            <input type="hidden" name="intro" value={intro} />
            <input type="hidden" name="teasers" value={teasers} />
            <input type="hidden" name="newsletterUrl" value={draft.newsletterUrl} />

            <p className="text-[#5a4a38] text-sm mb-4 leading-relaxed">
              קראת את הגיליון ואת המייל ואישרת שהכל תקין? לחיצה על אשר שולחת הודעה
              לאופיר שהגיליון מוכן לשליחה.
            </p>

            {result?.ok === false && (
              <p className="text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 text-sm mb-4">
                {result.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-[#3d2b1a] hover:bg-[#5a3e1b] text-[#e8d5b0]
                         font-bold rounded-xl transition-colors disabled:opacity-60 text-base"
            >
              {isPending ? "שולח..." : "אשר גיליון ושלח הודעה לאופיר"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
