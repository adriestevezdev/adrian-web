import { Check, Play } from "lucide-react";

// Ilustración del aula hecha en código: inventada, con la estética de los cursos (negro y dorado)
const THUMBNAILS = [
  { label: "Vibe Planning", lines: ["VIBE", "PLANNING"], progress: 100 },
  { label: "Vibe Coding", lines: ["VIBE", "CODING"], progress: 64 },
  { label: "Agentes IA", lines: ["AGENTES", "IA"], progress: 18 },
];

const PHASES = [
  { name: "Planificar", state: "done" },
  { name: "Construir", state: "current" },
  { name: "Producción", state: "next" },
] as const;

const AGENT_LOG = [
  { text: "backend: API y base de datos", done: true },
  { text: "frontend: panel de usuario", done: true },
  { text: "tests: 24/24 en verde", done: true },
  { text: "desplegando en producción…", done: false },
];

// Actividad semanal (lecciones y commits) para la gráfica de área
const ACTIVITY = [12, 18, 15, 26, 22, 34, 41];

function activityPath(values: number[], width: number, height: number) {
  const max = Math.max(...values);
  const step = width / (values.length - 1);
  const points = values.map((value, index) => [index * step, height - (value / max) * (height - 6) - 3]);
  const line = points.reduce((path, [x, y], index) => {
    if (index === 0) return `M${x},${y}`;
    const [prevX, prevY] = points[index - 1];
    const midX = (prevX + x) / 2;
    return `${path} C${midX},${prevY} ${midX},${y} ${x},${y}`;
  }, "");
  return { line, area: `${line} L${width},${height} L0,${height} Z`, last: points[points.length - 1] };
}

export function CourseMockup() {
  const chart = activityPath(ACTIVITY, 220, 64);

  return (
    <div className="relative" role="img" aria-label="Ilustración del aula de Arquitectos IA con cursos, progreso y agentes trabajando">
      <div className="absolute -inset-6 rounded-[2rem] bg-[#C9A880]/10 blur-3xl"></div>

      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0c0b] shadow-2xl shadow-black/70" aria-hidden="true">
        {/* Barra de la ventana */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.03] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
          <span className="h-2.5 w-2.5 rounded-full bg-white/15"></span>
          <span className="ml-3 rounded-md bg-white/5 px-3 py-0.5 font-mono text-[10px] text-white/40">arquitectos-ia.com/aula</span>
        </div>

        <div className="grid grid-cols-[52px_1fr]">
          {/* Barra lateral */}
          <div className="flex flex-col items-center gap-4 border-r border-white/5 py-4">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#E8C98F] text-sm font-black text-black">A</span>
            {[0, 1, 2, 3].map((item) => (
              <span key={item} className={`h-1.5 w-5 rounded-full ${item === 0 ? "bg-[#E8C98F]/80" : "bg-white/10"}`}></span>
            ))}
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            {/* Fases */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Tu camino</span>
                <span className="font-mono text-[11px] text-[#E8C98F]">58%</span>
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {PHASES.map((phase) => (
                  <div key={phase.name}>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r from-[#C9A880] to-[#E8C98F] ${
                          phase.state === "done" ? "w-full" : phase.state === "current" ? "w-3/5" : "w-0"
                        }`}
                      ></div>
                    </div>
                    <span className={`mt-1 block text-[10px] ${phase.state === "next" ? "text-white/30" : "text-white/60"}`}>{phase.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lección en curso + actividad */}
            <div className="grid gap-3 sm:grid-cols-[1.15fr_1fr]">
              <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#1c1813] to-[#0b0a09] p-3">
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">Continuar</span>
                <p className="mt-1 text-lg font-black uppercase leading-tight tracking-tight text-[#E8C98F] [text-shadow:0_2px_0_rgba(0,0,0,0.8)]">CLAUDE CODE</p>
                <p className="text-[11px] text-white/60">Lección 4 · Agentes en paralelo</p>
                <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg">
                  <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                </span>
                <div className="mt-3 h-1 w-2/3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/5 rounded-full bg-[#E8C98F]"></div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">Esta semana</span>
                  <span className="rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[10px] text-emerald-400">+32%</span>
                </div>
                <svg viewBox="0 0 220 64" className="mt-2 h-16 w-full" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="mockup-area" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8C98F" stopOpacity="0.45" />
                      <stop offset="100%" stopColor="#E8C98F" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={chart.area} fill="url(#mockup-area)" />
                  <path d={chart.line} fill="none" stroke="#E8C98F" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                  <circle cx={chart.last[0] - 3} cy={chart.last[1]} r="3" fill="#E8C98F" />
                </svg>
                <div className="mt-1 flex justify-between font-mono text-[9px] text-white/30">
                  {["L", "M", "X", "J", "V", "S", "D"].map((day) => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Cursos */}
            <div className="grid grid-cols-3 gap-2.5">
              {THUMBNAILS.map((course) => (
                <div key={course.label} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.02]">
                  <div className="flex aspect-[16/10] flex-col items-center justify-center bg-gradient-to-b from-[#16130f] to-[#0a0908] px-1 text-center font-black uppercase leading-[1.05] tracking-tight text-[#E8C98F] [text-shadow:0_2px_0_rgba(0,0,0,0.8)]">
                    {course.lines.map((line) => (
                      <span key={line} className="text-[11px] sm:text-sm">
                        {line}
                      </span>
                    ))}
                  </div>
                  <div className="p-2">
                    <p className="truncate text-[10px] text-white/70">{course.label}</p>
                    <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-emerald-500" style={{ width: `${course.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Terminal flotante con agentes trabajando */}
      <div
        className="relative -mt-10 ml-auto mr-2 w-[78%] rounded-lg border border-white/10 bg-black/90 p-3 font-mono text-[10px] shadow-2xl shadow-black/80 backdrop-blur sm:-mt-7 sm:mr-[-1.5rem] sm:w-[62%] sm:text-[11px]"
        aria-hidden="true"
      >
        <div className="mb-2 flex items-center gap-1.5 text-white/40">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          equipo de agentes
        </div>
        <ul className="space-y-1">
          {AGENT_LOG.map((entry) => (
            <li key={entry.text} className={`flex items-center gap-2 ${entry.done ? "text-white/70" : "text-[#E8C98F]"}`}>
              {entry.done ? <Check className="h-3 w-3 text-emerald-400" /> : <span className="inline-block h-3 w-3 animate-pulse rounded-full border border-[#E8C98F]"></span>}
              {entry.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
