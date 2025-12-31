"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { ministries as ministriesEn } from "@/data/ministries";
import { ministries as ministriesSo } from "@/data/ministries-so";

const LEADERSHIP_IMAGES = ["/images/pm.jpg", "/images/dpm1.jpg", "/images/dpm2.jpg"];

export default function CabinetPage() {
  const t = useTranslations("CabinetPage");
  const locale = useLocale();
  const ministries = locale === "so" ? ministriesSo : ministriesEn;
  const leadership = t.raw("leadership.leaders").map((leader, index) => ({
    ...leader,
    image: LEADERSHIP_IMAGES[index],
    featured: leader.featured ?? index === 0,
  }));

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
              {t("leadership.eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-blue-900">
              {t("leadership.title")}
            </h2>
          </div>

          <div className="flex flex-col items-center gap-6">
            {leadership.filter((leader) => leader.featured).map((leader) => (
              <div
                key={`${leader.name}-featured`}
                className="w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-lg"
              >
                <div className="relative h-80">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className={`h-full w-full object-cover ${
                      leader.name === "H.E. Jibril Abdirashid Haji"
                        ? "object-[center_-24px]"
                        : "object-top"
                    }`}
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
              {leadership.filter((leader) => !leader.featured).map((leader) => (
                <div
                  key={leader.name}
                  className="overflow-hidden rounded-xl bg-white shadow-lg"
                >
                  <div className="relative h-80">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className={`h-full w-full object-cover ${
                        leader.name === "H.E. Jibril Abdirashid Haji"
                          ? "object-[center_-24px]"
                          : "object-top"
                      }`}
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
              {t("members.eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-blue-900">
              {t("members.title")}
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
                    {t("members.view_profile")}
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
