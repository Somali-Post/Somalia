"use client";

import Image from "next/image";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const LOWER_HOUSE = {
  speaker: {
    name: 'H.E. Sheikh Adan Mohamed Nur "Madobe"',
    title: "Speaker of the House of the People",
    image: "/images/speaker-parliament.jpg",
  },
  deputies: [
    {
      name: "Hon. Sa’diya Yasin Haji Samatar",
      title: "First Deputy Speaker",
      image: "/images/deputy-lower-1.jpg",
    },
    {
      name: "Hon. Abdullahi Omar Abshirow",
      title: "Second Deputy Speaker",
      image: "/images/deputy-lower-2.jpg",
    },
  ],
};

const UPPER_HOUSE = {
  speaker: {
    name: "H.E. Abdi Hashi Abdullahi",
    title: "Speaker of the Upper House",
    image: "/images/speaker-senate.jpg",
  },
  deputies: [
    {
      name: "Hon. Ali Shabaan Ibrahim",
      title: "First Deputy Speaker",
      image: "/images/deputy-upper-1.jpg",
    },
    {
      name: 'Hon. Abdullahi Ali Hirsi "Tima’adde"',
      title: "Second Deputy Speaker",
      image: "/images/deputy-upper-2.jpg",
    },
  ],
};

function LeadershipSection({ title, membersLabel, data, background }) {
  return (
    <section className={`${background} py-16`}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            {membersLabel}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-blue-900">{title}</h2>
        </div>

        <div className="flex flex-col items-center gap-6">
          <div className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="relative h-[320px]">
              <Image
                src={data.speaker.image}
                alt={data.speaker.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="p-6 text-center">
              <p className="text-lg font-semibold text-blue-900">
                {data.speaker.name}
              </p>
              <p className="text-sm font-semibold text-blue-600">
                {data.speaker.title}
              </p>
            </div>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {data.deputies.map((deputy) => (
              <div
                key={deputy.name}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="relative h-[260px]">
                  <Image
                    src={deputy.image}
                    alt={deputy.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 text-center">
                  <p className="text-base font-semibold text-blue-900">
                    {deputy.name}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {deputy.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ParliamentPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="The Federal Parliament"
          description="The Bicameral Legislative Branch of the Federal Republic"
        />

      <section className="py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-base text-slate-600">
            The Federal Parliament consists of two houses: The House of the People
            (275 seats) and the Upper House (54 seats). It is responsible for
            enacting laws, oversight of the executive, and representing the Somali
            people.
          </p>
        </div>
      </section>

      <LeadershipSection
        title="The House of the People (Lower House)"
        membersLabel="275 Members"
        data={LOWER_HOUSE}
        background="bg-white"
      />

      <LeadershipSection
        title="The Upper House (Senate)"
        membersLabel="54 Members"
        data={UPPER_HOUSE}
        background="bg-slate-50"
      />
      </main>
      <Footer />
    </>
  );
}
