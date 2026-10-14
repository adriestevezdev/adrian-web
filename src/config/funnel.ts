// Configuración central de la lista de espera: textos que cambian con el negocio.
// Las plazas se abren por convocatorias que se envían desde el panel /embudo.

export const funnel = {
  brand: "Arquitectos IA",
  memberLoginUrl: "https://www.skool.com/arquitectos-ia",
  youtubeUrl: "https://youtube.com/@adriaestevez",

  // WhatsApp solo para dudas
  whatsappNumber: "34623955612",
  whatsappMessage: "Hola Adri, tengo una duda sobre Arquitectos IA.",

  studentsCount: 400,
  youtubeSubscribers: "11.000",

  // Vídeo del hero (en /public). Se reproduce con sonido al pulsar play.
  heroVideo: "/hero-video.mp4",
  heroPoster: "/hero-poster.jpg",

  // Cursos publicados en el aula (Skool), agrupados por fases. Mantener al día.
  phases: [
    {
      name: "Planificar",
      summary: "Aprende a trabajar con IA y convierte tu idea en un plan que los agentes puedan construir",
      courses: [
        {
          title: "Empieza Aquí",
          description: "Presentación y fundamentos básicos para empezar a desarrollar con inteligencia artificial.",
        },
        {
          title: "Vibe Planning",
          description: "Herramientas para planificar tu proyecto antes de escribir una línea: el paso que más tiempo ahorra.",
        },
        {
          title: "Vibe Design",
          description: "Diseña la interfaz de tu producto con IA sin ser diseñador.",
        },
      ],
    },
    {
      name: "Construir",
      summary: "Construye tu SaaS, tus agentes y tus herramientas con IA, aunque no seas técnico",
      courses: [
        {
          title: "Vibe Coding",
          description: "Crea proyectos, agentes de IA y SaaS sin necesitar un gran conocimiento técnico.",
        },
        {
          title: "Claude Code Mastery",
          description: "Saca todo el partido a Claude Code para construir cualquier cosa.",
        },
        {
          title: "Agentes IA",
          description: "Crea tus propios agentes de IA con los mejores métodos, sin conocimiento técnico.",
        },
      ],
    },
    {
      name: "Producción",
      summary: "Lleva tu producto a internet y multiplica tu productividad como desarrollador con IA",
      courses: [
        {
          title: "AI Developer Mastery",
          description: "Todo lo que necesitas para evolucionar y multiplicar tu productividad desarrollando con IA.",
        },
        {
          title: "Docker con IA",
          description: "Docker, una de las herramientas más completas para desarrollar y desplegar con IA.",
        },
      ],
    },
  ],
} as const;

export const courseCount = funnel.phases.reduce((total, phase) => total + phase.courses.length, 0);

export function getSiteUrl() {
  return (process.env.SITE_URL || "http://localhost:3000").replace(/\/$/, "");
}
