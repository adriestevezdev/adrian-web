import type { Metadata } from "next";

import {
  deleteBroadcastAction,
  saveBroadcastAction,
  sendBroadcastAction,
  sendTestAction,
  toggleConverted,
} from "@/app/embudo/actions";
import { renderEmail, textToParagraphs } from "@/emails/render";
import { countWaitlist, getClicksBySource, getSignupsBySource, listLeads } from "@/lib/leads";
import { getBroadcast, listBroadcasts } from "@/lib/mailing";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Lista de espera",
  robots: { index: false },
};

const dateFormatter = new Intl.DateTimeFormat("es-ES", {
  dateStyle: "short",
  timeStyle: "short",
  timeZone: "Europe/Madrid",
});

const DEFAULT_BODY = `Hola,

[Escribe aquí tu email: una idea, un vídeo nuevo, un caso de un alumno o el anuncio de que abres plazas]

[Texto del enlace](https://enlace)

Un abrazo,
Adrià`;

const inputClass = "w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-white focus:border-[#C9A880] focus:outline-none";
const buttonClass = "rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/5";

function originOf(lead: { utm_source: string | null; utm_campaign: string | null }) {
  return [lead.utm_source, lead.utm_campaign].filter(Boolean).join(" / ") || "directo";
}

interface EmbudoPageProps {
  searchParams: Promise<{ c?: string; msg?: string }>;
}

