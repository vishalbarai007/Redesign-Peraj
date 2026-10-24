import { z } from "zod";

export const leadFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name cannot exceed 80 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid 10-digit mobile number")
    .max(15, "Phone number is too long")
    .regex(/^[0-9+\s-()]+$/, "Phone number contains invalid characters"),
  workEmail: z
    .string()
    .trim()
    .email("Please provide a valid corporate email address"),
  companyName: z
    .string()
    .trim()
    .max(100, "Company name cannot exceed 100 characters")
    .optional()
    .or(z.literal("")),
  insuranceRequirement: z
    .string()
    .min(1, "Please select an insurance requirement"),
  message: z
    .string()
    .trim()
    .max(1500, "Message cannot exceed 1500 characters")
    .optional()
    .or(z.literal("")),
  // Invisible honeypot trap to silently catch spam bots
  hp_website: z.string().max(0, "Bot submission detected").optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export interface FormSubmissionState {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string[]>;
}
