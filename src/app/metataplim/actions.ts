"use server";

import { Resend } from "resend";

interface SubscribeState {
  success: boolean;
  message: string;
}

const NOTIFY_EMAIL = process.env.ADMIN_NOTIFY_EMAIL ?? "liber.ofir@gmail.com";

export async function subscribeToNewsletter(
  _prevState: SubscribeState | null,
  formData: FormData
): Promise<SubscribeState> {
  const firstName = formData.get("firstName") as string;
  const lastName  = formData.get("lastName")  as string;
  const email     = formData.get("email")     as string;
  const phone     = formData.get("phone")     as string;

  if (!firstName || firstName.trim().length < 2) {
    return { success: false, message: "נא להזין שם פרטי" };
  }
  if (!lastName || lastName.trim().length < 2) {
    return { success: false, message: "נא להזין שם משפחה" };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "נא להזין כתובת אימייל תקינה" };
  }

  // Duplicate check via Airtable REST API
  const apiToken = process.env.AIRTABLE_API_TOKEN;
  const baseId   = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Subscribers";
  if (!apiToken || !baseId) {
    return { success: false, message: `[debug] חסרים env vars: token=${!!apiToken} base=${!!baseId}` };
  }
  try {
    const filter = encodeURIComponent(`{כתובת מייל}="${email.trim()}"`);
    const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}?filterByFormula=${filter}&maxRecords=1`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${apiToken}` } });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, message: `[debug] Airtable error: ${JSON.stringify(data?.error)}` };
    }
    if (data.records?.length > 0) {
      return { success: false, message: "נראה שאתה כבר מנוי לניוזלטר שלנו." };
    }
  } catch (err) {
    return { success: false, message: `[debug] fetch error: ${err}` };
  }

  try {
    const webhookUrl = process.env.AIRTABLE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email:     email.trim(),
          firstName: firstName.trim(),
          lastName:  lastName.trim(),
          phone:     phone?.trim() ?? "",
          active:    true,
          date:      new Date().toISOString(),
        }),
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notify Ofir about new subscriber
    await resend.emails.send({
      from: "מגדלור <inbal@liber.co.il>",
      to: NOTIFY_EMAIL,
      subject: `[מגדלור] נרשם/ה חדש/ה — ${firstName.trim()} ${lastName.trim()}`,
      html: `
        <div dir="rtl" style="font-family:Arial,sans-serif;max-width:400px;color:#333;">
          <h2 style="color:#5a3e1b;">מנוי/ה חדש/ה לניוזלטר מגדלור</h2>
          <table style="border-collapse:collapse;width:100%;">
            <tr><td style="padding:4px 0;color:#888;font-size:13px;">שם:</td><td style="padding:4px 0;font-weight:bold;">${firstName.trim()} ${lastName.trim()}</td></tr>
            <tr><td style="padding:4px 0;color:#888;font-size:13px;">אימייל:</td><td style="padding:4px 0;">${email.trim()}</td></tr>
            ${phone?.trim() ? `<tr><td style="padding:4px 0;color:#888;font-size:13px;">טלפון:</td><td style="padding:4px 0;">${phone.trim()}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    // Confirmation to subscriber
    await resend.emails.send({
      from: "מגדלור <inbal@liber.co.il>",
      to: email.trim(),
      subject: "ברוכים הבאים לניוזלטר מגדלור ✨",
      html: `
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8f3ea;">
          <tr>
            <td align="center" style="padding:32px 16px;">
              <div dir="rtl" style="font-family:Arial,sans-serif;max-width:500px;width:100%;
                                    background:#fff;border-radius:10px;padding:32px;
                                    text-align:right;color:#333;border:1px solid #e8ddd0;">
                <div style="background:#3d2b1a;margin:-32px -32px 28px;padding:24px 28px;
                            border-radius:10px 10px 0 0;text-align:center;">
                  <p style="color:#c9a97a;font-size:11px;letter-spacing:2px;margin:0 0 4px;">מגדלור | ענבל ליבר</p>
                  <h1 style="color:#e8d5b0;font-size:22px;margin:0;">ברוכים הבאים לניוזלטר</h1>
                </div>
                <h2 style="color:#5a3e1b;margin:0 0 12px;">שלום ${firstName.trim()},</h2>
                <p style="line-height:1.7;margin:0 0 12px;">תודה שנרשמת לניוזלטר החודשי של <strong>מגדלור</strong>.</p>
                <p style="line-height:1.7;margin:0 0 24px;">בכל חודש תקבלו עדכונים ותובנות בתחום play therapy וליווי רוחני, ישר למייל שלכם.</p>
                <p style="color:#aaa;font-size:12px;border-top:1px solid #e8ddd0;padding-top:16px;margin:0;">
                  ענבל ליבר | קליניקת מגדלור | <a href="mailto:inbal@liber.co.il" style="color:#c9a97a;">inbal@liber.co.il</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      `,
    });
  } catch (err) {
    console.error("Newsletter subscription error:", err);
    return { success: false, message: "אירעה שגיאה, נסי שוב או צרי קשר ישירות." };
  }

  return {
    success: true,
    message: `${firstName.trim()}, ברוכים הבאים! מייל אישור נשלח אליך.`,
  };
}

export async function unsubscribeFromNewsletter(
  _prevState: SubscribeState | null,
  formData: FormData
): Promise<SubscribeState> {
  const email = (formData.get("unsubEmail") as string ?? "").trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { success: false, message: "נא להזין כתובת אימייל תקינה" };
  }

  try {
    const webhookUrl = process.env.AIRTABLE_UNSUBSCRIBE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, active: false }),
      });
    }
  } catch (err) {
    console.error("Unsubscribe error:", err);
    return { success: false, message: "אירעה שגיאה, נסי שוב." };
  }

  return {
    success: true,
    message: "הכתובת הוסרה מרשימת התפוצה.",
  };
}
