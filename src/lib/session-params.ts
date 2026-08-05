import {
  locations,
  paymentMethods,
  type AudienceKey,
  type LocationKey,
  type PaymentKey,
  type SessionLocation,
} from "@/content/session-pages";

/**
 * Session pages are sent to families as a personal link, e.g.
 *   /before-first-session?location=alfei-menashe&price=300&audience=parents
 *
 * Every parameter is optional and every invalid value falls back to "show
 * everything". A parent must never see an error page because a link was typed
 * or forwarded imperfectly.
 */

/** Next.js 16 passes searchParams as a promise of this shape. */
export type RawSearchParams = Record<string, string | string[] | undefined>;

export interface SessionParams {
  /** Locations to display - all of them when nothing valid was requested. */
  locations: SessionLocation[];
  /** True when the link pinned a single location. */
  hasSpecificLocation: boolean;
  /** Session price in shekels, or null to omit the amount entirely. */
  price: number | null;
  /** Audience notes to display - all of them when nothing valid was requested. */
  audiences: AudienceKey[];
  /** Payment method labels to display. */
  payments: string[];
  /** First name for the greeting, or null when the link carries none. */
  patientName: string | null;
}

const AUDIENCE_KEYS: AudienceKey[] = ["parents", "crisis", "guidance"];
const PAYMENT_KEYS = Object.keys(paymentMethods) as PaymentKey[];

function first(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

/**
 * Deliberately a FIRST NAME only, never a full one. The link ends up in server
 * logs and in the recipient's browser history, and a bare given name is not an
 * identifier the way "first + last" beside a therapy page would be. Anything
 * past the first word is dropped even if the sender pasted it.
 */
function parseName(raw: string | undefined): string | null {
  if (!raw) return null;
  const firstWord = raw.trim().split(/\s+/)[0] ?? "";
  const cleaned = firstWord.replace(/[^\p{L}'-]/gu, "").slice(0, 20);
  return cleaned.length > 0 ? cleaned : null;
}

function parsePrice(raw: string | undefined): number | null {
  if (!raw) return null;
  const price = Number(raw);
  return Number.isFinite(price) && price > 0 ? Math.round(price) : null;
}

export function resolveSessionParams(raw: RawSearchParams): SessionParams {
  const locationParam = first(raw.location);
  const matchedLocation = locations.find(
    (l) => l.key === (locationParam as LocationKey),
  );

  const audienceParam = first(raw.audience);
  const matchedAudience = AUDIENCE_KEYS.find((a) => a === audienceParam);

  const requestedPayments = (first(raw.pay) ?? "")
    .split(",")
    .map((p) => p.trim())
    .filter((p): p is PaymentKey => PAYMENT_KEYS.includes(p as PaymentKey));

  return {
    locations: matchedLocation ? [matchedLocation] : locations,
    hasSpecificLocation: Boolean(matchedLocation),
    price: parsePrice(first(raw.price)),
    patientName: parseName(first(raw.name)),
    audiences: matchedAudience ? [matchedAudience] : AUDIENCE_KEYS,
    payments: (requestedPayments.length ? requestedPayments : PAYMENT_KEYS).map(
      (key) => paymentMethods[key],
    ),
  };
}
