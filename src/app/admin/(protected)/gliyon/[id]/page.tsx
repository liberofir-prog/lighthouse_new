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

  const [result, action, isPending] = useActionState(approveDraft, null);

  const teaserList = teasers.split("\n").map((t) => t.trim()).filter(Boolean);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://migdalor.me";

  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0] px-5 py-10">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* Nav */}
        <div className="flex items-center gap-2 text-sm text-[#8a7060]">
          <Link href="/admin" className="hover:text-[#3d2b1a] transition-colors">
            אדמין
          </Link>
          <span>/</span>
          <span className="text-[#3d2b1a] font-medium">{draft.date}</span>
        </div>

        <h1 className="text-2xl font-bold text-[#3d2b1a]">{draft.title}</h1>

        <div className="grid md:grid-cols-2 gap-6">

          {/* --- Edit form --- */}
          <div className="space-y-5">
            <h2 className="font-bold text-[#3d2b1a] text-base">עריכת תוכן המייל</h2>

            <div>
              <label className="block text-sm font-semibold text-[#5a4a38] mb-1.5">
                נושא המייל
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-[#e0d0b8] bg-white
                           text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#5a4a38] mb-1.5">
                פתיח
              </label>
              <input
                value={intro}
                onChange={(e) => setIntro(e.target.value)}
                className="w-full h-10 px-3 rounded-xl border border-[#e0d0b8] bg-white
                           text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#5a4a38] mb-1.5">
                טיזרים (שורה אחת לכל טיזר)
              </label>
              <textarea
                value={teasers}
                onChange={(e) => setTeasers(e.target.value)}
                rows={5}
                className="w-full px-3 py-2.5 rounded-xl border border-[#e0d0b8] bg-white
                           text-sm text-[#3d2b1a] focus:outline-none focus:border-[#c9a97a]
                           resize-none leading-relaxed"
              />
            </div>

            <div className="bg-[#FDF3E0] rounded-xl p-4 border border-[#e0d0b8]">
              <p className="text-xs font-bold text-[#9B7020] mb-1">קישור לגיליון</p>
              <a
                href={draft.newsletterUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#c9a97a] hover:underline break-all"
              >
                {baseUrl}{draft.newsletterUrl}
              </a>
            </div>
          </div>

          {/* --- Email preview --- */}
          <div className="space-y-3">
            <h2 className="font-bold text-[#3d2b1a] text-base">תצוגה מקדימה של המייל</h2>
            <div className="bg-[#f8f3ea] rounded-2xl p-4 border border-[#e0d0b8] text-sm" dir="rtl">
              <div className="bg-[#3d2b1a] rounded-xl p-4 mb-3">
                <p className="text-[#c9a97a] text-[10px] tracking-widest uppercase mb-1">
                  מגדלור למטפלים
                </p>
                <p className="text-[#e8d5b0] font-bold">{subject}</p>
              </div>
              <div className="bg-white rounded-xl p-4 space-y-3">
                <p className="text-[#5a3e1b] leading-relaxed">{intro}</p>
                <p className="font-bold text-[#3d2b1a] text-sm">והפעם:</p>
                <ul className="space-y-1.5">
                  {teaserList.map((t, i) => (
                    <li key={i} className="text-[#4a3020] text-xs leading-relaxed">
                      - {t}
                    </li>
                  ))}
                </ul>
                <p className="text-[#5a4a38] text-xs">ועוד הרבה דברים אחרים בגיליון המלא</p>
                <div className="text-center pt-2">
                  <span className="inline-block bg-[#c9a97a] text-[#3d2b1a] font-bold text-xs px-6 py-2.5 rounded-full">
                    לגיליון המלא
                  </span>
                </div>
                <p className="text-[#aaa] text-[10px] text-center">
                  ענבל ליבר | מגדלור | migdalor.me
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- Approve --- */}
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
              לאחר האישור ישלח מייל לאופיר עם תוכן הניוזלטר המאושר. השליחה לרשימת
              המנויים תתבצע יחד בתיאום.
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
              {isPending ? "שולח..." : "אשר גיליון"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
