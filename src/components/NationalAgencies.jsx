"use client";

import { Link } from "@/i18n/navigation";

import SmartImage from "@/components/SmartImage";
import { agencies } from "@/data/agencies";

export default function NationalAgencies({ limit }) {
  const visibleAgencies =
    typeof limit === "number" ? agencies.slice(0, limit) : agencies;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            National Agencies
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleAgencies.map((agency) => {
            const logoSrc = `/logos/agencies-logos/${agency.acronym}.png`;
            return (
              <article
                key={agency.acronym}
                className="group relative overflow-hidden rounded-lg border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white">
                    <SmartImage
                      src={logoSrc}
                      fallbackSrc="/logos/coat-of-arms.png"
                      alt={`${agency.acronym} logo`}
                      width={44}
                      height={44}
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {agency.name}
                    </p>
                    <p className="text-xs text-slate-500">{agency.role}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <Link
                    href={`/government/agencies/${agency.slug}`}
                    className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    View Profile
                  </Link>
                </div>
                <span className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 -translate-x-4 translate-y-4 rounded-full bg-blue-600/10" />
              </article>
            );
          })}
        </div>

        {typeof limit === "number" && (
          <div className="mt-10 text-center">
            <Link
              href="/government/agencies"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              View All Agencies -&gt;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

