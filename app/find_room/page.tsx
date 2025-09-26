"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function FindRoomInner() {
  const q = useSearchParams();
  const [saved, setSaved] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("demoBooking");
      setSaved(raw ? JSON.parse(raw) : null);
    } catch {}
  }, []);

  const ci = q.get("checkIn") ?? "";
  const co = q.get("checkOut") ?? "";
  const rooms = q.get("rooms") ?? "1";
  const adults = q.get("adults") ?? "1";
  const kids = q.get("children") ?? "0";

  return (
    <div className="Container py-10">
      <h1 className="text-2xl font-semibold text-white">
        Available Rooms (Demo)
      </h1>
      <p className="text-slate-300 mt-2">
        {ci} → {co} · {rooms} room · {adults} adult(s), {kids} child(ren)
      </p>
      <div className="mt-6 rounded border border-white/10 p-4 text-slate-200">
        This is a demo search. We saved your selection in{" "}
        <code>localStorage</code> as <b>demoBooking</b>.
      </div>
      {saved && (
        <pre className="mt-4 text-xs text-slate-400 bg-black/30 p-3 rounded">
          {JSON.stringify(saved, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={<div className="Container py-10 text-slate-300">Loading…</div>}
    >
      <FindRoomInner />
    </Suspense>
  );
}
