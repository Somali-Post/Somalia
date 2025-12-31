"use client";

import { Link } from "@/i18n/navigation";
import { FileDown } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

export default function ConstitutionPage() {
  const t = useTranslations("ConstitutionPage");
  const sections = t.raw("sections");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

        <section className="py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.3fr_0.7fr]">
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    {t("toc.title")}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 rounded-full border border-blue-600 px-4 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                  >
                    <FileDown className="h-4 w-4" />
                    {t("toc.download")}
                  </Link>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {sections.map((section, index) => (
                    <li key={`${section.title}-${index}`}>
                      <a
                        href={`#section-${index}`}
                        className="font-semibold text-slate-700 hover:text-blue-600"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    {t("overview.eyebrow")}
                  </p>
                  <h2
                    className="text-3xl font-semibold text-blue-900"
                    style={{
                      fontFamily: '"Playfair Display", "Times New Roman", serif',
                    }}
                  >
                    {t("overview.title")}
                  </h2>
                </div>
                <Link
                  href="#"
                  className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 sm:inline-flex"
                >
                  <FileDown className="h-4 w-4" />
                  {t("overview.download")}
                </Link>
              </div>

              {sections.map((section, index) => (
                <section
                  key={`${section.title}-${index}`}
                  id={`section-${index}`}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <h3
                    className="text-2xl font-semibold text-blue-900"
                    style={{
                      fontFamily: '"Playfair Display", "Times New Roman", serif',
                    }}
                  >
                    {section.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
