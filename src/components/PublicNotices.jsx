"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { Download } from "lucide-react";

export default function PublicNotices() {
  const t = useTranslations("PublicNotices");
  const tenders = t.raw("tenders");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-blue-900">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t("active_tenders_title")}
            </h3>
            {(Array.isArray(tenders) ? tenders : []).map((tender) => (
              <div
                key={tender.title}
                className="flex items-start justify-between gap-4 rounded-lg bg-gray-50 p-4 shadow-sm border-l-4 border-blue-900"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {tender.title}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    {t("closing_prefix")} {tender.closing}
                  </p>
                </div>
                <Download className="mt-1 h-5 w-5 text-blue-700" />
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              {t("civil_service_vacancies_title")}
            </h3>
            <div className="rounded-lg bg-gray-50 p-4 shadow-sm border-l-4 border-blue-900">
              <p className="text-sm font-semibold text-slate-900">
                {t("vacancies_body")}
              </p>
              <Link
                href="/services/jobs"
                className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 transition hover:text-blue-800"
              >
                {t("browse_jobs")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

