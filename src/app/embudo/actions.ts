"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { isValidEmail, normalizeEmail, setLeadConverted } from "@/lib/leads";
import { deleteBroadcast, getBroadcast, saveBroadcast, sendBroadcast, sendBroadcastTest } from "@/lib/mailing";

function backTo(id: number | null, message: string): never {
  const params = new URLSearchParams({ msg: message });
  if (id) params.set("c", String(id));
  redirect(`/embudo?${params.toString()}#emails`);
}

function readId(formData: FormData) {
  const id = Number(formData.get("id"));
  return Number.isInteger(id) && id > 0 ? id : null;
}

export async function toggleConverted(formData: FormData) {
  const id = readId(formData);
  if (!id) return;
  await setLeadConverted(id, formData.get("converted") === "true");
  revalidatePath("/embudo");
}

export async function saveBroadcastAction(formData: FormData) {
  const id = readId(formData);
  const subject = String(formData.get("subject") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  if (!subject || !body) backTo(id, "Pon asunto y texto antes de guardar.");

  const broadcast = await saveBroadcast(id, subject, body);
  if (!broadcast) backTo(id, "Ese email ya se envió y no se puede editar.");
  backTo(broadcast.id, "Borrador guardado.");
}

export async function sendTestAction(formData: FormData) {
  const id = readId(formData);
  const broadcast = id ? await getBroadcast(id) : null;
  if (!broadcast) backTo(id, "Guarda el borrador antes de enviar la prueba.");

  const to = normalizeEmail(String(formData.get("testEmail") ?? ""));
  if (!isValidEmail(to)) backTo(id, "Escribe un email válido para la prueba.");

  const result = await sendBroadcastTest(broadcast, to);
  backTo(id, result.error ? `Error en la prueba: ${result.error}` : `Prueba enviada a ${to}.`);
}

export async function sendBroadcastAction(formData: FormData) {
  const id = readId(formData);
  const broadcast = id ? await getBroadcast(id) : null;
  if (!broadcast) backTo(id, "No encuentro ese email.");
  if (formData.get("confirm") !== "on") backTo(id, "Marca la casilla de confirmación para enviarlo a toda la lista.");

  const result = await sendBroadcast(broadcast);
  if ("busy" in result) backTo(id, "Ya se está enviando. Espera un momento y recarga.");
  revalidatePath("/embudo");
  backTo(id, `Enviado a ${result.sent} personas${result.failed ? `, ${result.failed} fallidos (puedes reintentar)` : ""}.`);
}

export async function deleteBroadcastAction(formData: FormData) {
  const id = readId(formData);
  if (id) await deleteBroadcast(id);
  backTo(null, "Borrador eliminado.");
}
