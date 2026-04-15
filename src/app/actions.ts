"use server";

import { Resend } from "resend";

interface FormState {
  success: boolean;
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  _prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;

  if (!phone || phone.trim().length < 9) {
    return { success: false, message: "נא להזין מספר טלפון תקין" };
  }

  if (!name || name.trim().length < 2) {
    return { success: false, message: "נא להזין שם מלא" };
  }

  await resend.emails.send({
    from: "אתר מגדלור <noreply@migdalor.me>",
    to: "inbal@liber.co.il",
    subject: `פנייה חדשה מהאתר — ${name}`,
    html: `
      <div dir="rtl" style="font-family: sans-serif; max-width: 480px;">
        <h2 style="color: #333;">פנייה חדשה מהאתר</h2>
        <p><strong>שם:</strong> ${name}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        ${subject ? `<p><strong>נושא:</strong> ${subject}</p>` : ""}
      </div>
    `,
  });

  return { success: true, message: "הפרטים נשלחו בהצלחה! נחזור אליך בהקדם." };
}
