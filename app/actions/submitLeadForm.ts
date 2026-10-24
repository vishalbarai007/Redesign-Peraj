"use server";

import { leadFormSchema, FormSubmissionState } from "@/types/formSchemas";

export async function submitLeadForm(
  prevState: FormSubmissionState | null,
  formData: FormData
): Promise<FormSubmissionState> {
  try {
    // Extract raw fields
    const rawData = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      workEmail: formData.get("workEmail"),
      companyName: formData.get("companyName"),
      insuranceRequirement: formData.get("insuranceRequirement"),
      message: formData.get("message"),
      hp_website: formData.get("hp_website"), // Honeypot field
    };

    // 1. Invisible Honeypot Trap Check (Bot Defense)
    if (rawData.hp_website && String(rawData.hp_website).trim().length > 0) {
      console.warn("[Spam Protection] Honeypot triggered. Silently dropping payload.");
      return {
        success: true,
        message: "Thank you for reaching out. A risk adviser will connect with you shortly.",
      };
    }

    // 2. Strict Zod Server-Side Validation
    const validationResult = leadFormSchema.safeParse(rawData);
    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Please correct the highlighted fields before submitting.",
        fieldErrors,
      };
    }

    const validData = validationResult.data;

    // 3. Multi-destination concurrent dispatch (Google Sheets, CRM, Resend)
    const dispatches: Promise<unknown>[] = [];

    // Optional Google Sheets Webhook Dispatch
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (webhookUrl) {
      dispatches.push(
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            source: "Peraj Landing Page Callback Form",
            ...validData,
          }),
        }).catch((err) => {
          console.error("[Dispatch Error] Google Sheets Webhook failed:", err);
          return null;
        })
      );
    }

    // Optional Email Notification Dispatch via Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_DESTINATION_EMAIL || "info@perajinsurance.co.in";
    if (resendApiKey) {
      dispatches.push(
        fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Peraj Leads <notifications@peraj.com>",
            to: [notificationEmail],
            subject: `[New Consultation Request] ${validData.fullName} - ${validData.insuranceRequirement}`,
            text: `
New Commercial Insurance Lead from Peraj Landing Page:

Name: ${validData.fullName}
Phone: ${validData.phone}
Email: ${validData.workEmail}
Company: ${validData.companyName || "N/A"}
Requirement: ${validData.insuranceRequirement}
Message: ${validData.message || "N/A"}
Submitted At: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            `,
          }),
        }).catch((err) => {
          console.error("[Dispatch Error] Resend Email failed:", err);
          return null;
        })
      );
    }

    // Await any configured dispatches safely
    if (dispatches.length > 0) {
      await Promise.allSettled(dispatches);
    } else {
      // Local development fallback log
      console.log("[Lead Captured Successfully]:", {
        timestamp: new Date().toISOString(),
        lead: validData,
      });
    }

    return {
      success: true,
      message:
        "Thank you! Your callback request has been received. A senior risk adviser will review your requirements and phone you within 2 business hours.",
    };
  } catch (error) {
    console.error("[Server Action Error]:", error);
    return {
      success: false,
      message: "An unexpected error occurred while processing your request. Please try calling us directly.",
    };
  }
}
