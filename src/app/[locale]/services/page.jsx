import { ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import FeedbackWidget from "@/components/FeedbackWidget";

export default async function Page({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ServicesPage" });
  const digitalServices = t.raw("sections.digital.items");
  const generalServices = t.raw("sections.general.items");
  const emergencyContacts = t.raw("sections.emergency.items");

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {t("sections.digital.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {t("sections.digital.title")}
            </h2>
            <p className="text-sm text-slate-600">
              {t("sections.digital.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {digitalServices.map((service) => (
              <a
                key={service.title}
                href={service.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
              >
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  {t("sections.digital.cta")}
                  <ExternalLink className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {t("sections.general.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {t("sections.general.title")}
            </h2>
            <p className="text-sm text-slate-600">
              {t("sections.general.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {generalServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="emergency" className="py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              {t("sections.emergency.eyebrow")}
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {t("sections.emergency.title")}
            </h2>
            <p className="text-sm text-slate-600">
              {t("sections.emergency.description")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {emergencyContacts.map((contact) => (
              <div
                key={contact.title}
                className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {contact.title}
                  </h3>
                  <span className="text-2xl font-semibold text-blue-600">
                    {contact.number}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600">
                  {contact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <FeedbackWidget />
        </div>
      </section>
      </main>
      <Footer />
    </>
  );
}
