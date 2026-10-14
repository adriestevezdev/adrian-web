import { BookOpen, Brain, Compass, Gauge, Gift, KeyRound, Layers, Lock, Repeat, Rocket, Target, Users, Zap } from "lucide-react";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";

import { NewsletterAvatarCircles } from "@/components/Newsletter/newsletter-avatar-circles";
import { CourseMockup } from "@/components/Waitlist/course-mockup";
import { HeroVideo } from "@/components/Waitlist/hero-video";
import { WaitlistForm } from "@/components/Waitlist/waitlist-form";
import { courseCount, funnel } from "@/config/funnel";

const serif = Merriweather({ subsets: ["latin"], weight: ["700"], display: "swap" });

const STACK_LOGOS = [
  { name: "Claude", src: "/tecnologias/claude.webp" },
  { name: "Cursor", src: "/tecnologias/cursor.webp" },
  { name: "OpenAI", src: "/tecnologias/openai.webp" },
  { name: "React", src: "/tecnologias/react.webp" },
  { name: "Supabase", src: "/tecnologias/supabase.webp" },
  { name: "Stripe", src: "/tecnologias/stripe.webp" },
  { name: "Docker", src: "/tecnologias/docker.webp" },
  { name: "n8n", src: "/tecnologias/n8n.webp" },
];

const FAQS = [
  {
    question: "¿Necesito saber programar?",
    answer:
      "No hace falta ser desarrollador, pero sí tener ganas de meterte en lo técnico. La IA cubre la mayor parte del hueco. Si quieres ver si mi forma de explicar encaja contigo, échale un vistazo a mi canal de YouTube.",
  },
  {
    question: "¿Cuándo se abren las plazas?",
    answer:
      "Abro plazas de vez en cuando y solo durante unos días. Las personas de la lista de espera se enteran las primeras, por email.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Te lo cuento en el email de apertura. Es un pago único con acceso de por vida, no una suscripción: los cursos que vayan saliendo también son tuyos.",
  },
  {
    question: "¿Cuánto tiempo necesito?",
    answer:
      "Vas a tu ritmo. Lo que más tiempo lleva no es ver los cursos, sino construir mientras aprendes, que es justo la idea.",
  },
  {
    question: "¿Qué herramientas necesito?",
    answer:
      "Un ordenador (Mac, Windows o Linux) con conexión a internet y una herramienta de IA para programar, como Claude Code o Cursor. Hay opciones gratuitas y de pago, y te explico cómo configurarlas.",
  },
  {
    question: "¿Y si no es para mí?",
    answer: "Tienes 14 días de garantía. Si ves que no te encaja, te devuelvo el dinero.",
  },
  {
    question: "Tengo otra duda",
    answer: "Escríbeme por WhatsApp con el botón verde de abajo a la derecha y te contesto yo.",
  },
];

function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">{children}</h2>;
}

function FeatureCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">{icon}</span>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="mt-2 text-sm leading-relaxed text-white/60">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function WaitlistHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-3">
          <Image src="/logo_arquitectosIA.png" alt="" width={36} height={36} className="rounded-md" />
          <span className={`${serif.className} text-lg text-white sm:text-xl`}>{funnel.brand}</span>
        </a>
        <nav className="flex items-center gap-3 sm:gap-5">
          <a href="/wa?src=cabecera" target="_blank" rel="noopener noreferrer" className="hidden text-sm text-white/70 hover:text-white sm:inline">
            ¿Dudas?
          </a>
          <a
            href={funnel.memberLoginUrl}
            className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-sm font-medium text-white hover:bg-white/5"
          >
            <Lock className="h-4 w-4" />
            Acceso miembros
          </a>
        </nav>
      </div>
    </header>
  );
}

export function WaitlistHero() {
  return (
    <section id="registro" className="relative overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-[#C9A880]/10 blur-[140px]"></div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/60">El camino práctico para construir con IA</p>
          <h1 className={`${serif.className} mt-5 text-4xl leading-tight text-white md:text-5xl`}>
            De Idea a Producto,
            <br />
            Más Rápido de lo que Crees
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Aprende a construir productos reales con agentes de IA como Claude Code y Cursor. Sin teoría. Sin trucos de prompts.
            Desarrollo de producto de verdad: de la primera línea a producción.
          </p>
          <p className="mt-8 mb-3 text-sm font-medium text-white">Apúntate a la lista de espera de la próxima convocatoria</p>
          <WaitlistForm />
          <div className="mt-8 flex items-center gap-3">
            <NewsletterAvatarCircles numPeople={funnel.studentsCount} />
            <span className="text-sm text-white/60">Únete a la comunidad que ya construye con IA</span>
          </div>
        </div>
        <HeroVideo src={funnel.heroVideo} poster={funnel.heroPoster} />
      </div>
    </section>
  );
}