export default async function EmbudoPage({ searchParams }: EmbudoPageProps) {
  const { c, msg } = await searchParams;
  const selectedId = Number(c);

  const [leads, waitlist, signupsBySource, clicksBySource, broadcasts, selected] = await Promise.all([
    listLeads(),
    countWaitlist(),
    getSignupsBySource(),
    getClicksBySource(),
    listBroadcasts(),
    Number.isInteger(selectedId) && selectedId > 0 ? getBroadcast(selectedId) : Promise.resolve(null),
  ]);

  const unsubscribed = leads.filter((lead) => lead.unsubscribed_at).length;
  const converted = leads.filter((lead) => lead.converted_at).length;
  const lastWeek = leads.filter((lead) => Date.now() - new Date(lead.created_at).getTime() < 7 * 24 * 60 * 60 * 1000).length;
  const selectedStats = selected ? broadcasts.find((broadcast) => broadcast.id === selected.id) : null;
  const preview = selected
    ? renderEmail({ subject: selected.subject, paragraphs: textToParagraphs(selected.body) }, "#").html
    : null;

  const stats = [
    { label: "En la lista (reciben tus emails)", value: waitlist },
    { label: "Nuevos últimos 7 días", value: lastWeek },
    { label: "Clientes", value: converted },
    { label: "Bajas", value: unsubscribed },
  ];

  return (
    <main className="min-h-screen bg-[#080604] px-4 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">Lista de espera</h1>

        <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-white/60">{stat.label}</div>
              <div className="mt-1 text-2xl font-semibold">{stat.value}</div>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold">Altas por origen (utm_source)</h2>
            <div className="flex flex-wrap gap-2">
              {signupsBySource.length === 0 && <span className="text-white/50">Todavía no hay altas.</span>}
              {signupsBySource.map((row) => (
                <span key={row.source} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                  {row.source}: <strong>{row.leads}</strong>
                </span>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold">Clics a WhatsApp (dudas)</h2>
            <div className="flex flex-wrap gap-2">
              {clicksBySource.length === 0 && <span className="text-white/50">Todavía no hay clics.</span>}
              {clicksBySource.map((row) => (
                <span key={row.source} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm">
                  {row.source}: <strong>{row.clicks}</strong>
                </span>
              ))}
            </div>
          </div>
        </div>

        <section id="emails" className="mb-12 scroll-mt-6">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold">Emails a la lista</h2>
            <a href="/embudo?c=nueva#emails" className={buttonClass}>
              + Nuevo email
            </a>
          </div>

          {msg && <p className="mb-4 rounded-lg border border-[#C9A880]/40 bg-[#C9A880]/10 px-4 py-3 text-sm">{msg}</p>}

          {broadcasts.length > 0 && (
            <ul className="mb-6 divide-y divide-white/10 rounded-xl border border-white/10">
              {broadcasts.map((broadcast) => (
                <li key={broadcast.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                  <a href={`/embudo?c=${broadcast.id}#emails`} className="font-medium hover:underline">
                    {broadcast.subject}
                  </a>
                  <span className="text-sm text-white/60">
                    {broadcast.sent_at
                      ? `Enviado ${dateFormatter.format(new Date(broadcast.sent_at))} · ${broadcast.delivered} enviados${broadcast.failed ? ` · ${broadcast.failed} fallidos` : ""}`
                      : "Borrador"}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {(c === "nueva" || selected) && (
            <div className="grid gap-6 lg:grid-cols-2">
              <form action={saveBroadcastAction} className="space-y-4 rounded-xl border border-white/10 bg-white/[0.03] p-5">
                {selected && <input type="hidden" name="id" value={selected.id} />}
                <label className="block">
                  <span className="mb-1 block text-sm text-white/70">Asunto</span>
                  <input
                    name="subject"
                    defaultValue={selected?.subject ?? ""}
                    placeholder="Asunto del email"
                    className={inputClass}
                    disabled={Boolean(selected?.sent_at)}
                  />
                </label>
                <label className="block">
                  <span className="mb-1 block text-sm text-white/70">Texto</span>
                  <textarea
                    name="body"
                    rows={16}
                    defaultValue={selected?.body ?? DEFAULT_BODY}
                    className={`${inputClass} font-mono text-sm`}
                    disabled={Boolean(selected?.sent_at)}
                  />
                  <span className="mt-1 block text-xs text-white/50">
                    Párrafos separados por una línea en blanco. **negrita** y [texto del enlace](https://…). El enlace de baja se
                    añade solo.
                  </span>
                </label>
                {!selected?.sent_at && (
                  <button type="submit" className="rounded-lg bg-[#E8C98F] px-4 py-2 text-sm font-semibold text-black">
                    Guardar borrador
                  </button>
                )}
              </form>

              <div className="space-y-4">
                {preview && (
                  <iframe title="Vista previa" srcDoc={preview} className="h-80 w-full rounded-xl border border-white/10 bg-white" />
                )}

                {selected && (
                  <form action={sendTestAction} className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row">
                    <input type="hidden" name="id" value={selected.id} />
                    <input
                      name="testEmail"
                      type="email"
                      placeholder="tu@email.com"
                      defaultValue={process.env.EMAIL_REPLY_TO ?? ""}
                      className={inputClass}
                    />
                    <button type="submit" className={`${buttonClass} whitespace-nowrap`}>
                      Enviarme una prueba
                    </button>
                  </form>
                )}

                {selected && (
                  <form action={sendBroadcastAction} className="space-y-3 rounded-xl border border-[#C9A880]/40 bg-[#C9A880]/5 p-5">
                    <input type="hidden" name="id" value={selected.id} />
                    <label className="flex items-start gap-2 text-sm">
                      <input type="checkbox" name="confirm" className="mt-1 accent-[#C9A880]" />
                      <span>
                        {selected.sent_at
                          ? `Reenviar solo a quien falte o haya fallado (${selectedStats?.failed ?? 0} fallidos, nadie la recibe dos veces).`
                          : `Confirmo que quiero enviarlo a las ${waitlist} personas de la lista.`}
                      </span>
                    </label>
                    <button type="submit" className="rounded-lg bg-[#E8C98F] px-4 py-2 text-sm font-semibold text-black">
                      {selected.sent_at ? "Completar envío" : "Enviar a toda la lista"}
                    </button>
                  </form>
                )}

                {selected && !selected.sent_at && (
                  <form action={deleteBroadcastAction}>
                    <input type="hidden" name="id" value={selected.id} />
                    <button type="submit" className="text-sm text-red-400 hover:underline">
                      Eliminar borrador
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </section>

        <div className="mb-3 flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Personas ({leads.length})</h2>
          <a href="/embudo/exportar" className={buttonClass}>
            Exportar CSV
          </a>
        </div>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left text-white/60">
              <tr>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Alta</th>
                <th className="px-4 py-3 font-medium">Origen</th>
                <th className="px-4 py-3 font-medium">Emails</th>
                <th className="px-4 py-3 font-medium">WhatsApp</th>
                <th className="px-4 py-3 font-medium">Estado</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-t border-white/10">
                  <td className="px-4 py-3">
                    {lead.email}
                    {lead.unsubscribed_at && <span className="ml-2 text-red-400">baja</span>}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">{dateFormatter.format(new Date(lead.created_at))}</td>
                  <td className="px-4 py-3">{originOf(lead)}</td>
                  <td className="px-4 py-3">{lead.emails_sent}</td>
                  <td className="px-4 py-3">{lead.whatsapp_clicks || "—"}</td>
                  <td className="px-4 py-3">
                    <form action={toggleConverted}>
                      <input type="hidden" name="id" value={lead.id} />
                      <input type="hidden" name="converted" value={lead.converted_at ? "false" : "true"} />
                      <button
                        type="submit"
                        className={
                          lead.converted_at
                            ? "rounded-lg bg-[#C9A880] px-3 py-1 font-medium text-black"
                            : "rounded-lg border border-white/20 px-3 py-1 text-white/70 hover:text-white"
                        }
                      >
                        {lead.converted_at ? "Cliente ✓" : "Marcar cliente"}
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
              {leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-white/50">
                    Todavía no hay nadie en la lista.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-white/40">Quien está marcado como cliente o se ha dado de baja no recibe los emails a la lista.</p>
      </div>
    </main>
  );
}
