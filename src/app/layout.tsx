import { ToastProvider } from '@/components/ui/toast';

import type { Metadata } from "next";
import "./globals.css";
import "../styles/transitions.css";
import { ClientScrollHandler } from '@/components/client-scroll-handler';

export const metadata: Metadata = {
  title: "Adrià Estévez",
  description: "Comunidad IA y Cursos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="!font-default overflow-x-hidden bg-background text-foreground antialiased">
        <div className="absolute top-0 z-[-2] h-screen w-screen overflow-x-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950">
          {children}
          <ClientScrollHandler />
          <ToastProvider />
        </div>
      </body>
    </html>
  );
}
