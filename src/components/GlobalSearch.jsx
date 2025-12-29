"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Building2, FileText } from "lucide-react";

import { agencies } from "@/data/agencies";
import { jobListings } from "@/data/jobs-static";
import { ministries } from "@/data/ministries";

const staticPages = [
  {
    name: "Constitution",
    url: "/government/constitution",
    keywords: "law legal rights",
  },
  {
    name: "Vision 2060",
    url: "/government/vision",
    keywords: "plan strategy ndp",
  },
  {
    name: "Invest in Somalia",
    url: "/invest",
    keywords: "business economy trade",
  },
  {
    name: "E-Services",
    url: "/services",
    keywords: "passport visa application",
  },
  {
    name: "Jobs & Careers",
    url: "/services/jobs",
    keywords: "work vacancy employment somali",
  },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return { government: [], services: [] };
    }

    const tokens = term
      .split(/[^a-z0-9]+/i)
      .map((token) => token.trim())
      .filter((token) => token.length > 2);

    const activeTokens = tokens.length > 0 ? tokens : [term];

    const matchesAny = (values) =>
      values.some((value) => {
        if (!value) return false;
        const normalized = value.toLowerCase();
        return activeTokens.some((token) => normalized.includes(token));
      });

    const ministryResults = ministries
      .filter((ministry) =>
        matchesAny([ministry.name, ministry.acronym, ministry.ministerName]),
      )
      .map((ministry) => ({
        type: "Ministry",
        label: ministry.name,
        url: `/government/ministries/${ministry.slug}`,
        meta: matchesAny([ministry.ministerName])
          ? `Minister: ${ministry.ministerName?.replace(/^H\.E\.\s*/, "")}`
          : "Ministry",
      }));

    const agencyResults = agencies
      .filter((agency) =>
        matchesAny([agency.name, agency.acronym, agency.directorName]),
      )
      .map((agency) => ({
        type: "Agency",
        label: agency.name,
        url: `/government/agencies/${agency.slug}`,
        meta: "Agency",
      }));

    const jobResults = jobListings
      .filter((job) => matchesAny([job.title, job.company]))
      .map((job) => ({
        type: "Job",
        label: job.title,
        url: job.link,
        meta: job.company,
      }));

    const pageResults = staticPages
      .filter((page) => matchesAny([page.name, page.keywords]))
      .map((page) => ({
        type: "Page",
        label: page.name,
        url: page.url,
        meta: "Page",
      }));

    return {
      government: [...ministryResults, ...agencyResults].slice(0, 5),
      services: [...jobResults, ...pageResults].slice(0, 5),
    };
  }, [query]);

  return (
    <div className="relative w-full">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search for services, ministries, or documents..."
          className="w-full rounded-lg border border-white/20 bg-white px-4 py-4 text-base text-slate-900 shadow-xl outline-none placeholder:text-slate-400 focus:border-blue-300"
        />
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {query.trim().length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
          {results.government.length > 0 || results.services.length > 0 ? (
            <div className="max-h-72 overflow-y-auto">
              {results.government.length > 0 && (
                <div className="border-b border-slate-100">
                  <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Government
                  </p>
                  <ul className="pb-3">
                    {results.government.map((result) => (
                      <li key={`${result.type}-${result.label}`}>
                        <Link
                          href={result.url}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                        >
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <Building2 className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {result.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {result.meta}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.services.length > 0 && (
                <div>
                  <p className="px-4 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Services & Opportunities
                  </p>
                  <ul className="pb-3">
                    {results.services.map((result) => (
                      <li key={`${result.type}-${result.label}`}>
                        <Link
                          href={result.url}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                        >
                          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                            <FileText className="h-4 w-4" />
                          </span>
                          <div>
                            <p className="font-semibold text-slate-900">
                              {result.label}
                            </p>
                            <p className="text-xs text-slate-500">
                              {result.meta}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-4 text-sm text-slate-500">
              No results found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
