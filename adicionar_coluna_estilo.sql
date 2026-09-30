-- Execute no SQL Editor do Supabase.
-- Guarda a personalização visual de cada aula, ex: {"bg":"#6c5ce7","fg":"#ffffff"}
alter table public.aulas
  add column if not exists estilo jsonb not null default '{}'::jsonb;
