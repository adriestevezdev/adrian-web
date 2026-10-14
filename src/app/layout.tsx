import { ToastProvider } from '@/components/ui/toast';
import { WhatsAppBubble } from '@/components/WhatsAppBubble';

import type { Metadata } from "next";
import "./globals.css";
import "../styles/transitions.css";
import { ClientScrollHandler } from '@/components/client-scroll-handler';

export const metadata: Metadata = {
  title: "Arquitectos IA | De Idea a Producto con Agentes de IA",
  description: "Formación y comunidad de Adrià Estévez para construir productos reales con agentes de IA como Claude Code y Cursor. Apúntate a la lista de espera de la próxima convocatoria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className="!font-default overflow-x-hidden bg-background text-foreground antialiased">
        <div className="absolute top-0 z-[-2] h-screen w-screen overflow-x-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950">
          {children}
          <ClientScrollHandler />
          <ToastProvider />
          <WhatsAppBubble />
        </div>
      </body>
    </html>
  );
}
