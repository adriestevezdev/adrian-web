import { funnel } from "@/config/funnel";

export function buildWhatsappLink(message: string = funnel.whatsappMessage) {
  return `https://wa.me/${funnel.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
