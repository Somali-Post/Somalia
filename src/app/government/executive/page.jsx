"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const LEADERSHIP = [
  {
    name: "H.E. Salah Ahmed Jama",
    title: "Deputy Prime Minister",
    image: "/images/dpm1.jpg",
    note: null,
  },
  {
    name: "H.E. Hamza Abdi Barre",
    title: "Prime Minister",
    role:
      "Head of Government, responsible for the Council of Ministers and implementation of national policy.",
    image: "/images/pm.jpg",
    featured: true,
    note: null,
  },
  {
    name: "H.E. Jibril Abdirashid Haji",
    title: "Second Deputy Prime Minister",
    image: "/images/dpm2.jpg",
    note: "Appointed 2025.",
  },
];

export default function ExecutivePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="The Executive Branch"
          description="The highest level of government leadership."
        />

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <Image
              src="/images/president.jpg"
              alt="H.E. Hassan Sheikh Mohamud"
              width={520}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              The Presidency
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              H.E. Hassan Sheikh Mohamud
            </h2>
            <p className="text-base font-semibold text-blue-700">
              President of the Federal Republic of Somalia
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              Elected in May 2022, H.E. Hassan Sheikh Mohamud serves as the Head
              of State and symbol of national unity. He is the Commander-in-Chief
              of the Armed Forces.
            </p>
            <div className="flex items-center gap-4 text-blue-600">
              <Twitter className="h-4 w-4" />
              <Facebook className="h-4 w-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 space-y-2 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Office of the Prime Minister
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              The Government Leadership
            </h2>
            <p className="text-sm text-slate-600">
              The Cabinet leadership responsible for execution of national policy.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {LEADERSHIP.map((leader) => (
              <div
                key={leader.name}
                className={`flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ${
                  leader.featured ? "lg:scale-[1.03] lg:shadow-md" : ""
                }`}
              >
                <div className="relative h-72">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex h-full flex-col gap-3 p-6">
                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      {leader.name}
                    </p>
                    <p className="text-sm font-semibold text-blue-700">
                      {leader.title}
                    </p>
                  </div>
                  {leader.role && (
                    <p className="text-sm text-slate-600">{leader.role}</p>
                  )}
                  {leader.note && (
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                      {leader.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-4xl space-y-4 px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Role & Mandate
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Executive Functions
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            The Executive Branch is responsible for enforcing laws, conducting
            foreign affairs, and managing the day-to-day operations of the
            federal government. It is accountable to the Parliament.
          </p>
          <div className="pt-6">
            <Link
              href="/government/cabinet"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View the Full Council of Ministers
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
