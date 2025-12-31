"use client";

import { Link } from "@/i18n/navigation";
import { Map } from "lucide-react";
import { useTranslations } from "next-intl";

export default function MemberStates() {
  const t = useTranslations("MemberStates");
  const states = t.raw("states");

  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("title")}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {states.map((state, index) => (
            <article
              key={`${state}-${index}`}
              className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900">{state}</h3>
              <Link
                href="#"
                className="mt-3 text-xs font-semibold text-blue-600 transition hover:text-blue-700"
              >
                {t("view_profile")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


