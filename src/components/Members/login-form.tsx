"use client";

import { useState, type FormEvent } from "react";

// De momento el formulario no inicia sesión: solo muestra un aviso
export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setNotice("El acceso de miembros estará disponible muy pronto.");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
      <label className="flex flex-col gap-1.5 text-sm text-white/70">
        Email
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="h-12 rounded-lg bg-black/40 border border-white/20 px-4 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C9A880]"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm text-white/70">
        Contraseña
        <input
          type="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="h-12 rounded-lg bg-black/40 border border-white/20 px-4 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C9A880]"
        />
      </label>
      <button
        type="submit"
        className="mt-2 h-12 rounded-lg bg-[#E8C98F] px-6 font-semibold text-black transition-colors hover:bg-[#F2D9A8]"
      >
        Entrar
      </button>
      {notice && (
        <p className="rounded-lg border border-[#C9A880]/40 bg-[#C9A880]/10 px-4 py-3 text-sm text-white/80" role="status">
          {notice}
        </p>
      )}
    </form>
  );
}
