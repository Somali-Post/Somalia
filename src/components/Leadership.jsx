"use client";

import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";

const LEADERS = [
  {
    role: "President",
    name: "H.E. Hassan Sheikh Mohamud",
    title: "President of the Federal Republic",
    image: "/images/president.jpg",
  },
  {
    role: "Prime Minister",
    name: "H.E. Hamza Abdi Barre",
    title: "Prime Minister of the Federal Republic",
    image: "/images/pm.jpg",
  },
  {
    role: "Speaker",
    name: "H.E. Sheikh Adan Mohamed Nur",
    title: "Speaker of the House of the People",
    image: "/images/speaker-parliament.jpg",
  },
  {
    role: "Speaker",
    name: "H.E. Abdi Hashi Abdullahi",
    title: "Speaker of the Upper House",
    image: "/images/speaker-senate.jpg",
  },
];

export default function Leadership() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Executive Leadership
          </h2>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-600">
                  {leader.role}
                </p>
                <p className="mt-2 text-lg font-semibold">{leader.name}</p>
                <p className="text-xs text-white/80">{leader.title}</p>
              </div>
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-sm transition hover:bg-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
