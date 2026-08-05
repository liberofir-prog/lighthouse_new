import {
  firstSession,
  intake,
  parentsMeeting,
  paymentMethods,
  type AudienceKey,
  type LocationKey,
  type PaymentKey,
} from "@/content/session-pages";

export type MeetingKey = "first-session" | "intake" | "parents-meeting";

export const meetings: {
  key: MeetingKey;
  label: string;
  /** How the meeting is referred to inside the WhatsApp message. */
  inMessage: string;
  slug: string;
}[] = [
  {
    key: "first-session",
    label: "מפגש ראשון",
    inMessage: "המפגש הראשון שלנו",
    slug: firstSession.slug,
  },
  {
    key: "intake",
    label: "פגישת היכרות (אינטייק)",
    inMessage: "פגישת ההיכרות שלנו",
    slug: intake.slug,
  },
  {
    key: "parents-meeting",
    label: "מפגש הורים",
    inMessage: "מפגש ההורים שלנו",
    slug: parentsMeeting.slug,
  },
];

export interface LinkOptions {
  meeting: MeetingKey;
  location: LocationKey | "";
  audience: AudienceKey | "";
  price: string;
  payments: PaymentKey[];
  patientName: string;
}

const ALL_PAYMENTS = Object.keys(paymentMethods) as PaymentKey[];

/**
 * First word only. A given name on its own is not an identifier; a full name
 * next to a therapy page, sitting in server logs, is a different matter.
 */
export function firstNameOnly(raw: string): string {
  return raw.trim().split(/\s+/)[0] ?? "";
}

/**
 * Builds the personal page URL. Only non-default choices become parameters, so
 * the link stays short enough to read comfortably inside a WhatsApp bubble.
 */
export function buildSessionUrl(origin: string, options: LinkOptions): string {
  const meeting = meetings.find((m) => m.key === options.meeting) ?? meetings[0];

  // Assembled by hand rather than through URLSearchParams: this link is read by
  // a human inside a WhatsApp bubble, and percent-encoding turns a Hebrew name
  // into a wall of %D7%A0 that reads as a broken link. Every value here is
  // either a fixed key, a number, or a name already stripped to letters, so
  // none of them need escaping. Browsers encode on the wire regardless.
  const pairs: string[] = [];

  if (options.location) pairs.push(`location=${options.location}`);
  if (options.audience) pairs.push(`audience=${options.audience}`);

  const name = firstNameOnly(options.patientName).replace(/[^\p{L}'-]/gu, "");
  if (name) pairs.push(`name=${name}`);

  const price = Number(options.price);
  if (options.price.trim() && Number.isFinite(price) && price > 0) {
    pairs.push(`price=${Math.round(price)}`);
  }

  if (
    options.payments.length > 0 &&
    options.payments.length < ALL_PAYMENTS.length
  ) {
    pairs.push(`pay=${options.payments.join(",")}`);
  }

  const query = pairs.join("&");
  return `${origin}/${meeting.slug}${query ? `?${query}` : ""}`;
}

export function buildMessage(url: string, options: LinkOptions): string {
  const meeting = meetings.find((m) => m.key === options.meeting) ?? meetings[0];
  const name = firstNameOnly(options.patientName);

  return [
    name ? `היי ${name},` : "היי,",
    `ריכזתי עבורכם דף עם כל מה שכדאי לדעת לקראת ${meeting.inMessage} - למה לצפות, איפה נפגשים, תשלום וביטולים.`,
    "",
    url,
    "",
    "אם תעלה שאלה לפני המפגש, אתם מוזמנים לכתוב לי כאן.",
    "נתראה,",
    "ענבל",
  ].join("\n");
}

/**
 * Normalises an Israeli number to the international form wa.me expects.
 * Returns null when the input cannot be read as a phone number.
 */
export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/[^\d+]/g, "");
  if (!digits) return null;

  if (digits.startsWith("+972")) return digits.slice(1);
  if (digits.startsWith("972")) return digits;
  if (digits.startsWith("0")) return `972${digits.slice(1)}`;
  if (digits.startsWith("+")) return digits.slice(1);
  return null;
}
