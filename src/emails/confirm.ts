import { funnel } from "@/config/funnel";
import type { EmailContent } from "@/emails/render";

interface ConfirmContext {
  confirmUrl: string;
  // Se había dado de baja y alguien ha vuelto a apuntar su email
  returning: boolean;
}

const FOOTER_REASON = "Recibes este email porque alguien ha escrito esta dirección en el formulario de arquitectos-ia.com.";

// Doble confirmación: hasta que no pulsa el enlace, no recibe ningún otro email de la lista
export function buildConfirmEmail({ confirmUrl, returning }: ConfirmContext): EmailContent {
  if (returning) {
    return {
      subject: "¿Quieres volver a la lista de espera?",
      paragraphs: [
        "Hola,",
        `Soy Adrià. Alguien (seguramente tú) ha vuelto a apuntar este email a la lista de espera de **${funnel.brand}**, de la que te habías dado de baja.`,
        `Si quieres volver, confírmalo aquí: [Volver a la lista de espera](${confirmUrl})`,
        "Si no, ignora este email y seguirás de baja.",
        "Un abrazo,\nAdrià",
      ],
      footerReason: FOOTER_REASON,
    };
  }

  return {
    subject: "Confirma tu email para entrar en la lista de espera",
    paragraphs: [
      "Hola,",
      `Soy Adrià. Para terminar de apuntarte a la lista de espera de **${funnel.brand}**, confirma que este email es tuyo:`,
      `[Confirmar mi email](${confirmUrl})`,
      "Si no te has apuntado tú, ignora este email y no volverás a saber de mí.",
      "Un abrazo,\nAdrià",
    ],
    footerReason: FOOTER_REASON,
  };
}
