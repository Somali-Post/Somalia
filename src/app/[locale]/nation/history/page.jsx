"use client";

import Image from "next/image";
import { Anchor, Briefcase, Languages, Landmark, Map, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const ALINDI_STRIP =
  "h-4 w-full bg-[repeating-linear-gradient(90deg,#7f1d1d_0px,#7f1d1d_20px,#f59e0b_20px,#f59e0b_30px,#000_30px,#000_32px,#f59e0b_32px,#f59e0b_42px,#7f1d1d_42px,#7f1d1d_62px,#fff_62px,#fff_63px)]";

const FACT_ICONS = [MapPin, Anchor, Briefcase, Landmark, Map, Languages];

export default function HistoryPage() {
  const t = useTranslations("HistoryPage");
  const facts = t.raw("sections.facts.items");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
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
                {t("sections.ancient.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900 sm:text-4xl">
                {t("sections.ancient.title")}
              </h2>
              <p className="text-base text-slate-600">
                {t("sections.ancient.body")}
              </p>
            </div>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto max-w-4xl space-y-5 px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {t("sections.struggle.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-blue-900">
              {t("sections.struggle.title")}
            </h2>
            <p className="text-base text-slate-600">
              {t("sections.struggle.body")}
            </p>
            <p className="text-sm font-semibold text-blue-700">
              {t("sections.struggle.quote")}
            </p>
          </div>
        </section>

        <div className={ALINDI_STRIP} />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1fr_1.05fr]">
            <div className="order-2 space-y-4 lg:order-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("sections.rising.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-blue-900 sm:text-4xl">
                {t("sections.rising.title")}
              </h2>
              <p className="text-base text-slate-600">
                {t("sections.rising.body")}
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
                {t("sections.facts.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("sections.facts.title")}
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {facts.map((fact, index) => {
                const Icon = FACT_ICONS[index] ?? MapPin;
                return (
                  <div
                    key={`${fact.title}-${index}`}
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
