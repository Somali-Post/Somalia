"use client";

import { useTranslations } from "next-intl";

export default function PostalService() {
  const t = useTranslations("PostalService");

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-blue-900">{t("title")}</h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder={t("track_placeholder")}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-400"
            />
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {t("track_button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
