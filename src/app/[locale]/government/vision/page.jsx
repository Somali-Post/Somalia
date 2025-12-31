"use client";

import { Scale, Shield, TrendingUp, Users } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const PILLAR_ICONS = [Scale, Shield, TrendingUp, Users];

export default function VisionPage() {
  const t = useTranslations("VisionPage");
  const pillars = t.raw("sections.pillars.items");
  const milestones = t.raw("sections.milestones.items");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("sections.mission.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900">
                {t("sections.mission.title")}
              </h2>
              <p className="mx-auto max-w-3xl text-base text-slate-600">
                {t("sections.mission.body")}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("sections.pillars.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.pillars.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {pillars.map((pillar, index) => {
                const Icon = PILLAR_ICONS[index] ?? Scale;
                return (
                  <div
                    key={`${pillar.title}-${index}`}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("sections.milestones.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.milestones.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-5">
              {milestones.map((milestone, index) => (
                <div
                  key={`${milestone.year}-${index}`}
                  className="rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-sm"
                >
                  <p className="text-2xl font-semibold text-blue-600">
                    {milestone.year}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-blue-900">
                    {milestone.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-600">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {t("sections.downloads.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold">
                {t("sections.downloads.title")}
              </h2>
              <p className="text-sm text-white/80">
                {t("sections.downloads.body")}
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-blue-900"
            >
              {t("sections.downloads.cta")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
