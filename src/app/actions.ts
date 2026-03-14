"use server";

interface FormState {
  success: boolean;
  message: string;
}

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

  // TODO: Replace with real email sending (nodemailer / external service)
  console.log("New lead received:", { name, phone, subject });

  return { success: true, message: "הפרטים נשלחו בהצלחה! נחזור אליך בהקדם." };
}
