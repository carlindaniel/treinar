// =========================================================
// Configuração da conexão com o Supabase.
// Substitua os valores abaixo pelos dados do SEU projeto:
// Supabase > Project Settings > API
// =========================================================
const SUPABASE_URL = "https://ixrwnrwdsasuerjwidgj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cnducndkc2FzdWVyandpZGdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYzMjM3NjEsImV4cCI6MjEwMTg5OTc2MX0.JTdoiZfOa6wK-CfjPLMMRyY0Bzsas1kkhmQ8KVRftSs";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
