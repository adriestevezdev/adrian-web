import { listSubscribedLeads } from "@/lib/leads";

export const dynamic = "force-dynamic";

const COLUMNS = ["email", "fecha_alta", "estado", "utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

function csvCell(value: string | null) {
  const text = value ?? "";
  return /[",\n;]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

// Descarga la lista (sin las bajas) en CSV para importarla en otra herramienta. Protegido por el middleware de /embudo.
export async function GET() {
  const leads = await listSubscribedLeads();
  const rows = leads.map((lead) =>
    [
      lead.email,
      new Date(lead.created_at).toISOString(),
      lead.converted_at ? "cliente" : "lista",
      lead.utm_source,
      lead.utm_medium,
      lead.utm_campaign,
      lead.utm_content,
    ]
      .map(csvCell)
      .join(","),
  );

  // BOM para que Excel abra bien las tildes
  const csv = `﻿${[COLUMNS.join(","), ...rows].join("\n")}\n`;
  const date = new Date().toISOString().slice(0, 10);

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="lista-arquitectos-ia-${date}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
