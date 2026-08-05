"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import WhatsAppIcon from "@/components/whatsapp-icon";
import {
  locations,
  paymentMethods,
  type AudienceKey,
  type LocationKey,
  type PaymentKey,
} from "@/content/session-pages";
import {
  buildMessage,
  buildSessionUrl,
  meetings,
  normalisePhone,
  type LinkOptions,
  type MeetingKey,
} from "@/lib/session-link";

const ALL_PAYMENTS = Object.keys(paymentMethods) as PaymentKey[];

const audiences: { key: AudienceKey | ""; label: string }[] = [
  { key: "", label: "כל הקהלים" },
  { key: "parents", label: "הורים" },
  { key: "crisis", label: "משפחה במחלה, אובדן או משבר" },
  { key: "guidance", label: "הדרכת הורים" },
];

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-foreground outline-none focus:border-amber/60";
const labelClass = "mb-2 block text-sm font-medium text-muted-foreground";

/* The origin the link is built against. It never changes once the page is up,
   but `window` does not exist while the server renders this form - so it is
   read through useSyncExternalStore, which hands the server an empty string
   and the browser the real value without a hydration mismatch. */
const NO_ORIGIN_CHANGES = () => () => {};
const readOrigin = () =>
  process.env.NEXT_PUBLIC_BASE_URL || window.location.origin;
const serverOrigin = () => "";

function Required() {
  return (
    <span aria-hidden="true" className="text-destructive">
      {" *"}
    </span>
  );
}

