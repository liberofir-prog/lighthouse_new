"use server";

import { Resend } from "resend";

interface SubscribeState {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(
  _prevState: SubscribeState | null,
  formData: FormData
): Promise<SubscribeState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  if (!name || name.trim().length < 2) {
    return { success: false, message: "נא להזין שם מלא" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "נא להזין כתובת אימייל תקינה" };
  }

  try {
    // 1. שליחה ל-Airtable Webhook
    const webhookUrl = process.env.AIRTABLE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          date: new Date().toISOString(),
        }),
      });
    }

    // 2. מייל אישור למנוי
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "מיגדלור <inbal@liber.co.il>",
      to: email.trim(),
      subject: "ברוכה הבאה לניוזלטר מיגדלור ✨",
      html: `
        <div dir="rtl" style="font-family: sans-serif; max-width: 500px; color: #333;">
          <h2 style="color: #5a3e1b;">שלום ${name.trim()},</h2>
          <p>תודה שנרשמת לניוזלטר החודשי של <strong>מיגדלור</strong>.</p>
          <p>בכל חודש תקבלי עדכונים ותובנות בתחום play therapy וליווי רוחני, ישר למייל שלך.</p>
          <p style="margin-top: 24px; color: #888; font-size: 13px;">
            ענבל ליבר | קליניקת מגדלור | inbal@liber.co.il
          </p>
        </div>
      `,
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return {
      success: false,
      message: "אירעה שגיאה, נסי שוב או צרי קשר ישירות.",
    };
  }

  return {
    success: true,
    message: `${name.trim()}, ברוכה הבאה! מייל אישור נשלח אליך.`,
  };
}
