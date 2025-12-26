"use client";

import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { newsArticles } from "@/data/news";

const FILTERS = ["All", "Politics", "Economy", "Diplomacy"];

export default function MediaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Government Newsroom"
          description="Press releases, official statements, and updates from the Federal Republic."
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-blue-900">
                  Latest Press Releases
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Verified updates from the Office of the Prime Minister.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filter === "All"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {filter}
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
                      Read Press Release
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
              For press accreditation, contact{" "}
              <a
                href="mailto:media@opm.gov.so"
                className="font-semibold text-blue-600 hover:text-blue-700"
              >
                media@opm.gov.so
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
