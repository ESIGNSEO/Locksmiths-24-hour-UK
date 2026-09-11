export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || "07546852375";
const WHATSAPP_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || "07546852375";
export const PHONE_NUMBER_RAW = PHONE_NUMBER.replace(/\s+/g, "");

export function getWhatsAppNumber(phone: string): string {
  // Strip all non-digit characters
  const clean = phone.replace(/\D/g, "");
  // If it starts with 07 (standard UK mobile), replace 0 with 44
  if (clean.startsWith("07")) {
    return "44" + clean.slice(1);
  }
  return clean;
}

export const WHATSAPP_NUMBER = getWhatsAppNumber(WHATSAPP_PHONE_NUMBER);
