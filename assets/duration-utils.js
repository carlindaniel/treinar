// Conversão entre segundos (armazenado no banco) e o formato
// mm:ss / h:mm:ss usado nos formulários e na exibição da carga horária.

function parseDuracaoParaSegundos(valor) {
  if (valor === null || valor === undefined) return 0;
  const str = String(valor).trim();
  if (!str) return 0;

  if (/^\d+$/.test(str)) {
    return Number(str) * 60; // número puro (ex: "12") = 12 minutos
  }

  const partes = str.split(":").map(p => p.trim());
  if (partes.some(p => p === "" || isNaN(Number(p)))) return 0;
  const numeros = partes.map(Number);

  if (numeros.length === 2) return numeros[0] * 60 + numeros[1];
  if (numeros.length === 3) return numeros[0] * 3600 + numeros[1] * 60 + numeros[2];
  return 0;
}

function segundosParaMMSS(segundos) {
  segundos = Math.max(0, Math.round(Number(segundos) || 0));
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  const s = segundos % 60;
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatarCargaHoraria(segundos) {
  segundos = Math.max(0, Math.round(Number(segundos) || 0));
  const h = Math.floor(segundos / 3600);
  const m = Math.floor((segundos % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}min`;
  if (h > 0) return `${h}h`;
  if (m > 0) return `${m}min`;
  return segundos > 0 ? `${segundos}s` : "0min";
}
