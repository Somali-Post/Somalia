import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const GOVERNMENT_SECTIONS = [
  { key: "executive", href: "/government/executive" },
  { key: "cabinet", href: "/government/cabinet" },
  { key: "parliament", href: "/government/parliament" },
  { key: "ministries", href: "/government/ministries" },
  { key: "agencies", href: "/government/agencies" },
  { key: "states", href: "/government/states" },
  { key: "constitution", href: "/government/constitution" },
  { key: "vision", href: "/government/vision" },
];

export default function GovernmentLandingPage() {
  const t = useTranslations("GovernmentPage");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("header.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("header.title")}
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                {t("header.description")}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {GOVERNMENT_SECTIONS.map((section) => (
                <Link
                  key={section.key}
                  href={section.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 transition group-hover:text-blue-700">
                      {t(`sections.${section.key}.title`)}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {t(`sections.${section.key}.description`)}
                    </p>
                  </div>
                  <span className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                    {t("learn_more")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
