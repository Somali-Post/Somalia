"use client";

import Image from "next/image";
import { Anchor, Briefcase, Languages, Landmark, Map, MapPin } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const ALINDI_STRIP =
  "h-4 w-full bg-[repeating-linear-gradient(90deg,#7f1d1d_0px,#7f1d1d_20px,#f59e0b_20px,#f59e0b_30px,#000_30px,#000_32px,#f59e0b_32px,#f59e0b_42px,#7f1d1d_42px,#7f1d1d_62px,#fff_62px,#fff_63px)]";

const FACTS = [
  {
    title: "Location",
    description: "Horn of Africa, gateway to the Red Sea & Indian Ocean.",
    icon: MapPin,
  },
  {
    title: "Coastline",
    description: "3,333 km - The longest in mainland Africa.",
    icon: Anchor,
  },
  {
    title: "Economy",
    description:
      "Livestock (50% of exports), Agriculture (Bananas/Sesame), Frankincense.",
    icon: Briefcase,
  },
  {
    title: "Capital",
    description: "Mogadishu (The White Pearl).",
    icon: Landmark,
  },
  {
    title: "Regions",
    description:
      "18 Pre-war Regions, organized into 5 Federal Member States + Benadir.",
    icon: Map,
  },
  {
    title: "Official Languages",
    description: "Somali (Maxaa-tiri) & Arabic.",
    icon: Languages,
  },
];

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Our History"
          description="From the Land of Punt to a Rising Republic: A story of resilience."
        />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.05fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
              <Image
                src="/images/history/ancient.jpg"
                alt="Ancient Somalia"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Ancient Roots
              </p>
              <h2 className="text-3xl font-semibold text-blue-900 sm:text-4xl">
                The Land of Punt
              </h2>
              <p className="text-base text-slate-600">
                Somalia&apos;s story begins with the legendary Land of Punt, famed for
                its trade with Ancient Egypt. Medieval sultanates such as Adal and
                Ajuran flourished across the Horn, while Mogadishu emerged as a
                cosmopolitan hub described by Ibn Battuta as the City of Islam.
              </p>
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              The Struggle & Resilience
            </p>
            <h2 className="text-3xl font-semibold text-blue-900">
              A Period of Resilience
            </h2>
            <p className="text-base text-slate-600">
              The collapse of the state in 1991 and the civil war that followed
              tested the nation. Yet Somali communities kept commerce, faith, and
              culture alive through resilience, entrepreneurship, and mutual
              support, even in the absence of central government.
            </p>
            <p className="text-sm font-semibold text-blue-700">
              &ldquo;Dalkaa ninkii lahaa, dabka u qaadaa&rdquo;
            </p>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.05fr]">
            <div className="order-2 space-y-4 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                The Rising
              </p>
              <h2 className="text-3xl font-semibold text-blue-900 sm:text-4xl">
                Somalia Rising: Vision 2060
              </h2>
              <p className="text-base text-slate-600">
                Reconstruction continues across institutions and infrastructure,
                reinforced by debt relief victories in 2023 and 2024. Somalia&apos;s
                entry into the East African Community and the return of the
                diaspora are accelerating investment, education, and a bright
                national future.
              </p>
            </div>
            <div className="order-1 overflow-hidden rounded-3xl border border-slate-100 shadow-sm lg:order-2">
              <Image
                src="/images/history/future.jpg"
                alt="Somalia future vision"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                National Facts 2025
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Somalia at a Glance
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {FACTS.map((fact) => {
                const Icon = fact.icon;
                return (
                  <div
                    key={fact.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {fact.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">
                      {fact.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
