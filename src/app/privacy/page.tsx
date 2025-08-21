"use client";

import Link from "next/link";
import React from "react";

import { Logo } from "@/components/Logo";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Barra de navegación superior */}
      <header className="w-full bg-[#070707] backdrop-blur-md border-b border-white/10 py-5 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start">
          <Logo width={40} height={40} className="h-10 w-auto group-hover:scale-105 transition-transform" />
          <a href="/comunidad" className="ml-2 group">
            <span className="text-white text-xl md:text-2xl font-semibold group-hover:text-white/90 transition-colors">
              Arquitectos IA <span className="text-[#C9A880] group-hover:text-[#D9B890] transition-colors">Community</span>
            </span>
          </a>
        </div>
      </header>

      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Política de Privacidad</span>
          </h1>

          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">1. Introducción</h2>
              <p className="mb-4">
                En Arquitectos IA Community, accesible desde arquitectosia.com, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de información que se recopilan y registran por Arquitectos IA Community y cómo la utilizamos.
              </p>
              <p>
                Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos a través de nuestro formulario de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">2. Información que recopilamos</h2>
              <p className="mb-4">
                Cuando te registras en nuestra lista de espera o te unes a nuestra comunidad, recopilamos la siguiente información:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nombre (opcional)</li>
                <li>Dirección de correo electrónico</li>
                <li>Información sobre cómo interactúas con nuestros correos electrónicos</li>
                <li>Información de uso del sitio web</li>
              </ul>
              <p>
                Esta información es necesaria para proporcionarte acceso a nuestros servicios, enviarte comunicaciones relevantes y mejorar tu experiencia como miembro de nuestra comunidad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">3. Cómo utilizamos tu información</h2>
              <p className="mb-4">
                Utilizamos la información que recopilamos de las siguientes maneras:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Para proporcionar, operar y mantener nuestro sitio web y servicios</li>
                <li>Para enviar comunicaciones importantes, como confirmaciones de registro y actualizaciones sobre nuestra comunidad</li>
                <li>Para enviarte correos electrónicos informativos y educativos relacionados con la IA y los temas de nuestra comunidad</li>
                <li>Para responder a tus consultas y solicitudes</li>
                <li>Para mejorar nuestro sitio web y servicios basándonos en la información y feedback que recibimos de ti</li>
                <li>Para personalizar tu experiencia y ofrecerte contenido relevante</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">4. Cookies y tecnologías de seguimiento</h2>
              <p className="mb-4">
                Utilizamos cookies y tecnologías similares para rastrear la actividad en nuestro sitio web y almacenar cierta información. Las cookies son archivos con una pequeña cantidad de datos que pueden incluir un identificador único anónimo.
              </p>
              <p className="mb-4">
                Puedes instruir a tu navegador para que rechace todas las cookies o para que te avise cuando se envía una cookie. Sin embargo, si no aceptas cookies, es posible que no puedas utilizar algunas partes de nuestro sitio web.
              </p>
              <p>
                Utilizamos cookies para los siguientes fines:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mantener tu sesión cuando estás conectado</li>
                <li>Entender cómo interactúas con nuestro sitio web</li>
                <li>Mejorar tu experiencia de usuario</li>
                <li>Analizar el rendimiento de nuestro sitio web</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">5. Servicios de terceros</h2>
              <p className="mb-4">
                Utilizamos servicios de terceros para ayudarnos a operar nuestro sitio web y gestionar nuestra lista de correo. Estos servicios pueden recopilar información sobre ti cuando interactúas con nuestro sitio web o nuestros correos electrónicos.
              </p>
              <p className="mb-4">
                Específicamente, utilizamos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Beehiiv para gestionar nuestra lista de correo y enviar comunicaciones</li>
                <li>Google Analytics para analizar el tráfico del sitio web</li>
                <li>Stripe para procesar pagos (cuando corresponda)</li>
              </ul>
              <p>
                Estos servicios tienen sus propias políticas de privacidad que rigen cómo utilizan tu información.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">6. Tus derechos</h2>
              <p className="mb-4">
                Si resides en la Unión Europea, tienes ciertos derechos de protección de datos. Nuestro objetivo es tomar medidas razonables para permitirte corregir, modificar, eliminar o limitar el uso de tu información personal.
              </p>
              <p className="mb-4">
                Tienes los siguientes derechos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>El derecho a acceder a la información que tenemos sobre ti</li>
                <li>El derecho a rectificar cualquier información inexacta que tengamos sobre ti</li>
                <li>El derecho a que se elimine tu información personal de nuestros sistemas</li>
                <li>El derecho a oponerte al procesamiento de tus datos personales</li>
                <li>El derecho a la portabilidad de tus datos</li>
                <li>El derecho a retirar tu consentimiento en cualquier momento</li>
              </ul>
              <p>
                Si deseas ejercer alguno de estos derechos, por favor contáctanos a través de nuestro formulario de contacto.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">7. Seguridad de la información</h2>
              <p className="mb-4">
                La seguridad de tu información personal es importante para nosotros, pero recuerda que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger tu información personal, no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">8. Cambios a esta política de privacidad</h2>
              <p className="mb-4">
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y, si los cambios son significativos, te enviaremos una notificación por correo electrónico.
              </p>
              <p>
                Te recomendamos que revises esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">9. Contacto</h2>
              <p className="mb-4">
                Si tienes alguna pregunta sobre esta Política de Privacidad, puedes contactarnos:
              </p>
              <ul className="list-disc pl-6">
                <li>Por correo electrónico: info@arquitectosia.com</li>
              </ul>
            </section>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#C9A880] to-[#A78355] text-black rounded-full font-medium transition-transform hover:scale-105"
            >
              Volver a la página principal
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-[#070707] border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Adria Estevez. Todos los derechos reservados.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link href="/privacy" className="text-[#C9A880] hover:text-[#D9B890] text-sm">
              Política de Privacidad
            </Link>
            <Link href="/terms" className="text-[#C9A880] hover:text-[#D9B890] text-sm">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
