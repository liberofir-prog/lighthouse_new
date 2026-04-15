"use server";

interface FormState {
  success: boolean;
  message: string;
  whatsappUrl?: string;
}

const CLINIC_PHONE = "972545524516"; // 054-552-4516

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

  const lines = [
    `שלום ענבל, פנייה חדשה מהאתר:`,
    `שם: ${name}`,
    `טלפון: ${phone}`,
  ];
  if (subject?.trim()) lines.push(`נושא: ${subject.trim()}`);

  const text = encodeURIComponent(lines.join("\n"));
  const whatsappUrl = `https://wa.me/${CLINIC_PHONE}?text=${text}`;

  return { success: true, message: "הפרטים נשלחו בהצלחה! נחזור אליך בהקדם.", whatsappUrl };
}
