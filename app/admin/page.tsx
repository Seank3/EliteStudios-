"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LayoutDashboard, CalendarCheck, FolderOpen, LogOut, Check, X, Trash2, RefreshCw } from "lucide-react";
import { PROJECTS, DIVISIONS } from "@/lib/content";

type Booking = {
  id: number | string;
  reference: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  details: string;
  status: string;
  createdAt: string;
};

export default function Admin() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [tab, setTab] = useState<"overview" | "bookings" | "content">("overview");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  async function load() {
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/bookings", { cache: "no-store" });
      if (r.status === 401) {
        router.replace("/admin/login");
        return;
      }
      const j = await r.json();
      setBookings(j.bookings || []);
    } catch {
      setError("Could not load bookings.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function setStatus(id: Booking["id"], reference: string, status: string) {
    const prev = bookings;
    setBookings((bs) => bs.map((b) => (b.reference === reference ? { ...b, status } : b)));
    const r = await fetch("/api/bookings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reference, status }),
    });
    if (!r.ok) {
      setBookings(prev);
      setError("Update failed — please try again.");
    }
  }

  async function remove(reference: string) {
    if (!confirm(`Delete booking ${reference}? This cannot be undone.`)) return;
    const prev = bookings;
    setBookings((bs) => bs.filter((b) => b.reference !== reference));
    const r = await fetch(`/api/bookings?reference=${encodeURIComponent(reference)}`, { method: "DELETE" });
    if (!r.ok) {
      setBookings(prev);
      setError("Delete failed — please try again.");
    }
  }

  async function logout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  const pending = bookings.filter((b) => b.status === "pending").length;
  const confirmed = bookings.filter((b) => b.status === "confirmed").length;

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-28 pb-24">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="font-mono text-xs tracking-[0.35em] text-gold">ELITE STUDIOS · ADMIN</p>
          <h1 className="font-display font-light text-4xl md:text-5xl mt-2">Dashboard</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={load} className="inline-flex items-center gap-2 border border-white/20 text-xs tracking-widest px-4 py-2 hover:border-gold hover:text-gold">
            <RefreshCw size={14} /> REFRESH
          </button>
          <button onClick={logout} className="inline-flex items-center gap-2 border border-white/20 text-xs tracking-widest px-4 py-2 hover:border-gold hover:text-gold">
            <LogOut size={14} /> LOGOUT
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-8">
        {(
          [
            ["overview", LayoutDashboard, "Overview"],
            ["bookings", CalendarCheck, `Bookings (${bookings.length})`],
            ["content", FolderOpen, "Content"],
          ] as const
        ).map(([t, Icon, l]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`inline-flex items-center gap-2 text-xs tracking-widest px-4 py-2.5 border ${
              tab === t ? "bg-gold text-obsidian border-gold font-semibold" : "border-white/20 text-silver"
            }`}
          >
            <Icon size={14} />
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {error && <p className="mt-4 text-red-400 text-sm">{error}</p>}

      {tab === "overview" && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {[
            { l: "Total bookings", v: bookings.length },
            { l: "Pending enquiries", v: pending },
            { l: "Confirmed", v: confirmed },
            { l: "Portfolio projects", v: PROJECTS.length },
          ].map((s) => (
            <div key={s.l} className="border border-white/10 bg-charcoal p-6">
              <p className="font-display text-5xl text-gold">{s.v}</p>
              <p className="text-silver text-xs tracking-widest mt-2">{s.l.toUpperCase()}</p>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-4 border border-white/10 p-6 bg-charcoal">
            <h2 className="font-display text-2xl">Recent enquiries</h2>
            {loading ? (
              <p className="text-silver text-sm mt-3">Loading…</p>
            ) : bookings.length === 0 ? (
              <p className="text-silver text-sm mt-3">No enquiries yet. New bookings appear here instantly.</p>
            ) : (
              <ul className="mt-4 space-y-3">
                {bookings.slice(0, 5).map((b) => (
                  <li key={b.reference} className="flex flex-wrap justify-between gap-2 text-sm border-b border-white/5 pb-3">
                    <span>
                      <strong>{b.name}</strong> · {b.service} · <span className="font-mono text-gold">{b.reference}</span>
                    </span>
                    <span className="text-silver">{b.status}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {tab === "bookings" && (
        <div className="mt-8 space-y-4">
          {loading && <p className="text-silver">Loading bookings…</p>}
          {!loading && bookings.length === 0 && <p className="text-silver">No bookings yet.</p>}
          {bookings.map((b) => (
            <div key={b.reference} className="border border-white/10 bg-charcoal p-6">
              <div className="flex flex-wrap justify-between gap-3">
                <div>
                  <p className="font-display text-xl">
                    {b.name} <span className="font-mono text-xs text-gold">{b.reference}</span>
                  </p>
                  <p className="text-silver text-sm mt-1">
                    {b.service} · {b.date || "date TBC"} {b.time} · {b.phone} · {b.email}
                  </p>
                  <p className="text-silver/80 text-sm mt-2">{b.details}</p>
                </div>
                <span
                  className={`h-fit text-xs tracking-widest px-3 py-1 border ${
                    b.status === "confirmed"
                      ? "border-green-500 text-green-400"
                      : b.status === "declined"
                      ? "border-red-500 text-red-400"
                      : "border-gold text-gold"
                  }`}
                >
                  {b.status.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                <button
                  onClick={() => setStatus(b.id, b.reference, "confirmed")}
                  className="inline-flex items-center gap-1 bg-gold text-obsidian text-xs font-semibold px-3 py-2"
                >
                  <Check size={13} /> CONFIRM
                </button>
                <button
                  onClick={() => setStatus(b.id, b.reference, "pending")}
                  className="inline-flex items-center gap-1 border border-white/20 text-xs px-3 py-2 hover:border-gold hover:text-gold"
                >
                  RESET TO PENDING
                </button>
                <button
                  onClick={() => setStatus(b.id, b.reference, "declined")}
                  className="inline-flex items-center gap-1 border border-white/20 text-xs px-3 py-2 hover:border-red-400 hover:text-red-400"
                >
                  <X size={13} /> DECLINE
                </button>
                <button
                  onClick={() => remove(b.reference)}
                  className="inline-flex items-center gap-1 border border-white/20 text-xs px-3 py-2 hover:border-red-400 hover:text-red-400"
                >
                  <Trash2 size={13} /> DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === "content" && (
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="border border-white/10 bg-charcoal p-6">
            <h2 className="font-display text-2xl">Creative divisions</h2>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              {DIVISIONS.map((d) => (
                <li key={d.slug} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{d.name}</span>
                  <span className="text-gold">{d.status}</span>
                </li>
              ))}
            </ul>
            <p className="text-silver/60 text-xs mt-4">
              Edit divisions, projects, founder profile and business details in{" "}
              <code className="text-gold">lib/content.ts</code> — or connect Supabase (see docs).
            </p>
          </div>
          <div className="border border-white/10 bg-charcoal p-6">
            <h2 className="font-display text-2xl">Portfolio</h2>
            <ul className="mt-4 space-y-2 text-sm text-silver">
              {PROJECTS.map((p) => (
                <li key={p.slug} className="flex justify-between border-b border-white/5 pb-2">
                  <span>{p.title}</span>
                  <span>{p.year}</span>
                </li>
              ))}
            </ul>
            <p className="text-silver/60 text-xs mt-4">
              Add real projects with photos via the CMS. Placeholders must be replaced before launch.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
