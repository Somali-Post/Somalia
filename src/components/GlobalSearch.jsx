"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Building2, FileText } from "lucide-react";

import { agencies } from "@/data/agencies";
import { ministries } from "@/data/ministries";

const SERVICES = [
  { name: "Apply for Passport", url: "/services" },
  { name: "E-Visa", url: "/services" },
  { name: "Business Registration", url: "/services" },
  { name: "National Exam Results", url: "/services" },
];

export default function GlobalSearch() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) {
      return [];
    }

    const ministryResults = ministries
      .filter((ministry) => {
        const nameMatch = ministry.name?.toLowerCase().includes(term);
        const ministerMatch = ministry.ministerName?.toLowerCase().includes(term);
        return nameMatch || ministerMatch;
      })
      .map((ministry) => ({
        type: "Ministry",
        label: ministry.name,
        url: `/government/ministries/${ministry.slug}`,
      }));

    const agencyResults = agencies
      .filter((agency) => agency.name?.toLowerCase().includes(term))
      .map((agency) => ({
        type: "Agency",
        label: agency.name,
        url: `/government/agencies/${agency.slug}`,
      }));

    const serviceResults = SERVICES.filter((service) =>
      service.name.toLowerCase().includes(term),
    ).map((service) => ({
      type: "Service",
      label: service.name,
      url: service.url,
    }));

    return [...ministryResults, ...agencyResults, ...serviceResults];
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
          {results.length > 0 ? (
            <ul className="max-h-72 overflow-y-auto">
              {results.map((result) => (
                <li key={`${result.type}-${result.label}`}>
                  <Link
                    href={result.url}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      {result.type === "Service" ? (
                        <FileText className="h-4 w-4" />
                      ) : (
                        <Building2 className="h-4 w-4" />
                      )}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {result.label}
                      </p>
                      <p className="text-xs text-slate-500">{result.type}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
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
