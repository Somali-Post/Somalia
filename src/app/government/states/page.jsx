"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, MapPin } from "lucide-react";

import PageHeader from "@/components/PageHeader";

export default function StatesPage() {
  const states = [
    {
      name: "Puntland State",
      capital: "Garowe",
      president: "H.E. Said Abdullahi Deni",
      economy: "Livestock, Fisheries, Frankincense",
      flag: "/logos/states/pl.png",
      leaderImage: "/images/states/deni.jpg",
      website: "https://plstate.so",
    },
    {
      name: "Galmudug State",
      capital: "Dhusamareb",
      president: "H.E. Ahmed Abdi Kariye (Qoorqoor)",
      economy: "Livestock, Agriculture",
      flag: "/logos/states/gm.png",
      leaderImage: "/images/states/qoorqoor.jpg",
      website: "https://statehouse.gm.so",
    },
    {
      name: "Jubaland State",
      capital: "Kismayo",
      president: "H.E. Ahmed Mohamed Islam (Madobe)",
      economy: "Port Trade, Agriculture, Fisheries",
      flag: "/logos/states/jl.png",
      leaderImage: "/images/states/madobe.jpg",
      website: "https://jubalandstate.so",
    },
    {
      name: "South West State",
      capital: "Baidoa",
      president: "H.E. Abdiaziz Hassan Mohamed (Laftagareen)",
      economy: "Agriculture (Sorghum/Maize), Livestock",
      flag: "/logos/states/sw.png",
      leaderImage: "/images/states/laftagareen.jpg",
      website: "",
    },
    {
      name: "Hirshabelle State",
      capital: "Jowhar",
      president: "H.E. Ali Abdullahi Hussein (Gudlawe)",
      economy: "Agriculture (Shabelle River), Livestock",
      flag: "/logos/states/hs.png",
      leaderImage: "/images/states/gudlawe.jpg",
      website: "",
    },
    {
      name: "Benadir Regional Administration",
      capital: "Mogadishu",
      president: "H.E. Mohamed Ahmed (Governor)",
      economy: "Commerce, Service Sector, Logistics",
      flag: "/logos/states/bra.png",
      leaderImage: "/images/states/amiir.jpg",
      website: "https://bra.gov.so",
    },
  ];

  return (
    <main className="bg-white text-slate-900">
      <PageHeader
        title="Federal Member States"
        description="The Federal Republic is comprised of five Member States and the Benadir Regional Administration."
      />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <div
                key={state.name}
                className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={state.leaderImage}
                    alt={state.president}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full bg-slate-100">
                      <Image
                        src={state.flag}
                        alt={`${state.name} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">
                        {state.name}
                      </h3>
                      <p className="text-xs text-slate-500">{state.capital}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          Capital
                        </p>
                        <p className="font-semibold text-slate-700">
                          {state.capital}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        President
                      </p>
                      <p className="font-semibold text-slate-700">
                        {state.president}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Briefcase className="mt-0.5 h-4 w-4 text-blue-600" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-slate-400">
                          Economy
                        </p>
                        <p className="font-semibold text-slate-700">
                          {state.economy}
                        </p>
                      </div>
                    </div>
                  </div>

                  {state.website ? (
                    <Link
                      href={state.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                    >
                      Visit Official Website
                    </Link>
                  ) : (
                    <span className="mt-auto inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-400">
                      Website Unavailable
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