export default function SendForm() {
  // Required fields start empty rather than on a default, so a link is never
  // built from a value Inbal did not actually choose.
  const [meeting, setMeeting] = useState<MeetingKey | "">("");
  const [location, setLocation] = useState<LocationKey | "">("");
  const [audience, setAudience] = useState<AudienceKey | "">("");
  const [price, setPrice] = useState("");
  const [payments, setPayments] = useState<PaymentKey[]>(ALL_PAYMENTS);
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [copied, setCopied] = useState(false);

  const origin = useSyncExternalStore(
    NO_ORIGIN_CHANGES,
    readOrigin,
    serverOrigin,
  );

  const waNumber = normalisePhone(phone);
  const phoneInvalid = phone.trim().length > 0 && waNumber === null;

  const missing = [
    !meeting && "סוג המפגש",
    !location && "מיקום",
    !patientName.trim() && "שם פרטי נמען",
    !waNumber && "טלפון",
  ].filter((f): f is string => Boolean(f));

  const ready = missing.length === 0;

  const options: LinkOptions = useMemo(
    () => ({
      meeting: (meeting || "first-session") as MeetingKey,
      location,
      audience,
      price,
      payments,
      patientName,
    }),
    [meeting, location, audience, price, payments, patientName],
  );

  const url = origin && ready ? buildSessionUrl(origin, options) : "";
  const message = url ? buildMessage(url, options) : "";

  const waHref = message
    ? `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`
    : "";

  function togglePayment(key: PaymentKey) {
    setPayments((current) =>
      current.includes(key)
        ? current.filter((p) => p !== key)
        : [...current, key],
    );
  }

  async function copyMessage() {
    await navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-border bg-secondary/30 p-5">
        <h2 className="mb-4 text-lg font-bold text-primary">פרטי המפגש</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="meeting">
              סוג המפגש
              <Required />
            </label>
            <select
              id="meeting"
              required
              className={fieldClass}
              value={meeting}
              onChange={(e) => setMeeting(e.target.value as MeetingKey)}
            >
              <option value="">בחרי סוג מפגש</option>
              {meetings.map((m) => (
                <option key={m.key} value={m.key}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="location">
              מיקום
              <Required />
            </label>
            <select
              id="location"
              required
              className={fieldClass}
              value={location}
              onChange={(e) => setLocation(e.target.value as LocationKey | "")}
            >
              <option value="">בחרי מיקום</option>
              {locations.map((l) => (
                <option key={l.key} value={l.key}>
                  {l.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="audience">
              למי מיועד
            </label>
            <select
              id="audience"
              className={fieldClass}
              value={audience}
              onChange={(e) => setAudience(e.target.value as AudienceKey | "")}
            >
              {audiences.map((a) => (
                <option key={a.key} value={a.key}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor="price">
              מחיר המפגש (אופציונלי)
            </label>
            <input
              id="price"
              type="number"
              inputMode="numeric"
              min="0"
              placeholder="ללא ציון מחיר"
              className={fieldClass}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <fieldset className="mt-4">
          <legend className={labelClass}>אמצעי תשלום להצגה</legend>
          <div className="flex flex-wrap gap-2">
            {ALL_PAYMENTS.map((key) => {
              const active = payments.includes(key);
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => togglePayment(key)}
                  aria-pressed={active}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active
                      ? "border-amber/60 bg-amber/15 text-foreground"
                      : "border-border bg-card text-muted-foreground/60"
                  }`}
                >
                  {paymentMethods[key]}
                </button>
              );
            })}
          </div>
        </fieldset>
      </section>

      <section className="rounded-2xl border border-border bg-secondary/30 p-5">
        <h2 className="mb-4 text-lg font-bold text-primary">מושא הפניה</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="name">
              שם פרטי נמען
              <Required />
            </label>
            <input
              id="name"
              required
              className={fieldClass}
              placeholder="לפתיחת ההודעה ולפניה בעמוד"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
            />
            <p className="mt-1 text-xs text-muted-foreground/70">
              שם פרטי בלבד. אם יוקלד שם מלא, ישמש רק החלק הראשון.
            </p>
          </div>

          <div>
            <label className={labelClass} htmlFor="phone">
              טלפון
              <Required />
            </label>
            <input
              id="phone"
              type="tel"
              required
              dir="ltr"
              placeholder="050-000-0000"
              className={`${fieldClass} text-right ${
                phoneInvalid ? "border-destructive" : ""
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneInvalid && (
              <p className="mt-1 text-sm text-destructive">מספר לא תקין</p>
            )}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-card p-5 shadow-warm">
        <h2 className="mb-1 text-lg font-bold text-primary">ההודעה שתישלח</h2>
        <p className="mb-4 text-sm text-muted-foreground/70">
          אפשר לערוך אותה גם אחרי שוואטסאפ נפתח.
        </p>

        {ready ? (
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-xl bg-secondary/50 p-4 text-sm leading-relaxed text-muted-foreground">
            {message || "טוען..."}
          </pre>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-secondary/30 p-4 text-sm text-muted-foreground">
            <p className="font-medium">כדי לבנות את ההודעה חסר למלא:</p>
            <ul className="mt-2 space-y-1">
              {missing.map((field) => (
                <li key={field} className="flex gap-2">
                  <span aria-hidden="true" className="text-destructive">
                    •
                  </span>
                  {field}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!ready}
            onClick={(e) => {
              if (!ready) e.preventDefault();
            }}
            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-medium text-white transition-opacity ${
              ready
                ? "bg-whatsapp hover:opacity-90"
                : "pointer-events-none bg-whatsapp/40"
            }`}
          >
            <WhatsAppIcon size={20} />
            פתיחת וואטסאפ עם ההודעה
          </a>

          <button
            type="button"
            onClick={copyMessage}
            disabled={!message}
            className="rounded-xl border border-border bg-card px-5 py-3 font-medium text-foreground disabled:opacity-50"
          >
            {copied ? "הועתק" : "העתקת ההודעה"}
          </button>
        </div>

        {ready && (
          <div className="mt-5 border-t border-border pt-4">
            <p className={labelClass}>הלינק עצמו</p>
            <div className="flex flex-wrap items-center gap-3">
              <code
                dir="ltr"
                className="flex-1 overflow-x-auto rounded-lg bg-secondary/50 px-3 py-2 text-xs text-muted-foreground"
              >
                {url}
              </code>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm font-medium text-amber underline"
              >
                תצוגה מקדימה
              </a>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
