"use client";

import { Link } from "@/i18n/navigation";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Twitter,
} from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

const SOCIALS = [
  { label: "X", href: "https://x.com/somalia", icon: Twitter },
  { label: "Facebook", href: "https://www.facebook.com/Somalia/", icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/somalia/", icon: Instagram },
  {
    label: "LinkedIn",
    href: "https://so.linkedin.com/company/federalgovernmentofsomalia",
    icon: Linkedin,
  },
  { label: "Reddit", href: "https://www.reddit.com/r/Somalia/", icon: MessageCircle },
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const cards = t.raw("cards");
  const departments = t.raw("departments");

  const CONTACT_CARDS = [
    { ...cards[0], icon: Mail },
    { ...cards[1], icon: Mic },
    { ...cards[2], icon: MapPin },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <PageHeader
          title={t("title")}
          description={t("description")}
        />

        <section className="py-12">
          <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-slate-500">
                    {card.title}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">
                    {card.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pb-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-slate-900">
                {t("form.title")}
              </h2>
              <form className="mt-6 space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {t("form.name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {t("form.email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {t("form.phone")}
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {t("form.department")}
                  </label>
                  <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-600">
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">
                    {t("form.message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  {t("form.submit")}
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">
                  {t("other_ways.title")}
                </h3>
                <div className="mt-4 space-y-4 text-sm text-slate-600">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {t("other_ways.hours_label")}
                    </p>
                    <p className="mt-2 font-semibold text-slate-700">
                      {t("other_ways.hours_week")}
                    </p>
                    <p className="mt-1 text-slate-500">{t("other_ways.hours_weekend")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {t("other_ways.ministries_label")}
                    </p>
                    <p className="mt-2 text-slate-600">
                      {t("other_ways.ministries_body")}
                    </p>
                    <Link
                      href="/government/ministries"
                      className="mt-3 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {t("other_ways.ministries_cta")}
                    </Link>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                      {t("other_ways.social_label")}
                    </p>
                    <div className="mt-3 flex gap-4">
                      {SOCIALS.map((social) => {
                        const Icon = social.icon;
                        return (
                          <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-full bg-gray-100 p-3 text-blue-600 transition-colors hover:bg-blue-100"
                            aria-label={social.label}
                          >
                            <Icon className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-100 shadow-sm">
            <iframe
              title="Villa Somalia Map"
              src="https://maps.google.com/maps?q=Villa%20Somalia%2C%20Mogadishu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-96 w-full grayscale"
              loading="lazy"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
