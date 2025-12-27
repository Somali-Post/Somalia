"use client";

import { useEffect, useMemo, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function JobAggregatorPage() {
  const [jobs, setJobs] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [status, setStatus] = useState("loading");
  const [filter, setFilter] = useState("all");

  const filteredJobs = useMemo(() => {
    if (filter === "un") {
      return jobs.filter((job) => job.source === "ReliefWeb");
    }
    if (filter === "local") {
      return jobs.filter((job) => job.source !== "ReliefWeb");
    }
    return jobs;
  }, [filter, jobs]);

  const formatRelative = (value) => {
    if (!value) {
      return "Recent";
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return "Recent";
    }
    const diffMs = Date.now() - date.getTime();
    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffMinutes < 60) {
      return `${diffMinutes || 1} minute${diffMinutes === 1 ? "" : "s"} ago`;
    }
    if (diffHours < 24) {
      return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
    }
    return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  };

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error("Failed to load jobs");
        }
        const data = await response.json();
        setJobs(data.jobs || []);
        setUpdatedAt(data.updatedAt || null);
        setStatus("ready");
      } catch (error) {
        console.error(error);
        setStatus("error");
      }
    };

    loadJobs();
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title="Live Job Board"
          description="Aggregated opportunities from trusted Somali job sources."
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Public Notices
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                  Live Job Board
                </h2>
              </div>
              <div className="flex flex-col items-start gap-3 text-sm text-slate-500 sm:items-end">
                <p>
                  Last Updated:{" "}
                  {updatedAt
                    ? new Date(updatedAt).toLocaleString()
                    : "Updating..."}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filter === "all"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    Show All
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("un")}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filter === "un"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    UN &amp; NGO Only
                  </button>
                  <button
                    type="button"
                    onClick={() => setFilter("local")}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                      filter === "local"
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                    }`}
                  >
                    Local Jobs
                  </button>
                </div>
              </div>
            </div>

            {status === "loading" && (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600">
                Loading job listings...
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
                We could not load the latest job feeds. Please try again later.
              </div>
            )}

            {status === "ready" && filteredJobs.length === 0 && (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600">
                No active listings available at the moment.
              </div>
            )}

            {status === "ready" && filteredJobs.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job, index) => (
                  <div
                    key={`${job.link}-${index}`}
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {job.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-600">
                          Source: {job.source || "Somali Jobs"}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          {job.company}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          job.source === "ReliefWeb"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {job.source === "ReliefWeb"
                          ? "🇺🇳 UN / International"
                          : "Local Source"}
                      </span>
                    </div>
                    <p className="mt-4 text-xs font-semibold text-slate-500">
                      Posted: {formatRelative(job.date || job.pubDate)}
                    </p>
                    <a
                      href={job.url || job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                    >
                      Apply Now
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
