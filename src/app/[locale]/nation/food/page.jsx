"use client";

import Image from "next/image";
import { Coffee, Flame, Utensils, Wheat } from "lucide-react";
import { useTranslations } from "next-intl";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const DISH_IMAGES = [
  "/images/food/bariis.jpg",
  "/images/food/canjeero.jpg",
  "/images/food/sambusa.jpg",
  "/images/food/halwa.jpg",
];

export default function FoodPage() {
  const t = useTranslations("FoodPage");
  const dishes = t.raw("dishes.items").map((dish, index) => ({
    ...dish,
    image: DISH_IMAGES[index],
  }));

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section
          className="relative h-[60vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/food/hero-food.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-orange-900/50" />
          <div className="relative flex h-full items-center">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl space-y-4 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
                  {t("hero.eyebrow")}
                </p>
                <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                  {t("hero.title")}
                </h1>
                <p className="text-lg text-orange-50 sm:text-xl">
                  {t("hero.subtitle")}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                {t("philosophy.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                {t("philosophy.title")}
              </h2>
            </div>

            <div className="rounded-2xl border border-orange-500/40 bg-orange-50/40 p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                <Utensils className="h-5 w-5" />
              </div>
              <p className="text-base text-slate-700">
                {t("philosophy.body")}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50/30 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-10 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                {t("dishes.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-900">
                {t("dishes.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dishes.map((dish, index) => (
                <article
                  key={`${dish.title}-${index}`}
                  className="overflow-hidden rounded-2xl border border-orange-500/40 bg-white shadow-md"
                >
                  <div className="relative h-64">
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-3 p-6">
                    <div className="flex items-center gap-2 text-orange-600">
                      <Flame className="h-4 w-4" />
                      <h3 className="text-lg font-semibold text-slate-900">
                        {dish.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600">{dish.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-50 py-16">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-500">
                {t("tea.eyebrow")}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                {t("tea.title")}
              </h2>
              <p className="text-base text-slate-700">
                {t("tea.body")}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-orange-600">
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Coffee className="h-4 w-4" />
                  {t("tea.tags.rituals")}
                </span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <Wheat className="h-4 w-4" />
                  {t("tea.tags.halal")}
                </span>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-orange-500/40 shadow-sm">
              <Image
                src="/images/food/shaah.jpg"
                alt="Somali tea"
                width={520}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
