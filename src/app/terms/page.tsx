"use client";

import Link from "next/link";
import React from "react";

import { Logo } from "@/components/Logo";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0a0a] text-white">
      {/* Barra de navegación superior */}
      <header className="w-full bg-[#070707] backdrop-blur-md border-b border-white/10 py-5 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-start">
          <Logo width={40} height={40} className="h-10 w-auto group-hover:scale-105 transition-transform" />
          <a href="/" className="ml-2 group">
            <span className="text-white text-xl md:text-2xl font-semibold group-hover:text-white/90 transition-colors">
              Arquitectos IA <span className="text-[#C9A880] group-hover:text-[#D9B890] transition-colors">Community</span>
            </span>
          </a>
        </div>
      </header>

      <main className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Términos y Condiciones</span>
          </h1>

          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">1. Introducción</h2>
              <p className="mb-4">
                Estos Términos y Condiciones ("Términos") rigen tu acceso y uso del sitio web de Arquitectos IA Community, accesible en arquitectosia.com ("Sitio"), así como cualquier contenido, funcionalidad y servicios ofrecidos en o a través del Sitio.
              </p>
              <p className="mb-4">
                Al acceder o utilizar nuestro Sitio, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de estos Términos, no tendrás derecho a acceder al Sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">2. Elegibilidad</h2>
              <p className="mb-4">
                Para utilizar nuestros servicios, debes tener al menos 18 años de edad o la mayoría de edad legal en tu jurisdicción, lo que sea mayor. Al utilizar nuestro Sitio, declaras y garantizas que tienes la capacidad legal para celebrar un contrato vinculante con nosotros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">3. Registro y Cuentas de Usuario</h2>
              <p className="mb-4">
                Para acceder a ciertas funciones del Sitio, es posible que debas registrarte y crear una cuenta. Al hacerlo, aceptas proporcionar información precisa, actual y completa, y mantenerla actualizada.
              </p>
              <p className="mb-4">
                Eres responsable de mantener la confidencialidad de tu contraseña y de todas las actividades que ocurran bajo tu cuenta. Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta o cualquier otra violación de seguridad.
              </p>
              <p>
                Nos reservamos el derecho de cerrar tu cuenta en cualquier momento y por cualquier motivo, incluyendo, pero no limitado a, la violación de estos Términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">4. Membresía y Pagos</h2>
              <p className="mb-4">
                Arquitectos IA Community ofrece diferentes niveles de membresía, incluyendo una opción de lista de espera gratuita y membresías de pago con diferentes beneficios.
              </p>
              <p className="mb-4">
                Para las membresías de pago:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Los precios se muestran en euros (€) e incluyen los impuestos aplicables.</li>
                <li>Los pagos se procesan a través de Stripe, un procesador de pagos de terceros.</li>
                <li>Las membresías se renuevan automáticamente al final de cada período de suscripción, a menos que canceles antes de la fecha de renovación.</li>
                <li>Puedes cancelar tu suscripción en cualquier momento desde tu cuenta.</li>
              </ul>
              <p className="mb-4">
                Para los miembros fundadores, garantizamos que mantendrás tu precio especial mientras tu suscripción permanezca activa, incluso si los precios aumentan para nuevos miembros en el futuro.
              </p>
              <p>
                Nos reservamos el derecho de modificar nuestros precios en cualquier momento, pero te notificaremos con antelación sobre cualquier cambio que afecte a tu suscripción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">5. Propiedad Intelectual</h2>
              <p className="mb-4">
                El Sitio y todo su contenido, características y funcionalidades (incluyendo, pero no limitado a, toda la información, software, texto, imágenes, marcas, logotipos, diseños y código) son propiedad de Arquitectos IA Community o de nuestros licenciantes y están protegidos por leyes de propiedad intelectual.
              </p>
              <p className="mb-4">
                No puedes reproducir, distribuir, modificar, crear obras derivadas, exhibir públicamente, ejecutar públicamente, republicar, descargar, almacenar o transmitir cualquier material de nuestro Sitio, excepto:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tu computadora puede almacenar temporalmente copias de dichos materiales en la memoria RAM incidental a tu acceso y visualización de esos materiales.</li>
                <li>Puedes almacenar archivos que son automáticamente almacenados en caché por tu navegador web para mejorar la visualización.</li>
                <li>Puedes imprimir o descargar una copia de un número razonable de páginas del Sitio para tu uso personal y no comercial y no para su posterior reproducción, publicación o distribución.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">6. Contenido del Usuario</h2>
              <p className="mb-4">
                Nuestro Sitio puede permitirte publicar, enlazar, almacenar, compartir y poner a disposición cierta información, texto, gráficos, videos u otro material ("Contenido del Usuario").
              </p>
              <p className="mb-4">
                Al proporcionar Contenido del Usuario, nos otorgas una licencia mundial, no exclusiva, libre de regalías, sublicenciable y transferible para usar, reproducir, modificar, adaptar, publicar, traducir, crear obras derivadas, distribuir y mostrar dicho Contenido del Usuario en cualquier medio o método de distribución.
              </p>
              <p className="mb-4">
                Declaras y garantizas que:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Eres el creador y propietario del Contenido del Usuario o tienes los derechos necesarios para otorgarnos los derechos descritos en estos Términos.</li>
                <li>Tu Contenido del Usuario no infringe los derechos de privacidad, derechos de publicidad, derechos de autor, derechos contractuales o cualquier otro derecho de cualquier persona.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">7. Conducta Prohibida</h2>
              <p className="mb-4">
                Al utilizar nuestro Sitio, aceptas no:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar el Sitio de cualquier manera que pueda deshabilitar, sobrecargar, dañar o perjudicar el Sitio o interferir con el uso del Sitio por parte de cualquier otra parte.</li>
                <li>Utilizar cualquier robot, spider u otro dispositivo automático, proceso o medio para acceder al Sitio para cualquier propósito, incluyendo el monitoreo o copia de cualquier material en el Sitio.</li>
                <li>Utilizar cualquier dispositivo, software o rutina que interfiera con el funcionamiento adecuado del Sitio.</li>
                <li>Introducir virus, troyanos, gusanos, bombas lógicas u otro material malicioso o tecnológicamente dañino.</li>
                <li>Intentar obtener acceso no autorizado, interferir, dañar o interrumpir cualquier parte del Sitio, el servidor en el que se almacena el Sitio o cualquier servidor, computadora o base de datos conectada al Sitio.</li>
                <li>Atacar el Sitio a través de un ataque de denegación de servicio o un ataque distribuido de denegación de servicio.</li>
                <li>Publicar o transmitir cualquier contenido que sea ilegal, fraudulento, amenazante, abusivo, difamatorio, obsceno o de otra manera objetable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">8. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                En ningún caso Arquitectos IA Community, sus directores, empleados, socios, agentes, proveedores o afiliados serán responsables por cualquier daño indirecto, incidental, especial, consecuente o punitivo, incluyendo sin limitación, pérdida de beneficios, datos, uso, buena voluntad u otras pérdidas intangibles, resultantes de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tu acceso o uso o incapacidad para acceder o usar el Sitio.</li>
                <li>Cualquier conducta o contenido de cualquier tercero en el Sitio.</li>
                <li>Cualquier contenido obtenido del Sitio.</li>
                <li>Acceso no autorizado, uso o alteración de tus transmisiones o contenido.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">9. Indemnización</h2>
              <p>
                Aceptas defender, indemnizar y mantener indemne a Arquitectos IA Community, sus afiliados, licenciantes y proveedores de servicios, y sus respectivos funcionarios, directores, empleados, contratistas, agentes, licenciantes, proveedores, sucesores y cesionarios de y contra cualquier reclamación, responsabilidad, daño, juicio, premio, pérdida, costo, gasto o tarifa (incluyendo honorarios razonables de abogados) que surjan de o estén relacionados con tu violación de estos Términos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">10. Cambios a los Términos</h2>
              <p className="mb-4">
                Podemos revisar y actualizar estos Términos de vez en cuando a nuestra sola discreción. Todos los cambios son efectivos inmediatamente cuando los publicamos.
              </p>
              <p>
                Tu uso continuado del Sitio después de la publicación de los Términos revisados significa que aceptas y consientes a los cambios. Se espera que revises esta página periódicamente para estar al tanto de cualquier cambio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">11. Ley Aplicable</h2>
              <p>
                Estos Términos se regirán e interpretarán de acuerdo con las leyes de España, sin dar efecto a ningún principio de conflictos de leyes. Cualquier acción legal o procedimiento que surja de estos Términos se llevará exclusivamente en los tribunales ubicados en España.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#C9A880]">12. Contacto</h2>
              <p className="mb-4">
                Si tienes alguna pregunta sobre estos Términos, puedes contactarnos:
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
            © {new Date().getFullYear()} Arquitectos IA Community. Todos los derechos reservados.
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
