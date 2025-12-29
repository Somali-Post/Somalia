"use client";

import { Link } from "@/i18n/navigation";
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import SmartImage from "@/components/SmartImage";
import { jobListings } from "@/data/jobs-static";

const FILTERS = ["All Jobs", "Civil Service", "UN/NGO", "Tenders"];

const getBorderColor = (source) =>
  source === "ReliefWeb" || source === "UN Jobs"
    ? "border-blue-600"
    : "border-emerald-500";

export default function JobsPage() {
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleJobs = jobListings.slice(0, visibleCount);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Jobs & Careers"
          description="Opportunities in the Civil Service, UN, and Private Sector."
        />

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Live Opportunities
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                  Job Listings
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filter === "All Jobs"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {visibleJobs.map((job) => {
                const isTender =
                  job.type.toLowerCase().includes("tender") ||
                  job.type.toLowerCase().includes("rfp");
                return (
                <div
                  key={job.id}
                  className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm border-l-4 ${getBorderColor(
                    job.source,
                  )}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-slate-100 bg-white">
                        <SmartImage
                          src={job.employerLogo}
                          alt={job.company}
                          width={48}
                          height={48}
                          className="h-full w-full object-contain"
                          fallbackSrc="/logos/coat-of-arms.png"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-500">
                          {job.company}
                        </p>
                        <p className="text-xs text-slate-400">{job.type}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        isTender
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {isTender ? "Tender / RFP" : `Via ${job.source}`}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-blue-900">
                    {job.title}
                  </h3>

                  <div className="mt-4 space-y-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span>Posted: {job.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" />
                      <span>Deadline: {job.deadline}</span>
                    </div>
                  </div>

                  <Link
                    href={job.link}
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    Apply Now
                  </Link>
                </div>
              );
              })}
            </div>

            {visibleCount < jobListings.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((current) =>
                      Math.min(current + 12, jobListings.length),
                    )
                  }
                  className="inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
