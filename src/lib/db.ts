import { Pool, type QueryResultRow } from "pg";

const SCHEMA = `
CREATE TABLE IF NOT EXISTS leads (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  token TEXT NOT NULL UNIQUE,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  utm_content TEXT,
  unsubscribed_at TIMESTAMPTZ,
  converted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS broadcasts (
  id SERIAL PRIMARY KEY,
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS email_log (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
  email_key TEXT NOT NULL,
  provider_id TEXT,
  error TEXT,
  sent_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (lead_id, email_key)
);

CREATE TABLE IF NOT EXISTS whatsapp_clicks (
  id SERIAL PRIMARY KEY,
  lead_id INTEGER REFERENCES leads(id) ON DELETE SET NULL,
  source TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
`;

// En desarrollo el hot reload re-evalúa el módulo: reutilizamos el pool entre recargas
const globalForDb = globalThis as unknown as {
  pgPool?: Pool;
  schemaReady?: Promise<void>;
};

function getPool() {
  if (!globalForDb.pgPool) {
    if (!process.env.DATABASE_URL) {
      throw new Error("Falta la variable de entorno DATABASE_URL");
    }
    globalForDb.pgPool = new Pool({ connectionString: process.env.DATABASE_URL, max: 5 });
  }
  return globalForDb.pgPool;
}

function ensureSchema() {
  if (!globalForDb.schemaReady) {
    globalForDb.schemaReady = getPool()
      .query(SCHEMA)
      .then(() => undefined)
      .catch((error) => {
        globalForDb.schemaReady = undefined;
        throw error;
      });
  }
  return globalForDb.schemaReady;
}

export async function query<T extends QueryResultRow>(text: string, params: unknown[] = []) {
  await ensureSchema();
  const result = await getPool().query<T>(text, params);
  return result.rows;
}

// Ejecuta fn solo si nadie más tiene el lock (evita dos envíos solapados del mismo email)
export async function withAdvisoryLock<T>(lockId: number, fn: () => Promise<T>) {
  await ensureSchema();
  const client = await getPool().connect();
  try {
    const { rows } = await client.query<{ locked: boolean }>("SELECT pg_try_advisory_lock($1) AS locked", [lockId]);
    if (!rows[0]?.locked) return null;
    try {
      return await fn();
    } finally {
      await client.query("SELECT pg_advisory_unlock($1)", [lockId]);
    }
  } finally {
    client.release();
  }
}
