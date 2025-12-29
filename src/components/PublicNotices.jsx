"use client";

import { Link } from "@/i18n/navigation";
import { Download } from "lucide-react";

const TENDERS = [
  {
    title: "Procurement of Solar Panels for Ministry of Energy (Ref: MOE/2025/01)",
    closing: "Jan 30",
  },
  {
    title: "Construction of Galkayo Regional Road (Ref: MOPW/2025/04)",
    closing: "Feb 15",
  },
];

export default function PublicNotices() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Transparency
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-blue-900">
            Public Notices &amp; Procurement
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Active Tenders
            </h3>
            {TENDERS.map((tender) => (
              <div
                key={tender.title}
                className="flex items-start justify-between gap-4 rounded-lg bg-gray-50 p-4 shadow-sm border-l-4 border-blue-900"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {tender.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Closing: {tender.closing}
                  </p>
                </div>
                <Download className="mt-1 h-5 w-5 text-blue-700" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Civil Service Vacancies
            </h3>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm border-l-4 border-blue-900">
              <p className="text-sm font-semibold text-slate-900">
                View all current government and private sector vacancies via
                the National Job Board.
              </p>
              <Link
                href="/services/jobs"
                className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                Browse Jobs -&gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

