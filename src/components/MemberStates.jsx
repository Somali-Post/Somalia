"use client";

import Link from "next/link";
import { Map } from "lucide-react";

const STATES = [
  "Galmudug State",
  "Hirshabelle State",
  "Jubaland State",
  "Puntland State",
  "South West State",
  "Benadir Regional Administration",
];

export default function MemberStates() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Federal Member States
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {STATES.map((state) => (
            <article
              key={state}
              className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-[#4189DD]">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{state}</h3>
              <Link
                href="#"
                className="mt-3 text-xs font-semibold text-[#4189DD] transition hover:text-[#2f72c2]"
              >
                View Profile
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
