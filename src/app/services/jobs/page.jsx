"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function JobAggregatorPage() {
  const [jobs, setJobs] = useState([]);
  const [updatedAt, setUpdatedAt] = useState(null);
  const [status, setStatus] = useState("loading");

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
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                  Public Notices
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                  Live Job Board
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                Last Updated:{" "}
                {updatedAt
                  ? new Date(updatedAt).toLocaleString()
                  : "Updating..."}
              </p>
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

            {status === "ready" && jobs.length === 0 && (
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6 text-sm text-slate-600">
                No active listings available at the moment.
              </div>
            )}

            {status === "ready" && jobs.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {jobs.map((job, index) => (
                  <div
                    key={`${job.link}-${index}`}
                    className="flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
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
                      <p className="mt-4 text-xs text-slate-500">
                        Posted:{" "}
                        {job.pubDate
                          ? new Date(job.pubDate).toLocaleDateString()
                          : "Recent"}
                      </p>
                    </div>
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-full border border-blue-600 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
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
