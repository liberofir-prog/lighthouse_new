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

export async function requireAdmin() {
  const jar = await cookies();
  const token = jar.get("admin_session")?.value ?? "";
  const colonIdx = token.lastIndexOf(":");
  if (colonIdx === -1) redirect("/admin/login");
  const expiry = token.slice(0, colonIdx);
  const sig = token.slice(colonIdx + 1);
  if (sign(expiry) !== sig) redirect("/admin/login");
  if (Date.now() > parseInt(expiry)) redirect("/admin/login");
}

export async function setAdminSession() {
  const expiry = (Date.now() + 24 * 60 * 60 * 1000).toString();
  const sig = sign(expiry);
  const jar = await cookies();
  jar.set("admin_session", `${expiry}:${sig}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
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
