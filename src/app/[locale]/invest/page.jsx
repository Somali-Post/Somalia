"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Anchor, Briefcase, Sprout, Sun, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const PITCH_ICONS = [Anchor, Sun, TrendingUp];

const SECTOR_IMAGES = [
  "/images/invest/livestock.jpg",
  "/images/invest/agriculture.jpg",
  "/images/invest/energy.jpg",
  "/images/invest/logistics.jpg",
  "/images/invest/ict.jpg",
  "/images/tourism/hero-1.jpg",
];

const STEP_LINKS = ["https://ebusiness.gov.so", null, null];

export default function InvestPage() {
  const t = useTranslations("InvestPage");
  const pitchCards = t.raw("sections.pitch.cards");
  const sectors = t.raw("sections.sectors.items");
  const steps = t.raw("sections.steps.items");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("sections.pitch.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.pitch.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {(Array.isArray(pitchCards) ? pitchCards : []).map((card, index) => {
                const Icon = PITCH_ICONS[index] ?? Sprout;
                return (
                  <div
                    key={card.title ?? index}
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
                {t("sections.sectors.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.sectors.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {(Array.isArray(sectors) ? sectors : []).map((sector, index) => (
                <div
                  key={sector.title ?? index}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={SECTOR_IMAGES[index] ?? "/images/hero.jpg"}
                      alt={sector.title ?? "Sector"}
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
                {t("sections.steps.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.steps.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {(Array.isArray(steps) ? steps : []).map((step, index) => (
                <div
                  key={step.title ?? index}
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
                  {STEP_LINKS[index] && (
                    <Link
                      href={STEP_LINKS[index]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {t("sections.steps.sbrs_link_label")}
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
                {t("sections.steps.cta")}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
