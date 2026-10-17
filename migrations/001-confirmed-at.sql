-- Doble confirmación del alta (F4). La app también lo aplica sola en la primera consulta (src/lib/db.ts),
-- pero en producción se lanza antes del build: psql "$DATABASE_URL" -f migrations/001-confirmed-at.sql
-- Quienes ya estaban en la lista se dan por confirmados (se apuntaron con consentimiento).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
     WHERE table_schema = current_schema() AND table_name = 'leads' AND column_name = 'confirmed_at'
  ) THEN
    ALTER TABLE leads ADD COLUMN confirmed_at TIMESTAMPTZ;
    UPDATE leads SET confirmed_at = created_at;
  END IF;
END $$;