export function WaitlistOverview() {
  const items = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Contenido",
      text: `${courseCount} cursos prácticos que cubren todo el camino: planificar, construir y llevar tu producto a producción.`,
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "Nivel",
      text: "Desde quien nunca ha programado hasta developers con experiencia. Si te gusta cómo explico en YouTube, aquí te vas a sentir como en casa.",
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Formato",
      text: "Online y a tu ritmo, con la comunidad para resolver dudas. La IA cambia cada mes y los cursos también: entran herramientas y técnicas nuevas sin pagar más.",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      title: "Qué te llevas",
      text: `Todos los cursos, los que vayan saliendo y una comunidad de personas que construyen de verdad. Mucho del valor está en la gente que vas a conocer.`,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-md bg-white/10 px-3 py-1 text-sm text-white/80">Formación y comunidad</span>
        <span className="rounded-md bg-white/10 px-3 py-1 text-sm text-white/80">Online</span>
      </div>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">{funnel.brand}: formación y comunidad</h2>
      <p className="mt-6 max-w-3xl text-xl text-white/85">Una persona puede construir hoy lo que antes necesitaba un equipo. Aquí te enseño cómo.</p>
      <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
        Los agentes de IA como Claude Code y Cursor han cambiado las reglas: describes lo que quieres, la IA escribe el código y tú
        lanzas un producto real. Es el proceso que uso en mis propios proyectos y el que enseño en YouTube.
      </p>

      <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-2xl font-semibold text-white">Resumen</h3>
          <ul className="space-y-6">
            {items.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">{item.icon}</span>
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-white/60">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <CourseMockup />
      </div>
    </section>
  );
}

export function WaitlistCta() {
  return (
    <section className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-2xl bg-gradient-to-b from-[#C9A880]/10 to-transparent px-6 py-14 text-center">
        <SectionHeading>¿Listo para construir algo?</SectionHeading>
        <p className="mx-auto mt-4 mb-8 max-w-xl text-white/70">
          Apúntate a la lista de espera y te aviso en cuanto abra la próxima convocatoria.
        </p>
        <WaitlistForm align="center" />
      </div>
    </section>
  );
}

export function WaitlistGuide() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <SectionHeading>Quién te guía</SectionHeading>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Soy Adrià Estévez, desarrollador de software y emprendedor. He trabajado como desarrollador para empresas y he asesorado
            a startups en su estrategia e integración de IA.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            Llevo más de tres años dedicado a construir con IA: Vibe Coding, MCPs y agentes. En mi{" "}
            <a href={funnel.youtubeUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
              canal de YouTube
            </a>
            , con más de {funnel.youtubeSubscribers} suscriptores, enseño a hacer lo mismo. Esta formación es todo lo que he aprendido para pasar
            de una idea a un producto funcionando.
          </p>
        </div>
        <div className="relative mx-auto w-full max-w-md">
          {/* Halo dorado detrás de la cabeza; la foto ya viene recortada y fundida a negro por abajo */}
          <div className="absolute left-1/2 top-[4%] h-[42%] w-[46%] -translate-x-1/2 rounded-full bg-[#C9A880]/40 blur-[60px]"></div>
          <Image src="/adria-guia.webp" alt="Adrià Estévez" width={800} height={781} className="relative w-full" />
        </div>
      </div>

      <blockquote className="mx-auto mt-16 max-w-3xl border-y border-white/10 py-8 text-center text-xl italic leading-relaxed text-white/80">
        «Esto no es teoría: lo que enseño es lo que uso para construir mis propios proyectos. Aprendes de alguien que construye, no
        de alguien que solo enseña.»
      </blockquote>
    </section>
  );
}

