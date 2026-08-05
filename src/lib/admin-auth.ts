import { createHmac, randomInt } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const SECRET = process.env.ADMIN_SESSION_SECRET ?? "dev-secret-change-me";

function sign(value: string): string {
  return createHmac("sha256", SECRET).update(value).digest("hex");
}

export function generateOTP(): string {
  return randomInt(100000, 999999).toString();
}

/**
 * Two levels of access.
 *
 * `admin` is Ofir: password plus a one-time code, and it opens everything.
 * `sender` is Inbal: a password of her own that opens the session-page sending
 * tool and nothing else. The tool stores no patient data - it only assembles a
 * link - so it does not warrant the friction of an emailed code before every
 * use, and the newsletter drafts stay out of reach either way.
 */
export type AdminRole = "admin" | "sender";

const ROLES: AdminRole[] = ["admin", "sender"];

/** How long each role stays signed in. */
const SESSION_HOURS: Record<AdminRole, number> = {
  admin: 24,
  sender: 24 * 30,
};

/**
 * Reads the signed cookie and returns the role it carries, or null.
 *
 * The token is `role:expiry:signature`. Sessions issued before roles existed
 * had no role segment and no longer verify, so they simply require a fresh
 * sign-in rather than being silently upgraded.
 */
export async function getSessionRole(): Promise<AdminRole | null> {
  const jar = await cookies();
  const token = jar.get("admin_session")?.value ?? "";

  const parts = token.split(":");
  if (parts.length !== 3) return null;

  const [role, expiry, sig] = parts;
  if (!ROLES.includes(role as AdminRole)) return null;
  if (sign(`${role}:${expiry}`) !== sig) return null;

  const expiresAt = parseInt(expiry);
  if (!Number.isFinite(expiresAt) || Date.now() > expiresAt) return null;

  return role as AdminRole;
}

/** Full access: the newsletter drafts and everything else. */
export async function requireAdmin() {
  if ((await getSessionRole()) !== "admin") redirect("/admin/login");
}

/** The sending tool. Inbal reaches it, and so does Ofir. */
export async function requireSender() {
  const role = await getSessionRole();
  if (role !== "sender" && role !== "admin") redirect("/admin/login");
}

export async function setAdminSession(role: AdminRole = "admin") {
  const maxAge = SESSION_HOURS[role] * 60 * 60;
  const expiry = (Date.now() + maxAge * 1000).toString();
  const jar = await cookies();
  jar.set("admin_session", `${role}:${expiry}:${sign(`${role}:${expiry}`)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge,
    path: "/",
  });
}

export async function clearAdminSession() {
  const jar = await cookies();
  jar.delete("admin_session");
}

export async function setOTPCookie(otp: string) {
  const expiry = (Date.now() + 10 * 60 * 1000).toString();
  const otpHash = sign(`${otp}:${expiry}`);
  const jar = await cookies();
  jar.set("admin_otp", `${otpHash}:${expiry}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 10,
    path: "/",
  });
}

export async function verifyOTP(entered: string): Promise<boolean> {
  const jar = await cookies();
  const val = jar.get("admin_otp")?.value ?? "";
  const colonIdx = val.lastIndexOf(":");
  if (colonIdx === -1) return false;
  const storedHash = val.slice(0, colonIdx);
  const expiry = val.slice(colonIdx + 1);
  if (Date.now() > parseInt(expiry)) return false;
  const expectedHash = sign(`${entered}:${expiry}`);
  return expectedHash === storedHash;
}
