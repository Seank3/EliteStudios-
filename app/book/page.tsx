import { Suspense } from "react";
import BookingForm from "@/components/BookingForm";
export default function Book() {
  return (
    <section className="max-w-4xl mx-auto px-5 md:px-8 pt-32 pb-24">
      <p className="font-mono text-xs tracking-[0.35em] text-gold mb-5">BOOK A SESSION</p>
      <h1 className="font-display font-light text-5xl md:text-6xl">Start your <span className="italic text-gold">project.</span></h1>
      <p className="text-silver mt-5 leading-relaxed">Choose a service, describe your project and pick a preferred date. You&apos;ll receive a booking reference instantly — our team confirms every request personally.</p>
      <div className="mt-10"><Suspense fallback={<p className="text-silver">Loading form…</p>}><BookingForm /></Suspense></div>
    </section>
  );
}
