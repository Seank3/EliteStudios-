"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const router = useRouter();

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    const r = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: pw }),
    });
    if (r.ok) {
      router.replace("/admin");
      router.refresh();
    } else {
      setErr("Invalid password");
      setBusy(false);
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-5 pt-20">
      <form onSubmit={login} className="w-full max-w-sm border border-white/10 bg-charcoal p-8">
        <Lock size={28} className="text-gold" />
        <h1 className="font-display text-3xl mt-4">Admin <span className="italic text-gold">login</span></h1>
        <p className="text-silver text-sm mt-2">Restricted access. Authorised administrators only.</p>
        <input
          type="password"
          required
          autoFocus
          placeholder="Admin password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          className="w-full mt-6 bg-obsidian border border-white/15 px-4 py-3 text-sm focus:border-gold outline-none"
        />
        {err && <p className="text-red-400 text-sm mt-2">{err}</p>}
        <button disabled={busy} className="w-full mt-4 bg-gold text-obsidian font-semibold tracking-widest text-sm py-3 hover:bg-warmwhite transition disabled:opacity-60">
          {busy ? "SIGNING IN…" : "LOGIN"}
        </button>
        <p className="text-silver/50 text-xs mt-4">Set a strong password via the ADMIN_PASSWORD environment variable.</p>
      </form>
    </section>
  );
}
