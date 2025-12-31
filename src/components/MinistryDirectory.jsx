"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import SmartImage from "@/components/SmartImage";
import { ministries as ministriesEn } from "@/data/ministries";
import { ministries as ministriesSo } from "@/data/ministries-so";

export default function MinistryDirectory({ limit }) {
  const t = useTranslations("MinistryDirectory");
  const locale = useLocale();
  const ministries = locale === "so" ? ministriesSo : ministriesEn;
  const visibleMinistries = typeof limit === "number" ? ministries.slice(0, limit) : ministries;
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("title")}
          </h2>
        </div>

        <motion.div
          suppressHydrationWarning
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {visibleMinistries.map((ministry) => {
            const logoSrc = `/logos/ministries/${ministry.acronym}.png`;
            return (
              <motion.article
                key={ministry.id}
                className="rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                variants={cardVariants}
              >
                <div className="border-t-4 border-blue-500" />
                <div className="flex h-full flex-col gap-4 p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-100 bg-white">
                      <SmartImage
                        src={logoSrc}
                        alt={`${ministry.acronym} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                        fallbackSrc="/logos/coat-of-arms.png"
                      />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {ministry.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {ministry.description}
                  </p>
                  <div className="mt-auto">
                    <Link
                      href={`/government/ministries/${ministry.slug}`}
                      className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
                    >
                      {t("view_profile")}
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
        {typeof limit === "number" && (
          <div className="mt-10 text-center">
            <Link
              href="/government/ministries"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:text-blue-600"
            >
              {t("view_all")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}


