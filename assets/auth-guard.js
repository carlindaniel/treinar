// Protege páginas que exigem login e centraliza logout/exibição do usuário.

async function requireAuth() {
  const { data: { session } } = await supabaseClient.auth.getSession();
  if (!session) {
    window.location.href = "index.html";
    return null;
  }
  return session;
}

async function initTopbarUser(elId) {
  const { data: { session } } = await supabaseClient.auth.getSession();
  const el = document.getElementById(elId);
  if (el && session) el.textContent = session.user.email;
}

async function logout() {
  await supabaseClient.auth.signOut();
  window.location.href = "index.html";
}

supabaseClient.auth.onAuthStateChange((event) => {
  if (event === "SIGNED_OUT") {
    window.location.href = "index.html";
  }
});
