"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";
import {
  generateOTP,
  setAdminSession,
  setOTPCookie,
  verifyOTP,
  clearAdminSession,
} from "@/lib/admin-auth";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "liber.ofir@gmail.com";
const NOTIFY_EMAIL = process.env.ADMIN_NOTIFY_EMAIL ?? "liber.ofir@gmail.com";

// --- Step 1: password ---
export async function loginWithPassword(
  _prev: string | null,
  formData: FormData
): Promise<string | null> {
  const password = formData.get("password") as string;
  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return "סיסמה שגויה";
  }

  const otp = generateOTP();
  await setOTPCookie(otp);

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "מגדלור Admin <inbal@liber.co.il>",
    to: ADMIN_EMAIL,
    subject: "קוד כניסה לאדמין מגדלור",
    html: `
      <div dir="rtl" style="font-family:sans-serif;max-width:400px;color:#333;">
        <h2 style="color:#5a3e1b;">קוד כניסה</h2>
        <p style="font-size:32px;font-weight:bold;letter-spacing:8px;color:#c8922a;">${otp}</p>
        <p style="color:#888;font-size:13px;">הקוד תקף ל-10 דקות.</p>
      </div>
    `,
  });

  redirect("/admin/verify");
}

// --- Step 2: OTP ---
export async function verifyOTPAction(
  _prev: string | null,
  formData: FormData
): Promise<string | null> {
  const entered = (formData.get("otp") as string ?? "").trim();
  const ok = await verifyOTP(entered);
  if (!ok) return "קוד שגוי או שפג תוקפו";
  await setAdminSession();
  redirect("/admin");
}

// --- Logout ---
export async function logoutAction() {
  await clearAdminSession();
  redirect("/admin/login");
}

// --- Approve draft ---
export async function approveDraft(
  _prev: { ok: boolean; message: string } | null,
  formData: FormData
): Promise<{ ok: boolean; message: string }> {
  const id = formData.get("id") as string;
  const subject = formData.get("emailSubject") as string;
  const intro = formData.get("intro") as string;
  const teasersRaw = formData.get("teasers") as string;
  const newsletterUrl = formData.get("newsletterUrl") as string;
  const notes = (formData.get("notes") as string ?? "").trim();
  const teasers = teasersRaw.split("\n").map((t) => t.trim()).filter(Boolean);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://migdalor.me";
  const fullUrl = `${baseUrl}${newsletterUrl}`;

  const teaserLines = teasers
    .map((t) => `<tr><td style="padding:6px 0;font-size:14px;color:#4a3020;direction:rtl;">- ${t}</td></tr>`)
    .join("");

  const emailHtml = `
    <div dir="rtl" style="font-family:sans-serif;max-width:560px;color:#333;background:#f8f3ea;padding:24px;border-radius:8px;">
      <div style="text-align:center;margin-bottom:20px;">
        <img src="${baseUrl}/logo.png" alt="מגדלור" width="50" style="display:inline-block;">
      </div>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr><td style="background:#3d2b1a;padding:24px 28px;border-radius:8px 8px 0 0;">
          <p style="color:#c9a97a;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin:0 0 4px;">
            מגדלור למטפלים
          </p>
          <h1 style="color:#e8d5b0;font-size:22px;margin:0;">${subject}</h1>
        </td></tr>
        <tr><td style="background:#fff;padding:28px;border-radius:0 0 8px 8px;">
          <p style="font-size:15px;color:#5a3e1b;margin:0 0 20px;line-height:1.7;">${intro}</p>
          <p style="font-weight:bold;color:#3d2b1a;margin:0 0 10px;">והפעם:</p>
          <table cellpadding="0" cellspacing="0">${teaserLines}</table>
          <p style="font-size:14px;color:#5a4a38;margin:16px 0 24px;">ועוד הרבה דברים אחרים בגיליון המלא</p>
          <div style="text-align:center;">
            <a href="${fullUrl}"
               style="display:inline-block;background:#c9a97a;color:#3d2b1a;font-weight:bold;
                      font-size:15px;padding:14px 32px;border-radius:50px;text-decoration:none;">
              לגיליון המלא
            </a>
          </div>
          <p style="font-size:11px;color:#aaa;text-align:center;margin-top:24px;">
            ענבל ליבר | מגדלור | migdalor.me<br>
            להסרה מהרשימה - השיבי "הסר"
          </p>
        </td></tr>
      </table>
    </div>
  `;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notify Ofir that draft is approved and ready to send
    await resend.emails.send({
      from: "מגדלור Admin <inbal@liber.co.il>",
      to: NOTIFY_EMAIL,
      subject: `[מגדלור] גיליון ${id} אושר - מוכן לשליחה`,
      html: `
        <div dir="rtl" style="font-family:sans-serif;max-width:560px;color:#333;">
          <h2 style="color:#5a3e1b;">גיליון ${id} אושר על ידי ענבל</h2>
          ${notes ? `
          <div style="background:#fff8e6;border:1px solid #f0d080;border-radius:8px;padding:16px;margin-bottom:20px;">
            <p style="font-weight:bold;color:#9b7020;margin:0 0 8px;">הערות לתיקון לפני שליחה:</p>
            <p style="white-space:pre-wrap;color:#5a3e1b;margin:0;">${notes}</p>
          </div>
          ` : ""}
          <p>תוכן המייל שאושר לשליחה:</p>
          <hr style="border-color:#e0d0b8;">
          ${emailHtml}
          <hr style="border-color:#e0d0b8;">
          <p style="color:#888;font-size:13px;">עמוד הגיליון: <a href="${fullUrl}">${fullUrl}</a></p>
        </div>
      `,
    });

    // Confirmation to Inbal
    await resend.emails.send({
      from: "מגדלור Admin <inbal@liber.co.il>",
      to: ADMIN_EMAIL,
      subject: `גיליון ${id} אושר - ממתין לשליחה`,
      html: `
        <div dir="rtl" style="font-family:sans-serif;max-width:400px;color:#333;">
          <h2 style="color:#5a3e1b;">הגיליון אושר</h2>
          <p>גיליון <strong>${id}</strong> אושר ונשלחה הודעה לאופיר.</p>
          <p>השליחה לרשימת המנויים תתבצע יחד בתיאום.</p>
          <p style="color:#888;font-size:13px;">עמוד הגיליון: <a href="${fullUrl}">${fullUrl}</a></p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Approve draft error:", err);
    return { ok: false, message: "שגיאה בשליחת ההודעות. נסי שוב." };
  }

  return { ok: true, message: "הגיליון אושר! נשלחה הודעה לאופיר." };
}
