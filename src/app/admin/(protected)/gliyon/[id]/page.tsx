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
  const [showEmail, setShowEmail] = useState(true);
  const [notes, setNotes] = useState("");

  const [result, action, isPending] = useActionState(approveDraft, null);

  const teaserList = teasers.split("\n").map((t) => t.trim()).filter(Boolean);

  return (
    <div dir="rtl" className="min-h-screen bg-background">

      {/* Top bar */}
      <div className="bg-card border-b border-border px-5 py-3 flex items-center justify-between shadow-warm">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/admin" className="hover:text-foreground transition-colors">
            אדמין
          </Link>
          <span>/</span>
          <span className="text-foreground font-semibold">{draft.date}</span>
        </div>
        <span className="text-xs bg-amber/10 text-amber-foreground font-bold px-3 py-1 rounded-full border border-amber/20">
          ממתין לאישור
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-5 py-8 space-y-5">

        <div>
          <h1 className="text-xl font-bold text-primary">{draft.title}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            קרא את הגיליון בשלמותו, ודא שאין תוכן בעייתי, ואז אשר.
          </p>
        </div>

        {/* ── Newsletter iframe — main focus ── */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-warm">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/30">
            <p className="font-bold text-foreground text-sm">תוכן הגיליון</p>
            <a
              href={draft.newsletterUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-amber hover:text-amber/70 transition-colors"
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

        {/* ── Email — collapsible ── */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-warm">
          <button
            type="button"
            onClick={() => setShowEmail(!showEmail)}
            className="w-full flex items-center justify-between px-5 py-4 text-right
                       hover:bg-secondary/30 transition-colors"
          >
            <p className="font-bold text-foreground text-sm">מייל שייצא למנויים</p>
            <svg
              className={`w-4 h-4 text-amber transition-transform ${showEmail ? "rotate-180" : ""}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showEmail && (
            <div className="px-5 pb-6 space-y-5 border-t border-border">
              <div className="grid md:grid-cols-2 gap-5 pt-5">

                {/* Edit fields */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      נושא המייל
                    </label>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-secondary/40
                                 text-sm text-foreground focus:outline-none focus:border-amber
                                 focus:ring-2 focus:ring-amber/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      פתיח
                    </label>
                    <input
                      value={intro}
                      onChange={(e) => setIntro(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-border bg-secondary/40
                                 text-sm text-foreground focus:outline-none focus:border-amber
                                 focus:ring-2 focus:ring-amber/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1.5">
                      טיזרים (שורה לכל טיזר)
                    </label>
                    <textarea
                      value={teasers}
                      onChange={(e) => setTeasers(e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/40
                                 text-sm text-foreground focus:outline-none focus:border-amber
                                 focus:ring-2 focus:ring-amber/20 resize-none leading-relaxed
                                 transition-colors"
                    />
                  </div>
                </div>

                {/* Email preview */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-foreground">תצוגה מקדימה</p>
                  <div className="bg-secondary/20 rounded-xl p-4 border border-border text-sm" dir="rtl">
                    <div className="bg-primary rounded-lg p-3 mb-3">
                      <p className="text-amber text-[10px] tracking-widest uppercase mb-1 font-bold">מגדלור למטפלים</p>
                      <p className="text-primary-foreground font-bold text-sm">{subject}</p>
                    </div>
                    <div className="bg-card rounded-lg p-3 space-y-2">
                      <p className="text-foreground/80 text-xs leading-relaxed">{intro}</p>
                      <p className="font-bold text-foreground text-xs">והפעם:</p>
                      <ul className="space-y-1">
                        {teaserList.map((t, i) => (
                          <li key={i} className="text-foreground/70 text-xs leading-relaxed">- {t}</li>
                        ))}
                      </ul>
                      <p className="text-muted-foreground text-xs">ועוד הרבה דברים אחרים בגיליון המלא</p>
                      <div className="text-center pt-1">
                        <span className="inline-block bg-amber text-amber-foreground font-bold text-xs px-5 py-2 rounded-full">
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
          <div className="bg-card border border-border rounded-2xl p-6 text-center shadow-warm">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber/15 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-foreground font-bold text-base">{result.message}</p>
            <p className="text-muted-foreground text-sm mt-1">
              נשלחה הודעה לאופיר עם תוכן המייל המאושר.
            </p>
          </div>
        ) : (
          <form action={action} className="bg-card rounded-2xl p-6 border border-border shadow-warm">
            <input type="hidden" name="id" value={draft.id} />
            <input type="hidden" name="emailSubject" value={subject} />
            <input type="hidden" name="intro" value={intro} />
            <input type="hidden" name="teasers" value={teasers} />
            <input type="hidden" name="newsletterUrl" value={draft.newsletterUrl} />
            <input type="hidden" name="notes" value={notes} />

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              קראת את הגיליון ואת המייל ואישרת שהכל תקין? אם יש דברים שצריך לשנות
              או להסיר כתבי אותם בשדה ההערות, והם יישלחו לאופיר יחד עם האישור.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-foreground mb-1.5">
                הערות לאופיר
                <span className="text-muted-foreground font-normal text-xs mr-2">(אופציונלי — שינויים, הסרות, תיקונים)</span>
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="לדוגמה: ממצא 03 לא מדויק, אנא שנה... / הסר את הציטוט בסוף..."
                className="w-full px-3 py-2.5 rounded-xl border border-border bg-secondary/40
                           text-sm text-foreground focus:outline-none focus:border-amber
                           focus:ring-2 focus:ring-amber/20 resize-none leading-relaxed
                           placeholder:text-muted-foreground/50 transition-colors"
              />
            </div>

            {result?.ok === false && (
              <p className="text-destructive bg-destructive/8 border border-destructive/20
                            rounded-xl px-4 py-2.5 text-sm mb-4">
                {result.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full h-12 bg-primary hover:bg-primary/85 text-primary-foreground
                         font-bold rounded-xl transition-colors disabled:opacity-60 text-base shadow-warm"
            >
              {isPending ? "שולח..." : "אשר גיליון ושלח הודעה לאופיר"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
