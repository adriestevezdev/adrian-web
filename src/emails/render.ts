// Formato mínimo para escribir los emails: cada párrafo es un string que admite
// **negrita** y [texto](url). Se genera a la vez la versión HTML y la de texto plano.

export interface EmailContent {
  subject: string;
  paragraphs: string[];
}

const LINK_REGEX = /\[([^\]]+)\]\(([^)\s]+)\)/g;
const BOLD_REGEX = /\*\*([^*]+)\*\*/g;
const FOOTER_REASON = "Recibes este email porque te apuntaste a la lista de espera de Arquitectos IA en arquitectos-ia.com.";

function escapeHtml(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function paragraphToHtml(paragraph: string) {
  return escapeHtml(paragraph)
    .replace(LINK_REGEX, (_, label: string, url: string) => `<a href="${url}" style="color:#A78355;font-weight:600;">${label}</a>`)
    .replace(BOLD_REGEX, "<strong>$1</strong>")
    .replace(/\n/g, "<br>");
}

function paragraphToText(paragraph: string) {
  return paragraph.replace(LINK_REGEX, "$1: $2").replace(BOLD_REGEX, "$1");
}

// Convierte el texto escrito en el panel (párrafos separados por una línea en blanco) en párrafos
export function textToParagraphs(body: string) {
  return body
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

export function renderEmail({ subject, paragraphs }: EmailContent, unsubscribeUrl: string) {
  const footer = `${FOOTER_REASON} [Darme de baja](${unsubscribeUrl})`;

  const body = paragraphs
    .map((paragraph) => `<p style="margin:0 0 18px;">${paragraphToHtml(paragraph)}</p>`)
    .join("\n");

  const html = `<!doctype html>
<html lang="es">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHtml(subject)}</title></head>
  <body style="margin:0;padding:24px 16px;background:#ffffff;">
    <div style="max-width:560px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:#1f1f1f;">
      ${body}
      <p style="margin:32px 0 0;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#888;">${paragraphToHtml(footer)}</p>
    </div>
  </body>
</html>`;

  const text = [...paragraphs.map(paragraphToText), "—", paragraphToText(footer)].join("\n\n");

  return { subject, html, text };
}
