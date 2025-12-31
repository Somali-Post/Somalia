"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Facebook, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const LEADERSHIP_IMAGES = ["/images/dpm1.jpg", "/images/pm.jpg", "/images/dpm2.jpg"];

export default function ExecutivePage() {
  const t = useTranslations("ExecutivePage");
  const leaders = t.raw("office.leaders");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
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
              {t("presidency.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              {t("presidency.name")}
            </h2>
            <p className="text-base font-semibold text-blue-700">
              {t("presidency.title")}
            </p>
            <p className="text-sm text-slate-600 sm:text-base">
              {t("presidency.bio")}
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
              {t("office.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {t("office.title")}
            </h2>
            <p className="text-sm text-slate-600">
              {t("office.description")}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {leaders.map((leader, index) => (
              <div
                key={`${leader.name}-${index}`}
                className={`flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm ${
                  leader.featured ? "lg:scale-[1.03] lg:shadow-md" : ""
                }`}
              >
                <div className="relative h-80">
                  <Image
                    src={LEADERSHIP_IMAGES[index]}
                    alt={leader.name}
                    fill
                    className={`h-full w-full object-cover ${
                      leader.name === "H.E. Jibril Abdirashid Haji"
                        ? "object-[center_-24px]"
                        : "object-top"
                    }`}
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
            {t("mandate.eyebrow")}
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            {t("mandate.title")}
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            {t("mandate.body")}
          </p>
          <div className="pt-6">
            <Link
              href="/government/cabinet"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {t("mandate.cta")}
            </Link>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
