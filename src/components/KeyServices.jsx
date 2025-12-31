"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Book, Briefcase, Globe, UserCheck } from "lucide-react";
import { useTranslations } from "next-intl";

const SERVICE_ICONS = [Globe, Briefcase, UserCheck, Book];

export default function KeyServices() {
  const t = useTranslations("KeyServices");
  const services = t.raw("services");
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
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            {t("title")}
          </h2>
        </div>

        <motion.div
          suppressHydrationWarning
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => {
            const Icon = SERVICE_ICONS[index] ?? Globe;
            return (
              <motion.article
                key={`${service.title}-${index}`}
                className="rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md"
                variants={cardVariants}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}


