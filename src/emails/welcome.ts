import { funnel } from "@/config/funnel";
import type { EmailContent } from "@/emails/render";

interface WelcomeContext {
  whatsappUrl: string;
}

// Email que recibe cada persona al apuntarse a la lista de espera
export function buildWelcomeEmail({ whatsappUrl }: WelcomeContext): EmailContent {
  return {
    subject: "Ya estás en la lista de espera",
    paragraphs: [
      "Hola,",
      `Soy Adrià. Te confirmo que ya estás en la lista de espera de **${funnel.brand}**.`,
      "Estoy preparando una **masterclass gratuita** para construir tu producto con agentes de IA. En cuanto esté lista, te la mando por aquí.",
      "Además, abro plazas de vez en cuando y solo durante unos días. Cuando lo haga, te escribiré antes que a nadie con todos los detalles.",
      `Mientras tanto, en mi [canal de YouTube](${funnel.youtubeUrl}) tienes vídeos en los que construyo con agentes de IA. Te harás una idea de cómo trabajamos dentro.`,
      "Un consejo: si este email te ha llegado a Promociones o Spam, muévelo a tu bandeja principal para no perderte el aviso de apertura.",
      `Y si tienes cualquier duda, [escríbeme por WhatsApp](${whatsappUrl}) o responde a este email.`,
      "Un abrazo,\nAdrià",
    ],
  };
}
