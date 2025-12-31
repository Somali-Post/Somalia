"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IdCard, Shield, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CAROUSEL_IMAGES = [
  "/images/tourism/carousel-1.jpg",
  "/images/tourism/carousel-2.jpg",
  "/images/tourism/carousel-3.jpg",
];

const ESSENTIAL_ICONS = [IdCard, Smartphone, Shield];
const DESTINATION_IMAGES = [
  "/images/tourism/hero-1.jpg",
  "/images/tourism/hero-3.jpg",
  "/images/tourism/museum.jpg",
  "/images/tourism/jazeera.jpg",
];

export default function TourismPage() {
  const t = useTranslations("TourismPage");
  const essentials = t.raw("essentials.items");
  const destinations = t.raw("destinations.items").map((destination, index) => ({
    ...destination,
    image: DESTINATION_IMAGES[index],
  }));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
          <AnimatePresence mode="sync">
            <motion.div
              key={CAROUSEL_IMAGES[activeIndex]}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={CAROUSEL_IMAGES[activeIndex]}
                alt="Somalia destination"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-slate-950/55" />
          <div className="relative z-10 flex h-full items-center">
            <div className="container mx-auto px-6 text-white">
              <motion.div
                className="max-w-2xl space-y-6"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-white/85 sm:text-xl">
                  {t("hero.subtitle")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("essentials.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("essentials.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {essentials.map((item, index) => {
                const Icon = ESSENTIAL_ICONS[index] ?? IdCard;
                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
                {t("destinations.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-blue-900">
                {t("destinations.title")}
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {destinations.map((destination, index) => (
                <div
                  key={`${destination.title}-${index}`}
                  className="overflow-hidden rounded-2xl bg-white shadow-md"
                >
                  <div className="relative h-56">
                    <Image
                      src={destination.image}
                      alt={destination.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-5">
                    <h3 className="text-lg font-semibold text-blue-900">
                      {destination.title}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {destination.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {t("cta.eyebrow")}
              </p>
              <h3 className="mt-3 text-3xl font-semibold">
                {t("cta.title")}
              </h3>
            </div>
            <Link
              href="#"
              className="rounded-full border border-yellow-500 px-6 py-3 text-sm font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-blue-900"
            >
              {t("cta.button")}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
