"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { ministries } from "@/data/ministries";

const LEADERSHIP = [
  {
    name: "H.E. Hamza Abdi Barre",
    title: "Prime Minister",
    image: "/images/pm.jpg",
    featured: true,
  },
  {
    name: "H.E. Salah Ahmed Jama",
    title: "Deputy Prime Minister",
    image: "/images/dpm1.jpg",
  },
  {
    name: "H.E. Jibril Abdirashid Haji",
    title: "Second Deputy Prime Minister",
    image: "/images/dpm2.jpg",
  },
];

export default function CabinetPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="The Cabinet"
          description="The Council of Ministers of the Federal Republic of Somalia"
        />

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Cabinet Leadership
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-blue-900">
              Executive Leadership
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6">
            {LEADERSHIP.filter((leader) => leader.featured).map((leader) => (
              <div
                key={leader.name}
                className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg"
              >
                <div className="relative h-[300px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6 text-center">
                  <p className="text-lg font-semibold text-blue-900">
                    {leader.name}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {leader.title}
                  </p>
                </div>
              </div>
            ))}

            <div className="grid w-full gap-6 md:grid-cols-2">
              {LEADERSHIP.filter((leader) => !leader.featured).map((leader) => (
                <div
                  key={leader.name}
                  className="overflow-hidden rounded-xl bg-white shadow-lg"
                >
                  <div className="relative h-[300px]">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <p className="text-lg font-semibold text-blue-900">
                      {leader.name}
                    </p>
                    <p className="text-sm font-semibold text-blue-600">
                      {leader.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Cabinet Members
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-blue-900">
              Federal Ministers
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ministries.map((ministry) => (
              <div
                key={ministry.id}
                className="overflow-hidden rounded-xl bg-white shadow-lg"
              >
                <div className="relative h-[250px]">
                  <Image
                    src={ministry.ministerImage}
                    alt={ministry.ministerName}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="space-y-3 p-5">
                  <div>
                    <p className="text-base font-semibold text-blue-900">
                      {ministry.ministerName}
                    </p>
                    <p className="text-sm text-slate-600">{ministry.name}</p>
                  </div>
                  <Link
                    href={`/government/ministries/${ministry.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
