"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Anchor, Briefcase, Sprout, Sun, TrendingUp } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const PITCH_CARDS = [
  {
    title: "Strategic Location",
    description:
      "The gateway to the Red Sea and Indian Ocean, connecting African markets to the Middle East and Asia.",
    icon: Anchor,
  },
  {
    title: "Untapped Resources",
    description:
      "Home to the longest coastline in Africa, vast arable land, and unexploited energy reserves.",
    icon: Sun,
  },
  {
    title: "Reformed Business Climate",
    description:
      "New Company Laws and the One-Stop Business Registration System (SBRS) make starting a business faster than ever.",
    icon: TrendingUp,
  },
];

const SECTORS = [
  {
    title: "Livestock",
    description: "The backbone of the economy. World leader in live animal exports.",
    image: "/images/invest/livestock.jpg",
  },
  {
    title: "Agriculture",
    description:
      "Vast arable land along the Shabelle and Jubba rivers. Opportunities in bananas, sesame, and lemons.",
    image: "/images/invest/agriculture.jpg",
  },
  {
    title: "Renewable Energy",
    description:
      "Highest solar potential in the region. Investment ready for wind and solar grids.",
    image: "/images/invest/energy.jpg",
  },
  {
    title: "Ports & Logistics",
    description:
      "Strategic location on the Red Sea route. Modernizing ports to serve the Horn of Africa.",
    image: "/images/invest/logistics.jpg",
  },
  {
    title: "ICT & Finance",
    description:
      "A cashless society driven by mobile money. Thriving telecom and fintech sector.",
    image: "/images/invest/ict.jpg",
  },
  {
    title: "Tourism & Hospitality",
    description:
      "Untapped potential in pristine beaches and historical sites for eco-tourism and hotels.",
    image: "/images/tourism/hero-1.jpg",
  },
];

const STEPS = [
  {
    title: "Register Company",
    description: "Submit your application through the SBRS portal.",
    href: "https://ebusiness.gov.so",
  },
  {
    title: "Obtain License",
    description: "Coordinate with the Ministry of Commerce for licensing.",
  },
  {
    title: "Investment Incentives",
    description: "Engage SOMINVEST for priority sector incentives.",
  },
];

export default function InvestPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Invest in Somalia"
          description="Unlocking the potential of the Horn of Africa. A frontier for growth and innovation."
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Why Somalia?
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                The Investment Pitch
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {PITCH_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Key Sectors
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Priority Investment Sectors
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SECTORS.map((sector) => (
                <div
                  key={sector.title}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {sector.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {sector.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                Doing Business
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                Start Your Journey
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {step.description}
                  </p>
                  {step.href && (
                    <Link
                      href={step.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Visit SBRS
                      <Briefcase className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Link
                href="https://ebusiness.gov.so"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Visit the Online Business Portal (SBRS)
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
