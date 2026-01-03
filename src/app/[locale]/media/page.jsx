"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { newsArticles as newsArticlesEn } from "@/data/news";
import { newsArticles as newsArticlesSo } from "@/data/news-so";

const FILTER_KEYS = ["all", "politics", "economy", "diplomacy"];

export default function MediaPage() {
  const t = useTranslations("MediaPage");
  const locale = useLocale();
  const newsArticles = locale === "so" ? newsArticlesSo : newsArticlesEn;

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
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">
                  {t("latest_title")}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {t("latest_description")}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTER_KEYS.map((filterKey) => (
                  <button
                    key={filterKey}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filterKey === "all"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {t(`filters.${filterKey}`)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {newsArticles.map((news) => (
                <div
                  key={news.id}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-blue-600/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg backdrop-blur-sm">
                      {news.category}
                    </div>
                  </div>

                  <div className="flex flex-grow flex-col p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {news.date}
                    </p>
                    <h3 className="mt-3 text-xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-700">
                      {news.title}
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                      {news.excerpt}
                    </p>
                    <Link
                      href={`/media/${news.id}`}
                      className="mt-auto inline-flex w-full items-center justify-center rounded-lg border border-blue-100 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                    >
                      {t("read_press_release")}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <p className="text-sm text-slate-600">
              {t.rich("press_contact", {
                emailLink: (chunks) => (
                  <a
                    href="mailto:e-gov@moct.gov.so"
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {chunks}
                  </a>
                ),
              })}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