export function WaitlistMethod() {
  return (
    <section className="mx-auto max-w-6xl space-y-6 px-4 py-12 sm:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard icon={<Zap className="h-5 w-5" />} title="Tú diriges, la IA construye">
          No necesitas ser un experto programando. Necesitas pensar con claridad, describir lo que quieres e iterar. La IA hace el
          trabajo pesado; tú llevas el volante.
        </FeatureCard>
        <FeatureCard icon={<Rocket className="h-5 w-5" />} title="Lanza un producto real">
          Nada de demos de juguete: construyes algo que puedes poner delante de usuarios reales y llevar a producción.
        </FeatureCard>
        <FeatureCard icon={<Compass className="h-5 w-5" />} title="Otra forma de construir">
          Desarrollar con IA tiene sus propios patrones y trampas. Te enseño lo que funciona para que te saltes los errores desde el
          primer día.
        </FeatureCard>
      </div>

      <div className="grid items-center gap-8 rounded-xl border border-white/10 bg-white/[0.02] p-6 md:grid-cols-2 md:p-8">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
              <Brain className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-semibold text-white">Las herramientas que mejor conoce la IA</h3>
          </div>
          <p className="mt-4 leading-relaxed text-white/60">
            Trabajamos con Claude Code, Cursor y un stack moderno (React, Supabase, Stripe, Docker). No es casualidad: los agentes de
            IA rinden mejor con las tecnologías que más han visto. Menos errores, builds más rápidos y una comunidad enorme cuando
            necesitas ayuda.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {STACK_LOGOS.map((logo) => (
            <div key={logo.name} className="flex aspect-square items-center justify-center rounded-lg bg-white/5 p-3" title={logo.name}>
              <Image src={logo.src} alt={logo.name} width={64} height={64} className="h-auto max-h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <FeatureCard icon={<Repeat className="h-5 w-5" />} title="Lanza, rompe, arregla, repite">
          La forma más rápida de aprender es construir algo real. Avanzamos rápido, rompemos cosas y las arreglamos con IA. Cada
          vuelta te hace mejor.
        </FeatureCard>
        <FeatureCard icon={<Target className="h-5 w-5" />} title="Piensa como constructor, no como programador">
          Programar a la antigua es escribir código. Construir con IA es describir lo que quieres y guiar el resultado. Otra
          habilidad, mucho más palanca.
        </FeatureCard>
      </div>
    </section>
  );
}

export function WaitlistAudience() {
  const profiles = [
    {
      title: "Quiero lanzar mi propio producto",
      text: "Tienes ideas: un proyecto paralelo o una startup. Te falta saber llevarlas del concepto a una app en internet.",
    },
    {
      title: "Quiero multiplicar mi velocidad",
      text: "Ya programas. Quieres usar agentes de IA para construir más rápido, no solo para autocompletar.",
    },
    {
      title: "Quiero construir, no solo hacer prompts",
      text: "Has probado Lovable y herramientas no-code. Ahora quieres algo real, con infraestructura de verdad detrás.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading>¿Para quién es?</SectionHeading>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {profiles.map((profile) => (
          <div key={profile.title} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6">
            <h3 className="text-lg font-semibold text-white">{profile.title}</h3>
            <p className="mt-3 text-white/60">{profile.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WaitlistCurriculum() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading>El camino del Arquitecto IA</SectionHeading>
      <p className="mt-3 text-white/60">Tres fases. Un producto en producción.</p>

      <div className="mt-12 space-y-14">
        {funnel.phases.map((phase, index) => (
          <div key={phase.name}>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.2em] text-[#E8C98F]">FASE {index + 1}</span>
              <span className="h-px flex-1 bg-white/10"></span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold text-white">{phase.name}</h3>
            <p className="mt-1 text-white/60">{phase.summary}</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {phase.courses.map((course) => (
                <div key={course.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-6">
                  <h4 className="font-semibold text-white">{course.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{course.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-10 text-white/60">Y los cursos que vayan saliendo, incluidos.</p>
    </section>
  );
}

export function WaitlistIncluded() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading>Qué incluye</SectionHeading>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <FeatureCard icon={<BookOpen className="h-5 w-5" />} title="Todos los cursos">
          Los {courseCount} cursos actuales y todos los que vayan saliendo. La IA cambia rápido y el contenido se actualiza con ella.
        </FeatureCard>
        <FeatureCard icon={<Users className="h-5 w-5" />} title="Comunidad privada">
          Una comunidad de personas que construyen y se ayudan entre ellas. Aquí se comparte lo que funciona y se resuelven dudas.
        </FeatureCard>
        <FeatureCard icon={<KeyRound className="h-5 w-5" />} title="Acceso de por vida">
          Un único pago, sin suscripción. Entras una vez y te quedas para siempre.
        </FeatureCard>
      </div>
    </section>
  );
}

export function WaitlistFaq() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <SectionHeading>Preguntas frecuentes</SectionHeading>
      <div className="mt-8 space-y-3">
        {FAQS.map((faq) => (
          <details key={faq.question} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-white">
              {faq.question}
              <span className="text-xl leading-none text-[#E8C98F] transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-white/65">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
